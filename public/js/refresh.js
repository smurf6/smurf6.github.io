/**
 * Created by lzz on 2018/11/15.
 */

function refresh(id, downcallback, upcallback){
    var miniRefresh = new MiniRefresh({
        container: '#' + id,
        down: {
            callback: function() {
                // 下拉事件
                setTimeout(function(){
                    if( typeof(downcallback) == "function" ){
                        downcallback();
                    }
                    miniRefresh.endDownLoading();

                },2000)

            }
        },
        up: {

            callback: function() {
                setTimeout(function(){
                    if( typeof(upcallback) == "function" ){
                        upcallback();
                    }
                    miniRefresh.endUpLoading(false);

                },2000)

            }
        }
    });

}