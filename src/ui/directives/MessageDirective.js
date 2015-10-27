(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('message', message);

    function message(){

        return {
            restrict : 'E',
            scope: '=',
            templateUrl: 'src/libs/ui/templates/message.html'
        };

    }
})();
