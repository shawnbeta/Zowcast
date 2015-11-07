(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('menuToggler', menuToggler);

    function menuToggler(  ){


        return {
            restrict : 'E',
            scope: true,
            controller: 'ActionController',
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'src/libs/ui/templates/menu-toggler.tpl.html'


        };

    }
})();
