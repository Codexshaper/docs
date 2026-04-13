# SaaS Settings

The SaaS Settings page controls core platform behaviour: database mode, module management policies, and which LMS panel routes are accessible on the central domain.

Navigate to **SaaS Admin → Settings**.

---

## How Settings Are Stored

SaaS settings are stored in the `theme_settings` table under the key `saas_settings`. They are cached for 1 hour and managed by `SaaSSettingsService`.

Settings can be overridden via environment variables. The database value takes precedence over the ENV default when it exists.

---

## Database Mode

| Setting | Default | ENV Variable | Description |
|---------|---------|-------------|-------------|
| Tenant Database Mode | `separate` | `TENANT_DATABASE_MODE` | How tenant data is isolated — `separate` (one DB per tenant) or `single` (shared DB with `tenant_id` scoping) |
| Allow Mode Switch with Existing Tenants | ✗ | `SAAS_ALLOW_MODE_SWITCH_WITH_EXISTING_TENANTS` | Allow switching between separate and single mode when tenants already exist |

> **Warning:** Switching database modes with existing tenants triggers automatic schema migrations (adding/removing `tenant_id` columns and rebuilding unique indexes). Always back up your database first.

For full details on each mode, see [Database Modes](./database-modes).

---

## Module Management

| Setting | Default | ENV Variable | Description |
|---------|---------|-------------|-------------|
| Allow Module Uninstall | ✓ | `SAAS_ALLOW_MODULE_UNINSTALL` | Allow uninstalling modules from the Module Manager |
| Allow Resource Deletion | ✗ | `SAAS_ALLOW_RESOURCE_DELETION` | Allow deletion of module files and data during uninstall. Requires typing `DELETE` to confirm |

When **Allow Module Uninstall** is disabled, the uninstall button is hidden from the Module Manager interface.

When **Allow Resource Deletion** is enabled, uninstalling a module will also remove its database tables, files, and configuration — this is irreversible.

---

## Central Domain Route Toggles

These settings control whether LMS panel routes (admin, student, teacher, parent) are accessible on the central domain. By default, all are disabled for SaaS-first deployments where the central domain only serves the SaaS admin panel and landing pages.

| Setting | Default | ENV Variable | Description |
|---------|---------|-------------|-------------|
| Enable Admin Routes | ✗ | `SAAS_ENABLE_ADMIN_ROUTES` | Allow LMS admin panel access on the central domain |
| Enable Student Panel Routes | ✗ | `SAAS_ENABLE_STUDENT_PANEL_ROUTES` | Allow student panel access on the central domain |
| Enable Teacher Panel Routes | ✗ | `SAAS_ENABLE_TEACHER_PANEL_ROUTES` | Allow teacher/instructor panel access on the central domain |
| Enable Parent Panel Routes | ✗ | `SAAS_ENABLE_PARENT_PANEL_ROUTES` | Allow parent panel access on the central domain |

> **Tip:** Enable these routes only if you want to run the LMS on the central domain alongside SaaS. In a pure SaaS setup, leave them all disabled — all LMS functionality is accessed through tenant subdomains.

---

## Registration & Provisioning

| Setting | Default | ENV Variable | Description |
|---------|---------|-------------|-------------|
| Provisioning Console Enabled | ✓ | `SAAS_PROVISIONING_CONSOLE_ENABLED` | Show real-time setup console during tenant registration. When disabled, a simple progress spinner is shown instead |

See [Provisioning Console](./provisioning-console) for details.

---

## Complete Settings Reference

| Key | Type | Default | ENV Variable |
|-----|------|---------|-------------|
| `tenant_database_mode` | string | `separate` | `TENANT_DATABASE_MODE` |
| `allow_mode_switch_with_existing_tenants` | bool | `false` | `SAAS_ALLOW_MODE_SWITCH_WITH_EXISTING_TENANTS` |
| `allow_module_uninstall` | bool | `true` | `SAAS_ALLOW_MODULE_UNINSTALL` |
| `allow_resource_deletion` | bool | `false` | `SAAS_ALLOW_RESOURCE_DELETION` |
| `provisioning_console_enabled` | bool | `true` | `SAAS_PROVISIONING_CONSOLE_ENABLED` |
| `enable_admin_routes` | bool | `false` | `SAAS_ENABLE_ADMIN_ROUTES` |
| `enable_student_panel_routes` | bool | `false` | `SAAS_ENABLE_STUDENT_PANEL_ROUTES` |
| `enable_teacher_panel_routes` | bool | `false` | `SAAS_ENABLE_TEACHER_PANEL_ROUTES` |
| `enable_parent_panel_routes` | bool | `false` | `SAAS_ENABLE_PARENT_PANEL_ROUTES` |

---

## Saving Settings

Click **Save Settings** to persist. Changes take effect immediately. Settings are cached for 1 hour — the cache is automatically cleared on save.
