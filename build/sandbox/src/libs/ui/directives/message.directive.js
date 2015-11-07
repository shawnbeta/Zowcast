(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('message', message);

    message.$inject = [ 'UIDataService' ];

    function message( UIDataService ){


        return {
            restrict : 'E',
            scope: true,
            controller: 'UIController',
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'src/libs/ui/templates/message.html'
        };

    }
})();
