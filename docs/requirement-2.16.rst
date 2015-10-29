2.16 Strongly encrypted transport
=================================

Verify that credentials are transported using a suitable encrypted link and that all pages/functions that require a user to enter credentials are done so using an encrypted link.

Levels: 1, 2, 3

Drupal 7
--------

Check /user. But don't forget that the installation may host other
credentials / PII information.


General
-------

To verify this you will most likely need a deployed application, the
easiest way to verify this is to navigate with an up to date browser to
the login page. The login page and all subsequent authenticated pages
must be exclusively accessed over TLS. Also try to force the login page
to load over HTTP, this should fail. `HTTP Strict Transport
Security <http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security>`__
should be used. Use the `SSL Server Test by
Qualys <SSL%20Server%20Test%20by%20Qualys>`__ to verify that the TLS has
been correctly implemented. Slightly less egregious than sending
credentials over plain HTTP, but still a risk to the user, check that
Personal Identifiable Information is not sent over plain HTTP (where
anyone eaves dropping may pick it up).
