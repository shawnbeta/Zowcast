app.core.config(['$routeProvider',

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

.when('/settings', {
controller : 'SettingsController',
templateUrl : 'src/media/templates/settings.html'
})

.otherwise({
redirectTo : '/'
});
}]);

