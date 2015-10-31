(function() {
	'use strict';

	angular
		.module('app.media')
		.controller('EpisodeController', EpisodeController);

	EpisodeController.$inject = [ '$rootScope', '$scope', 'UIService'];

	function EpisodeController( $rootScope, $scope, UIService ){

		$rootScope.subscriptionFilterStatus = false;
		$rootScope.activeSubscription = 0;

		$scope.setEpisodeStyle = function(newStyle){
			$scope.episodeStyle = newStyle;
		};

		$scope.toggleBrowseBySubscription = function(){
			UIService.toggleBrowseBySubscription();
		};

		$scope.episodeStyle = 'grid';
	}
})();
