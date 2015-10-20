(function() {
    'use strict';
    angular.module('app.media')
        .config('$routeProvider', $routeProvider);

    function $routeProvider() {
        $routeProvider
            .when('/episodes', {
                controller : 'EpisodeController',
                templateUrl : 'src/templates/media/episodes/page.html'
            })
            .when('/subscriptions', {
                controller : 'SubscriptionController',
                templateUrl : 'src/templates/media/subscriptions/page.html'
            })
            .when('/add', {
                controller : 'SubscriptionController',
                templateUrl : 'src/templates/media/subscriptions/add.html'
            })
    }});

