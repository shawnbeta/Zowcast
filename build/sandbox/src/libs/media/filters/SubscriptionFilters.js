app.media.filter('orderByTitle', ['_', function(_) {
	return function(models) {
		return _.sortBy(models, 'title');
	};
}]); 