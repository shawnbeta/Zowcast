(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = [ '$scope', '$location', 'DataService'];

    function NavigationController( $scope, $location, DataService ){

        var vm = this;
        vm.navigation = DataService.nav();
        $scope.go = go;

        function go(path){
            $location.path(path);
        }


    }
})();
