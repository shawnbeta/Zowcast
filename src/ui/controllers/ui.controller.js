(function() {
    'use strict';

    angular
        .module('app.ui')
        .controller('UIController', UIController);

    UIController.$inject = [ '$scope', 'UIDataService'  ];

    function UIController( $scope, UIDataService ){

        var vm = this;

        vm.message = UIDataService.message;
        vm.overlay = UIDataService.overlay;

        $scope.closeMessage = function(){
            UIDataService.closeMessage();
        }

        $scope.closeOverlay = function(){
            UIDataService.closeOverlay();
        }

    }
})();
