(function() {
    'use strict';

    angular
        .module('app.player')
        .directive('player', player);

    player.$inject = [ 'PlayerService', 'OverlayService' ];

    function player( PlayerService, OverlayService ){

        return  {

            restrict: 'E',

            scope: true,

            controller: 'PlayerController',
            controllerAs: 'vm',
            bindToController: true,

            templateUrl: 'src/libs/player/templates/player.html',

            link: function(scope){

                scope.goFullScreen = function() {
                    PlayerService.goFullScreen();
                };

                scope.togglePlayback = function( episode ){
                    PlayerService.togglePlayback( episode );
                };

                scope.togglePlaybackIcon = function( episode ){
                    return PlayerService.togglePlaybackIcon( episode );
                };

                scope.showEpisodeDetails = function( episode ){
                    OverlayService.setOverlay( episode );
                };

                scope.rewind = function(){
                    return PlayerService.rewind();
                };

                scope.forward = function(){
                    return PlayerService.forward();
                };

                scope.jumpBack = function(){
                    return PlayerService.jumpBack();
                };

                scope.jumpAhead = function(){
                    return PlayerService.jumpAhead();
                };

                scope.volumeUp = function(){
                    return PlayerService.volumeUp();
                };

                scope.volumeDown = function(){
                    return PlayerService.volumeDown();
                };

                scope.setVolumeTo = function(){
                    return PlayerService.setVolumeTo();
                };
            }
        };

    }
})();