(function() {
	'use strict';

	angular
		.module('app.media')
		.controller('EpisodeController', EpisodeController);

	EpisodeController.$inject = ['$scope', '$rootScope', 'UIService', 'UtilityService'];

	function EpisodeController( $scope, $rootScope, UIService, UtilityService ){
		$scope.setEpisodeStyle = function(newStyle){
			$scope.episodeStyle = newStyle;
		};

		$rootScope.currentPath = UtilityService.getCurrentPath();

		$scope.toggleBrowseBySubscription = function(){
			UIService.toggleBrowseBySubscription();
		};

		$scope.episodeStyle = 'grid';
	}
})();
