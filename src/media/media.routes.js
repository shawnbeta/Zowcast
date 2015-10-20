app.media.config(['$routeProvider',

    function($routeProvider) {
        $routeProvider
            .when('/', {
                controller : 'EpisodeController',
                templateUrl : 'src/media/templates/episodes.html'
            })
            .when('/about', {
                controller : 'SubscriptionController',
                templateUrl : 'src/media/templates/about.html'
            })
    }]);

