5.1 Buffer overflows
====================

Verify that the runtime environment is not susceptible to buffer overflows, or that security controls prevent buffer overflows.

Levels: 1, 2, 3

General
-------

    A buffer overflow condition exists when a program attempts to put
    more data in a buffer than it can hold or when a program attempts to
    put data in a memory area past a buffer. In this case, a buffer is a
    sequential section of memory allocated to contain anything from a
    character string to an array of integers. Writing outside the bounds
    of a block of allocated memory can corrupt data, crash the program,
    or cause the execution of malicious code.

-  `OWASP: Buffer
   Overflow <https://www.owasp.org/index.php/Buffer_Overflow>`__



PHP
---

Applications written in PHP are not vulnerable to Buffer Overflows.
