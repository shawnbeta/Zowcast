app.core.controller('CoreController', [ '$rootScope', '$scope', '$interval', 'PersistenceService', '_',
    'SubscriptionService', 'EpisodeService', 'PlayerService', 'UtilityService',
 	function($rootScope, $scope, $interval, PersistenceService, _,
             SubscriptionService, EpisodeService, PlayerService){

        // Initialize Player
        $rootScope.playerObject = PlayerService.initializePlayerObject();

        $rootScope.subscriptionFilterStatus = false;

        $rootScope.message = {};

        $scope.sync = function(){
            localStorage.clear();
            var rsp = SubscriptionService.sync($rootScope);
            var rspA = rsp.then(function(response){
                SubscriptionService.setMediaAdditions($rootScope, response);
            });
            rspA.then(function(response){
                SubscriptionService.setSyncedSubscriptions();
            })
        };


        SubscriptionService.loadSubscriptionsFromLocalStorage($rootScope);
        EpisodeService.loadEpisodesFromLocalStorage($rootScope);

        console.log($rootScope.subscriptions);

        updateOverlayManager = function(om){
            $rootScope.OverlayManager = om;
        };

        $rootScope.notifyDisabled = function() {
            alert('This feature has been disabled.');
        };


        $scope.flushLocalStorage = function(){
            localStorage.clear();
            location.reload();
        };
        //
        //$scope.sync = function(){
        //    localStorage.clear();
        //    var syncRsp = SubscriptionService.sync($rootScope);
        //
        //    syncRsp.then(function(response) {
        //
        //
        //
        //
        //        //var subscriptionObjCollection =
        //        //    SubscriptionService.executeBulkRetrieval(rsp.data.subscriptions);
        //        //$rootScope.subscriptions = subscriptionObjCollection;
        //        //$rootScope.episodes =
        //        //    EpisodeService.executeBulkRetrieval(
        //        //        subscriptionObjCollection, rsp.data.episodes);
        //    });
        //
        //};
        //$rootScope.currentPage = 'settings';



        //$scope.fetchNew = function(){
        //    var lu = localStorage.getItem('last_update') || 0;
        //    var newLu = new Date();
        //    localStorage.setItem('last_update', Math.floor(newLu));
        //    MediaService.fetchNew(lu);
        //};




        }]);

//
//document.getElementById("overlayWrapper").style.zIndex = "5";
//document.getElementById("mask").style.zIndex = "4";
