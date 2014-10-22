# Open Web Application Security Project (OWASP) Application Security Verification Standard (ASVS)

This repository aims to host the versioned and authoritative source data for the OWASP ASVS project.

You can find the canonical data at [src/asvs.json](src/asvs.json)

## Why JSON?
In order to build on top of this data a strict and normalized format was required (
unlike say storing everything in MarkDown or HTML) as it's much easier to remove strictness then to add it.
There are many data serialization formats, those with broad support include: XML, CSV and YAML.

JSON requires less syntax for the equivalent semantics than XML.
JSON has a formal specification, that implementations actually follow, unlike CSV.
JSON has better support and is wider known than YAML.

# Versioning
Using Semver2.

# Packaging
Feel free to send a PR with support for alternate package formats!