# Multi NPM Project Demo

This is a demo project to test the developer experience of having multiple NPM projects 
in a single repository.

The repository contains the following sub-projects with cross-dependencies:

```
- math
- geom: math
- app: geom
```

[Lerna] is used to handle linking of the dependencies between sub-projects, and uses 
symlinks for cross-dependencies so that changes don't require having to manually run 
`npm install [dep]` whenever a cross-dependency changes.

## Running

* Clone the project
* Install Lerna: `npm install -g lerna@prerelease`
* Run `npm install`
* Run `lerna bootstrap` to install NPM dependencies and links any cross-dependencies
* Run `npm run watch` to watch for source file changes and to rebuild the project
* Run `npm run serve` to start the HTTP server for the `app` project
* Open `localhost:8080` in your browser

[Lerna]: https://lernajs.io/
