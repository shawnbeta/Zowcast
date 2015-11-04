
(function(){

    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'src/libs/media/templates/episodes/page.html',
                    controller: 'EpisodeController',
                    controllerAs: 'vm',
                    title: 'episodes',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-lock"></i> Episodes'
                    }
                }
            },
            {
                url: '/about',
                config: {
                    templateUrl: 'src/libs/core/templates/about.html',
                    controller: 'CoreController',
                    controllerAs: 'vm',
                    title: 'about',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> About'
                    }
                }
            },
            {
                url: '/',
                config: {
                    templateUrl: 'src/libs/core/templates/settings.html',
                    controller: 'CoreController',
                    controllerAs: 'vm',
                    title: 'settings',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> settings'
                    }
                }
            }
        ];
    }


})();


//app.core.config(['$routeProvider',
//
//function($routeProvider) {
//$routeProvider
//    .when('/', {
//        controller : 'EpisodeController',
//        templateUrl : 'src/libs/media/templates/episodes/page.html'
//    })
//.when('/about', {
//controller : 'CoreController',
//        templateUrl : 'src/libs/core/templates/about.html'
//})
//
//.when('/settings', {
//controller : 'CoreController',
//templateUrl : 'src/libs/core/templates/settings.html'
//})
//
//.otherwise({
//redirectTo : '/'
//});
//}]);

