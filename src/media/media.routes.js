app.media.config(['$routeProvider',

    function($routeProvider) {
        $routeProvider
            .when('/episodes', {
                controller : 'EpisodeController',
                templateUrl : 'src/libs/libs/media/templates/episodes/page.html'
            })
            .when('/subscriptions', {
                controller : 'SubscriptionController',
                templateUrl : 'src/libs/media/templates/subscriptions/subscriptions.html'
            })

            .when('/add', {
                controller : 'SubscriptionController',
                templateUrl : 'src/libs/media/templates/subscriptions/add.html'
            })
    }]);

