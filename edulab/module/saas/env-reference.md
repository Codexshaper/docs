# Environment Variables Reference

All environment variables used by the Tenanta module, with their defaults and descriptions.

---

## Core Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `TENANT_DATABASE_MODE` | `separate` | Tenant data isolation strategy: `separate` (one DB per tenant) or `single` (shared DB with `tenant_id`) |
| `TENANT_PROVISIONING_DRIVER` | `sync` | How provisioning jobs run: `sync` (immediate) or `queue` (background worker required) |

---

## Tenanta Settings Defaults

These are used when no value has been saved in the database yet. Once an admin saves settings via the UI, the database value takes precedence.

| Variable | Default | Description |
|----------|---------|-------------|
| `TENANTA_ALLOW_MODE_SWITCH_WITH_EXISTING_TENANTS` | `false` | Allow switching DB mode when tenants exist |
| `TENANTA_ALLOW_MODULE_UNINSTALL` | `true` | Allow module uninstallation from Module Manager |
| `TENANTA_ALLOW_RESOURCE_DELETION` | `false` | Allow destructive deletion of module data during uninstall |
| `TENANTA_ENABLE_ADMIN_ROUTES` | `false` | Enable LMS admin panel on central domain |
| `TENANTA_ENABLE_STUDENT_PANEL_ROUTES` | `false` | Enable student panel on central domain |
| `TENANTA_ENABLE_TEACHER_PANEL_ROUTES` | `false` | Enable teacher panel on central domain |
| `TENANTA_ENABLE_PARENT_PANEL_ROUTES` | `false` | Enable parent panel on central domain |

---

## Billing Settings Defaults

| Variable | Default | Description |
|----------|---------|-------------|
| `TENANTA_BILLING_ENABLED` | `true` | Master billing toggle |
| `TENANTA_TRIAL_ENABLED` | `true` | Enable free trial for paid plans |
| `TENANTA_TRIAL_CARD_REQUIRED` | `false` | Require payment card to start a trial |
| `TENANTA_TRIAL_CARD_VERIFICATION_AMOUNT` | `0` | Amount to authorize when trial requires card (0 = verify only) |
| `TENANTA_TRIAL_DAYS` | `14` | Number of trial days |
| `TENANTA_FREE_PLAN_ENABLED` | `true` | Allow free plan registration |
| `TENANTA_AUTO_RENEWAL_ENABLED` | `true` | Enable automatic subscription renewal |
| `TENANTA_AUTO_RENEWAL_REMINDER_DAYS` | `7` | Days before renewal to send reminder email |
| `TENANTA_TRIAL_ENDING_REMINDER_DAYS` | `3` | Days before trial end to send warning email |

---

## Billing Security

| Variable | Default | Description |
|----------|---------|-------------|
| `TENANTA_REQUIRE_EMAIL_VERIFICATION` | `true` | Require email verification before billing |
| `TENANTA_REQUIRE_PAYMENT_VERIFICATION` | `true` | Verify payments before activating subscriptions |
| `TENANTA_ENABLE_AUDIT_LOGGING` | `true` | Log billing settings changes |
| `TENANTA_ENCRYPT_PAYMENT_DATA` | `true` | Encrypt payment data at rest |

---

## Registration

| Variable | Default | Description |
|----------|---------|-------------|
| `TENANTA_REGISTRATION_TRIAL_DEFAULT` | `true` | Default to trial option during registration |
| `TENANTA_ALLOW_PAY_NOW_OPTION` | `true` | Show "Pay Now" option during registration |
| `TENANTA_MIN_PASSWORD_LENGTH` | `8` | Minimum password length for tenant registration (range: 6–64) |
| `TENANTA_REQUIRE_PASSWORD_CONFIRMATION` | `true` | Show password confirmation field during registration |

---

## Currency & Invoices

| Variable | Default | Description |
|----------|---------|-------------|
| `BILLING_CURRENCY` | `USD` | ISO currency code for all billing |
| `BILLING_CYCLE` | `monthly` | Default billing cycle for new subscriptions |
| `INVOICE_PREFIX` | `INV` | Prefix for invoice numbers |

---

## Billing Storage Keys

These control the database and cache key names. You typically don't need to change these unless you have naming conflicts.

| Variable | Default | Description |
|----------|---------|-------------|
| `TENANTA_BILLING_SETTINGS_KEY` | `tenanta_billing_settings` | `theme_settings` table key for billing settings |
| `TENANTA_BILLING_LEGACY_SETTINGS_KEY` | `billing_settings` | Legacy key (read for backward compatibility) |
| `TENANTA_BILLING_CACHE_KEY` | `tenanta_billing_settings` | Cache key for billing settings |
| `TENANTA_BILLING_LEGACY_CACHE_KEY` | `billing_settings` | Legacy cache key |
| `TENANTA_BILLING_PAYMENT_METHODS_CACHE_KEY` | `tenanta_billing_settings_payment_methods` | Cache key for payment methods |
| `TENANTA_BILLING_LEGACY_PAYMENT_METHODS_CACHE_KEY` | `billing_settings_payment_methods` | Legacy payment methods cache key |

---

## Demo Data Import

| Variable | Default | Description |
|----------|---------|-------------|
| `TENANTA_TENANT_DEMO_SQL_FILE` | `tenant-demo.sql` | SQL file for separate-DB mode demo import |
| `TENANTA_DEFAULT_DEMO_SQL_FILE` | `demo.sql` | Fallback SQL file when tenant-specific file is missing |
| `TENANTA_TENANT_DEMO_DATA_FILE` | `tenant-demo-data.php` | PHP array file for single-DB mode demo import |
| `TENANTA_DEFAULT_DEMO_DATA_FILE` | `demo-data.php` | Fallback PHP file when tenant-specific file is missing |
| `TENANTA_TENANT_DEMO_BLOCKED_EMAILS` | `admin@gmail.com` | Comma-separated emails to exclude from demo admin import |

---

## Payment Gateway Keys

These are not Tenanta-specific but are required for payment gateways to function:

| Variable | Description |
|----------|-------------|
| `STRIPE_KEY` | Stripe publishable key |
| `STRIPE_SECRET` | Stripe secret key |
| `PAYPAL_CLIENT_ID` | PayPal client ID |
| `PAYPAL_SECRET` | PayPal secret |
| `RAZORPAY_KEY` | Razorpay key ID |
| `RAZORPAY_SECRET` | Razorpay key secret |
| `PAYSTACK_PUBLIC_KEY` | Paystack public key |
| `PAYSTACK_SECRET_KEY` | Paystack secret key |

See [Payment Gateways](./payment-gateways) for gateway-specific setup instructions.

---

## Example `.env` Section

```env
# === Tenanta Core ===
TENANT_DATABASE_MODE=separate
TENANT_PROVISIONING_DRIVER=sync

# === Billing ===
BILLING_CURRENCY=USD
BILLING_CYCLE=monthly
INVOICE_PREFIX=INV
TENANTA_BILLING_ENABLED=true
TENANTA_TRIAL_ENABLED=true
TENANTA_TRIAL_DAYS=14
TENANTA_FREE_PLAN_ENABLED=true
TENANTA_AUTO_RENEWAL_ENABLED=true

# === Security ===
TENANTA_REQUIRE_EMAIL_VERIFICATION=true
TENANTA_ENCRYPT_PAYMENT_DATA=true

# === Route Toggles ===
TENANTA_ENABLE_ADMIN_ROUTES=false
TENANTA_ENABLE_STUDENT_PANEL_ROUTES=false
TENANTA_ENABLE_TEACHER_PANEL_ROUTES=false
TENANTA_ENABLE_PARENT_PANEL_ROUTES=false
```
