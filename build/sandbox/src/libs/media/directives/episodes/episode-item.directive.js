(function() {
    'use strict';

    angular
        .module('app.media')
        .directive('episodeItem', episodeItem);

    episodeItem.$inject = ['PlayerService', 'MessageService', 'OverlayService', 'DOMService', 'MaskService'];

    function episodeItem(PlayerService, MessageService, OverlayService, DOMService, MaskService){

    return  {

        restrict: 'E',

        scope: true,

        //controller: 'EpisodeController',
        //controllerAs: 'vm',
        //bindToController: true,

        link: function(scope){

            scope.setViewStyle = function(newStyle){
                scope.viewStyle = newStyle;
            };

            scope.toggleBrowseBySubscription = function(){
                DOMService.toggleBrowseBySubscription();
            };

            scope.togglePlayback = function( episode ){
                PlayerService.togglePlayback( episode );
            };

            scope.togglePlaybackIcon = function( episode ){
                return PlayerService.togglePlaybackIcon( episode );
            };

            scope.showEpisodeDetails = function( episode ){
                OverlayService.setOverlay( episode );
                MaskService.displayMask(true);
            };

            scope.updateWatched = function(){
                MessageService.displayMessage(
                    'This feature has been disabled.', 'swSuccess fixed', MessageService.closeMessageTimer()
                );
            };
        },

        templateUrl: 'src/libs/media/templates/episodes/item.html'
    };

    }
})();