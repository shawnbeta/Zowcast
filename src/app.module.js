var app = angular.module('app', [
    'app.core',
    'app.media',
    'app.player',
    'app.ui',
    'app.utility',
    'app.vendors',
    'ngSanitize',
    'truncate'
]);

// Router doesn't load without this

app.run(['$route', function ($route) {
}]);
