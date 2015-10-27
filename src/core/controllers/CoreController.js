(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['$scope', 'SubscriptionService', 'EpisodeService', 'PlayerService',
        'UtilityService', 'MessageService', 'OverlayService'];

    function CoreController($scope, SubscriptionService, EpisodeService, PlayerService, UtilityService,
                            MessageService, OverlayService){


        // Initialize Player to prevent errors.
        $scope.playerObject = PlayerService.initializePlayerObject();

        $scope.overlayObject = OverlayService.initializeOverlayObject();

        $scope.messageObject = {text: undefined};



        // Check the current path for navigation selected.
        $scope.$on('$routeChangeSuccess', function(){
            $scope.currentPath = UtilityService.getCurrentPath();
        });

        $scope.closeOverlay = function(){
            $scope.overlayObject = OverlayService.closeOverlay( $scope.overlayObject );
        };

        $scope.closeMessage = function(){
            $scope.messageObject = MessageService.closeMessage( $scope.messageObject );
        };

        // Download all current episodes and subscriptions from the server.
        $scope.sync = function(){
            localStorage.clear();
            $scope.loadingObject = true;
            var rsp = SubscriptionService.sync();
            var rspA = rsp.then(function(response){
                SubscriptionService.setMediaAdditions($scope, response);
            });
            var rspB = rspA.then(function(){
                SubscriptionService.setSyncedSubscriptions($scope);
            });
            rspB.then(function(){
                $scope.loadingObject = false;
                MessageService.displayMessage( $scope.messageObject,
                    'Subscriptions Synced.', 'swSuccess', MessageService.closeMessageTimer());
            });
        };


        $scope.subscriptions = SubscriptionService.loadSubscriptionsFromLocalStorage();
        $scope.episodes = EpisodeService.loadEpisodesFromLocalStorage( $scope );

        $scope.clearLocalData = function(){
            $scope.loadingObject = true;
            $scope.subscriptions = [];
            $scope.episodes = [];
            $scope.syncedSubscriptions = [];
            localStorage.setItem('subscriptions', JSON.stringify([]));
            localStorage.setItem('episodes', JSON.stringify([]));
            location.reload();
            $scope.loadingObject = false;
        };


    }
})();