3.1 Uses default session management
===================================

Verify that there is no custom session manager, or that the custom session manager is resistant against all common session management attacks.

Levels: 1, 2, 3

General
-------

    Implementations built from scratch are often weak and breakable.
    Developers are strongly discouraged from implementing their own
    Session Management. Leading web frameworks have undergone rounds of
    testing and fixing that leave them using secure methods of token
    generation. There is no value in re-writing such basic building
    blocks.

-  `OWASP: Session Management: Use Only the Framework's Session
   Manager <https://www.owasp.org/index.php/Session_Management#Use_Only_the_Framework.27s_Session_Manager>`__



PHP
---

| First grep the codebase for usage of
'`session\_set\_save\_handler <http://www.php.net/manual/en/function.session-set-save-handler.php>`__\ '.
| Though (rarely) it's also possible that a developer could have
implemented his own session mechanism without even using the default
session functions. For this you'll have to look at each part of the
application and how it stores and retrieves state across page requests.
