// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var assert = require("./util/assert.js");
var quixote = require("./quixote.js");
var Frame = require("./frame.js");

describe("Quixote", function() {

	it.skip("creates frame", function() {
		var frame = quixote.createFrame();
		assert.type(frame, Frame);
	});

});