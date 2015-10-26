app.ui.factory('UIService',
    [
        function() {


            return {

                toggleBrowseBySubscription: function(){
                  var bebs =  jQuery('.episodeBySubscriptionBrowser');
                    var subNav = jQuery('subscription-navigation');
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
                    console.log('works');
                    var navBar = jQuery('.swNavBar');
                    if(jQuery(navBar).css('position') != 'fixed'){
                        console.log(-jQuery(navBar).innerHeight());
                        jQuery(navBar).css({
                            top: -jQuery(navBar).innerHeight(),
                            //left: 0,
                            position: 'fixed'
                        });
                        jQuery('body').css({
                            'padding-top': jQuery(navBar).innerHeight()
                        });
                        jQuery('.menuToggler').css({
                            background: 'blue',
                            'z-index': 5
                        });
                        jQuery(navBar).animate({
                            top: 0
                        }, 500)
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
    ]);