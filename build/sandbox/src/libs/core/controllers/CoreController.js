(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CoreController', CoreController);

    CoreController.$inject = ['$rootScope', '$scope', 'SubscriptionService', 'EpisodeService', 'PlayerService',
        'UtilityService', 'MessageService'];

    function CoreController($rootScope, $scope, SubscriptionService, EpisodeService, PlayerService, UtilityService,
                            MessageService){

        // Initialize Player to prevent errors.
        $scope.playerObject = PlayerService.initializePlayerObject();

        // Check the current path for navigation selected.
        $scope.currentPath = UtilityService.getCurrentPath();

        $scope.closeOverlay = function(){
            $rootScope.overlay = undefined;
        };

        $scope.closeMessage = function(){
            $rootScope.message.text = undefined;
        };

        $scope.subscriptionFilterStatus = false;

        $scope.message = {text: undefined};


        // Download all current episodes and subscriptions from the server.
        $scope.sync = function(){
            localStorage.clear();
            $rootScope.loading = true;
            var rsp = SubscriptionService.sync();
            var rspA = rsp.then(function(response){
                SubscriptionService.setMediaAdditions($rootScope, response);
            });
            var rspB = rspA.then(function(){
                SubscriptionService.setSyncedSubscriptions($rootScope);
            });
            rspB.then(function(){
                $rootScope.loading = false;
                MessageService.displayMessage(
                    'Subscriptions Synced.', 'swSuccess', MessageService.closeMessageTimer());
            });
        };


        SubscriptionService.loadSubscriptionsFromLocalStorage($rootScope);
        EpisodeService.loadEpisodesFromLocalStorage($rootScope);

        $scope.flushLocalStorage = function(){
            $rootScope.loading = true;
            localStorage.clear();
            location.reload();
            $rootScope.loading = false;
        };

    }
})();