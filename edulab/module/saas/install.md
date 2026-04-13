# Installing the SaaS Module

Thank you for purchasing the LMS Hub SaaS module! Follow the steps below to install it into your EduLab LMS.

---

## Before You Begin

Make sure the following are in place:

- EduLab LMS is fully installed and accessible at your domain
- You are logged in as an **LMS admin** (`/admin`)
- Your server has a **wildcard DNS record** (`*.yourdomain.com → your server IP`) so tenant subdomains resolve correctly
- Composer is available on your server (or via SSH)

---

## Step 01 — Open Module Manager

In your admin dashboard, navigate to **Module Manager → Modules** and click the **Add New Module** button.

![Add New Module](/assets/lms/images/module/saas/add-new-module.png)

---

## Step 02 — Upload the SaaS Module

Upload the `SaaS.zip` file you downloaded from CodeCanyon, or paste the module URL.

After uploading, click **Install**.

![Upload SaaS Module](/assets/lms/images/module/saas/upload-module.png)

---

## Step 03 — Run Composer

The SaaS module adds new PHP dependencies (Stancl Tenancy). The system will attempt to update Composer automatically. If you see the error:

```
Class "Modules\SaaS\Providers\SaaSServiceProvider" not found
```

![Service Provider Error](/assets/lms/images/module/saas/activate-composer-error.png)

Run one of the following via SSH:

```bash
# Preferred
composer dump-autoload

# If you need to resolve new dependencies too
composer update --no-scripts
```

---

## Step 04 — Activate & Enable the Module

After installation, locate the SaaS module in the list and click **Activate**.

![Enable SaaS Module](/assets/lms/images/module/saas/activation-button.png)

![Enable SaaS Module](/assets/lms/images/module/saas/activation-form.png)

Enabling runs the module's database migrations (creates the `tenants`, `domains`, `tenant_plans`, `tenant_billings`, `tenant_invoices`, and `tenant_payments` tables).

---

## Step 05 — Configure Your Environment

Open your `.env` file and add the following keys (if not already present):

```env
# The domain used to route central (non-tenant) traffic
CENTRAL_DOMAIN=yourdomain.com

# Tenant provisioning: 'sync' (immediate) or 'queue' (background)
TENANT_PROVISIONING_DRIVER=sync

# Billing defaults
BILLING_CURRENCY=USD
BILLING_CURRENCY_SYMBOL=$
TRIAL_DAYS=14
TRIAL_ENABLED=true
```

After editing `.env`, clear the config cache:

```bash
php artisan config:clear
php artisan config:cache
```

---

## Step 06 — Set Up the Cron Job

For trial expiry notifications and subscription auto-renewal to work, add this cron entry on your server:

```bash
* * * * * cd /path/to/your/project && php artisan schedule:run >> /dev/null 2>&1
```

In cPanel, go to **Cron Jobs** and add the entry above.

[Cron Jobs](/edulab/advanced/cron-jobs) 

> **Note:** Without the cron job, subscriptions will not auto-renew and trial expiry emails will not be sent.

---

## Step 07 — Create Your First Plan

Go to **Admin → Billing → Plans** and create at least one subscription plan before your customers can register.

See [Plan Management](./plans) for full details.

---

## Step 08 — Verify the Landing Page

Visit your domain root (`https://yourdomain.com`). You should see the SaaS landing page with your pricing plans listed.

If you see the default LMS homepage instead, check that the **SaaS module is enabled** and run:

```bash
php artisan route:clear
php artisan route:cache
```

---

## Disabling the Module

To temporarily disable the SaaS module without uninstalling it, click **Disable** in Module Manager.

<!-- ![Disable SaaS Module](/assets/lms/images/module/saas/disable-module.png) -->

---

## Uninstalling the Module

To fully remove the module and clean up its database tables, click **Uninstall** in Module Manager.

> **Warning:** Uninstalling will delete all tenant, billing, and plan data. This is irreversible. Back up your database first.

<!-- ![Uninstall SaaS Module](/assets/lms/images/module/saas/uninstall-module.png) -->
