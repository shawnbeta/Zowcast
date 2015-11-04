(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('Episode', Episode);

    Episode.$inject = [ 'EpisodeService', 'SubscriptionService', 'UIService'];

    function Episode( EpisodeService, SubscriptionService, UIService ){

        var vm = this;

        vm.title = "Episode";
        vm.episodeStyle = 'grid';
        vm.episodes = [];
        vm.subscriptions = [];

        vm.subscriptionFilterStatus = false;
        vm.activeSubscription = 0;

        vm.setEpisodeStyle = function(newStyle){
            vm.episodeStyle = newStyle;
        };

        vm.toggleBrowseBySubscription = function(){
            UIService.toggleBrowseBySubscription();
        };

        loadMedia();

        function loadMedia(){
            if( vm.episodes.length < 1 ){
                vm.episodes = EpisodeService.getEpisodes();
            }
            if( vm.subscriptions.length < 1 ){
                vm.subscriptions = SubscriptionService.getEpisodes();
            }
        }

    }
})();
