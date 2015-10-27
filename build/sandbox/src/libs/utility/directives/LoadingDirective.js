(function() {
    'use strict';

    angular
        .module('app.utility')
        .directive('loading', loading);

    function loading(){

        return {

            restrict : 'E',

            templateUrl: 'src/libs/utility/templates/loading.html'

        }
    }
})();
