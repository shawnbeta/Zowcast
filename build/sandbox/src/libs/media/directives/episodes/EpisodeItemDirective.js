app.media.directive('episodeItem',['$rootScope', 'EpisodeService', 'PlayerService', 'OverlayService',
    function($rootScope, EpisodeService, PlayerService, OverlayService) {

    return  {

        restrict: 'E',

        scope: '=',

        link: function(scope){

            scope.togglePlaybackIcon = function(episode){
                return PlayerService.togglePlaybackIcon(episode);
            };

            scope.togglePlayback = function(episode){
                PlayerService.togglePlayback(episode);
            };

            scope.showEpisodeDetails = function(episode){
                $rootScope.overlay = episode;
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