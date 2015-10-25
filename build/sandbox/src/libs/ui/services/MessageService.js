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
                    var self = this;
                    mTimer = $interval(function(){
                        $interval.cancel(mTimer);
                        mTimer = undefined;
                        UIService.fadeAnimate('.swMessage', 0, function(){
                            $rootScope.message = undefined;
                        });
                    }, 4000);

                }

            }
        }
        ]);