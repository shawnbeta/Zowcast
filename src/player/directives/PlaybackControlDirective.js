
app.media.directive('playbackControls',['EpisodeService', '$rootScope', function() {

    return  {

        restrict: 'E',

        scope: '=',

        link: function(scope){


            scope.togglePlaybackIcon = function(episode){
                PlayerService.toggleIcon(episode);
            };

            scope.togglePlayback = function(episode){
                PlayerService.togglePlayback(episode);
            };

        },

        templateUrl: 'src/libs/player/templates/playback-controls.html'
    }

}]);