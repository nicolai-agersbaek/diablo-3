/**
 * Item class
 *
 * @package D3
 *
 * @author Nicolai Agersbæk <nicolai.agersbaek@gmail.com>
 * @version 0.1.0
 */

var d3.item = (function (d3) {
	if (d3 === {}) {
		// D3.js not loaded
		console.log("D3.Item: D3 module not detected!");
		return;
	}

	var d3.item = {}

	var _is = d3.util.is;

	this.create = function(data) {
		var self = this;

		// Item data
		for (var d in data) {
			self[d] = data[d];
		}

		self.enchant = function(statSlot) {
			var p = [];

			if (self.statLocked) {

			} else {
				var p = [];
				for (var s in self.stats) {
					p = p.concat
				}
			}
			self.stats[statSlot].e
		}

		return self;
	}

	return self;
}(d3 || {}))