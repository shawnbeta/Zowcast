describe('EpisodeDirective: episodeCollection', function(){


    ////beforeEach(module('templates'));


    var element;
    var scope;
    var $httpBackend;
    beforeEach(function() {
        module('hcMedia');
        inject(function ($rootScope, $compile, $injector) {
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.whenGET('src/templates/media/episodes/collection.html').respond(200, '');
            scope = $rootScope.$new();
            element = angular.element('<episode-collection colStyle="default"></episode-collection>');
            element = $compile(element)(scope);
            scope.default = {style: 'grid'};
            scope.$digest();
        });
    });

    it('should render grid', function() {
        var h1 = element.find('h1');
        expect(h1.text()).toBe('grid');
    });


});