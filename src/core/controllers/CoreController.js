app.core.controller('CoreController', [
    '$rootScope', '$scope', '_', 'SubscriptionService', 'EpisodeService', 'PlayerService', 'UtilityService',
    'MessageService',
 	function($rootScope, $scope, _,  SubscriptionService, EpisodeService, PlayerService, UtilityService,
             MessageService){

        // Initialize Player to prevent errors.
        $rootScope.playerObject = PlayerService.initializePlayerObject();

        // Check the current path for navigation selected.
        $rootScope.currentPath = UtilityService.getCurrentPath();


        $rootScope.closeOverlay = function(){
            $rootScope.overlay = undefined;
        };

        $rootScope.closeMessage = function(){
            $rootScope.message.text = undefined;
        };

        $rootScope.subscriptionFilterStatus = false;

        $rootScope.message = {text: undefined};


        // Download all current episodes and subscriptions from the server.
        $scope.sync = function(){
            localStorage.clear();
            $rootScope.loading = true;
            var rsp = SubscriptionService.sync($rootScope);
            var rspA = rsp.then(function(response){
                SubscriptionService.setMediaAdditions($rootScope, response);
            });
            var rspB = rspA.then(function(){
                SubscriptionService.setSyncedSubscriptions();
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

        }]);
