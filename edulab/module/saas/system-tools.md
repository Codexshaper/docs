# System Tools

The SaaS admin panel includes system management tools for cache control, storage, license management, and admin profile settings.

---

## Cache Management

### Clear Cache

**SaaS Admin → Cache Clear** or `POST /saas/admin/cache-clear`

Runs `php artisan optimize:clear`, which clears:
- Configuration cache
- Route cache
- View cache
- Event cache
- Compiled files

Use this after making configuration changes or deploying new code.

### Optimize Cache

**SaaS Admin → Cache Optimize** or `POST /saas/admin/cache-optimize`

Runs `php artisan optimize`, which caches:
- Configuration files
- Routes
- Views

Use this in production to improve performance. Not recommended during development.

---

## Storage Link

**SaaS Admin → Storage Link** or `POST /saas/admin/storage-link`

Runs `php artisan storage:link`, which creates a symbolic link from `public/storage` to `storage/app/public`.

This is required for serving uploaded files (logos, avatars, course materials) through the web server. You typically only need to run this once after initial setup.

---

## License Management

### View / Update License

**SaaS Admin → License** or `GET /saas/admin/license`

Enter your license code and email to activate or update your SaaS module license. The license data is stored in `matrix.json` in your project root.

| Field | Description |
|-------|-------------|
| License Code | Your purchase/license code from the marketplace |
| Email | The email associated with your license purchase |

---

## Admin Profile

### View Profile

**SaaS Admin → Profile** or `GET /saas/admin/profile`

View and update the currently logged-in SaaS admin's profile information.

### Update Profile

`POST /saas/admin/profile`

| Field | Required | Description |
|-------|----------|-------------|
| Name | ✓ | Admin display name |
| Email | ✓ | Admin login email |
| Password | — | Leave blank to keep current password |
| Confirm Password | — | Required if changing password |

> **Note:** If you change your password, you will be logged out and redirected to the login page.

> **Security:** The profile update always uses the authenticated admin's ID, regardless of what is submitted in the form — this prevents unauthorized profile modification (IDOR protection).
