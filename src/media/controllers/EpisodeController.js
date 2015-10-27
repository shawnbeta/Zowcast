(function() {
	'use strict';

	angular
		.module('app.media')
		.controller('EpisodeController', EpisodeController);

	EpisodeController.$inject = ['$scope', 'UIService'];

	function EpisodeController( $scope, UIService ){

		$scope.subscriptionFilterStatus = false;

		$scope.setEpisodeStyle = function(newStyle){
			$scope.episodeStyle = newStyle;
		};

		$scope.toggleBrowseBySubscription = function(){
			UIService.toggleBrowseBySubscription();
		};

		$scope.episodeStyle = 'grid';
	}
})();
