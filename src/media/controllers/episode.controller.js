(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('EpisodeController', EpisodeController);

    EpisodeController.$inject = [ '$scope', '$filter', 'MediaService', 'EpisodeService', 'SubscriptionService', 'OverlayService',
        'DOMService' ];

    function EpisodeController( $scope, $filter, MediaService, EpisodeService, SubscriptionService, OverlayService, DOMService ){

        var vm = this;

        vm.title = "Episode";
        vm.viewStyle = 'grid';
        vm.episodes = MediaService.episodes;
        vm.subscriptions = MediaService.subscriptions;
        vm.mediaPlayer = MediaService.mediaPlayer;
        vm.ebsIsActive = MediaService.ebsIsActive;
        vm.activeSubscription = MediaService.activeSubscription;

        $scope.switchViewStyle = switchViewStyle;
        $scope.toggleEBS = toggleEBS;
        $scope.setEBS = setEBS;
        $scope.ebsShowAll = ebsShowAll;




        initialize();

        function initialize(){
            if( vm.episodes.length === 0 ){
                EpisodeService.loadFromLocalStorage();
            }

            if( vm.subscriptions.length === 0){
                SubscriptionService.loadFromLocalStorage();
            }

        }

        function switchViewStyle( newStyle ){
            vm.viewStyle = newStyle;
        }

        function toggleEBS(){
            var eleHTML = DOMService.getHTML( '.ebsContainer' );
            console.log(eleHTML);
            var data = {
                title: 'Browse by Subscription',
                description: '<ebs></ebs>',
                // Need to modify this to styles
                // since overlay was created to display
                // media information.
                mediaType: 'ebs'
            };
            OverlayService.setOverlay( data )
        }

        function setEBS( subscription ){
            if( MediaService.ebsIsActive === false)
                MediaService.setEBS(true);
            MediaService.setActiveSubscription( subscription );
            $filter('ebs')(MediaService.episodes);
        }

        function ebsShowAll(){
            MediaService.setEBS(false);
        }

    }
})();
