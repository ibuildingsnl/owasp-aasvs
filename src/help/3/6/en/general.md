Session IDs in URLs lead to all kinds of bad behaviour (logging by servers, but also accidental sharing by users either manually "here look at this!" or through their browser history).

You can test whether the application allows session ids in the URL by taking a session identifier from one a cookie in one browser session and adding it to the URL query string in another browser session.

Session Ids in error messages and logs may be undesirable depending on who has access to logs.
