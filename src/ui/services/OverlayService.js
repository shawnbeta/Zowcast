(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('OverlayService', OverlayService);

    OverlayService.$inject = ['$rootScope'];

    function OverlayService($rootScope){

        return {

            setOverlay: function(data){
                var topPosition = jQuery('body').scrollTop();
                jQuery('.overlayWrapper').css({ 'top': topPosition});
                $rootScope.overlay = data;
            }

        };

    }
})();

  



 