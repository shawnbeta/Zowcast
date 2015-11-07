(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('EpisodeController', EpisodeController);

    EpisodeController.$inject = [ '$scope', 'MediaService', 'EpisodeService', 'SubscriptionService', 'UIDataService' ];

    function EpisodeController( $scope, MediaService, EpisodeService, SubscriptionService, UIDataService ){

        var vm = this;

        vm.title = "Episode";
        vm.viewStyle = 'grid';
        vm.episodes = MediaService.episodes;
        vm.subscriptions = MediaService.subscriptions;
        vm.mediaPlayer = MediaService.mediaPlayer;
        //vm.message = UIDataService.message;
        //vm.overlay = UIDataService.overlay;

        vm.subscriptionFilterStatus = false;
        vm.activeSubscription = 0;



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
