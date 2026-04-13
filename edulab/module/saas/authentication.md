# Authentication & Session Management

This page explains how authentication works in the SaaS module, how tenant admin access is isolated from central admin access, and how sessions are managed across domains.

---

## Auth Guards

EduLab uses two Laravel auth guards:

| Guard | Driver | Provider | Table | Purpose |
|-------|--------|----------|-------|---------|
| `admin` | session | `admins` provider | `admins` | SaaS admins + tenant admins |
| `web` | session | `users` provider | `users` | Tenant owners, students, instructors, parents |

### Central Domain Login

The central domain login at `/tenant/login` supports both guards:

1. **Admin guard** — SaaS platform administrators log in here to access `/saas/admin/*`
2. **Web guard** — Tenant owners (users with the `TenantOwner` role) log in here to access their billing portal at `/billing/{tenantId}/*`

### Tenant Domain Login

Each tenant subdomain (e.g., `acme.yourdomain.com`) has its own login page. Tenant admins, instructors, and students log in there through the LMS module's standard auth flow.

---

## Central vs Tenant Admin Separation

The `admins` table contains both central SaaS admins and tenant-scoped admins. They are separated by the `tenant_id` column:

| Admin Type | `tenant_id` Value | Can Access |
|------------|-------------------|------------|
| Central SaaS Admin | `NULL` | SaaS admin panel (`/saas/admin/*`) |
| Tenant Admin | Non-null (tenant UUID) | Only their tenant's LMS admin panel |

### How Tenant Admins Are Blocked from the SaaS Panel

Two layers of protection prevent tenant admins from accessing the central SaaS admin panel:

#### Layer 1: Login Controller

The `LoginController` at `/tenant/login` checks every admin login attempt:

1. Before authenticating, it checks if the email belongs to a tenant admin (via `TenantAdminRegistryService` or the `admins.tenant_id` column)
2. If the email is a tenant admin's, the login is rejected with a message directing them to their tenant domain
3. After successful authentication, it double-checks the `tenant_id` column — if non-null, the admin is logged out and rejected

#### Layer 2: EnsureCentralSaaSAdmin Middleware

All `/saas/admin/*` routes are protected by the `EnsureCentralSaaSAdmin` middleware:

1. **Primary check:** If the `admins` table has a `tenant_id` column and the logged-in admin's `tenant_id` is not null → reject
2. **Secondary check:** Consult the `TenantAdminRegistryService` (the `saas_tenant_admins` registry table) → reject if found

If either check fails, the admin is:
- Logged out of the `admin` guard
- Session invalidated
- Redirected to `/tenant/login` with an error message

---

## Tenant Owner Access Control

On the central domain, the `web` guard is used only for **Tenant Owners** — users who registered and pay for a tenant.

Non-TenantOwner users (students, instructors, parents) who try to log in at `/tenant/login` are:
- Authenticated successfully (for credential validation)
- Immediately logged out
- Shown a message directing them to log in from their tenant domain

This prevents students/instructors from accidentally accessing the tenant owner billing portal.

---

## Session Isolation

### Per-Domain Session Cookies

The `SessionTenancyBootstrapper` (from Stancl Tenancy) is active in **all database modes** (separate and single). It appends `_tenant_{id}` to the session cookie name when a tenant is initialized.

This means:
- Central domain (`yourdomain.com`) uses cookie: `{app_name}_session`
- Tenant domain (`acme.yourdomain.com`) uses cookie: `{app_name}_session_tenant_{id}`

Sessions are completely isolated between different tenant domains and the central domain.

### Guard-Scoped Logout

All logout methods in the platform use guard-scoped logout instead of blanket session destruction:

```php
// Correct (used throughout)
Auth::guard('admin')->logout();
request()->session()->invalidate();
request()->session()->regenerateToken();

// Incorrect (previously used — destroyed all guard state)
Auth::logout();
Session::flush();
```

This ensures logging out of one guard (e.g., `admin`) doesn't destroy the session state for another guard (e.g., `web`).

---

## Session Security

### Session Fixation Protection

All login paths regenerate the session ID after successful authentication:

| Login Path | Guard | Session Regeneration |
|------------|-------|---------------------|
| `/tenant/login` (admin) | `admin` | ✓ Via `LoginController` |
| `/tenant/login` (web) | `web` | ✓ Via `LoginController` |
| LMS admin login | `admin` | ✓ Via `AdminController` |
| LMS user login | `web` | ✓ Via `UserRepository` |
| Tenant registration auto-login | `web` | ✓ Via `TenantProvisioningController` |

Session regeneration creates a new session ID after login, preventing session fixation attacks where an attacker pre-sets a session ID.

### Rate Limiting

The central domain login is rate-limited to **5 attempts per minute** per email+IP combination. Exceeding this limit returns a throttle response.

---

## Login Flow Summary

```
User visits /tenant/login
│
├── Already authenticated as admin?
│   ├── Central admin (tenant_id = null) → redirect to SaaS dashboard
│   └── Tenant admin (tenant_id set) → logout, show login form
│
├── Already authenticated as web user?
│   ├── TenantOwner → redirect to provisioning dashboard
│   └── Non-TenantOwner → logout, show login form
│
└── Show login form
    │
    └── POST /tenant/login
        │
        ├── Check rate limit (5/min per email+IP)
        │
        ├── Try admin guard
        │   ├── Is tenant admin email? → reject, show error
        │   ├── Auth succeeds + tenant_id is null → redirect to SaaS dashboard ✓
        │   └── Auth succeeds + tenant_id set → logout, redirect with error
        │
        └── Try web guard
            ├── Not a TenantOwner? → logout, show error
            ├── Account not active? → logout, show error
            └── TenantOwner + active → redirect to provisioning dashboard ✓
```
