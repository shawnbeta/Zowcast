app.media.controller('EpisodeController', [ '$scope', '$rootScope', '$sce', '$filter',
	'EpisodeService', 'OverlayService', 'UIService', 'UtilityService',
	function($scope, $rootScope, $sce, $filter, EpisodeService, OverlayService, UIService,UtilityService){

		$scope.setEpisodeStyle = function(newStyle){
			$scope.episodeStyle = newStyle;
		};

		$rootScope.currentPath = UtilityService.getCurrentPath();


		$scope.toggleBrowseBySubscription = function(){
			UIService.toggleBrowseBySubscription();
		};

		$scope.episodeStyle = 'grid';

	}]);
