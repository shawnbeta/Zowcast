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
                    OverlayService.clearOverlay( overlayObject );
                };
            },

            templateUrl: 'src/libs/ui/templates/overlay.html'
        };

    }
})();
