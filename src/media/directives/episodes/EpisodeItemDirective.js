app.media.directive('episodeItem',['PlayerService', 'MessageService', 'OverlayService',
    function(PlayerService, MessageService, OverlayService) {

    return  {

        restrict: 'E',

        scope: '=',

        link: function(scope){

            scope.togglePlaybackIcon = function(episode){
                return PlayerService.togglePlaybackIcon(episode);
            };

            scope.togglePlayback = function(episode){
                PlayerService.togglePlayback(episode);
            };

            scope.showEpisodeDetails = function(episode){
               OverlayService.setOverlay(episode);
            };

            scope.updateWatched = function(){
                MessageService.displayMessage(
                    'This feature has been disabled.', 'swSuccess fixed', MessageService.closeMessageTimer());
            };

        },

        templateUrl: 'src/libs/media/templates/episodes/item.html'
    }

}]);