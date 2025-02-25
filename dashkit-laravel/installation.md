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


### TIP

On this project, we're using the `Laravel 11.x.` Please go to Laravel documentation page for more information.

## Local Server Devloy
Go to  project directory and run following command.  

```
npm install
npm run dev
php artisan serve   
```


## Live Server Devloy
Create a .htaccess into project directory, and place the code.
```
<IfModule mod_rewrite.c>
RewriteEngine On
        RewriteRule ^(.+) /public/$1 [L]
</IfModule>

```

## Step O1

Now login to you cPanel and go to > MySQL® Database Wizard

![src](/assets/dashkit/cpanel.png)

## Step O2

Create Database

![src](/assets/dashkit/create-database.png)

## Step O3

Create Database Users, do not forget to keep your database user password, we will need this while we run installation wizard.

![src](/assets/dashkit/create-user.png)

## Step O4

Create Database Users, do not forget to keep your database user password, we will need this while we run installation wizard.

![src](/assets/dashkit/create-user.png)

## Step 05

Add user to the database. Check all privileges and click make changes. Then click “Next Step”

![src](/assets/dashkit/user-privileges.png)

## Step 06

Database create is done, keep database user, database name, database password in a note.

![src](/assets/dashkit/completed-user.png)

## Upload Application

Now upload file, Your selected folder

## Step 01

![src](/assets/dashkit/file-upload.png)

##  Step 02

Extract zip file in server

![src](/assets/dashkit/file-upload.png)
