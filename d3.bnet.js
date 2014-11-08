/**
 * Battle.net JavaScript utility class
 *
 * @package D3
 *
 * @author Nicolai Agersbæk <nicolai.agersbaek@gmail.com>
 * @version 0.1.0
 */

var d3.bnet = (function (d3, $) {
	if (d3 === {} || $ === {}) {
		console.log("D3.Bnet: D3 or jQuery module not detected!");
	}

	var d3.bnet = {};
	var self = d3.bnet;

	var	_is = d3.util.is,
		_error = d3.util.error,
		_loaded = d3.util.loaded;

	self.import = function(d) {
		var data = {};

		// Check data type
		if _is(d, d3.character) {
			// D3.Character object, get Battle.net details and import
			return import(d.data.bnet);
		} else if _is(data, "object") {
			// Bnet import data object
			return import(d);
		} else {
			return d3.error({
				src: "d3.bnet.import",
				data: d
			});
		}
	}

	function import(data) {
		var required = {

		};
	}

	_loaded("bnet");

	return d3.bnet;
}(d3 || {}, jQuery || {}));