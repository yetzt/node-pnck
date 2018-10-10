#!/usr/bin/env node

var which = require("which");
var dcp = require("duplex-child-process");

// find optipng
var optipng = which.sync("optipng", { nothrow: true });

module.exports = function(opts){

	// just pass through if cjpeg is not installed
	if (!optipng) return console.error("[pnck] no optipng binary found, just passing through"), (require("stream").PassThrough());
	
	// ensure opts
	if (!opts || typeof opts !== "object") opts = {};

	// hand over to binary
	return dcp.spawn(optipng, opts);

};
