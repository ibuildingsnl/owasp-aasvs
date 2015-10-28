Check the error handling on authentication controls (check for badly implemented authentication, most frameworks will solve this for a developer).
Is it possible to trigger an error that disables authentication entirely?
If you can, take the database offline and see if the application will allow you to log in. Or see if there is a dependency on some external service provider.
