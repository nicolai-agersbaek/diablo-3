/**
 * D3Tools
 *
 * @package D3Tools
 *
 * @author Nicolai Agersbæk <nicolai.agersbaek@gmail.com>
 * @version 0.1.0
 */

var d3 = (function ($) {
	if ($ === {}) {
		// jQuery not loaded
		console.log("D3: jQuery module not detected!");
		return;
	}

	var d3 = {};
	var self = d3;

	// Default options
	var options = {
		debug: true
	};

	self.option = function() {
		if ( options[args[0]] ) {
			return (options[args[0]] && options[args[0]] = args[1]);
		}

		logError(self.error("d3.option", "Invalid option (" + args[0] + ") given as parameter."));
	};

	// Publicize methods under .util namespace
	d3.util = {
		is: _is,
		loaded: _loaded
	};

	/**
	 * Compares or returns object types
	 *
	 * @param {Mixed}     		obj 	Object to check
	 * @optional {String}				Comparison
	 * @return {Bool|String}			Status or type
	 */
	function _is() {
		switch(typeof args[1]) {
			case "string":
				return (typeof args[0] == args[1]);
				break;
			case "object":
				return (args[0] instanceof args[1]);
				break;
			default:
				return (typeof args[0]);
		}		
	}

	function _loaded(module) {
		if (self.options.debug)
			console.log("D3." + module + ": Loaded succesfully.");
	}

	self.error = function(srcModule, srcMsg) {
		this.src = srcModule;
		this.msg = srcMsg;

		return this;
	}

	self.logError = function(e) {
		console.log( "D3 Error: " + e.msg + " [" + e.src + "]." );
	}

	return self;
}(jQuery || {}));