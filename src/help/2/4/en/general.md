If the client uses a back-end API (say over an XMLHttpRequest) then the actual API has to check that the client has previously authenticated (by expecting some form of HTTP or other authentication).
Note that if the application fails this validation it will almost certainly also fail V2.1.
