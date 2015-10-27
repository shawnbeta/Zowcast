(function() {
    'use strict';

    angular
        .module('app.media')
        .factory('EpisodeService', EpisodeService);

    function EpisodeService(){

        return {
            loadEpisodesFromLocalStorage: function($rootScope){
                var episodes = localStorage.getItem('episodes');
                $rootScope.episodes = JSON.parse(episodes);
            }
        };

    }
})();
