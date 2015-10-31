(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('overlay', overlay);

    overlay.$inject = ['OverlayService'];

    function overlay(OverlayService){

        return {
            restrict : 'E',

            scope: '=',

            links: function(scope){

                scope.closeOverlay = function( overlayObject ){
                    console.log('clearOverlay')
                    OverlayService.clearOverlay( overlayObject );
                };
            },

            templateUrl: 'src/libs/ui/templates/overlay.html'
        };

    }
})();
