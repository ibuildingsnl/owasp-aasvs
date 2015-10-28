Basically (for a normal web app) this means checking:

* There is some sort of default rule what specifies that unless explicitly whitelisted.
* The whitelisting rules are not overly broad.

The nice thing about the use of 'all' here is that you only need to find a single thing that probably shouldn't be public to FAIL this rule.

Unfortunately though, this is something that relies heavily on the auditors judgement:

* pages and resources (is a database a resource?)
* authentication (is appending debug=true to a URL authentication? or obfuscated URLs that may or may not be brute force guessable?)
* intended to be public (99.999% of the intentions for the application available pages/resources are probably not specified anywhere)

Feel free to contact the customer / Team Lead if uncertain about any of these terms in the context of the application.
