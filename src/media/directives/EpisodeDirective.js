hcMedia.directive('episodeCollection', function() {

    return {
        bindToController: true,
        controller: function(){
            var vm = this;
            vm.updateStyle = updateStyle;
            function updateStyle(val){
                vm.collection.style = val;
            }
        },

        controllerAs: 'vm',
        restrict : 'E',
        scope: {
            colStyle: '='
        },

        templateUrl: 'src/templates/media/episodes/collection.html'
    };
});

hcMedia.directive('episodeItem', function() {

    return {
        restrict : 'E',

        link: function(scope){
            scope.subscriptionType = 'audio';
            scope.options = [ 'audio', 'video', 'green' ];

        },
        templateUrl: 'templates/episodes/item.html'
    };
});