## Performance

EduLab LMS is optimised out of the box for shared hosting. This page covers the built-in caching layers and additional steps you can take to maximise speed.

---

## Built-in Caching

| Data | Cache Key | TTL | Invalidated When |
|---|---|---|---|
| Theme settings (all) | `options` | Forever | Any setting is saved |
| Active theme list | `lms_themes` | 10 min | — (auto-expire) |
| Geolocation per IP | `geo_<ip_hash>` | 24 hours | — (auto-expire) |
| Application config state | `lms_app_cfg` | 2 hours | License is activated / removed |
| Language list | `languages` singleton | Per-request | — |

Cache is **tenant-aware** when the Tenanta module is active — the tenancy bootstrapper automatically prefixes cache keys per tenant.

---

## Recommended: Enable Cache Driver

By default Laravel uses the `file` cache driver. Switch to `database` or `redis` for better performance:

**Database cache** (works on all shared hosts):

```bash
php artisan cache:table
php artisan migrate
```

Then in `.env`:

```
CACHE_STORE=database
```

**Redis** (recommended for VPS/dedicated):

```
CACHE_STORE=redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

---

## Artisan Optimize Commands

Run these after each update or configuration change:

```bash
php artisan optimize        # Cache config + routes + views
php artisan config:cache    # Cache config only
php artisan route:cache     # Cache routes only
php artisan view:cache      # Pre-compile all Blade views
```

These commands are also available via **Admin → Dashboard → Optimize Cache**.

To clear all caches:

```bash
php artisan optimize:clear
```

---

## Database Indexes

Version 3.0 ships with a migration that adds indexes on the most frequently queried columns:

- `courses`: `slug`, `status`, `category_id`
- `categories`: `slug`
- `purchase_details`: `type`
- `blogs`: `slug`
- `theme_settings`: `key`
- `users`: `guard`

Run `php artisan migrate` after updating to apply them.

---

## Shared Hosting Tips

- Enable **OPcache** in your PHP configuration — this is the single biggest win on shared hosting.
- Set `APP_DEBUG=false` in `.env` on live sites.
- Avoid using the `sync` queue driver on slow connections — use `database` queue instead.
- Schedule the Laravel scheduler via a single cron entry:

```
* * * * * cd /path/to/project && php artisan schedule:run >> /dev/null 2>&1
```
