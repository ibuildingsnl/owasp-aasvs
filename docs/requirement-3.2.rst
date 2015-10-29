3.2 Sessions are invalidated on user log out
============================================

Verify that sessions are invalidated when the user logs out.

Levels: 1, 2, 3

Drupal 7
--------

Drupal does this by default for /user/logout, but be wary of custom
frontend logins!


General
-------

If a session can still be used after logging out then the lifetime of
the session is increased and that gives third parties that may have
intercepted the session token more (or perhaps infinite, if no absolute
session expiry happens) time to impersonate a user.

One quick way to test this is to log in, get the session token from the
cookie, log out, then manually add the session cookie with the session
token and see if you are still logged in.


PHP
---

Look for `session\_destroy <http://www.php.net/session_destroy>`__ in
the logout functionality.


Symfony 2
---------

This is a setting in security.yml:

.. code:: yml

    invalidate_session: true

used by the default session controls.
