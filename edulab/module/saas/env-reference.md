# Environment Variables Reference

All environment variables used by the SaaS module, with their defaults and descriptions.

---

## Core Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `TENANT_DATABASE_MODE` | `separate` | Tenant data isolation strategy: `separate` (one DB per tenant) or `single` (shared DB with `tenant_id`) |
| `TENANT_PROVISIONING_DRIVER` | `sync` | How provisioning jobs run: `sync` (immediate) or `queue` (background worker required) |

---

## SaaS Settings Defaults

These are used when no value has been saved in the database yet. Once an admin saves settings via the UI, the database value takes precedence.

| Variable | Default | Description |
|----------|---------|-------------|
| `SAAS_ALLOW_MODE_SWITCH_WITH_EXISTING_TENANTS` | `false` | Allow switching DB mode when tenants exist |
| `SAAS_ALLOW_MODULE_UNINSTALL` | `true` | Allow module uninstallation from Module Manager |
| `SAAS_ALLOW_RESOURCE_DELETION` | `false` | Allow destructive deletion of module data during uninstall |
| `SAAS_ENABLE_ADMIN_ROUTES` | `false` | Enable LMS admin panel on central domain |
| `SAAS_ENABLE_STUDENT_PANEL_ROUTES` | `false` | Enable student panel on central domain |
| `SAAS_ENABLE_TEACHER_PANEL_ROUTES` | `false` | Enable teacher panel on central domain |
| `SAAS_ENABLE_PARENT_PANEL_ROUTES` | `false` | Enable parent panel on central domain |

---

## Billing Settings Defaults

| Variable | Default | Description |
|----------|---------|-------------|
| `SAAS_BILLING_ENABLED` | `true` | Master billing toggle |
| `SAAS_TRIAL_ENABLED` | `true` | Enable free trial for paid plans |
| `SAAS_TRIAL_CARD_REQUIRED` | `false` | Require payment card to start a trial |
| `SAAS_TRIAL_CARD_VERIFICATION_AMOUNT` | `0` | Amount to authorize when trial requires card (0 = verify only) |
| `SAAS_TRIAL_DAYS` | `14` | Number of trial days |
| `SAAS_FREE_PLAN_ENABLED` | `true` | Allow free plan registration |
| `SAAS_AUTO_RENEWAL_ENABLED` | `true` | Enable automatic subscription renewal |
| `SAAS_AUTO_RENEWAL_REMINDER_DAYS` | `7` | Days before renewal to send reminder email |
| `SAAS_TRIAL_ENDING_REMINDER_DAYS` | `3` | Days before trial end to send warning email |

---

## Billing Security

| Variable | Default | Description |
|----------|---------|-------------|
| `SAAS_REQUIRE_EMAIL_VERIFICATION` | `true` | Require email verification before billing |
| `SAAS_REQUIRE_PAYMENT_VERIFICATION` | `true` | Verify payments before activating subscriptions |
| `SAAS_ENABLE_AUDIT_LOGGING` | `true` | Log billing settings changes |
| `SAAS_ENCRYPT_PAYMENT_DATA` | `true` | Encrypt payment data at rest |

---

## Registration

| Variable | Default | Description |
|----------|---------|-------------|
| `SAAS_REGISTRATION_TRIAL_DEFAULT` | `true` | Default to trial option during registration |
| `SAAS_ALLOW_PAY_NOW_OPTION` | `true` | Show "Pay Now" option during registration |
| `SAAS_MIN_PASSWORD_LENGTH` | `8` | Minimum password length for tenant registration (range: 6–64) |
| `SAAS_REQUIRE_PASSWORD_CONFIRMATION` | `true` | Show password confirmation field during registration |

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
| `SAAS_BILLING_SETTINGS_KEY` | `saas_billing_settings` | `theme_settings` table key for billing settings |
| `SAAS_BILLING_LEGACY_SETTINGS_KEY` | `billing_settings` | Legacy key (read for backward compatibility) |
| `SAAS_BILLING_CACHE_KEY` | `saas_billing_settings` | Cache key for billing settings |
| `SAAS_BILLING_LEGACY_CACHE_KEY` | `billing_settings` | Legacy cache key |
| `SAAS_BILLING_PAYMENT_METHODS_CACHE_KEY` | `saas_billing_settings_payment_methods` | Cache key for payment methods |
| `SAAS_BILLING_LEGACY_PAYMENT_METHODS_CACHE_KEY` | `billing_settings_payment_methods` | Legacy payment methods cache key |

---

## Demo Data Import

| Variable | Default | Description |
|----------|---------|-------------|
| `SAAS_TENANT_DEMO_SQL_FILE` | `tenant-demo.sql` | SQL file for separate-DB mode demo import |
| `SAAS_DEFAULT_DEMO_SQL_FILE` | `demo.sql` | Fallback SQL file when tenant-specific file is missing |
| `SAAS_TENANT_DEMO_DATA_FILE` | `tenant-demo-data.php` | PHP array file for single-DB mode demo import |
| `SAAS_DEFAULT_DEMO_DATA_FILE` | `demo-data.php` | Fallback PHP file when tenant-specific file is missing |
| `SAAS_TENANT_DEMO_BLOCKED_EMAILS` | `admin@gmail.com` | Comma-separated emails to exclude from demo admin import |

---

## Payment Gateway Keys

These are not SaaS-specific but are required for payment gateways to function:

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
# === SaaS Core ===
TENANT_DATABASE_MODE=separate
TENANT_PROVISIONING_DRIVER=sync

# === Billing ===
BILLING_CURRENCY=USD
BILLING_CYCLE=monthly
INVOICE_PREFIX=INV
SAAS_BILLING_ENABLED=true
SAAS_TRIAL_ENABLED=true
SAAS_TRIAL_DAYS=14
SAAS_FREE_PLAN_ENABLED=true
SAAS_AUTO_RENEWAL_ENABLED=true

# === Security ===
SAAS_REQUIRE_EMAIL_VERIFICATION=true
SAAS_ENCRYPT_PAYMENT_DATA=true

# === Route Toggles ===
SAAS_ENABLE_ADMIN_ROUTES=false
SAAS_ENABLE_STUDENT_PANEL_ROUTES=false
SAAS_ENABLE_TEACHER_PANEL_ROUTES=false
SAAS_ENABLE_PARENT_PANEL_ROUTES=false
```
