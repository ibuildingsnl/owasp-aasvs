4.1 Authorisation of functions and services
===========================================

Verify that the principle of least privilege exists - users should only be able to access functions, data files, URLs, controllers, services, and other resources, for which they possess specific authorization. This implies protection against spoofing and elevation of privilege.

Levels: 1, 2, 3

General
-------

This terminology seems to come from IBM Cognos:

    | Examples of the secured functions are Administration and Report
    Studio. Examples of the secured features are User Defined SQL and
    Bursting
    | IBM® Cognos® 8 Administration and Security Guide 8.4.0: Secured
    Functions and Features

| A 'function' could be described as a separate piece of functionality,
for instance for Google Apps this would be 'Google Calendar' or 'Google
Mail'.
| A 'feature' could be described as an action that can be taken, for
instance "Add an event from an e-mail to my calendar".
| Both are slices of functionality to which rights have been applied.

Take the example of a news site with 3 roles:

#. (Anonymous) Reader
#. Editor
#. Editor-in-chief

And a system with 3 'functions':

-  News front-end, (all roles)
   \*\* feature: 'Read news', (all roles)
-  News administration, (editor and editor-in-chief)
   \*\* feature: 'Add news', (editor and editor-in-chief)
   \*\* feature: 'Publish news' (editor-in-chief)

To pass this requirement you should verify:

-  That a Reader may not access the News administration and may not add
   or publish news.
-  That an Editor may access all functions and may read news, add news,
   but not publish news.
-  That an Editor-in-chief may exercise all aforementioned functions and
   features.

While this is doable for such a simple example, this matrix can quickly
become very large. Remember though that security testing does not
require you to test access that should succeed, but instead it requires
that you focus on what should NOT happen.

Should you need to reduce the amount of time you can spend verifying
this you can do one of the following:

#. Use the source code to extrapolate based on security controls. For
   example: Both Add News and Publish News are Controller actions
   protected by the Symfony2 @Secure annotation from anonymous access.
   After testing Add News as an Anonymous Reader, it can be said with
   reasonable certainty that Publish News gives the same results.
#. Threat Modelling (`OWASP: Threat Risk
   Modeling <https://www.owasp.org/index.php/Threat_Risk_Modeling>`__)
   may help reduce the time required by specifying that an Editor
   Publishing news, may be less of a concern than a Reader adding and/or
   publishing news.

Note though that doing either will mean that this requirement is not
passed, but it can be used to reduce the associated risk of not meeting
this requirement.
