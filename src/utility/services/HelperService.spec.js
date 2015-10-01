describe('HelperService', function(){

    var httpBackend;

    beforeEach(function(){
        module('hcUtilities');
    });


    beforeEach(inject(function( _HelperService_, $httpBackend){
        helperService = _HelperService_;
    }));


    it('Should return an array', function(){


    });

});


describe('HelperServiceRequest', function(){

    var httpBackend;
    var collection;
    var errorStatus = '';
    var handler;
    var helperService;


    beforeEach(function(){
        module('hcUtilities');
    });


    beforeEach(inject(function( _HelperService_, $httpBackend){
        helperService = _HelperService_;
        httpBackend = $httpBackend;
        collection = [];
        errorStatus = '';
        handler = {
            success: function(data) {
                collection = data;
            },
            error: function(data) {
                errorStatus = data;
            }
        };
        spyOn(handler, 'success').and.callThrough();
        spyOn(handler, 'error').and.callThrough();
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('Should return an array', function(){

        var url = '/episodes';
        var rsp = ['item one', 'item two'];
        httpBackend.whenPOST(url).respond(rsp);
        helperService.makeRequest(url).then(handler.success, handler.error);
        httpBackend.flush();

        expect(handler.success).toHaveBeenCalled();
        expect(collection).toEqual(rsp);
        expect(handler.error).not.toHaveBeenCalled();
        expect(errorStatus).toEqual('');

    });

});