describe('StorageService', function(){

    beforeEach(function(){
        module('StorageService');
    });

    var storageService;

    beforeEach(inject(function( _storageService_){
        storageService = _storageService_;
    }));

    it('Should save object as string in local storage', function(){

        var obj = {id: 2, test: 4};
        var id = 55;

        // Call the function
        storageService.saveString(id, obj);

        // Now verify that it is set in local storage
        expect(localStorage.getItem(id)).toBe(JSON.stringify(obj));



    });

});