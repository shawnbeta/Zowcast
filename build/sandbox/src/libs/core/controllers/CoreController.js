app.core.controller('CoreController', [ '$rootScope', '$scope', '$interval', 'PersistenceService', '_',
    'SubscriptionService', 'EpisodeService', 'PlayerService', 'MessageService', 'UtilityService',
 	function($rootScope, $scope, $interval, PersistenceService, _,
             SubscriptionService, EpisodeService, PlayerService, MessageService, UtilityService){

        // Initialize Player
        $rootScope.playerObject = PlayerService.initializePlayerObject();

        $rootScope.currentPath = UtilityService.getCurrentPath();

        $rootScope.closeOverlay = function(){
            $rootScope.overlay = undefined;
        };

        $rootScope.closeMessage = function(){
            $rootScope.message.text = undefined;
        };

        $rootScope.subscriptionFilterStatus = false;

        $rootScope.message = {text: undefined};




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


        //
        //$rootScope.notifyDisabled = function() {
        //    MessageService.displayMessage('This feature has been disabled.', 'swSuccess', MessageService.closeMessageTimer());
        //};


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
