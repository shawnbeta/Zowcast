describe('StorageService', function(){

    beforeEach(function(){
        module('app.utilities');
    });

    var storageService;
    var obj = {id: 2, test: 4};
    var id = 55;

    beforeEach(inject(function( _StorageService_){
        storageService = _StorageService_;
        obj = {id: 2, test: 4};
        id = 55;
    }));

    it('Should save object as string in local storage', function(){
        // Make it happen.
        storageService.saveString(id, obj);
        // Now verify that it is set in local storage
        expect(localStorage.getItem(id)).toBe(JSON.stringify(obj));
    });

    it('Should return object from parsed JSON string', function(){
        // Now verify that it is set in local storage
        expect(storageService.loadObj(id)).toEqual(obj);
    });

});