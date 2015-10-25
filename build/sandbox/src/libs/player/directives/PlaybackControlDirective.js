//
//app.media.directive('playbackControls',['PlayerService', '$rootScope', function(PlayerService, $rootScope) {
//
//    return  {
//
//        restrict: 'E',
//
//        scope: '=',
//
//        link: function(scope){
//
//             scope.setPlaybackPosition = function(obj,e){
//                 console.log('setplayback position')
//                 console.log(obj);
//                //Gets the offset from the left so it gets the exact location.
//                var songSliderWidth = obj.offsetWidth;
//                var evtobj=window.event? event : e;
//                clickLocation = evtobj.layerX - obj.offsetLeft;
//
//                var percentage = (clickLocation/songSliderWidth);
//                //Sets the song location with the percentage.
//                PlayerService.setLocation(percentage);
//            };
//
//
//            scope.togglePlaybackIcon = function(episode){
//                PlayerService.togglePlaybackIcon(episode);
//            };
//            scope.togglePlayback = function(episode, playerObject){
//                PlayerService.togglePlayback(episode, playerObject);
//            };
//
//            scope.rewind = function(){
//                PlayerService.rewind();
//            };
//
//            scope.forward = function(){
//                PlayerService.forward();
//            };
//
//            scope.jumpBack = function(){
//                PlayerService.jumpBack();
//            };
//
//            scope.jumpAhead = function(){
//                PlayerService.jumpAhead();
//            };
//
//            scope.volumeUp = function(){
//                PlayerService.volumeUp();
//            };
//
//            scope.volumeDown = function(){
//                PlayerService.volumeDown();
//            };
//
//            scope.setVolumeTo = function(){
//                PlayerService.setVolumeTo();
//            };
//
//        },
//
//        templateUrl: 'src/libs/player/templates/playback-controls.html'
//    }
//
//}]);