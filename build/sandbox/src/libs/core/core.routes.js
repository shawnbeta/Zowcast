app.core.config(['$routeProvider',

function($routeProvider) {
$routeProvider
    .when('/', {
        controller : 'EpisodeController',
        templateUrl : 'src/libs/media/templates/episodes/page.html'
    })
.when('/about', {
controller : 'CoreController',
        templateUrl : 'src/libs/core/templates/about.html'
})

.when('/settings', {
controller : 'CoreController',
templateUrl : 'src/libs/core/templates/settings.html'
})

.otherwise({
redirectTo : '/'
});
}]);

