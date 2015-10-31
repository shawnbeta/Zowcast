(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['$rootScope', '$scope', 'SubscriptionService', 'EpisodeService', 'PlayerService',
        'UtilityService', 'MessageService', 'OverlayService', '$location'];

    function CoreController($rootScope, $scope, SubscriptionService, EpisodeService, PlayerService, UtilityService,
                            MessageService, OverlayService, $location){


        //$rootScope.activeSubscription = null;
        //
        //$rootScope.subscriptionFilterStatus = false;

        // Initialize Player to prevent errors.
        $rootScope.playerObject = PlayerService.initializePlayerObject();

        $rootScope.overlayObject = OverlayService.initializeOverlayObject();

        $rootScope.messageObject = { text: undefined};

        $rootScope.loadingObject = false;

        // Check the current path for navigation selected.
        $scope.$on('$routeChangeSuccess', function(){
            $scope.currentPath = UtilityService.getCurrentPath();
        });

        $rootScope.closeOverlay = function(){
            $rootScope.overlayObject = OverlayService.closeOverlay( $rootScope.overlayObject );
        };

        $rootScope.closeMessage = function(){
            $rootScope.messageObject = MessageService.closeMessage( );
        };

        // Download all current episodes and subscriptions from the server.
        $scope.sync = function(){
            localStorage.clear();
            $rootScope.loadingObject = true;
            var rsp = SubscriptionService.sync();
            var rspA = rsp.then(function(response){
                SubscriptionService.setMediaAdditions($scope, response);
            });
            rspA.then(function(){
                SubscriptionService.setSyncedSubscriptions($scope);
                $rootScope.loadingObject = false;
                $rootScope.messageObject = {
                    text: 'Subscriptions Synced.',
                    style: 'swSuccess'
                };
                MessageService.closeMessageTimer();
            });

        };

        $rootScope.go = function(path){
            $location.path(path);
        };

        $rootScope.subscriptions = SubscriptionService.loadSubscriptionsFromLocalStorage();
        $rootScope.episodes = EpisodeService.loadEpisodesFromLocalStorage( $scope );


        $scope.clearLocalData = function(){
            $rootScope.loadingObject = true;
            $rootScope.subscriptions = [];
            $rootScope.episodes = [];
            localStorage.setItem('subscriptions', JSON.stringify([]));
            localStorage.setItem('episodes', JSON.stringify([]));
            localStorage.setItem('syncedSubscriptions', JSON.stringify([]));
            $rootScope.loadingObject = false;
            $rootScope.messageObject = {
                text: 'Local Data Cleared.',
                style: 'swSuccess'
            };
            MessageService.closeMessageTimer();
        };


    }
})();