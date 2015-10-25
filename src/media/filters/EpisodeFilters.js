app.media.filter('orderByPubDate', ['_', function(_) {
    return function(models, order) {
        return _.sortBy(models, 'pub_date', true).reverse();
    };
}]);

app.media.filter('filterBySubscription', function() {
    return function(episodes, activeSubscription, subscriptionFilterStatus) {
        if(subscriptionFilterStatus){
            return _.filter(episodes, function(episode){
                return episode.subscription == activeSubscription;
            });
        }else{
            return episodes;
        }
    };
});  