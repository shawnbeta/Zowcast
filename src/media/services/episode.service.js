(function() {
    'use strict';

    angular
        .module('app.media')
        .factory('EpisodeService', EpisodeService);

    function EpisodeService(){

        return {

            episodes: [],

            loadFromLocalStorage: function(){
                return localStorage.getItem('episodes') ?
                    JSON.parse(localStorage.getItem('episodes')) : {};
            }
        };

    }
})();
