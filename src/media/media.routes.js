app.media.config(['$routeProvider',

    function($routeProvider) {
        $routeProvider
            .when('/episodes', {
                controller : 'EpisodeController',
                templateUrl : 'src/libs/media/templates/episodes/page.html'
            })
            .when('/subscriptions', {
                controller : 'SubscriptionController',
                templateUrl : 'src/libs/media/templates/subscriptions/page.html'
            })

            .when('/add', {
                controller : 'SubscriptionController',
                templateUrl : 'src/libs/media/templates/subscriptions/add.html'
            });
    }]);

