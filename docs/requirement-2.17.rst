2.17 No clear text passwords
============================

Verify that the forgotten password function and other recovery paths do not reveal the current password and that the new password is not sent in clear text to the user.

Levels: 1, 2, 3

Drupal 7
--------

Default Drupal authentication, if used, meets this requirement.


General
-------

| Try the 'password forgotten' functionality if it exists and see if you
get sent your own password back in cleartext.
| Note that one-time-passwords or tokens are okay, as long as they
expire upon use.
