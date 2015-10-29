3.3 Session times out after inactivity
======================================

Verify that sessions timeout after a specified period of inactivity.

Levels: 1, 2, 3

Drupal 7
--------

| Default session controls do not pass this requirement.
| See `Drupal.org: Session Expire
project <http://drupal.org/project/session_expire>`__.


General
-------

    | All sessions should implement an idle or inactivity timeout. This
    timeout defines the amount of time a session will remain active in
    case there is no activity in the session, closing and invalidating
    the session upon the defined idle period since the last HTTP request
    received by the web application for a given session ID.
    | The idle timeout limits the chances an attacker has to guess and
    use a valid session ID from another user. However, if the attacker
    is able to hijack a given session, the idle timeout does not limit
    the attacker's actions, as he can generate activity on the session
    periodically to keep the session active for longer periods of time.
    | Session timeout management and expiration must be enforced
    server-side. If the client is used to enforce the session timeout,
    for example using the session token or other client parameters to
    track time references (e.g. number of minutes since login time), an
    attacker could manipulate these to extend the session duration.

-  `OWASP Session Management Cheat Sheet: Idle
   Timeout <https://www.owasp.org/index.php/Session_Management_Cheat_Sheet#Idle_Timeout>`__



PHP
---

| Default session controls do not pass this requirement.
| See `StackOverflow: How do I expire a PHP session after 30
minutes? <http://stackoverflow.com/a/1270960/4512>`__.


Symfony 2
---------

Default session controls do not pass this requirement.
