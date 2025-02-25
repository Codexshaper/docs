# Installation

## Requirements

Before installing our script, ensure that your server meets the following requirements:

- Apache, nginx, or another compatible web server
- PHP >= 8.1 or higher
- MySQL Database server
- `PDO` PHP extension
- `OpenSSL` PHP extension
- `mbstring` PHP extension
- `exif` PHP extension
- `fileinfo` PHP extension
- `xml` PHP extension
- `Ctype` PHP extension
- `JSON` PHP extension
- `Tokenizer` PHP extension
- `cURL` PHP extension
- `zip` PHP extension
- `iconv` PHP extension
- Ensure the `mod_rewrite` Apache module is enabled

## PHP Configuration

Open your php configuration file `php.ini` and change the following settings.

```
memory_limit = 256M
max_execution_time = 300

```

### TIP

On this project, we're using the `Laravel 11.x.` Please go to Laravel documentation page for more information.

## Step O1

Now login to you cPanel and go to > MySQL® Database Wizard

![src](/assets/lms/cpanel.png)

## Step O2

Create Database

![src](/assets/lms/create-database.png)

## Step O3

Create Database Users, do not forget to keep your database user `password`, we will use this `password` while we run installation wizard.

![src](/assets/dashkit/create-user.png)

## Step 04

Add user to the database. Check all privileges and click make changes. Then click “Next Step”

![src](/assets/dashkit/user-privileges.png)

## Step 05

Database created and setup successfully. Now keep `database user`, `database name`, `database password` in a note. We need them while we run installation wizard.

![src](/assets/dashkit/completed-user.png)

## Upload Application

Now upload file, Your selected folder

## Step 01

![src](/assets/lms/file-upload.png)

## Step 02

Extract zip file in server

![src](/assets/lms/extract-project.png)

Folder Permission

## Step 03

Then go to the `root` directory and Change the `bootstrap` folder permission to `0755`

![src](/assets/lms/permission-one.png)

After that, go to the `bootstap` directory then change `cache` folder permission to `0755`

![src](/assets/lms/permission-two.png)

Finally, go to the `storage` directory and Change the permission of `framework` and `logs` folder to `0755`.

![src](/assets/lms/permission-fours.png)

## <b style="color:red">Deploy Server</b>

To move `index.php` out of the public folder in a Laravel project,
you can adjust the directory structure and replace this code in `index.php`

```

// Register the Composer autoloader...

require __DIR__.'/vendor/autoload.php';

// Bootstrap Laravel and handle the request...

(require_once __DIR__.'/bootstrap/app.php')
    ->handleRequest(Request::capture());

```

## Recommended

"When setting up the domain, ensure that the document root points to the `/public directory.`"
This ensures that only the necessary files for public access (such as index.php) are served by the web server,
improving security and keeping sensitive files outside the public directory.

### Step 01

Got to your cpanel domains list and select the domain then click on Manage button

![src](/assets/lms/images/document-root/01.png)

### Step 02

Update your document root to `{root}/public`

![src](/assets/lms/images/document-root/02.png)

## Install EduLab LMS

000
If you see `blank page` or `500 Internal Server Error` then run below command

`composer dump-autoload`

001
Let's Start EduLab LMS.

![src](/assets/lms/installer/start.png)

002

Server Requirement Check for EduLab LMS

- The system will verify the required PHP extensions.
- If a PHP extension is already enabled, a green check mark (✔) will appear next to it, indicating it is ready for use.
- If a required PHP extension is not enabled, a red cross (✖) will appear, and you must enable the extension by following these steps:
  Open your `php.ini` file.
- Locate the corresponding line for the extension (e.g., ;extension=mbstring).
- Remove the semicolon (;) at the beginning of the line to uncomment it.
- Save the file and restart your web server (e.g., Apache or Nginx).
- Once all extensions are enabled and validated with green check marks, you can proceed to the next step in the setup process.

![src](/assets/lms/installer/server.png)

003

Folder Permission Check for EduLab LMS

- Before installation, the system will verify the required folder permissions.
- If the required permissions are correctly set, a green check mark (✔) will appear, indicating that the folder is ready for use.
- If the required permissions are not set, a red cross (✖) will appear, and you must grant the correct permissions by following these steps:
- Identify the folder(s) that need permission adjustments (e.g., storage, bootstrap/cache).
- Open your terminal and navigate to your project directory.
- Run the following command to grant the necessary permissions:

```
    chmod -R 775 storage bootstrap/cache
    chown -R www-data:www-data storage bootstrap/cache

```

- Replace www-data with your web server user if different.
- Verify the permissions after running the command.
- Once all permissions are correctly set and validated with green check marks, you can proceed to the next step in the setup process.

![src](/assets/lms/installer/permission.png)

004

Environment setting of your application

## Note

`App debug will be always false for production.`

This step allows you to configure your application
environment easily through a graphical interface. Follow these instructions:

```
App Debug:

Toggle between True (enabled) or False (disabled).
Debug mode helps identify issues during development and
should be turned off (False) in production for security reasons.

```

```
App Name:

Enter your application's name (e.g., "EduLab LMS").
This will be displayed in system notifications and logs.

```

```
App Environment:

Select the appropriate environment for your application:
Local: For development purposes.
Staging: For pre-production testing.
Production: For the live environment.

```

![src](/assets/lms/installer/environment.png)

005

## Database Connection of Your Application

- The database connection step is crucial for linking your application to a database.
- Follow the steps below to configure the database connection:

## Provide Database Credentials:

- Fill in the required fields for your database connection:
- Database Host: Enter the database server's IP address or hostname `(e.g., 127.0.0.1` for local setup).
- Database Port: Specify the port number your database server uses `(default for MySQL: 3306)`.
- Database Name: Enter the name of your database.
- Username: Provide the username for accessing the database.
- Password: Enter the corresponding password for the database user.

![src](/assets/lms/installer/database.png)

## Import the demo content.

- The demo content helps you quickly set up your application with pre-configured settings,
  data, and layouts. Follow these steps to import the demo content:

- Leave the box unchecked if you don't need demo content.

![src](/assets/lms/installer/demo-import.png)

## Finishing the Process and Viewing Demo Credentials

After completing the installation process, you can access the demo
credentials to log in and explore the application. Follow these steps:

![src](/assets/lms/installer/final.png)

## View Demo Credentials:

Admin Login:

```
Email: admin@gmail.com
Password: 123456
```

Instructor Login:

```
Email: instructor@gmail.com
Password: 123456
```

Organization Login:

```
Email: organization@gmail.com
Password: 123456

```

Student Login:

```
Email: student@gmail.com
Password: 123456

```

## Accessing the Storage Settings in the Admin Dashboard:

- Navigate to the Backend Setting Menu:

- Log in to the admin dashboard.
  Go to Backend Settings.
  Click on `Storage Link`:

- In the Backend Settings menu, find and click on the Storage Link option.
  View All Images:

- Once you click on the Storage Link, all the images available on your website will be displayed.
- You can manage these images as per your requirements.

![src](/assets/lms/installer/storage-link.png)
