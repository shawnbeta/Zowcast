(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$scope', '$location', 'UIService'];

    function NavigationController($scope, $location, UIService){



        $scope.toggleMenu  = function(){
            UIService.toggleMenu();
        };

    }
})();
