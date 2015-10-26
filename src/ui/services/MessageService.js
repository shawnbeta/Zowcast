app.ui.factory('MessageService',
    ['$rootScope', '$interval', 'UIService',
        function($rootScope, $interval, UIService) {

            var mTimer;

            return {

                displayMessage: function(text, msgType, _closeMessageTimer){
                    console.log('workign')
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
                        $rootScope.message.text = null;
                    }, 4000);

                },

                clearMessage: function(){
                    $rootScope.message.text = null;
                }

            }
        }
        ]);