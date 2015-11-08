(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('mask', mask);

    function mask(){

        return {

            restrict : 'E',
            scope: true,

            controller: 'UIController',
            controllerAs: 'vm',
            bindToController: true,

            templateUrl: 'src/libs/ui/templates/mask.tpl.html'

        };
    }
})();
