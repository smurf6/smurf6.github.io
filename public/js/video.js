/**
 * Created by lzz on 2018/11/11.
 */

function videoHtml() {
    smarty.html("video",{}, "page", function(){
        window.video.videoList({"pageindex":0,"pageSize":2}, function (data) {
            smarty.html("video_item", data, "video-list", function(){

                refresh("minirefresh",null, function () {
                    var pageSize = 1;
                    var pageIndex = $("#video-list").children(".card").length;
                    if( pageIndex < 3 ){
                        pageSize = 3;
                    }
                    var param = {"pageindex":pageIndex,"pageSize":pageSize};
                    console.log(param);
                    window.video.videoList(param, function (data) {
                        if( data.res == 0 ){
                            window.miniRefresh.endUpLoading(true);
                            return;
                        }else{
                            window.miniRefresh.endUpLoading(false);
                            smarty.append("video_item", data, "video-list", function(){

                            });
                        }
                    });
                });

            });
        });
    });
}
