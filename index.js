#!/usr/bin/env node

var stream = require("stream");
var optipng = require("optipng-js");

module.exports = function(opts){
	var mem = Buffer.allocUnsafe(0);
	return new stream.Transform({
		transform(chunk, encoding, fn) {
			// collect chunks
			mem = Buffer.concat([mem, chunk]);
			fn();
		},
		flush(fn) {
			if (mem.length === 0) return this.push(mem), fn();
			this.push(optipng(mem, opts, console.error).data);
			fn();
		}
	});
};
