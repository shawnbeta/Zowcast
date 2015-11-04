(function() {
    'use strict';

    angular
        .module('app.vendors')
        .factory('_', _);

    function _(){
        return window._; // assumes underscore has already been loaded on the page
    }
})();
