(function() {
    'use strict';

    angular
        .module('app.ui')
        .factory('UIService', UIService);

    function UIService(){

        return {

            toggleBrowseBySubscription: function(){
                var bebs =  jQuery('.episodeBySubscriptionBrowser');
                if(bebs.css('display') == 'none'){
                    var height = jQuery(bebs).innerHeight();
                    jQuery('.subscriptionBrowserWrapper')
                        .height(height)
                        .html(bebs);
                    jQuery(bebs)
                        .css({ display: 'block', opacity: 0})
                        .animate({
                            opacity: 1
                        });
                }else{
                    bebs.animate({
                        opacity: 0
                    }, 100, function(){
                        bebs.css({ display: 'none', opacity: 0});
                    });
                    jQuery('.subscriptionBrowserWrapper').height(0);

                }
            },

            fadeAnimate: function(element, opacity, _callBack){
                jQuery('.swMessage').animate({
                    opacity: 0
                }, 500, function(){
                    if(_callBack)
                        _callBack();
                });
            },

            toggleMenu: function(){
                var navBar = jQuery('.swNavBar');
                if(jQuery(navBar).css('position') != 'fixed'){
                    jQuery(navBar).css({
                        top: -jQuery(navBar).innerHeight(),
                        position: 'fixed'
                    });
                    jQuery('body').css({
                        'padding-top': jQuery(navBar).innerHeight()
                    });
                    jQuery('.menuToggler').css({
                        background: '#4486f8',
                        'z-index': 5
                    });
                    jQuery(navBar).animate({
                        top: 0
                    }, 500);
                }else{
                    jQuery(navBar).animate({
                        top: -jQuery(navBar).innerHeight()
                    }, 500, function(){
                        jQuery(navBar).css({
                            top: 0,
                            position: 'relative'
                        });
                        jQuery('body').css({
                            'padding-top': 0
                        });
                        jQuery('.menuToggler').css({
                            background: 'red',
                            'z-index': 3
                        });
                    });



                }
            }

        }


    }
})();