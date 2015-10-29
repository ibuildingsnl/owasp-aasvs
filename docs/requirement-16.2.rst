16.2 Safe from path traversal
=============================

Verify that untrusted file data submitted to the application is not used directly with file I/O commands, particularly to protect against path traversal, local file include, file mime type, and OS command injection vulnerabilities.

Levels: 1, 2, 3

General
-------

    | A Path Traversal attack aims to access files and directories that
    are stored outside the web root folder. By browsing the application,
    the attacker looks for absolute links to files stored on the web
    server. By manipulating variables that reference files with
    "dot-dot-slash (../)" sequences and its variations, it may be
    possible to access arbitrary files and directories stored on file
    system, including application source code, configuration and
    critical system files, limited by system operational access control.
    The attacker uses "../" sequences to move up to root directory, thus
    permitting navigation through the file system.
    | This attack can be executed with an external malicious code
    injected on the path, like the Resource Injection attack. To perform
    this attack it's not necessary to use a specific tool; attackers
    typically use a spider/crawler to detect all URLs available.
    | This attack is also known as "dot-dot-slash", "directory
    traversal", "directory climbing" and "backtracking".

-  `OWASP: Path
   Traversal <https://www.owasp.org/index.php/Path_Traversal>`__



PHP
---

Keep it real with `realpath <http://php.net/realpath>`__.
