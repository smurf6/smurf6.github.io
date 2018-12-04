/**
 * Created by lzz on 2018/11/11.
 */

function videoHtml() {
    smarty.html("video",{}, "page", function(){
        var isRequest = false;
        refresh("minirefresh",null, function () {
            if( isRequest ){
                return;
            }
            var pageSize = 1;
            var pageIndex = $("#video-list > .card").children().length;
            if( pageIndex < 3 ){
                pageSize = 3;
            }
            var param = {"pageindex":pageIndex,"pageSize":pageSize};
            isRequest = true;
            window.video.videoList(param, function (data) {
                if( data.res == 0 ){
                    window.miniRefresh.endUpLoading(true);
                    return;
                }else{
                    window.miniRefresh.endUpLoading(false);
                    smarty.append("video_item", data, "video-list", function(){
                        isRequest = false;
                    });
                }
            });
        });
    });
}
