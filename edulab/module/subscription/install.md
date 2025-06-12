# Installing the Subscription Module

Thank you for purchasing the Subscription module! Follow the steps below to install and manage the module on your system.

---

## Step 1: Open Module Manager

Navigate to `Module Manager > Modules` in your admin dashboard and click the `Add New Module` button.

![Add New Module](/assets/lms/images/module/subscription/add-new.png)

---

## Step 2: Upload the Subscription Module

- Select the `Subscription.zip` file from your computer, or provide the module's URL.
- After uploading, click the `Install` button.

![Upload Subscription Module](/assets/lms/images/module/subscription/upload-subscription-module.png)

---

## Step 3: Enable the Subscription Feature

After installation, click the `Enable` button to activate the subscription features.

![Enable Subscription](/assets/lms/images/module/subscription/enable.png)

> **Note:**  
> The system will update Composer in the background automatically.  
> If you encounter the error `Class "Modules\Subscription\Providers\SubscriptionServiceProvider" not found`, this means Composer has not yet recognized the new module. To resolve this, use one of the following options:

![Service Provider Not Found](/assets/lms/images/module/module-service-provider-composer-load-issue.png)

### Option 1: Manual Composer Update

Navigate to your project root directory using SSH and run:

```bash
composer update
```

![Composer Update](/assets/lms/images/module/composer-update.png)

### Option 2: Composer Dump Autoload

If `composer update` is unavailable on your hosting, try:

```bash
composer dump-autoload
```

![Composer Dump Autoload](/assets/lms/images/module/composer-dump-autoload.png)

> **Note:**  
> If neither command is available, please contact your hosting provider to enable Composer functionality.

---

## Step 4: Temporarily Disable the Subscription Module

To temporarily disable subscription features, click the `Disable` button.

![Disable Subscription](/assets/lms/images/module/subscription/disable.png)

---

## Step 5: Permanently Uninstall the Subscription Module

To entirely remove the subscription feature and clean up related directories and database entries, click the `Uninstall` button.

![Uninstall Subscription](/assets/lms/images/module/subscription/uninstall.png)

---

Follow these steps to successfully manage your Subscription module. If you need further assistance, please refer to the main documentation or contact support.