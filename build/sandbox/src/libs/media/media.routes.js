(function(){
    'use strict';

    angular
        .module('app.media')
        .config(config);

    config.$inject = ['$routeProvider'];

    ///* @ngInject */
    function config($routeProvider) {
        $routeProvider
            .when('/episodes', {
                templateUrl: 'src/libs/media/templates/episodes/page.html',
                controller: 'EpisodeController',
                controllerAs: 'vm',
                title: 'episodes'

            })
            .when('/subscriptions', {
                templateUrl : 'src/libs/media/templates/subscriptions/page.html',
                controller: 'SubscriptionController',
                controllerAs: 'vm',
                title: 'subscriptions'

            })

            .when('/add', {
                templateUrl : 'src/libs/media/templates/subscriptions/add.html',
                controller: 'SubscriptionController',
                controllerAs: 'vm',
                title: 'add subscription'
            });
    }
})();