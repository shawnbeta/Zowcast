
app.media.directive('playbackControls',['PlayerService', '$rootScope', function(PlayerService, $rootScope) {

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

            scope.rewind = function(){
                PlayerService.rewind();
            };

            scope.forward = function(){
                PlayerService.forward();
            };

            scope.jumpBack = function(){
                PlayerService.jumpBack();
            };

            scope.jumpAhead = function(){
                PlayerService.jumpAhead();
            };

            scope.volumeUp = function(){
                PlayerService.volumeUp();
            };

            scope.volumeDown = function(){
                PlayerService.volumeDown();
            };

            scope.setVolumeTo = function(){
                PlayerService.setVolumeTo();
            };

        },

        templateUrl: 'src/libs/player/templates/playback-controls.html'
    }

}]);