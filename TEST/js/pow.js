var myPow = {
	count: function (base, exp) {
		if (exp == 0) {
			return 1;
		} else {
			var result = base;
			for (i = 1; i < exp; i++) {
				result *= base;
			}
			return result;
		}

	}
}

try {
	module.exports = myPow;	
} catch (e) {}