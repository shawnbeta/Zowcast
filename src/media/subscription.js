(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('Subscription', Subscription);

    Subscription.$inject = ['$scope', 'SubscriptionService'];

    function Subscription($scope, SubscriptionService){

        var vm = this;

        vm.title = "Subscription";

        console.log($scope.subscriptions);

        vm.add = function( ){
            SubscriptionService.add( $scope );
        };

    }
})();
