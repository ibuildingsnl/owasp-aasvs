1.1 All components are identified
=================================

Verify that all application components are identified and are known to be needed.

Levels: 1, 2, 3

General
-------

The purpose of this requirement is twofold:

1. Discover third party components that may contain (public)
   vulnerabilities.
2. Discover 'dead code / dependencies' that increase attack surface
   without any benefit in functionality.

Developers may be tempted to keep dead code / dependencies around 'in
case I ever need it', however this is not an argument for a shippable
product, such dead code / dependencies is better left on a source
control system.
