(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('loading', loading);

    function loading(){

        return {

            restrict : 'E',

            templateUrl: 'src/libs/ui/templates/loading.html'

        }
    }
})();
