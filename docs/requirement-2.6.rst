2.6 Fails securely
==================

Verify all authentication controls fail securely to ensure attackers cannot log in.

Levels: 1, 2, 3

Drupal 7
--------

The default Drupal authentication controls, if used, pass this
requirement.


General
-------

Check the error handling on authentication controls (check for badly
implemented authentication, most frameworks will solve this for a
developer). Is it possible to trigger an error that disables
authentication entirely? If you can, take the database offline and see
if the application will allow you to log in. Or see if there is a
dependency on some external service provider.


Symfony 2
---------

The default Symfony2 authentication controls, if used, pass this
requirement.
