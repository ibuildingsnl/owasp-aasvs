16.6 Resource sharing
=====================

Verify that files obtained from untrusted sources are stored outside the webroot, with limited permissions, preferably with strong validation.

Levels: 2, 3

General
-------

    | Are IFRAME elements used to load in content from external parties
    (for instance from advertisers)? Can they be subverted to load in a
    URL from an attacker?
    | Validate URLs passed to XMLHttpRequest.open, current browsers
    allow these URLs to be cross domain and this behavior can lead to
    code injection by a remote attacker. Pay extra attention to absolute
    URLs.

-  `OWASP: HTML5 Security Cheat Sheet: Cross Origin Resource
   Sharing <https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Cross_Origin_Resource_Sharing>`__

