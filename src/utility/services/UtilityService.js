app.utility.factory('UtilityService', [
    function() {

        return {

            getViewportSize: function(){
                return {
                    w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                }
            },

            setMediaAdditions: function($rootScope, response){
                console.log(response);
                $rootScope.subscriptions = response.data.subscriptions;
                // Subscriptions to local storage overwriting existing values
                localStorage.setItem('subscriptions', JSON.stringify($rootScope.subscriptions));
                $rootScope.episodes = response.data.episodes;
                // Subscriptions to local storage overwriting existing values
                localStorage.setItem('episodes', JSON.stringify($rootScope.subscriptions));
            }

        }

    }]);


