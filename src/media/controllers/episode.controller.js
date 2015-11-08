(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('EpisodeController', EpisodeController);

    EpisodeController.$inject = ['$scope', '$filter', 'EpisodeService', 'SubscriptionService', 'MediaService',
        'MessageService', 'LoadingService'];


    function EpisodeController( $scope, $filter, EpisodeService, SubscriptionService, MediaService,
                                MessageService, LoadingService ){

        var vm = this;

        vm.title = "Episode";
        vm.viewStyle = 'grid';
        vm.episodes = MediaService.episodes;
        vm.subscriptions = MediaService.subscriptions;
        vm.mediaPlayer = MediaService.mediaPlayer;
        vm.ebsIsActive = MediaService.ebsIsActive;
        vm.activeSubscription = MediaService.activeSubscription;
        //vm.loading = UIDataService.loading;
        //vm.mask = UIDataService.mask;

        vm.ebsDisplay = false;

        $scope.switchViewStyle = switchViewStyle;
        $scope.toggleEBSDisplay = toggleEBSDisplay;
        $scope.setEBS = setEBS;
        $scope.ebsShowAll = ebsShowAll;

        initialize();

        function initialize(){
            LoadingService.displayLoading( true );
            if( vm.episodes.length === 0 ){
                EpisodeService.loadFromLocalStorage();
            }
            if( vm.subscriptions.length === 0){
                SubscriptionService.loadFromLocalStorage();
            }
            LoadingService.displayLoading( false );
        }

        function switchViewStyle( newStyle ){
            vm.viewStyle = newStyle;
        }

        function toggleEBSDisplay(){
            vm.ebsDisplay = vm.ebsDisplay ? false : true;
            //UIDataService.mask.visible = true;
        }

        function setEBS( subscription ){
            // Set EBS Active to true only if set to false.
            if(!MediaService.ebsIsActive)
                MediaService.toggleEBSActive(true);
            MediaService.setActiveSubscription( subscription );
            $filter('ebsFilter')(MediaService.episodes);
            MessageService.displayMessage(
                'Showing episodes for: <span class="swTitle">' + subscription.title + '</span>',
                'swSuccess fixed', MessageService.closeMessageTimer()
            );
        }

        function ebsShowAll(){
            MediaService.toggleEBSActive(false);
            var empty = {id: 0, title: null};
            MediaService.setActiveSubscription( empty );
        }

    }
})();
