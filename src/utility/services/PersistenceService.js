app.utility.factory('PersistenceService', [
    function() {

        return {

            save: function(id, model){
                localStorage.setItem(id, JSON.stringify(model));
            },

            loadData: function(_id){
                var stringData = localStorage.getItem(_id);
                return JSON.parse(stringData);
            },

            updateModel: function(id, model){
                // Simple. Just overwrite the existing model string.
                localStorage.setItem(id, JSON.stringify(model));
            }

        }

}]);

 
 