app.media.factory('EpisodeService', [ function() {

    return {

        loadEpisodesFromLocalStorage: function($rootScope){
            var episodes = localStorage.getItem('episodes');
            $rootScope.episodes = JSON.parse(episodes);
        }

    };

}]);
