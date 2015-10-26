app.media.directive('episodeItem',['$rootScope', 'EpisodeService', 'PlayerService', 'MessageService', 'OverlayService',
    function($rootScope, EpisodeService, PlayerService, MessageService, OverlayService) {

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
               OverlayService.setOverlay(episode);
            };

            scope.updateWatched = function(){
                //alert('work')
                MessageService.displayMessage(
                    'This feature has been disabled.', 'swSuccess fixed', MessageService.closeMessageTimer());
            };


            // New above


            //
            //
            //scope.isWatched = function(model){
            //    return model.watched == 0 ? 'mark watched'  : 'mark unwatched';
            //};
            //
            //scope.updateWatched = function(model){
            //    model.watched = model.watched == 0 ? 1 : 0;
            //    EpisodeService.updateLocal(model);
            //    EpisodeService.updateRemote(model, 'watched', model.watched);
            //};
            //
            //
            //
            //scope.setDetailer = function(model){
            //    scope.episodeDetailer = model;
            //    scope.showDetails = true;
            //};
            //
            //scope.hideDescription = function(){
            //    scope.episodeDetailer = {};
            //    scope.showDetails = false;
            //};


        },

        templateUrl: 'src/libs/media/templates/episodes/item.html'
    }

}]);