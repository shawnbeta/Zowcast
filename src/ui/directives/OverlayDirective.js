(function() {
    'use strict';

    angular
        .module('app.ui')
        .directive('overlay', overlay);

    overlay.$inject = ['OverlayService'];

    function overlay(){

        return {
            restrict : 'E',
            scope: '=',
            links: function(scope){
                scope.closeOverlayA = function(){
                    OverlayService.closeOverlayA();
                };
            },

            templateUrl: 'src/libs/ui/templates/overlay.html'
        };

    }
})();
