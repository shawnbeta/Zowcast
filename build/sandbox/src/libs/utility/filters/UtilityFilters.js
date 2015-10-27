(function() {
    'use strict';

    angular
        .module('app.utility')
        .filter('htmlToPlaintext', htmlToPlaintext);

    htmlToPlaintext.$inject = ['_'];

    function htmlToPlaintext(_){

        return function(text) {
            return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
        };

    }
})();
