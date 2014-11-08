/**
 * Character class
 *
 * @package D3
 *
 * @author Nicolai Agersbæk <nicolai.agersbaek@gmail.com>
 * @version 0.1.0
 */

if (d3) {
	function d3.character() {
		var self = this;

		self.import = function() {}
			try {
				var data = d3.bnet.import(self);
			}
			catch(e) {
				d3.logError(e);
			}
		}
	}
}