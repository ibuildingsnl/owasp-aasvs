9.1 Sensitive data does not get cached
======================================

Verify that all forms containing sensitive information have disabled client side caching, including autocomplete features.

Levels: 1, 2, 3

General
-------

Pre-filled forms may be cached by the browser (even when using HTTPS),
check caching headers.

Turning off autocomplete is very debatable and probably pretty LOW risk.

| Look for all places where sensitive information (Personal Identifiable
Information, Credit Card info, secrets / tokens) is entered and make
sure that autocomplete is explicitly disabled.
| If not, then step back and think about the risk of autocomplete by
asking the following questions:

-  How likely is it that this application will be or is being used in a
   shared environment (like a internet cafe)? If very likely then the
   risk might be MEDIUM.
-  How likely is it very old browsers (like IE 6/7 or Safari 4/5) will
   be using this application? If very likely then the risk might be
   MEDIUM. Otherwise the risk will probably be LOW.

But be careful, when chained with XSS this vulnerability can make it
possible for an attacker to steal sensitive information without the user
actively entering it.
