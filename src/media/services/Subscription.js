(function() {
    'use strict';

    angular
        .module('app.media')
        .factory('Subscription', Subscription);


    function Subscription(){

        return {

            devSubscription: function(id){
                return {
                    id: 88 + id,
                    title: 'Test Episode' + id,
                    description: 'This is a test for an Episode object' + id,
                    src : 'http:shawnbeta.com' + id,
                    img : 'molly.jpg',
                    subscription_type : 1,
                    home_page : 'http:shawnbeta.com',
                    auto_download: 0,
                    create_date: 1543,
                    modified_date: 661
                }
            },

            buildSubscription: function(subscription){
                subscription.id =  parseInt(subscription.id);
                subscription.auto_download = parseInt(subscription.auto_download);
                subscription.create_date = parseInt(subscription.create_date);
                subscription.modified_date = parseInt(subscription.modified_date);
                return subscription;
            }
        }


    }
})();
