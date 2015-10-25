app.ui.factory('MessageService',
    ['$rootScope', '$interval', 'UIService',
        function($rootScope, $interval, UIService) {

            var mTimer;

            return {

                displayMessage: function(text, msgType, _closeMessageTimer){
                    $rootScope.message.text = text;
                    $rootScope.message.msgType = msgType;
                    if(_closeMessageTimer)
                        _closeMessageTimer();
                },

                closeMessageTimer: function(){
                    if(angular.isDefined(mTimer)) return;
                    mTimer = $interval(function(){
                        $interval.cancel(mTimer);
                        mTimer = undefined;
                        $rootScope.message = UIService.fadeAnimate('.swMessage', 0, function(){
                            return null;
                        });
                    }, 4000);

                }

            }
        }
        ]);