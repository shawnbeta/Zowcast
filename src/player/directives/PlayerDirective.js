(function() {
    'use strict';

    angular
        .module('app.player')
        .directive('player', player);

    player.$inject = ['PlayerService', 'OverlayService' ];

    function player( PlayerService, OverlayService ){

        return {

            restrict : 'E',

            templateUrl: 'src/libs/player/templates/player.html',

            scope: true,

            link: function(scope, e, attrs){

                //attrs.$observe('playerObject', function(playerObject){
                //    scope.playerObject = playerObject;
                //});

                scope.goFullScreen = function(playerObject){
                    var video = playerObject.element;
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


                scope.togglePlaybackIcon = function( playerObject, episode ){
                    return PlayerService.togglePlaybackIcon( playerObject, episode );
                };

                scope.togglePlayback = function( playerObject, episode ){
                    PlayerService.togglePlayback( playerObject, episode );
                };

                scope.rewind = function( playerObject ){
                    return PlayerService.rewind( playerObject );
                };

                scope.forward = function( playerObject ){
                    return PlayerService.forward( playerObject );
                };

                scope.jumpBack = function( playerObject ){
                    return PlayerService.jumpBack( playerObject );
                };

                scope.jumpAhead = function( playerObject ){
                    return PlayerService.jumpAhead( playerObject );
                };

                scope.volumeUp = function( playerObject ){
                    return PlayerService.volumeUp( playerObject );
                };

                scope.volumeDown = function( playerObject ){
                    return PlayerService.volumeDown( playerObject );
                };

                scope.setVolumeTo = function( playerObject ){
                    return PlayerService.setVolumeTo( playerObject );
                };
            }
        };


    }
})();

