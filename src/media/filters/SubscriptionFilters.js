(function() {
	'use strict';

	angular
		.module('app.media')
		.filter('orderByTitle', orderByTitle);

	function orderByTitle(){

		return function(subscription) {
			return _.sortBy(subscription, 'title');
		};


	}
})();
