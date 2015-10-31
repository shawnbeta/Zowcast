(function() {
    'use strict';

    angular
        .module('app.media')
        .filter('filterBySubscription', filterBySubscription);

    function filterBySubscription(){

        return function(episodes, activeSubscription, subscriptionFilterStatus) {
            console.log(activeSubscription, subscriptionFilterStatus)
            if(subscriptionFilterStatus){
                return _.filter(episodes, function(episode){
                    return episode.subscription == activeSubscription;
                });
            }else{
                return episodes;
            }
        };
    }

})();