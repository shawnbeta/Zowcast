(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('OverlayService', OverlayService);


    function OverlayService(){

        return {

            initializeOverlayObject: function(){
              return {
                  style: undefined
              }
            },

            loadOverlay: function(overlayObject, data){
                overlayObject.title = data.title;
                overlayObject.pubDate = data.pubDate;
                overlayObject.description = data.description;
                overlayObject.style = 'style_' + data.mediaType;
            },

            setOverlay: function( overlayObject, data ){
                this.loadOverlay( overlayObject, data);
                var topPosition = jQuery('body').scrollTop();
                jQuery('.overlayWrapper').css({ 'top': topPosition});
                return overlayObject;
            },

            closeOverlay: function( ){
                return { style: undefined};
            }

        };

    }
})();

  



 