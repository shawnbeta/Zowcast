(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('EpisodeController', EpisodeController);

    EpisodeController.$inject = [ '$scope', '$filter', 'MediaService', 'EpisodeService', 'SubscriptionService', 'OverlayService',
        'DOMService', 'MessageService', 'UIDataService' ];

    function EpisodeController( $scope, $filter, MediaService, EpisodeService, SubscriptionService, OverlayService,
                                DOMService, MessageService, UIDataService ){

        var vm = this;

        vm.title = "Episode";
        vm.viewStyle = 'grid';
        vm.episodes = MediaService.episodes;
        vm.subscriptions = MediaService.subscriptions;
        vm.mediaPlayer = MediaService.mediaPlayer;
        vm.ebsIsActive = MediaService.ebsIsActive;
        vm.activeSubscription = MediaService.activeSubscription;
        vm.loading = UIDataService.loading;
        vm.mask = UIDataService.mask;

        vm.ebsDisplay = false;

        $scope.switchViewStyle = switchViewStyle;
        $scope.toggleEBSDisplay = toggleEBSDisplay;
        $scope.setEBS = setEBS;
        $scope.ebsShowAll = ebsShowAll;

        initialize();

        function initialize(){
            UIDataService.toggleLoading( true );
            if( vm.episodes.length === 0 ){
                EpisodeService.loadFromLocalStorage();
            }

            if( vm.subscriptions.length === 0){
                SubscriptionService.loadFromLocalStorage();
            }
            UIDataService.toggleLoading( true );
            console.log(UIDataService);
        }

        function switchViewStyle( newStyle ){
            vm.viewStyle = newStyle;
        }

        function toggleEBSDisplay(){
            vm.ebsDisplay = vm.ebsDisplay ? false : true;
            //MediaService.toggleEBSDisplay();
            //var eleHTML = DOMService.getHTML( '.ebsContainer' );
            //var data = {
            //    title: 'Browse by Subscription',
            //    //description: '<ebs></ebs>',
            //    // Need to modify this to styles
            //    // since overlay was created to display
            //    // media information.
            //    mediaType: 'ebs'
            //};
            //console.log(data);
            //OverlayService.setOverlay( data )
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
