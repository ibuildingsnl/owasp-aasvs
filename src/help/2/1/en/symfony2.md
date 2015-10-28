The Controller verification depends entirely on the firewall configuration in ```app/config/security.yml```. 
This should look something like:

```yml
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
```
So by default all URLs requested should be authenticated, except those explicitly whitelisted. 
Check that the whilelisted regular expressions are not.

**Watch out**
Beware for the anonymous key though: if the anonymous key is set, all URLs are accessible 
through the firewall for anonymous users, they are then guarded by the access_control settings section.
Therefor, if the anonymous key is used, all routes that the firewall guards MUST have roles defined 
that are allowed to access that URL. More on this can be found in the Symfony Documentation regarding the firewall.
Don't forget that the application also has a CLI interface. Usually this should only be available to 
(pre-authenticated via SSH) administrators, if so, mention this like so:

> The TOV also supports several administrative command line commands, for security these rely on the administrator to authenticate via SSH (out of scope of this verification).