2.23 Password recovery can not be used to lock out users
========================================================

Verify that account lockout is divided into soft and hard lock status, and these are not mutually exclusive. If an account is temporarily soft locked out due to a brute force attack, this should not reset the hard lock status.

Levels: 2, 3

