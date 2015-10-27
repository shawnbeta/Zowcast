(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', '$location', 'UIService'];

    function NavigationController($scope, $location, UIService){

        $scope.go = function(path){
            $location.path(path);
        };

        $scope.toggleMenu  = function(){
            UIService.toggleMenu();
        };

    }
})();
