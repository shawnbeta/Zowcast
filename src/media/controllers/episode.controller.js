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
        vm.episodes2 = MediaService.episodes;
        //vm.subscriptons2 = MediaDataService.subscriptions;

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
            console.log('working');
            if( $rootScope.episodes.length === 0 ){
                $rootScope.episodes = EpisodeService.loadFromLocalStorage();
                EpisodeService.loadFromLocalStorage();
            }
            if( $rootScope.subscriptions.length === 0){
                $rootScope.subscriptions = SubscriptionService.loadFromLocalStorage;
                console.log($rootScope.episodes);
                //vm.subscriptons2 = SubscriptionService.loadFromLocalStorage();

            }

            //vm.episodes = EpisodeService.loadSampleEpisodes.episodeCollection;
            //vm.subscriptions = SubscriptionService.getSampleSubscriptions();
        }

    }
})();
