/**
 * Created by lzz on 2018/11/17.
 */

function tourHtml() {
    smarty.html("tour",{}, "page", function(){
        window.tour.tourList({"pageindex":0,"pageSize":2}, function (data) {
            smarty.html("tour_item", data, "card-list", function(){
                refresh("minirefresh",null, function () {
                    var pageSize = 1;
                    var pageIndex = $("#card-list").children(".card").length;
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
        });

    });
}

$(document).on("click", ".back-tour", function () {
    $(this).addClass("active");
    $('[data-target="tour"].tab-item').click();
});

$(document).on("click",".tour-detail-link", function () {
    var id = $(this).data("id");
    $(".tour-detail-link").removeClass("active");
    $(this).addClass("active");
    var id = $(this).data("id");
    window.tour.tourDetail({"id":id}, function (data) {
        smarty.html("tour_detail",{"res":data.res[0]}, "page", function(){

        });
    })
});

smarty.register_modifier( 'format_tour_date', function( timestamp ) {
    if( !timestamp ){
        timestamp = (new Date()).getTime();
    }
    if( timestamp < 10000000000 ){
        timestamp = timestamp * 1000;
    }
    var date = new Date(timestamp);
    Y = date.getFullYear() ;
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ;
    D = date.getDate() ;
    if(D<10){
        D = '0'+ D;
    }
    var res = "<span style='font-size: 20px;margin-top: 20px'>" + D + "号</span><br>";
    res += "<span style='font-size: 6px'>" +Y + "/" + M + "</span>";
    return res;
});

