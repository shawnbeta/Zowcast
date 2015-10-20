app.media.factory('Subscription', [
    function() {

        return {

            buildSubscription: function(subscription){
                subscription.id =  parseInt(subscription.id);
                //this.title = data.title;
                //this.description = data.description;
                //this.src = data.src;
                //this.img = data.img;
                //this.subscription_type = data.subscription_type;
                //this.home_page = data.home_page;
                subscription.auto_download = parseInt(subscription.auto_download);
                subscription.create_date = parseInt(subscription.create_date);
                subscription.modified_date = parseInt(subscription.modified_date);
                return subscription;
            }
        }
    }
]);