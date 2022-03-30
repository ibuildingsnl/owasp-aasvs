9.3 Sensitive data does not get sent in the URL
===============================================

Verify that all sensitive data is sent to the server in the HTTP message body or headers (i.e., URL parameters are never used to send sensitive data).

Levels: 1, 2, 3

General
-------

Sending sensitive data (like Personable Identifiable Information, Credit
Card numbers, passwords / tokens) in the URL will lead to them being
available in the browser history, analytics/tracking systems and in the
logs by the application server and any potential intermediaries (proxies).
