To verify this you will most likely need a deployed application, the easiest way to verify this is to navigate with an up to date browser to the login page. The login page and all subsequent authenticated pages must be exclusively accessed over TLS.
Also try to force the login page to load over HTTP, this should fail.
[HTTP Strict Transport Security](http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) should be used.
Use the [SSL Server Test by Qualys](SSL Server Test by Qualys) to verify that the TLS has been correctly implemented.
Slightly less egregious than sending credentials over plain HTTP, but still a risk to the user, check that Personal Identifiable Information is not sent over plain HTTP (where anyone eaves dropping may pick it up).
