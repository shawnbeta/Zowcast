app.player.directive('audioPlayer', ['PlayerService', function(PlayerService) {



    return {

        restrict : 'E',

        templateUrl: 'src/libs/player/templates/audio-player.html',

        scope: '=',

        link: function(scope){
            //scope.updateCounter = function(){
            //    PlayerService.updateCounter();
            //};
        }
    };
}]);
