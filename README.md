# GeoDash Diff (geodash-diff)

The `diff` function for [GeoDash](http://geodash.io) that can be used in build or runtime contexts.

## GeoDash

GeoDash is a modern web framework and approach for quickly producing visualizations of geospatial data. The name comes from "geospatial dashboard".

The framework is built to be extremely extensible. You can use GeoDash Server (an implementation), the front-end framework, backend code, or just the Gulp pipeline. Have fun!

See [http://geodash.io](http://geodash.io) for more details.

# Install

Install with [npm](https://npmjs.org/package/geodash-diff)

```
npm install geodash-diff --save-dev
```

# Usage

The `diff` function can be used independently or as `geodash.util.diff` in [GeoDashJS](https://github.com/geodashio/geodash.js).

The `diff` function is used frequently in conjunction with the [expand](https://www.npmjs.com/package/geodash-expand), and [extract](https://www.npmjs.com/package/geodash-extract), and [flatten](https://www.npmjs.com/package/geodash-flatten) functions.  `diff` compares to JSON serializable objects at certain paths to see if they are different.  This is useful for detecting state change.  For example:

**Independently**

```
var diff = require("geodash-diff")
var a = {'x': {'y': 'foo' }, 'a': ['b', 'c', 'd']}
var b = {'x': {'y': 'bar' }, 'a': ['b', 'c', 'd']}
// diff(['x'], a, b).length == 1
// diff(['a'], a, b).length == 0
```

**In GeoDashJS**

```
if(geodash.util.diff(["view.featurelayers", "view.baselayer"], $scope.state, args.state).length > 0)
{
...
}
```

# Building

## docs

To build the custom docs template used in the website, you'll need to install a custom version of docstrap.git on top of the default version.  The below command will install the custom version.

```
npm install git+https://git@github.com/geodashio/docstrap.git\#geodash # Install custom docs template with font awesome
```

You can just build docs with:
```
npm run build:docs # or gulp docs since run the same thing
```

# Tests

Only [jshint](http://jshint.com/about/) is supported right now.  Run tests with the following command.

```
npm run tests
```

# Contributing

Happy to accept pull requests!

# License

See `LICENSE` file.
