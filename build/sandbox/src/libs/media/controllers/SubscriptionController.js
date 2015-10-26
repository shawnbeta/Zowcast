app.media.controller('SubscriptionController', [ '$scope', '$rootScope', 'SubscriptionService', 'UtilityService',
	function($scope, $rootScope, SubscriptionService, UtilityService){

        $scope.add = function(){
          SubscriptionService.add($scope);
        };

        $rootScope.currentPath = UtilityService.getCurrentPath();

}]);

