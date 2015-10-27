(function() {
    'use strict';

    angular
        .module('app.media')
        .factory('EpisodeService', EpisodeService);

    function EpisodeService(){

        return {
            loadEpisodesFromLocalStorage: function( ){

                return localStorage.getItem('episodes') ?
                    JSON.parse(localStorage.getItem('episodes')) : {};
            }
        };

    }
})();
