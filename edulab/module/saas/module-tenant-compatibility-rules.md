# Module Tenant Compatibility Rules

This guide defines how to build new modules so they work in all cases:

- LMS only (SaaS module not installed)
- SaaS enabled with separate database mode
- SaaS enabled with single shared database mode

## Golden Rules

1. SaaS is optional.
2. Separate DB mode remains the default safe production path.
3. Single shared DB mode must isolate tenant rows using tenant_id.
4. New modules should not require manual per-model SaaS wiring.
5. Do not add `TenantOwnedModel` manually to each model; global auto-scope handles this when SaaS is enabled.

## Module.json Rules

By default, modules are treated as tenant-capable.

Use these `module.json` keys to define behavior:

- `tenant_migrations` (existing key)
  - `true` or omitted: module is tenant-capable.
  - `false`: module is central-only.
- `tenant_auto_scope` (new)
  - `true` (default): automatic tenant row scoping in single DB mode.
  - `false`: disable automatic row scoping (for central-only or custom/hybrid manual control).
- `tenant_scope_exempt_tables` (new)
  - list of tables that must never receive automatic tenant_id behavior.
- `tenant_scope_tables` (new, optional hybrid allow-list)
  - if provided, only listed tables are auto-scoped for that module.
- `single_db_exempt_tables` (new alias)
  - alias for `tenant_scope_exempt_tables` used by migration table injection logic.

## What Is Global Now

When SaaS module is enabled:

- Global auto model scoping is registered from SaaS provider.
- It reads module rules from each `Modules/{Module}/module.json`.
- It applies tenant_id query scope and auto-fill only in:
  - single shared DB mode,
  - tenant-initialized request context,
  - tables that contain `tenant_id`.

Manual trait wiring is no longer needed for module models.

Implementation location:

- Global model scope injection is implemented inside SaaS module.
- Core modules (LMS, Roles, ModuleManager, etc.) stay clean and SaaS-independent.

Central requests are not blocked because no scope is applied when tenancy is not initialized.

## Migration Rule (tenant_id injection)

The SaaS migration that adds `tenant_id` columns now merges exemptions from:

1. hard defaults (infrastructure + SaaS central tables),
2. `tenancy.single_db.exempt_tables` config,
3. each module.json key:
   - `tenant_scope_exempt_tables`
   - `single_db_exempt_tables`

This lets hybrid modules control table-level behavior without changing core code.

Important:

- The schema preparation migration lives in SaaS module, not LMS core.
- Therefore, non-SaaS installations are not affected.

## Optional SaaS Safety

If SaaS/stancl is absent, tenant helpers/classes may not exist.

Always guard tenancy usage with:

- `function_exists('tenancy')`
- `function_exists('tenant')`
- `class_exists(...)` for stancl classes

Current LMS implementation already follows this in key runtime paths.

## Quick Examples

### Central-only module

```json
{
  "name": "Reporting",
  "tenant_migrations": false,
  "tenant_auto_scope": false,
  "single_db_exempt_tables": ["reporting_snapshots", "reporting_exports"]
}
```

### Tenant-capable module (default)

```json
{
  "name": "Assignments"
}
```

### Hybrid module

```json
{
  "name": "Analytics",
  "tenant_auto_scope": true,
  "tenant_scope_exempt_tables": ["analytics_global_dictionary"],
  "tenant_scope_tables": ["analytics_events", "analytics_reports"]
}
```

## Recommendation

- Keep separate mode as default.
- Build modules with these rules from day one.
- Treat single mode as first-class only after tenant_id coverage and indexes are complete.

## Base Model Question (EdulabModel)

Using one shared base model can work for plain Eloquent models, but this codebase has mixed bases:

- `Model`
- `Authenticatable`
- module-specific trait stacks

So forcing every class to extend one `EdulabModel` would add migration effort and risk regressions.

Current standard in this project:

- Keep existing model inheritance.
- Use global SaaS auto-scope manager for tenant row isolation logic.
- Control behavior through `module.json` policies.

No core-module base class migration is required.

This remains aligned with international multi-tenant patterns because scope behavior is centralized, explicit, and mode-aware.
