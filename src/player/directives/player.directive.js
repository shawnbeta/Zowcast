(function() {
    'use strict';

    angular
        .module('app.player')
        .directive('player', player);

    player.$inject = ['PlayerService', 'OverlayService' ];

    function player(){

        return  {

            restrict: 'E',

            scope: true,

            controller: 'PlayerController',
            controllerAs: 'vm',
            bindToController: true,

            templateUrl: 'src/libs/player/templates/player.html',

            link: function(scope){

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

                scope.togglePlayback = function( playerObject, episode ){
                    //var mediaType = episode.mediaType === 0 ? 'audio' : 'video';
                    //playerObject.element = document.getElementsByTagName(mediaType)[0];
                    //playerObject.elementWrapper =  jQuery('#' + mediaType + 'Player');
                    PlayerService.togglePlayback( episode );
                };

                scope.togglePlaybackIcon = function( playerObject, episode ){
                    return PlayerService.togglePlaybackIcon( playerObject, episode );
                };

                scope.showEpisodeDetails = function( episode ){
                    OverlayService.setOverlay( scope.overlayObject, episode );
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