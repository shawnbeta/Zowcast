app.media.directive('episodeItem',['EpisodeService', 'PlayerService', function(EpisodeService, PlayerService) {

    return  {

        restrict: 'E',

        scope: '=',

        link: function(scope){

            //scope.isPlaying = function(episode){
            //    return $rootScope.playerObject.loadedEpisode == episode && $rootScope.playerObject.status == 'playing';
            //};

            scope.togglePlaybackIcon = function(episode){
                return PlayerService.toggleIcon(episode);
            };

            scope.togglePlayback = function(episode){
                PlayerService.togglePlayback(episode);
            };




            // New above




            scope.isWatched = function(model){
                return model.watched == 0 ? 'mark watched'  : 'mark unwatched';
            };

            scope.updateWatched = function(model){
                model.watched = model.watched == 0 ? 1 : 0;
                EpisodeService.updateLocal(model);
                EpisodeService.updateRemote(model, 'watched', model.watched);
            };

            scope.toggleDetails = function(model){
                if(scope.showDetails && scope.episodeDetailer == model)
                    return scope.hideDescription();
                scope.setDetailer(model);
            };

            scope.setDetailer = function(model){
                scope.episodeDetailer = model;
                scope.showDetails = true;
            };

            scope.hideDescription = function(){
                scope.episodeDetailer = {};
                scope.showDetails = false;
            };


        },

        templateUrl: 'src/libs/media/templates/episodes/item.html'
    }

}]);