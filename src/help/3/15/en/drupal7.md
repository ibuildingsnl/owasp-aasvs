HTTP Strict Transport Security is not added by default, but may be added using for example: [Drupal.org: HTTP Strict Transport Security project](https://drupal.org/project/hsts).
If Drupal is called from a HTTPS URL then it will set session.cookie_secure to be true, thereby passing this requirement.
