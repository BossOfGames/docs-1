---
id: files
title: Config Files
sidebar_title: Config Files
---
## Admin Panel Settings

A lot of settings can be located in the phpVMS Admin panel, under settings.

---

## config.php

:::info
Don't change the files in the `/config` directory; instead, edit the `config.php` file instead. These won't be overwritten on an update.
:::

A `config.php` file is generated, with some important information, such as the database, mail, and select configs from the `/config` directory. This file is used as an override (in the previous version of phpVMS, the `local.config.php` file is the same concept).

[Laravel configuration files](https://laravel.com/docs/7.x/configuration#accessing-configuration-values) are namespaced by the file names; in the `config.php` file, the root is set to the filename, and then the settings to override:

```php
return [
    # overrides app.php
    'app' => [
        'name' => 'phpvms',
        'url' => 'http://phpvms.test',

        # Don't forget to change these when live
        'env' => 'dev',
        'debug' => true,
    ]
];

# This is used as:

echo config('app.name'); 
```

---

### Email

I recommend using a 3rd party service for sending email. They usually offer SMTP support, and great logging and analytics. Especially on a shared host, where email is locked down, and a "naughty neighbor" can quickly get the server/IP you're emailing from blacklisted.

The services I recommend and use:

* [Sparkpost](http://www.sparkpost.com) - Free up to 100k messages/month
* [Mailgun](http://www.mailgun.com) - Free, up to 10k messages/month


#### Configuration
To configure email, in your `config.php` file, setup the following:

```php
'mail' => [
    'driver' => 'smtp',
    'host' => '',
    'port' => 587,
    'from' => [
        'name' => '',
        'address' => '',
    ],
    'username' => '',
    'password' => '',
],
```

---

### Recaptcha

Recaptcha can be enabled, get the keys [here](https://www.google.com/recaptcha/admin). Then add/change the following to your `config.php` file. The section is there by default, just without the `sitekey` and `secret`.

```php
'captcha' => [
    'enabled' => true,

    'sitekey' => 'YOUR SITE KEY HERE',
    'secret' => 'YOUR SITE SECRET HERE',
],
```

You can also add additional attributes using the `attribute` key. See `config/captcha.php` to see details on what attributes you need to add to your `config.php` file.

---

## env.php File

After install, an `env.php` file is generated. This file is important to guard and protect. Any additions to this file will be noted in the `CHANGELOG` file. While the base Laravel install uses this, most of the settings are placed into the `config.php`, although, you can still place any env variables in this file, the same as a standard Laravel install. This is the same as the Laravel `.env` file, but the extension changed and a guard placed to accomodate shared hosts.