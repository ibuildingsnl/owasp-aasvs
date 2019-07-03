# OWASP Annotated Application Security Verification Standard

## Development

Before you start developing, make sure you have installed all of the following:

- [Python 3](https://www.python.org/)
- [Sphinx](http://www.sphinx-doc.org/en/master/) (install with: `pip install sphinx`)
- [Sphinx Read the Docs Theme](https://github.com/readthedocs/sphinx_rtd_theme) (install with `pip install sphinx_rtd_theme`)
- [NPM](https://github.com/readthedocs/sphinx_rtd_theme)

Also make sure that you have installed all of the JS (or TS) dependencies with `npm install`. Then you can build the docs with `npm run build_dev`. Afterwards you can view the generated docs with `[your browser] docs/build/html/index.html`.

## Deployment

After a push (or merge) on the master branch a webhook will inform ReadTheDocs that a new version is available. RTD will then start a new build and deploy it when it's done.
