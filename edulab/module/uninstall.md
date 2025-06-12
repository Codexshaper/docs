# UnInstall Module


## Go to your admin panel and select `Module Manager >> Modules` 

![src](/assets/lms/images/module/module-manager.png)

Go to the Module Manager and click the "Uninstall" button next to the module you want to remove.

![src](/assets/lms/images/module/uninstall-module.png)


## To clean up Update or Dump Autoload composer

### Composer update. Go to your project root dir `cd /path/to/project_root/` using SSH and run `composer update`

![src](/assets/lms/images/module/composer-update.png)

### Some hosting `disabled` composer update. Contact hosting support and enable it. You may run `composer dump-autoload` if `composer update` unavailable.

![src](/assets/lms/images/module/composer-dump-autoload.png)