app.core.config(['$routeProvider',

function($routeProvider) {
$routeProvider
    .when('/', {
        controller : 'EpisodeController',
        templateUrl : 'src/libs/media/templates/episodes/page.html'
    })
.when('/about', {
controller : 'SubscriptionController',
        templateUrl : 'src/libs/core/templates/about.html'
})

.when('/settings', {
controller : 'SettingsController',
templateUrl : 'src/libs/media/templates/settings.html'
})

.otherwise({
redirectTo : '/'
});
}]);

