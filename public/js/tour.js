/**
 * Created by lzz on 2018/11/17.
 */

function tourHtml() {
    smarty.html("tour",{}, "page", function(){
        refresh("minirefresh",null, function () {
            var pageSize = 1;
            var pageIndex = $("#card-list > .card").children().length;
            if( pageIndex < 3 ){
                pageSize = 3;
            }
            var param = {"pageindex":pageIndex,"pageSize":pageSize};
            console.log(param);
            window.tour.tourList(param, function (data) {
                console.log(data);
                if( data.res == 0 ){
                    window.miniRefresh.endUpLoading(true);
                    return;
                }else{
                    window.miniRefresh.endUpLoading(false);
                    smarty.append("tour_item", data, "card-list", function(){

                    });
                }
            });
        });

    });
}