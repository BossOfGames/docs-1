---
id: optimizing
title: Optimizing
sidebar_title: Optimizing
---

These are just some basic optimizing. For additional optimization information, refer to the Laravel docs

## Drivers

### Redis

Installing Redis is one way to enable optimizations. After installing, add to the `config.php`

```env title="env.php"
CACHE_DRIVER=redis
```

### PHP-APC

PHP-APC needs to be installed server-side (as a PHP extension) for it to be made available. No additional configuration is required on the database driver level.


### Additional Drivers

Any additional drivers supported by Laravel are automatically supported by phpVMS.

---

## Environment/Debug Modes

### Environment

When going live, this should be set to `production`. By default, it's `dev`. Change this:

```php title="env.php"
APP_ENV=production
```

### Debug Mode

This adjusts the logging level, making it more verbose. The default value is `true`, and should be set to `false` when you're live/in-production.

```env title="env.php"
APP_DEBUG=true
DEBUG_TOOLBAR=false
```

---

## Sessions

Sessions store the logged in users and other information. By default, they're stored on disk.

:::info
The Redis store is recommended if you have access to it
:::

#### Redis

Sessions can be saved in PHP.

```php title="config.php"
// ...
'session' => [
  'default' => 'redis',
],
// ...  
```

#### PHP APC

Sessions can be saved in PHP.

```php title="config.php"
// ...
'session' => [
  'default' => 'apc',
],
// ...  
```

---

## Caching

#### Redis

Instead of using PHP APC, you can also use Redis for caching; adding to the `config.php` file:

```php title="config.php"
// ...
'cache' => [
  'default' => 'redis',
],
// ...
```

#### PHP APC

This doesn't require any configuration on the server side. To enable it, add the following to your `config.php` file:

```php title="config.php"
// ...
'cache' => [
  'default' => 'apc',
],
// ...  
```

---

## Queue Driver

:::caution
This requires that the [Laravel Queue Worker](https://laravel.com/docs/7.x/queues#running-the-queue-worker) be installed and working properly
:::

phpVMS uses asyncronous queues for several tasks, including sending emails and exporting to vaCentral. The default mode is `sync`, which means the tasks are done in-line. This could be useful if you're running a high-traffic VA and on your own VPS.

#### Redis

If you have Redis installed, you can add the following to the `config.php` file. Add the `redis` section (if it doesn't exist) to the existing `database` array:

```php title="config.php"
// ...

'queue' => [
  'default' => 'redis',
],

//...
```

