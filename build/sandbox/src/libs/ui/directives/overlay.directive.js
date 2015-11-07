(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('overlay', overlay);

    overlay.$inject = ['OverlayService'];

    function overlay(OverlayService){

        return {
            restrict : 'E',

            scope: true,

            controller: 'UIController',
            controllerAs: 'vm',
            bindToController: true,


            links: function(scope){

                scope.closeOverlay = function(){
                    OverlayService.clearOverlay();
                };
            },

            templateUrl: 'src/libs/ui/templates/overlay.html'
        };

    }
})();
