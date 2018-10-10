# pnck

a streamable wrapper around [optipng-js](https://npmjs.com/package/optipng-js). you can use all `optipng` command line options in the object passed to `pnck(options)`.

## usage

``` javascript

var fs = require("fs");
var pnck = require("pnck");

fs.createReadStream("./in.png").pipe(pnck()).pipe(fs.createWriteStream("./out.png"));

```
