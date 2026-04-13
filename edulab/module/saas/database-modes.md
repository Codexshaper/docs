# SaaS Database Modes

This page explains the tenancy database architecture options and how to choose the right mode for your deployment.

---

## Available Modes

EduLab SaaS supports two database isolation strategies:

| Mode | Description | Use Case |
|------|-------------|----------|
| `separate` | One MySQL database per tenant | Full data isolation, VPS/cloud hosting |
| `single` | All tenants share one database, isolated by `tenant_id` column | Shared hosting, lower resource usage |

---

## Separate Database Mode (default)

Each tenant gets its own MySQL database, created automatically during registration.

```env
TENANT_DATABASE_MODE=separate
```

### Hosting Requirements

Your central DB user must have privileges to:

- `CREATE DATABASE`
- `DROP DATABASE` (needed when deleting tenants)

Without those privileges, tenant registration fails with errors like `SQLSTATE[42000]: Access denied ... CREATE DATABASE`.

### Advantages

- Complete data isolation between tenants
- Independent backups per tenant
- No risk of cross-tenant data leakage
- Tenants can have different migration states

### Limitations

- Requires VPS/cloud hosting with database creation privileges
- Higher resource usage (one DB connection pool per tenant)
- Most shared hosting plans **do not allow** dynamic `CREATE DATABASE`

---

## Single (Shared) Database Mode

All tenants share the central database. Each tenant-owned table gains a `tenant_id` column and all queries are automatically scoped.

```env
TENANT_DATABASE_MODE=single
```

### How It Works

1. When single mode is activated, the SaaS module runs **Tenant Column Synchronization** — it scans all module migrations and adds a `tenant_id` column to every tenant-owned table.
2. **Unique Index Synchronization** adjusts unique constraints to include `tenant_id`, preventing cross-tenant uniqueness conflicts.
3. Eloquent models are automatically scoped via the **Auto Tenant Model Scope Manager** — every query includes `WHERE tenant_id = ?` transparently.

### Advantages

- Works on shared hosting (no `CREATE DATABASE` needed)
- Lower resource usage — single database connection
- Simpler database backups

### Limitations

- Data isolation is logical, not physical — all data is in one database
- Queries include an extra `WHERE tenant_id = ?` clause (negligible performance impact)
- Tenant-specific backups require custom tooling

---

## Changing the Mode

Navigate to **SaaS Admin → Settings** and change the **Database Mode** dropdown.

### Important Rules

| Scenario | Behaviour |
|----------|-----------|
| No tenants exist | Mode can be switched freely |
| Tenants already exist | Switch is blocked unless **Allow Mode Switch** is enabled in settings |
| Switching `separate` → `single` | `tenant_id` columns are added to all tenant tables; unique indexes are rebuilt |
| Switching `single` → `separate` | `tenant_id` columns are removed; unique indexes are restored to their original form |

> **Warning:** Switching modes with existing tenants is a significant operation. Always back up your database before changing modes. The migration is automatic but irreversible without a backup.

### Related Settings

| Setting | ENV Variable | Default | Purpose |
|---------|-------------|---------|---------|
| Database Mode | `TENANT_DATABASE_MODE` | `separate` | Which isolation strategy to use |
| Allow Mode Switch | `SAAS_ALLOW_MODE_SWITCH_WITH_EXISTING_TENANTS` | `false` | Allow switching when tenants exist |

---

## Configuration Reference

```php
// Modules/SaaS/config/config.php
'tenant_database_mode' => env('TENANT_DATABASE_MODE', 'separate')
```

The runtime mode can also be overridden per-tenant if a tenant's `data` column contains a `tenancy_db_name` value — that tenant will always use separate-database bootstrapping regardless of the global setting.

---

## Shared Hosting Note

If your shared hosting plan denies `CREATE DATABASE` permissions, you have two options:

1. **Use single database mode** — set `TENANT_DATABASE_MODE=single` in `.env`
2. **Upgrade hosting** — move to a VPS or cloud provider where DB privileges can be granted
3. **Ask your host** — some providers will grant `CREATE/DROP DATABASE` privileges on request
