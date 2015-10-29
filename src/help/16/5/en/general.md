> parameters obtained from untrusted sources

What is an untrusted source from the applications point of view? Is the User Agent untrusted? Even in an authenticated back-end with proper CSRF protection? Is an external webservice untrusted? Is an internal webservice untrusted? Is the database untrusted?
Trust is not binary but what is important is that often these types of decisions are made without regard for security at all. More than giving a PASS or a FAIL it is important to specify which services there are and their implicit trust level.

So if, in order to get the current temperature of the users location based on IP the application gives the IP to a service, waits for a reply (blocking) and then outputs whatever it get's back into the header of every page you may surmise that this application has a deep trust relation with this service and question that trust relation.

When in doubt FAIL, so the customer will look at this.

> canonicalized

Canonicalization or C14n is important to guarantee correctness. Say an application allows for ?page=PAYMENT and ?page=payment in it's routing but only checks for 'payment' in adding the CSRF token, you may disable CSRF.

Think of:
* path (/var/www/product/../../../etc/passwd may pass a simple verification of 'starts with /var/www')
* XML / HTML
* URLs
* Unicode
