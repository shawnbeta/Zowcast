(function() {
    'use strict';

    angular
        .module('app.core')
        .directive('adminBar', adminBar);

    function adminBar(){

        return  {

            restrict: 'E',

            scope: true,

            controller: 'ActionController',
            controllerAs: 'vm',
            bindToController: true,

            templateUrl: 'src/libs/core/templates/admin-bar.tpl.html'
        };

    }
})();