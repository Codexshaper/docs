# SaaS Route Context Rules (For Module Developers)

This guide defines how to make module routes compatible with both SaaS central domain and tenant domain.

## Why This Matters

In SaaS mode, EduLab has two contexts:

- Central context: main SaaS/admin domain
- Tenant context: tenant subdomains

Core modules now use SaaS settings flags to decide which panel routes become universal. Custom modules should follow the same pattern.

## Source of Truth

Do not hardcode route exposure defaults in services or controllers.

Use SaaS config defaults from:

- `Modules/SaaS/config/config.php`
- `settings_defaults` keys

Runtime overrides come from SaaS settings stored in `saas_settings` via `SaaSSettingsService`.

## Current Core Mapping

The following core providers now apply these flags:

- LMS provider:
  - `enable_admin_routes` -> `routes/admin.php`
  - `enable_student_panel_routes` -> `routes/student.php`
  - `enable_teacher_panel_routes` -> `routes/instructor.php`
  - `enable_parent_panel_routes` -> `routes/organization.php`
- Roles provider:
  - `enable_admin_routes` -> `routes/web.php`
- ModuleManager provider:
  - `enable_admin_routes` -> `routes/web.php`

When a flag is enabled, routes are registered with universal middleware.
When disabled, routes stay tenant-only middleware.

## Required Pattern For New Modules

In your module `RouteServiceProvider`:

1. Build both middleware stacks:
   - universal stack: `web + bootstrap + TenantAwareMiddlewareProvider::getUniversalMiddleware()`
   - tenant stack: `TenantAwareMiddlewareProvider::getTenantWebMiddleware()`
2. Read SaaS settings safely with fallback:
   - defaults from `config('saas.settings_defaults.*')`
   - if SaaS module is active and `SaaSSettingsService` is available, merge runtime settings
3. Register each route file with either universal or tenant middleware based on flag.

## Safe Fallback Rules

Always handle these cases gracefully:

- SaaS module disabled
- SaaS settings service unavailable
- exceptions during settings read

In all those cases, use config defaults and continue route registration.

## Naming Rules For New Flags

For consistency, use names like:

- `enable_admin_routes`
- `enable_<panel>_panel_routes`

Avoid naming drift such as mixing `admin_panel_routes` and `admin_routes` for the same feature.

## Middleware Rule

Do not manually attach tenancy middleware in module route files.

Route files should keep panel auth/role middleware only (e.g. `auth`, `auth:admin`, `role:*`).

Context switching (universal vs tenant-only) must stay in `RouteServiceProvider`.

## Testing Checklist

After implementing route-context support:

1. Save SaaS settings with all flags disabled:
   - panel routes should not be reachable from central domain
2. Enable one flag at a time:
   - only that panel should become central-accessible
3. Verify tenant behavior remains unchanged
4. Run:
   - `php artisan optimize:clear`
   - `php artisan route:list`

This ensures route cache reflects the updated settings.
