# Cron jobs

## Cpanel

Sometimes we need to run cron jobs to run command continuously such as `artisan queue:work`, `artisan schedule:run`, etc.

Go to you cpanel and search 'Cron'

![src](/assets/lms/images/advanced/cpanel/searc-cron-jobs.png)

### Method 1: Add direct command 

```
cd /path/to/project && php artisan queue:work --tries=3 >> /path/to/logs_dir/cron.log 2>&1 
````

![src](/assets/lms/images/advanced/cpanel/direct-cron-command.png)

### Method 2: Add commands using bash file (Recommended)

```
/bin/sh /path/to/cron_dir/cron.sh >> /path/to/logs_dir/cron.log 2>&1
```

![src](/assets/lms/images/advanced/cpanel/command-using-file.png)

```cron.sh

#!/bin/sh
PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
echo "Cron job started at $(date)" >> /path/to/logs_dir/cron.log

# Change to the project directory
cd /path/to/project

# Run the queue worker with the working command
php artisan queue:work --tries=3 >> /path/to/logs_dir/cron.log 2>&1

echo "Cron job finished at $(date)" >> /path/to/logs_dir/cron.log
```

Note: Make sure `cron.sh` has enough permission to run/call.

## Hpanel

Go to you cpanel and search 'Cron'

![src](/assets/lms/images/advanced/hpanel/searc-cron-jobs.png)

### Method 1: Add direct command 

```
/usr/bin/php /path/to/project/artisan queue:work --tries=3 >> /path/to/logs_dir/cron.log 2>&1
````

![src](/assets/lms/images/advanced/hpanel/direct-cron-command.png)

### Method 2: Add commands using bash file (Recommended)

```
/bin/sh /path/to/project/cron.sh >> /path/to/logs_dir/cron.log 2>&1
```

![src](/assets/lms/images/advanced/hpanel/cron-commands-using-bash-file.png)

```cron.sh

#!/bin/sh
PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
echo "Cron job started at $(date)" >> /path/to/logs_dir/cron.log
/usr/bin/php /path/to/project/artisan queue:work --tries=3 >> /path/to/logs_dir/cron.log 2>&1
echo "Cron job finished at $(date)" >> /path/to/logs_dir/cron.log
```

Note: Make sure `cron.sh` has enough permission to run/call.