If a session can still be used after logging out then the lifetime of the session is increased and that gives third parties that may have intercepted the session token more (or perhaps infinite, if no absolute session expiry happens) time to impersonate a user.

One quick way to test this is to log in, get the session token from the cookie, log out, then manually add the session cookie with the session token and see if you are still logged in.
