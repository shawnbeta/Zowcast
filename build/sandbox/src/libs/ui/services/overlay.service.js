(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('OverlayService', OverlayService);

    OverlayService.$inject = [ 'UIDataService', 'DOMService' ];

    function OverlayService( UIDataService, DOMService ){

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
            DOMService.positionOverlay();
        }

        function close(){
            UIDataService.closeOverlay();
        }


    }
})();

  



 