app.ui.factory('OverlayService', [ '$rootScope',

    function($rootScope){

    return {

        closeOverlayA: function(){
            $rootScope.overlay = undefined;
        },

        setOverlay: function(data){
            var topPosition = jQuery('body').scrollTop();
            jQuery('.overlayWrapper').css({ 'top': topPosition});
            $rootScope.overlay = data;
        }

    };
}]); 

  



 