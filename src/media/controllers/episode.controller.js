(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('EpisodeController', EpisodeController);

    EpisodeController.$inject = [ '$scope', 'MediaService', 'EpisodeService', 'SubscriptionService', 'UIService' ];

    function EpisodeController( $scope, MediaService, EpisodeService, SubscriptionService, UIService ){

        var vm = this;

        vm.title = "Episode";
        vm.viewStyle = 'grid';
        vm.episodes = MediaService.episodes;
        vm.subscriptions = MediaService.subscriptions;
        vm.mediaPlayer = MediaService.mediaPlayer;

        vm.subscriptionFilterStatus = false;
        vm.activeSubscription = 0;

        $scope.setViewStyle = function(newStyle){
            vm.viewStyle = newStyle;
        };

        $scope.toggleBrowseBySubscription = function(){
            UIService.toggleBrowseBySubscription();
        };

        initialize();

        function initialize(){
            if( vm.episodes.length === 0 ){
                EpisodeService.loadFromLocalStorage();
            }

            if( vm.subscriptions.length === 0){
                SubscriptionService.loadFromLocalStorage();
            }

        }

    }
})();
