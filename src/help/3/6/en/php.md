This relies on the following php.ini setting:

```ini
; This option forces PHP to fetch and use a cookie for storing and maintaining
; the session id. We encourage this operation as it's very helpful in combating
; session hijacking when not specifying and managing your own session id. It is
; not the end all be all of session hijacking defence, but it's a good start.
; http://php.net/session.use-only-cookies
session.use_only_cookies = 1
```

By default this is set to 1, however it is advisable to not rely on the environment for this but set it manually using [ini_set](http://php.net/manual/en/function.ini-set.php).
