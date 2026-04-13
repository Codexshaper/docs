# Provisioning Console

When a new tenant registers (and completes payment, if required), the SaaS module runs a provisioning pipeline that creates the tenant record, database, and seed data. The **Provisioning Console** shows this process in real time via a terminal-style UI.

---

## How It Works

1. After successful registration (or payment verification), the system creates a provisioning process and redirects the user to the console page.
2. The browser sends a `POST` to the **start** endpoint, which runs the entire pipeline synchronously with `ignore_user_abort(true)`.
3. A separate polling loop (`GET` every 800 ms) fetches new log lines and renders them in the terminal panel.
4. When provisioning completes (or fails), the console displays the final status and auto-redirects to the success page.

### Routes

| Method | URI | Name |
|--------|-----|------|
| `GET` | `/tenant/register/setup/{id}` | `saas.provisioning.console` |
| `POST` | `/tenant/register/setup/{id}/start` | `saas.provisioning.console.start` |
| `GET` | `/tenant/register/setup/{id}/poll` | `saas.provisioning.console.poll` |

---

## Pipeline Steps

The console logs each step with coloured output:

| Step | Description | Progress |
|------|-------------|----------|
| Tenant record | Create `tenants` row and domain | 5–10 % |
| Database setup | Create dedicated DB (separate mode) or skip (single mode) | 12–18 % |
| Tenancy context | Initialize Stancl tenancy for the new tenant | 20–22 % |
| Storage | Create tenant storage directories | 23–25 % |
| Migrations & seeding | Run all tenant migrations and seeders with per-file logging | 27–98 % |
| Done | End tenancy, update status, redirect | 100 % |

If any step fails, partial resources (tenant record, database, domain) are automatically rolled back so the user can safely retry.

---

## Enable / Disable

The console is controlled by a SaaS setting:

| Setting | Default |
|---------|---------|
| `provisioning_console_enabled` | `true` |

When **disabled**, the registration flow shows a simple progress spinner instead of the terminal output. The provisioning still runs the same pipeline — only the UI changes.

Toggle this in **SaaS Admin → Settings** or via the `SAAS_PROVISIONING_CONSOLE_ENABLED` environment variable.

---

## Idle Detection

If no new log lines arrive for 90 seconds while the status is still `running`, the console displays a warning:

> *Still running — a database setup step is in progress. Please wait…*

This prevents users from thinking the process is frozen during long migration or seeding operations.

---

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Console shows "Setup session expired" | Process UUID expired (2-hour TTL) or file was deleted | Re-register; check `storage/app/provisioning-console/` |
| Console hangs on "Starting…" | PHP worker exhausted or `max_execution_time` too low | Set `max_execution_time=0` in `php.ini` for CLI; ensure Apache/Nginx has multiple workers |
| Logs appear all at once | File I/O contention on the log file | Ensure `storage/app/provisioning-console/` is on a fast local disk |
| Progress bar stops mid-way | Seeder or migration threw an exception | Check `storage/logs/laravel.log` for the stack trace; the console should show the error message |
| Subdomain "was taken" error | Race condition — another registration claimed it | User should try a different subdomain |
