## Security

This page documents the security measures built into EduLab LMS.

---

## Output Sanitisation (XSS Protection)

All user-supplied content is sanitised before rendering:

- **Plain text fields** use Blade's `{{ }}` auto-escaping.
- **Rich text / HTML content** (certificates, icons, course descriptions) is run through [`stevebauman/purify`](https://github.com/stevebauman/purify) via the `clean()` helper before rendering with `{!! clean($var) !!}`.

Never render user content with `{!! $var !!}` directly — always wrap with `clean()`.

---

## Mass Assignment Protection

- All models use `$guarded = ['id']` minimum.
- `BaseRepository::$globalExcludedFields` blocks `_token`, `_method`, `guard`, `is_verify`, `is_admin`, `tenant_id`, `role`, and `permissions` from all save/update operations globally.

---

## Authentication

| Area | Guard | Rate Limit |
|---|---|---|
| Admin login | `admin` | 5 attempts / minute |
| Student / Instructor login | `web` | 5 attempts / minute |
| Registration | `web` | 10 attempts / minute |
| Forgot password | — | 5 attempts / minute |
| Password reset | — | 5 attempts / minute |

Password reset tokens expire after **60 minutes**. Password rules enforce **minimum 8, maximum 128 characters**.

---

## File Uploads

All file uploads are validated against an extension allowlist defined in `BaseRepository::$allowedUploadExtensions`. Unsupported types return `null` — they are never stored.

Base64 image uploads are additionally validated by MIME type (not just extension).

---

## State-Changing Routes

All routes that modify data use `POST`, `PUT`, or `DELETE` methods. No data-mutating actions are exposed via `GET`.

---

## SaaS Security (when SaaS module is active)

- Tenant subscription enforcement middleware is **fail-closed**: a database error returns `503`, not a bypass.
- Tenants without an active subscription and no billing setup receive a `402` response.
- SaaS API routes require `auth:admin` guard.

---

## Environment Recommendations

For production environments:

```env
APP_ENV=production
APP_DEBUG=false
```

Ensure your `storage/` and `bootstrap/cache/` directories are **not** publicly accessible.

Use HTTPS — the application auto-detects HTTPS via `APP_URL`, `X-Forwarded-Proto`, or `CF-Visitor` headers and forces secure URL generation.
