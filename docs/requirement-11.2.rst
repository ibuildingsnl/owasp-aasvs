11.2 Only defined HTTP Request methods are accepted
===================================================

Verify that every HTTP response contains a content type header specifying a safe character set (e.g., UTF-8, ISO 8859-1).

Levels: 1, 2, 3

General
-------

    Arshan Dabirsiaghi (see links) discovered that many web application
    frameworks allowed well chosen and/or arbitrary HTTP methods to
    bypass an environment level access control check: Many frameworks
    and languages treat "HEAD" as a "GET" request, albeit one without
    any body in the response. If a security constraint was set on "GET"
    requests such that only "authenticatedUsers" could access GET
    requests for a particular servlet or resource, it would be bypassed
    for the "HEAD" version. This allowed unauthorized blind submission
    of any privileged GET request Some frameworks allowed arbitrary HTTP
    methods such as "JEFF" or "CATS" to be used without limitation.
    These were treated as if a "GET" method was issued, and again were
    found not to be subject to method role based access control checks
    on a number of languages and frameworks, again allowing unauthorized
    blind submission of privileged GET requests. In many cases, code
    which explicitly checked for a "GET" or "POST" method would be safe.

-  `OWASP: Test HTTP Methods (OTG-CONFIG-006): Arbitrary HTTP
   Methods <https://www.owasp.org/index.php/Testing_for_HTTP_Methods_and_XST_%28OWASP-CM-008%29#Arbitrary_HTTP_Methods>`__

Also note that custom methods may be used in:

-  Denial Of Service attack (bypass reverse proxy cache to overload the
   server with expensive HTTP calls)
-  Cache poisoning / defacement (if HEAD /, which does not return any
   content, is cached as GET /)

To test this use an HTTP testing tool like Curl to send a non-standard
HTTP verb to the system.

Example of a system responding to a non-standard HTTP verb:

::

    curl -v -X OWASP -I www.owasp.org
     
    * About to connect() to www.owasp.org port 80 (#0)
    *   Trying 192.237.166.62...
    * connected
    * Connected to www.owasp.org (192.237.166.62) port 80 (#0)
    > OWASP / HTTP/1.1
    > User-Agent: curl/7.24.0 (x86_64-apple-darwin12.0) libcurl/7.24.0 OpenSSL/0.9.8y zlib/1.2.5
    > Host: www.owasp.org
    > Accept: */*
    >
    < HTTP/1.1 301 Moved Permanently
    < Date: Thu, 05 Dec 2013 12:03:11 GMT
    < Server: Apache
    < Location: https://www.owasp.org/
    < Vary: Accept-Encoding
    < Content-Length: 230
    < Content-Type: text/html; charset=iso-8859-1
    <
    * Connection #0 to host www.owasp.org left intact
    * Closing connection #0

Example of a system responding the the appropriate error code:

::

    curl -v -X OWASP -I google.com
    * About to connect() to google.com port 80 (#0)
    *   Trying 173.194.65.102...
    * connected
    * Connected to google.com (173.194.65.102) port 80 (#0)
    > OWASP / HTTP/1.1
    > User-Agent: curl/7.24.0 (x86_64-apple-darwin12.0) libcurl/7.24.0 OpenSSL/0.9.8y zlib/1.2.5
    > Host: google.com
    > Accept: */*
    >
    < HTTP/1.1 405 Method Not Allowed
    < Content-Type: text/html; charset=UTF-8
    < Content-Length: 960
    < Date: Thu, 05 Dec 2013 12:24:05 GMT
    < Server: GFE/2.0
    < Alternate-Protocol: 80:quic
    <
    * Connection #0 to host google.com left intact
    * Closing connection #0

