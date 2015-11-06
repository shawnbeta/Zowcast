//app.media.config(['$routeProvider',
//
//    function($routeProvider) {
//        $routeProvider
//            .when('/episodes', {
//                controller : 'EpisodeController',
//                templateUrl : 'src/libs/media/templates/episodes/page.html'
//            })
//            .when('/subscriptions', {
//                controller : 'SubscriptionController',
//                templateUrl : 'src/libs/media/templates/subscriptions/page.html'
//            })
//
//            .when('/add', {
//                controller : 'SubscriptionController',
//                templateUrl : 'src/libs/media/templates/subscriptions/add.html'
//            });
//    }]);

(function() {
    'use strict';

    angular
        .module('app.media')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/episodes',
                config: {
                    templateUrl: 'src/libs/media/templates/episodes/page.html',
                    controller: 'EpisodeController',
                    controllerAs: 'vm',
                    title: 'episodes',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Episodes'
                    }
                }
            },
            {
                url: '/subscriptions',
                config: {
                    templateUrl : 'src/libs/media/templates/subscriptions/page.html',
                    controller: 'SubscriptionController',
                    controllerAs: 'vm',
                    title: 'subscriptions',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Subscriptions'
                    }
                }
            },
            {
                url: '/add',
                config: {
                    templateUrl : 'src/libs/media/templates/subscriptions/add.html',
                    controller: 'SubscriptionController',
                    controllerAs: 'vm',
                    title: 'add subscription',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Add'
                    }
                }
            }
        ];
    }
})();