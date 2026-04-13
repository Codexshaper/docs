## Release Notes

---

### v3.0.0 — 2026-03-18

**Security**
- Removed internal performance-degradation system that used `shell_exec` (incompatible with shared hosting)
- Hardened XSS output in social icon, category icon, and certificate preview components using `stevebauman/purify`
- Replaced all raw `{!! $var !!}` HTML output with `{!! clean($var) !!}` for all user-supplied rich content

**Bug Fixes**
- Fixed Bengali and other multi-byte (UTF-8) text corruption during demo data import — added explicit `SET NAMES utf8mb4` before all raw PDO SQL executions
- Fixed `->get()->count()` anti-pattern on `PurchaseDetails` enrollment count — now uses direct `->count()` SQL query
- Fixed `BaseRepository::paginate()` to support multiple `where` conditions via new `wheres` option key

**Performance**
- Added database indexes on high-frequency lookup columns: `courses.slug`, `courses.status`, `courses.category_id`, `categories.slug`, `purchase_details.type`, `blogs.slug`, `theme_settings.key`, `users.guard`
- Dashboard top-categories and top-courses queries now capped at 10 results
- Geolocation IP lookups cached for 24 hours (eliminates repeated external API calls per visitor)
- `get_themes()` results cached for 10 minutes (was a DB query on every request)

**Improvements**
- Added unified `DemoImportService` — single code path handles demo SQL import for fresh install, separate-DB tenant, and fresh tenant installs
- Demo import now logs errors via `Log::error()` instead of silently swallowing exceptions

---

### v2.0.0 — 2025-03-08

- SaaS multi-tenant module improvements
- Multi-database tenant support (separate DB per tenant)
- Shared DB tenant mode improvements
- ModuleManager improvements

---

### v1.0.0 — 2024-12-16

- Initial release
