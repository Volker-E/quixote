// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var assert = require("./util/assert.js");
var QElement = require("./q_element.js");

describe("QElement", function() {

	it("converts to DOM element", function() {
		var q = new QElement(document.body);
		var dom = q.toDomElement();

		assert.equal(dom, document.body);
	});

	it("compares to another QElement", function() {
		var head = new QElement(document.querySelector("head"));    // WORKAROUND IE8: no document.head
		var body1 = new QElement(document.body);
		var body2 = new QElement(document.body);

		assert.objEqual(body1, body2, "equality");
		assert.objNotEqual(head, body1, "inequality");
	});

	it("displays nicely as a string", function() {
		var element = document.createElement("div");
		element.setAttribute("baz", "quux");
		element.innerHTML = "foo<p>bar</p>";
		var q = new QElement(element);

		assert.match(q.toString().toLowerCase(), /<div baz="quux">foo\s*<p>bar<\/p><\/div>/);
	});

});