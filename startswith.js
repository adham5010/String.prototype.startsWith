/*! http://mths.be/startswith v0.1.0 by @mathias */
if (!String.prototype.startsWith) {
	(function() {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var indexOf = ''.indexOf;
		var toString = {}.toString;
		String.prototype.startsWith = function(search) {
			var string = String(this);
			if (
				this == null ||
				(search && toString.call(search) == '[object RegExp]')
			) {
				throw TypeError();
			}
			var stringLength = string.length;
			var searchString = String(search);
			var searchLength = searchString.length;
			var position = arguments.length > 1 ? arguments[1] : undefined;
			// `ToInteger`
			var pos = position ? Number(position) : 0;
			if (isNaN(pos)) {
				pos = 0;
			}
			var start = Math.min(Math.max(pos, 0), stringLength);
			// Avoid the `indexOf` call if no match is possible
			if (searchLength + start > stringLength) {
				return false;
			}
			return indexOf.call(string, searchString, pos) == start;
		};
	}());
}
