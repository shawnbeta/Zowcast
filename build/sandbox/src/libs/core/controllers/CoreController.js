app.core.controller('CoreController', [ '$rootScope', '$scope', '$interval', 'PersistenceService', '_',
    'SubscriptionService', 'EpisodeService', 'PlayerService', 'UtilityService',
 	function($rootScope, $scope, $interval, PersistenceService, _,
             SubscriptionService, EpisodeService, PlayerService, UtilityService){

        //$rootScope.subscription = [Subscription.devSubscription(21), Subscription.devSubscription(58),
        //    Subscription.devSubscription(192)];
        //$rootScope.episodes = [Episode.devEpisode(21), Episode.devEpisode(58), Episode.devEpisode(192)];

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

        // New code above



        //// Collect episodes
        //var oldEpisodes = EpisodeService.gatherOld(ec);
        //
        //if(oldEpisodes){
        //
        //    // Remove episode ID from episodeCollection
        //    EpisodeService.removeFromEpisodeCollection(ec, oldEpisodes);
        //    // Reload the collection
        //    ec = PersistenceService.loadData('EpisodeCollection');
        //    // Remove each episode
        //    EpisodeService.removeFromLocalStorage(oldEpisodes);
        //    // Remove episode ID from sec
        //    EpisodeService.removeFromSEC(oldEpisodes); // working
        //}

    //
    //    $scope.fetchBulk = function(){
    //    localStorage.clear();
    //    // var h = new HelperService();
    //    // Get the json response
    //    var f = SubscriptionService.fetchAll();
    //
    //    // returns subscription collection
    //    f.then(function(rsp) {
    //
    //       var subscriptionObjCollection =
    //           SubscriptionService.executeBulkRetrieval(rsp.data.subscriptions);
    //           $rootScope.subscriptions = subscriptionObjCollection;
    //        $rootScope.episodes =
    //         EpisodeService.executeBulkRetrieval(
    //             subscriptionObjCollection, rsp.data.episodes);
    //    });
    //
    //};

		// Use Services to load all subscriptions & Episodes
		// from localStorage to application memory.
		//$rootScope.subscriptions = SubscriptionService.load(sc);
		//$rootScope.episodes = EpisodeService.load(ec);

        //$rootScope.OverlayManager = {};
        //$rootScope.toggleOverlay = function(){
        //
        //    //jQuery('#overlayWrapper').css({
        //    //    'z-index': 5
        //    //});
        //    OverlayService.toggleOverlay(updateOverlayManager);
        //};

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
