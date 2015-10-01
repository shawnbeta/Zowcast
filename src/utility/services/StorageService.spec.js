describe('StorageService', function(){

    beforeEach(function(){
        module('hcUtilities');
    });

    var storageService;

    beforeEach(inject(function( _StorageService_){
        storageService = _StorageService_;
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