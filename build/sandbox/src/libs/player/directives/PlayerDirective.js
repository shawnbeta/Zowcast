app.player.directive('player', ['$rootScope', 'PlayerService', 'OverlayService',
    function($rootScope, PlayerService, OverlayService) {



    return {

        restrict : 'E',

        templateUrl: 'src/libs/player/templates/player.html',

        scope: '=',

        link: function(scope){

            scope.goFullScreen = function(){
                var video = $rootScope.playerObject.element;
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.mozRequestFullScreen) {
                    video.mozRequestFullScreen(); // Firefox
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen(); // Chrome and Safari
                }
            };

            scope.showEpisodeDetails = function(episode){
                OverlayService.setOverlay(episode);
            };


            scope.togglePlaybackIcon = function(episode){
                return PlayerService.togglePlaybackIcon(episode);
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
        }
    };
}]);
