# Tenant Management

Tenants are your customers' LMS instances. Each tenant has its own isolated database, subdomain, and billing record.

Navigate to **Admin → SaaS Admin → Tenants** to see all tenants.

![Tenant List](/assets/lms/images/module/saas/tenant-list.png)

---

## Tenant List

The tenant list shows:

| Column | Description |
|--------|-------------|
| ID | Tenant UUID |
| Subdomain | e.g. `acme.yourdomain.com` |
| Owner | The email that registered this tenant |
| Plan | Current subscription plan |
| Status | `active`, `inactive`, `suspended`, `cancelled` |
| Created | Registration date |

<!-- ---

## Creating a Tenant Manually

While most tenants self-register, an admin can provision a tenant directly.

Click **Create New Tenant** (or use the Artisan command):

```bash
php artisan saas:tenant:create acme
```

This creates the tenant record, the subdomain domain entry, and runs migrations on the new tenant database.

--- -->

## Viewing Tenant Details

Click any tenant row to open the details page.

![Tenant Details](/assets/lms/images/module/saas/tenant/details.png)

The details page shows:

- Tenant metadata (subdomain, created date)
- Owner information (name, email)
- Active billing — plan, period start/end, status
- All associated domains (subdomain + any custom domains)
- Recent invoices

---

## Adding a Custom Domain

On the tenant details page, scroll to the **Domains** section and click **Add Domain**.

Enter the domain (e.g. `lms.acme.com`) and click **Save**.

> **Important:** The tenant's DNS must have a `CNAME` record pointing `lms.acme.com` to your server's domain (or an `A` record pointing to your server IP). Without this, the custom domain will not resolve.

---

## Removing a Domain

Click the **Remove** button next to any secondary domain. The default subdomain (`acme.yourdomain.com`) cannot be removed.

---

## Tenant Provisioning

When a tenant self-registers, the system:

1. Creates the `Tenant` record in the central database
2. Creates the `Domain` record (subdomain)
3. Creates the `TenantOwner` record with credentials
4. Sets up a new database (named `tenant_{uuid}`)
5. Runs all tenant-scoped migrations
6. Creates the tenant admin user
7. Assigns the admin role

If `TENANT_PROVISIONING_DRIVER=queue`, steps 4–7 happen in the background via a queued job chain. The user sees a "being set up" page while they wait.

If `TENANT_PROVISIONING_DRIVER=sync`, the entire process runs during the HTTP request (slower response but simpler to configure).

---

## Troubleshooting Failed Provisioning

If a tenant's LMS was not set up correctly:

1. Check `storage/logs/laravel.log` for errors
2. Verify the tenant database exists: `SHOW DATABASES LIKE 'tenant_%'`
3. Re-run migrations for the tenant:

```bash
php artisan tenants:migrate --tenants={tenant_id}
```

4. If the tenant admin user is missing, the `CreateTenantAdminJob` may have failed. Re-dispatch it:

```bash
php artisan tinker
# Then:
\Modules\SaaS\Jobs\CreateTenantAdminJob::dispatch($tenant);
```
