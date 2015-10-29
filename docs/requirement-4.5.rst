4.5 Disabled directory browsing
===============================

Verify that directory browsing is disabled unless deliberately desired. Additionally, applications should not allow discovery or disclosure of file or directory metadata, such as Thumbs.db, .DS_Store, .git or .svn folders.

Levels: 1, 2, 3

Apache 2
--------

| See: `Apache wiki:
DirectoryListings <http://wiki.apache.org/httpd/DirectoryListings>`__
and
| `documentation for
mod\_autoindex <http://httpd.apache.org/docs/trunk/mod/mod_autoindex.html>`__.
| Note that the application may have a .htaccess file instructing the
webserver to turn on or of 'Indexes'.


General
-------

This is typically a webserver feature concern (Apache, IIS, Nginx, etc.)
that may be on by default and should be turned off.
