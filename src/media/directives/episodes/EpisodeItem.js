app.media.directive('episodeItem',['EpisodeService', function(EpisodeService) {

    return  {

        restrict: 'E',

        scope: '=',

        link: function(scope){
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