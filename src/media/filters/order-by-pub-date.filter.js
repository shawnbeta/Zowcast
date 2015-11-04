(function() {
    'use strict';

    angular
        .module('app.media')
        .filter('orderByPubDate', orderByPubDate);

    orderByPubDate.$inject = ['_'];

    function orderByPubDate(_){

        return function(episodes) {
            return _.sortBy(episodes, 'pubDate', true).reverse();
        };

    }

})();