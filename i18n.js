/**
 * Internationalization support for the D3 package
 *
 * @package D3
 *
 * @author Nicolai Agersbæk <nicolai.agersbaek@gmail.com>
 * @version 0.1.0
 */

var d3.i18n = (function (d3, $) {
	if (d3 === {} || $ == {}) {
		// D3 or jQuery not loaded
		console.log("D3.i18n: Dependency disabled! [D3, jQuery]");
		return;
	}

	var d3.i18n = {};
	var self = d3.i18n;

	

	return self;
}(d3 || {}, jQuery || {}))