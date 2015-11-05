(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('EpisodeController', EpisodeController);

    EpisodeController.$inject = [ '$scope', 'EpisodeService', 'SubscriptionService', 'UIService'];

    function EpisodeController( $scope, EpisodeService, SubscriptionService, UIService ){

        var vm = this;

        vm.title = "Episode";
        vm.episodeStyle = 'grid';
        vm.subscriptions = [];
        vm.episodes = EpisodeService.episodeCollection;
        vm.subscriptionFilterStatus = false;
        vm.activeSubscription = 0;

        vm.setEpisodeStyle = function(newStyle){
            vm.episodeStyle = newStyle;
        };

        vm.toggleBrowseBySubscription = function(){
            UIService.toggleBrowseBySubscription();
        };

        //initialize(EpisodeService);

        //function initialize(EpisodeService){
        //    vm.episodes = EpisodeService.episodeCollection;
        //    EpisodeService.loadFromLocalStorage(EpisodeService);
        //    console.log(vm.episodes);
        //
        //    //vm.episodes = EpisodeService.loadSampleEpisodes.episodeCollection;
        //    //vm.subscriptions = SubscriptionService.getSampleSubscriptions();
        //}

    }
})();
