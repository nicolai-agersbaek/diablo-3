/**
 * Stat class
 *
 * @package D3
 *
 * @author Nicolai Agersbæk <nicolai.agersbaek@gmail.com>
 * @version 0.1.0
 */

var d3.item.stat = function(data) {
	var self = this;

	self.typeString = data.typeString;

	// Set stat type ID from database, providing itemType (from parent) and typeString
	self.typeId = d3.db.stat.getId(data.itemType, data.typeString);
}

/*
var d3.item.stat = (function (d3.item) {
	if (d3.item === {}) {
		// D3.js not loaded
		console.log("D3.Item.Stat: D3.Item module not detected!");
		return;
	}

	var d3.item.stat = {}

	var _is = d3.util.is;

	this.create = function(data) {
		var self = this;

		// Item data
		for (var d in data) {
			self[d] = data[d];
		}

		self.enchant = function(statId, val) {
			if _is(val, "object")
				self.stats[statId].range = val;

			if _is(val, "number")
				self.stats[statId].value = val;
		}

		return self;
	}

	return self;
}(d3.item || {}))