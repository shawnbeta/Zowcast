app.utility.factory('UtilityService', [
    function() {

        return {

            getViewportSize: function(){
                return {
                    w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                }
            }

        }

    }]);




