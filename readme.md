# pnck

a streamable wrapper around optipng. it's inspired by [optipng](https://www.npmjs.com/package/optipng), but without the weight of hundreds of dependencies and abandonnment security issues.

make sure you have `optipng` installed and `optipng` in your `$PATH`. otherwise the jpeg stream will be just passed through without modification.

you can use all `optipng` command line options in the object passed to `pnck(options)`.

## usage

``` javascript

var fs = require("fs");
var pnck = require("pnck");

fs.createReadStream("./in.png").pipe(pnck()).pipe(fs.createWriteStream("./out.png"));

```
