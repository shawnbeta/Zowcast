(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('SubscriptionController', SubscriptionController);

    SubscriptionController.$inject = ['$scope', 'SubscriptionService'];

    function SubscriptionController($scope, SubscriptionService){

        var vm = this;

        vm.title = "Subscription";

        console.log($scope.subscriptions);

        vm.add = function( ){
            SubscriptionService.add( $scope );
        };

    }
})();
