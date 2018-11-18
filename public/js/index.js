/**
 * Created by lzz on 2018/9/23.
 */
function initHome() {
    window.guita.homebar({}, function (data) {
        var guitas = {"bar":[],"hot":[],"recomment":[]};
        guitas.bar = data.res;
        window.guita.recommend({}, function (data) {
            guitas.recomment = data.res;
            guitas.hot = {};
            console.log( guitas );
            smarty.html("home",guitas, "page", function(){
                new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay:{
                        autoplay:true
                    }
                });
                new Swiper('.recommend-swiper-container',{
                    slidesPerView: 3,//一行显示3个
                });

                refresh("minirefresh",function () {
                    initHome();
                }, function () {
                    var pageSize = 1;
                    var pageIndex = $("#hot-guita > .card").children().length;
                    if( pageIndex < 3 ){
                        pageSize = 1;
                    }
                    var param = {"pageindex":pageIndex,"pageSize":pageSize};
                    window.guita.hotguita(param, function (data) {
                        var hot = {"hot": data.res};
                        if( data.res == 0 ){
                            window.miniRefresh.endUpLoading(true);
                            return;
                        }else{
                            window.miniRefresh.endUpLoading(false);
                            smarty.append("hot_guita", hot, "hot-guita", function(){

                            });
                        }
                    });
                });

            });
        });

    });

}


$(document).on("click","#contact-button", function () {
    var contact_box = $("#contact-div");
    if( contact_box.hasClass("show") ){
        contact_box.removeClass("show");
        contact_box.addClass("noshow");
        $("#contact-button-icon").removeClass("fa-angle-double-left");
        $("#contact-button-icon").addClass("fa-angle-double-right");
        $("#contact-button-text").text("快速联系");
    }else{
        contact_box.addClass("show");
        contact_box.removeClass("noshow");
        $("#contact-button-icon").removeClass("fa-angle-double-right");
        $("#contact-button-icon").addClass("fa-angle-double-left");
        $("#contact-button-text").text("快速收起");
    }
});