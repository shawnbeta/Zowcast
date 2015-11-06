(function() {
    'use strict';

    angular
        .module('app.media')
        .controller('SubscriptionController', SubscriptionController);

    SubscriptionController.$inject = ['$scope', 'MediaService', 'SubscriptionService'];

    function SubscriptionController($scope, MediaService, SubscriptionService){

        var vm = this;

        vm.title = "Subscription";
        vm.subscriptions = MediaService.subscriptions;

        $scope.add = function( ){
            SubscriptionService.add( $scope );
        };

        initialize();

        function initialize(){
            if( vm.subscriptions.length === 0){
                SubscriptionService.loadFromLocalStorage();
            }
        }


    }
})();
