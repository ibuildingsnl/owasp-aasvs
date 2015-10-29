17.4 App does not use SQLite for sensitive data
===============================================

Verify that secret keys, API tokens, or passwords are dynamically generated in mobile applications.

Levels: 2, 3

General
-------

    Storing sensitive information (i.e. PII, Passwords etc) local to the
    phone or device. Sensitive Data Could Include Username / Passwords
    Device IDs PII , SSN, Health Information Application Configuration
    Credit card numbers Why not? • Phones can be lost or stolen •
    Trivial to recover data if device is: • "jailbroken" • Rooted or •
    Not password protected • In other cases partial or full recovery of
    data may be still possible if there is physical access to the device
    Types of files where sensitive data may be present on Android apps
    Database files - SQL Lite files, \*.db files SQL Lite Browser or
    Command line SQL Lite can be used to view them Regular ASCII files,
    log files and Binary Files Text Editors and Hex Editors can be used
    to view them

-  `OWASP: Security and Privacy issues in iOS and Android Apps: 2.
   Insecure data
   storage <https://www.owasp.org/images/5/5e/Mobile_Security_-_Android_and_iOS_-_OWASP_NY_-_Final.pdf>`__

