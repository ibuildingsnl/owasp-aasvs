3.6 Does not disclose session id
================================

Verify that the session id is never disclosed in URLs, error messages, or logs. This includes verifying that the application does not support URL rewriting of session cookies.

Levels: 1, 2, 3

Drupal 7
--------

Drupals bootstrapping sets the session.user\_only\_cookies value to 1,
thereby passing this requirement.


General
-------

Session IDs in URLs lead to all kinds of bad behaviour (logging by
servers, but also accidental sharing by users either manually "here look
at this!" or through their browser history).

You can test whether the application allows session ids in the URL by
taking a session identifier from one a cookie in one browser session and
adding it to the URL query string in another browser session.

Session Ids in error messages and logs may be undesirable depending on
who has access to logs.


PHP
---

This relies on the following php.ini setting:

.. code:: ini

    ; This option forces PHP to fetch and use a cookie for storing and maintaining
    ; the session id. We encourage this operation as it's very helpful in combating
    ; session hijacking when not specifying and managing your own session id. It is
    ; not the end all be all of session hijacking defence, but it's a good start.
    ; http://php.net/session.use-only-cookies
    session.use_only_cookies = 1

By default this is set to 1, however it is advisable to not rely on the
environment for this but set it manually using
`ini\_set <http://php.net/manual/en/function.ini-set.php>`__.


Symfony 2
---------

By default this configuration value is not set, but can be set with:

.. code:: yml

    framework:
      session:
        use_only_cookies: 1

