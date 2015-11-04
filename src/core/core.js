(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('Core', Core);

    Core.$inject = [ '$scope', 'SubscriptionService', 'EpisodeService', 'PlayerService',
        'UtilityService', 'MessageService', 'OverlayService', '$location' ];

    /* @ngInject */
    function Core( $scope, SubscriptionService, EpisodeService, PlayerService, UtilityService,
                            MessageService, OverlayService, $location ){

        /* jshint validthis: true */
        var vm = this;

        // Initialize Player to prevent errors.
        vm.playerObject = PlayerService.getPlayerObject();

        vm.loadingObject = true;

        //vm.overlayObject = OverlayService.initializeOverlayObject();

        //vm.messageObject = { text: undefined};

        //vm.loadingObject = false;

        // Check the current path for navigation selected.
        //$scope.$on('$routeChangeSuccess', function(){
        //    $scope.currentPath = UtilityService.getCurrentPath();
        //});

        //vm.closeOverlay = function(){
        //    vm.overlayObject = OverlayService.closeOverlay( vm.overlayObject );
        //};
        //
        //vm.closeMessage = function(){
        //    vm.messageObject = MessageService.closeMessage( );
        //};

        // Download all current episodes and subscriptions from the server.
        //vm.sync = function(){
        //    localStorage.clear();
        //    vm.loadingObject = true;
        //    var rsp = SubscriptionService.sync();
        //    var rspA = rsp.then(function(response){
        //        SubscriptionService.setMediaAdditions($scope, response);
        //    });
        //    rspA.then(function(){
        //        SubscriptionService.setSyncedSubscriptions($scope);
        //        vm.loadingObject = false;
        //        vm.messageObject = {
        //            text: 'Subscriptions Synced.',
        //            style: 'swSuccess'
        //        };
        //        MessageService.closeMessageTimer();
        //    });
        //
        //};
        //
        //vm.go = function(path){
        //    $location.path(path);
        //};
        //
        //vm.subscriptions = SubscriptionService.loadSubscriptionsFromLocalStorage();
        //vm.episodes = EpisodeService.loadEpisodesFromLocalStorage( $scope );


        //$scope.clearLocalData = function(){
        //    vm.loadingObject = true;
        //    vm.subscriptions = [];
        //    vm.episodes = [];
        //    localStorage.setItem('subscriptions', JSON.stringify([]));
        //    localStorage.setItem('episodes', JSON.stringify([]));
        //    localStorage.setItem('syncedSubscriptions', JSON.stringify([]));
        //    vm.loadingObject = false;
        //    vm.messageObject = {
        //        text: 'Local Data Cleared.',
        //        style: 'swSuccess'
        //    };
        //    MessageService.closeMessageTimer();
        //};


    }
})();