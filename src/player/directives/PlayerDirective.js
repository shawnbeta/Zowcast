app.player.directive('player', ['$rootScope', 'PlayerService', function($rootScope, PlayerService) {



    return {

        restrict : 'E',

        templateUrl: 'src/libs/player/templates/player.html',

        scope: '=',

        link: function(scope){


            scope.togglePlaybackIcon = function(episode){
                return PlayerService.togglePlaybackIcon(episode);
            };

            scope.togglePlayback = function(episode){
                PlayerService.togglePlayback(episode);
            };
            //
            //scope.setPlaybackPosition = function(e){
            //    console.log(e);
            //    console.log(angular.element(e));
            //    console.log('setplayback position');
            //    console.log(obj.offsetWidth);
            //    //Gets the offset from the left so it gets the exact location.
            //    var songSliderWidth = obj.offsetWidth;
            //    var evtobj=window.event? event : e;
            //    clickLocation = evtobj.layerX - obj.offsetLeft;
            //
            //    var percentage = (clickLocation/songSliderWidth);
            //    //Sets the song location with the percentage.
            //    PlayerService.setLocation(percentage);
            //};


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
