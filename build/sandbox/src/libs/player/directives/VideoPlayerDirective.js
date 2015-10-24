app.player.directive('videoPlayer', [ function() {



    return {
        restrict : 'E',

        templateUrl: 'src/libs/player/templates/video-player.html',

        scope: '=',

        link: function(scope){
            scope.setBookmark = function(){

            }
        }

    };
}]);
