app.ui.directive('overlay', [ function() {
    return {
        restrict : 'E',
        templateUrl: 'src/libs/ui/templates/overlay.html',
        scope: '='
        //links: function(scope){
        //    scope.toggleMenu = function(){
        //        UIService.toggleMenu();
        //    }
        //}
    };
}]);