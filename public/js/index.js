/**
 * Created by lzz on 2018/9/23.
 */
function initHome() {
    window.guita.homebar({}, function (data) {
        var guitas = {"bar":[],"hot":[],"recomment":[]};
        guitas.bar = data.res;
        window.guita.recommend({}, function (data) {
            guitas.recomment = data.res;
            window.guita.hotguita({}, function (data) {
                guitas.hot = data.res;
                console.log(guitas);
                smarty.html("home",guitas, "page", function(){
                    //隐藏加载
                    document.querySelector('.refreshAll').classList.add("hidden");
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

                    var miniRefresh = new MiniRefresh({
                        container: '#minirefresh',
                        down: {
                            callback: function() {
                                // 下拉事件
                                setTimeout(function(){
                                    miniRefresh.endDownLoading();

                                },2000)

                            }
                        },
                        up: {

                            callback: function() {
                                window.guita.hotguita({}, function (data) {
                                    var hot = {"hot": data.res};
                                    console.log(hot);
                                    smarty.append("hot_guita", hot, "hot-guita", function(){

                                    });
                                });
                                miniRefresh.endUpLoading(false);
                            }
                        }
                    });
                });
            });
        });

    });

}
