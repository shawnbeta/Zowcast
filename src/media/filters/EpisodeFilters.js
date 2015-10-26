app.media.filter('orderByPubDate', ['_', function(_) {
    return function(models) {
        return _.sortBy(models, 'pubDate', true).reverse();
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