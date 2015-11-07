(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('loading', loading);

    function loading(){

        return {

            restrict : 'E',
            scope: true,

            controller: 'UIController',
            controllerAs: 'vm',
            bindToController: true,

            templateUrl: 'src/libs/ui/templates/loading.html'

        };
    }
})();
