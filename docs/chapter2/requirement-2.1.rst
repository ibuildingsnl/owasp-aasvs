2.1 Principle of complete mediation
===================================

Verify all pages and resources by default require authentication except those specifically intended to be public (Principle of complete mediation).

Required from level 1.

General Help
------------

Basically (for a normal web app) this means checking:

* There is some sort of default rule what specifies that unless explicitly whitelisted.
* The whitelisting rules are not overly broad.

The nice thing about the use of 'all' here is that you only need to find a single thing that probably shouldn't be public to FAIL this rule.

Unfortunately though, this is something that relies heavily on the auditors judgement:

* pages and resources (is a database a resource?)
* authentication (is appending debug=true to a URL authentication? or obfuscated URLs that may or may not be brute force guessable?)
* intended to be public (99.999% of the intentions for the application available pages/resources are probably not specified anywhere)

Feel free to contact the customer / Team Lead if uncertain about any of these terms in the context of the application.

Drupal 7
--------
This verification is highly likely to fail, though it may have a LOW risk.
Tests these things:

Publicly accessible files
-------------------------
By default Drupal puts everything in the webroot, so a lot of static assets are available. Among these are all the module and library files, look through all of these and look for .html or .php files that could be used to do XSS, Remote File Inclusion, Remote Code Execution, etc.

'access callback' => TRUE
-------------------------
Drupal routing relies on hook_menu. Check instances of this hook, especially in custom modules, for 'access callback' => TRUE, meaning that this functionality is public.


PHP
---
Check the following:

* Is there some prescribed set of rewriterules for the webserver (Apache/Nginx) or a .htaccess file?
* What files can be found in the webroot? Should all those files be publicly accessible?
* How is routing configured? If MVC is used, were you to add a new action, could you immediately call it via a URL?


Symfony 2
---------
The Controller verification depends entirely on the firewall configuration in app/config/security.yml.
This should look something like:


  firewall:
      public-stuff1:
          pattern: regex
          security: false

      public-stuff:
          pattern: regex
          security: false

      ....

      last-rule-should-be-private:
          pattern: ^/
          provider: ...
          ...

So by default all URLs requested should be authenticated, except those explicitly whitelisted.
Check that the whilelisted regular expressions are not.

**Watch out**
Beware for the anonymous key though: if the anonymous key is set, all URLs are accessible
through the firewall for anonymous users, they are then guarded by the access_control settings section.
Therefor, if the anonymous key is used, all routes that the firewall guards MUST have roles defined
that are allowed to access that URL. More on this can be found in the Symfony Documentation regarding the firewall.
Don't forget that the application also has a CLI interface. Usually this should only be available to
(pre-authenticated via SSH) administrators, if so, mention this like so:

  The TOV also supports several administrative command line commands, for security these rely on the administrator to authenticate via SSH (out of scope of this verification).
