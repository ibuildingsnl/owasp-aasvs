2.18 No username enumeration
============================

Verify that information enumeration is not possible via login, password reset, or forgot account functionality.

Levels: 1, 2, 3

Drupal 7
--------

By default Drupal does not meet this requirement, see also: `Drupal.org
Project: username Enumeration
Prevention <https://drupal.org/project/username_enumeration_prevention>`__.


General
-------

| A system should not disclose whether a username (usually half of the
credentials required to log in) is valid or not. Note that this may
actually cary a business risk, that is that if I disclose that someone
is a member a competitor may use this as an advantage to try to 'steal'
the customer.
| Or it might put the user in an uncomfortable position, if an attacker
can verify that he/she is a member of certain sites.
| A simple test can be to try to authenticate first with a non-existent
account.
| Note that in theory you might also use a timing attack for this.
Non-existent usernames may give an error page faster than usernames that
are known but where the password supplied is wrong, especially with a
hashing mechanism like bcrypt.


Symfony 2
---------

The default authentication controls for Symfony2 meet this requirement.
