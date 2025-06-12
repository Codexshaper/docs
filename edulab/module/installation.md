# Module Installation Guide

This guide explains different methods to install modules in the system.

## Method 1: Using Module Manager (Recommended)

### Step 1: Access Module Manager
Navigate to your dashboard or admin panel and go to `Module Manager > Modules`.

![Module Manager Interface](/assets/lms/images/module/module-manager.png)

### Step 2: Add New Module
Click on the `Add New Module` button.

![Add New Module Button](/assets/lms/images/module/add-new-module.png)

A popup will appear with two installation options:
- Upload local file
- Add by URL

![Upload Module Popup](/assets/lms/images/module/upload-popup.png)

### Step 3: Choose Installation Method

#### Option A: Upload Zip File
1. Select your module zip file from your computer
2. Upload it through the interface

![Upload Local File](/assets/lms/images/module/upload-local-file.png)

3. Click the `Install` button to complete the installation

![Install Local Module](/assets/lms/images/module/install-local-module.png)

#### Option B: Install via URL
If your module is hosted on a third-party server, you can install it using the URL option.

![Install Third-Party Module](/assets/lms/images/module/install-third-party-module.png)

### Step 4: Enable the Module
After installation, you'll see the module listed. Click the "Enable" button to activate it.

![Enable Module](/assets/lms/images/module/enable-module.png)

> **Note**: If the "Enable" button doesn't appear, it means the module is a core component essential for the system to function properly.

## Method 2: Manual Installation

### Step 1: Download the Module
Purchase and download the module zip file.

![Download Module](/assets/lms/images/module/download.png)
![Downloaded File](/assets/lms/images/module/downloaded-file.png)

### Step 2: Upload and Extract the Module

1. Navigate to the `Modules` directory in your installation: `/path/to/root/Modules/`

![Modules Directory](/assets/lms/images/module/modules-dir.png)

2. Click the `Upload` button and upload your module zip file

![Upload Module](/assets/lms/images/module/upload-module.png)

3. After successful upload, close the window and return to the module directory

![Upload Module Complete](/assets/lms/images/module/upload-module-2.png)
![Module Directory Reload](/assets/lms/images/module/module-dir-reload.png)

4. Extract the zip file

![Extract Module](/assets/lms/images/module/module-extract.png)
![Extract Path](/assets/lms/images/module/module-extract-path.png)
![Extract Close](/assets/lms/images/module/module-extract-close.png)

5. **Important**: Delete the uploaded zip file for security

![Delete Module Zip](/assets/lms/images/module/delete-module-zip.png)

### Step 3: Verify Folder Structure
Ensure there is no extra parent folder after extraction. Your module folder structure should look like:

```
ModuleName (parent folder)
   - app
   - config
   - database
   - resources
   - routes
   - ...
```

![Correct Folder Structure](/assets/lms/images/module/module-correct-folder-structure.png)

### Step 4: Enable via Module Manager
1. Go to your admin panel and select `Module Manager >> Modules`

![Module Manager](/assets/lms/images/module/module-manager.png)

2. Find your module in the list and click the "Enable" button

![Enable Module](/assets/lms/images/module/enable-module.png)

### Step 5: Migration

```
 php artisan module:migrate {name}
```

## Updating Composer After Installation

After installing a module, you must update Composer for the system to recognize it. If you see an error like `Class "Modules\Subscription\Providers\SubscriptionServiceProvider" not found`, follow these steps:

![Service Provider Not Found](/assets/lms/images/module/module-service-provider-composer-load-issue.png)

### Option 1: Manual Composer Update
Go to your project root directory and run:

```bash
composer update
```

![Composer Update](/assets/lms/images/module/composer-update.png)

### Option 2: Composer Dump Autoload
If your hosting has disabled `composer update`, try:

```bash
composer dump-autoload
```

![Composer Dump Autoload](/assets/lms/images/module/composer-dump-autoload.png)

> **Note**: If both commands are unavailable, contact your hosting provider to enable Composer functionality.

## Automating Composer Updates

To handle composer updates automatically, you can use the queue system:

### Option 1: Manual Queue Processing
Run the following command via SSH:

```bash
php artisan queue:work
```

This will process any pending jobs, including composer updates. However, this command stops when your SSH session expires.

### Option 2: Cron Job (Recommended)
Set up a cron job to run the queue automatically. 

Refer to the [Cron Jobs](/edulab/advanced/cron-jobs) documentation for instructions on setting up cron jobs in cPanel and hPanel.

> **Important**: Ensure you have sufficient permissions to run Composer commands on your server.