(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('OverlayService', OverlayService);

    OverlayService.$inject = [ 'UIDataService', 'DOMService', 'MaskService' ];

    function OverlayService( UIDataService, DOMService, MaskService ){

        var overlayService = {
            load: load,
            setOverlay: setOverlay,
            close: close
        };

        return overlayService;

        function load( data ){
            UIDataService.overlay.title = data.title;
                UIDataService.overlay.description = data.description;
            if(data.pubDate)
                UIDataService.overlay.pubDate = data.pubDate;
            UIDataService.overlay.style = 'style_' + data.mediaType;
        }

        function setOverlay( data ){
            load( data );
            // Position the overlay element in the correct position.
            DOMService.positionElement('.overlayContainer');
            //MaskService.displayMask(true);
            UIDataService.mask.visible = true;
        }

        function close(){
            UIDataService.closeOverlay();
        }


    }
})();

  



 