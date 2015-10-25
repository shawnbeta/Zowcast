app.ui.directive('navigation', [ function() {
    return {
        restrict : 'E',
        templateUrl: 'src/libs/ui/templates/navigation.html',
        scope: '=',
        links: function(scope){
            scope.toggleMenu = function(){
                UIService.toggleMenu();
            }
        }
    };
}]);