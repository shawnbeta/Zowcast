app.media.controller('SubscriptionController', [
    '$scope', '$rootScope', '$routeParams', '$location', 'PersistenceService',
    'SubscriptionService', 'UtilityService',
	function($scope, $rootScope, $routeParams, $location, PersistenceService,
	    SubscriptionService, UtilityService){

        $scope.add = function(){
          SubscriptionService.add($scope);
        };

        $rootScope.currentPath = UtilityService.getCurrentPath();


        //    $rootScope.submgr = $rootScope.submgr || {};
    //
    //    $scope.addView = 0;
    //
    //    $rootScope.currentPage = 'subscriptions';
    //
    //
    //    if($location.path() == '/add') {
    //        $rootScope.currentPage = 'add';
    //    }
    //
    //
    //
    //    $scope.toggleAddView = function(val){
    //        $scope.addView = val;
    //    };
	 //
    //
    //$scope.add = function(){
    //    var rsp = SubscriptionService.add($scope.addForm.src, $scope.addForm.type);
    //    rsp.then(function(rsp){
    //
    //        SubscriptionService.insertNewMedia(
    //            $rootScope.subscriptions, $rootScope.episodes, rsp.data);
    //    });
    //};
    //
    //
    //    $scope.subscriptionStyle = 'grid';
    //
    //    $scope.setSubscriptionStyle = function(val) {
    //        $scope.subscriptionStyle = val;
    //    };
    //
    //
    //
    //
    //    function setSubscriptionManager(subscriptionManager){
    //        $rootScope.submgr = subscriptionManager;
    //    }
    //
    //
    //    $scope.setAutoDownload = function(model){
    //        model.auto_download = model.auto_download !=1 ? 1  : 0;
    //        model.updateAutoDownload(model);
    //    };
    //
    //    $scope.downloadToggle = function(model){
    //        return model.auto_download !=1 ? 'AutoDownload'  : 'Stop AutoDownload';
    //    };
    //
    //
    //    $scope.doRemove = function(model){
    //        var rsp = model.remove(model, $rootScope.subscriptions, $rootScope.episodes);
    //        $rootScope.episodes = rsp.episodes;
    //        $rootScope.subscriptions = rsp.subscriptions;
    //    };
    //
    //    SubscriptionService.initializeManager(setSubscriptionManager, $rootScope.subscriptions);

    
    
}]);

