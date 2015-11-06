(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('EpisodeController', EpisodeController);

    EpisodeController.$inject = [ '$rootScope', '$scope', 'MediaService', 'EpisodeService', 'SubscriptionService', 'UIService'];

    function EpisodeController( $rootScope, $scope, MediaService, EpisodeService, SubscriptionService, UIService ){

        var vm = this;

        vm.title = "Episode";
        vm.episodeStyle = 'grid';
        vm.episodes = MediaService.episodes;
        vm.subscriptions = MediaService.subscriptions;

        vm.subscriptionFilterStatus = false;
        vm.activeSubscription = 0;

        vm.setEpisodeStyle = function(newStyle){
            vm.episodeStyle = newStyle;
        };

        vm.toggleBrowseBySubscription = function(){
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
