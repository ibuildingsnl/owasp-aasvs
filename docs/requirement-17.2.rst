17.2 App does not use UDID values as security controls
======================================================

Verify that the mobile app does not store sensitive data onto potentially unencrypted shared resources on the device (e.g. SD card or shared folders).

Levels: 1, 2, 3

General
-------

    | What are Device Identifiers ?
    | Think of them as similar to the VIN number of a vehicle.

    #. UDID (Unique Device Identifier) - Apple Serial Number
    #. IMEI ( International Mobile Equipment Identity) Number - Unique
       GSM number, applicable to
       Android and iOS as long as it is on a GSM phone
       Most Apps collect at least one of the device identifiers
       App owners collect them
       Third party ad-networks that display banner ads inside the apps
       collect them
       Device IDs are collected because they now uniquely identify every
       device and the behavior of its user

Besides this information being Personable Identifiable Information
(which should be handled securely) it can also be spoofed so is not a
reliable identifier.
