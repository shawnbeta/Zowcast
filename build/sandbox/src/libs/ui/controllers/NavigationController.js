app.ui.controller('NavigationController', ['$scope', '$location', 'UIService',
    function($scope, $location, UIService) {

        $scope.go = function(path){
            $location.path(path);
        };

        $scope.toggleMenu  = function(){
            UIService.toggleMenu();
        };



    }]);