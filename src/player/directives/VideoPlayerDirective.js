app.player.directive('videoPlayer', ['PlayerService',
    function(PlayerService) {



    return {
        restrict : 'E',

        templateUrl: 'src/libs/player/templates/video-player.html',

        scope: '=',

        link: function(scope){
            //scope.updateCounter = function(){
            //    PlayerService.updateCounter();
            //};
        }

    };
}]);
