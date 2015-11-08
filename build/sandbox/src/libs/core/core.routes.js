(function(){

    'use strict';

    angular
        .module('app.core')
        .config(config);

    /* @ngInject */
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'src/libs/media/templates/episodes/page.html',
                controller: 'EpisodeController',
                controllerAs: 'vm',
                title: 'episodes'

            })
            .when('/about', {
                templateUrl: 'src/libs/core/templates/about.html',
                controller: 'CoreController',
                controllerAs: 'vm',
                title: 'about'
            })
            .when('/settings', {
                templateUrl: 'src/libs/core/templates/settings.html',
                controller: 'CoreController',
                controllerAs: 'vm',
                title: 'settings'
            })
            .otherwise('/', {
                templateUrl: 'src/libs/core/templates/settings.html',
                controller: 'EpisodeController',
                controllerAs: 'vm',
                title: 'episodes'
            });
    }
})();
