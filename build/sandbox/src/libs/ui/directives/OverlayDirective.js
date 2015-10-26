app.ui.directive('overlay', ['OverlayService', function(OverlayService) {
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
}]);