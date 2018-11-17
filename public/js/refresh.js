/**
 * Created by lzz on 2018/11/15.
 */

function refresh(id, position, callback){
    //1.获取到列表的dom，刷新显示部分的dom，列表父容器的dom
    var container = document.querySelector('#' + id);
    var refreshText = document.querySelector('.' + id);
    var parent = $('.' + id + '-parent');
    var ableLoad = false;
    parent.off();
    //2.定义一些需要常用的变量
    var startY = 0;//手指触摸最开始的Y坐标
    var endY = 0;//手指结束触摸时的Y坐标

    //3.给列表dom监听touchstart事件,得到起始位置的Y坐标
    parent.on('touchstart', function(e ){
        startY = e.originalEvent.targetTouches[0].pageY;
    });

    //4.给列表dom监听touchmove事件，当移动到一定程度需要显示上面的文字

    parent.on('touchmove',function (e) {
        var distance = e.originalEvent.targetTouches[0].pageY-startY;
        if( isTop() && distance < -50 ){
            ableLoad = true;
            refreshText.classList.remove("hidden");
        }else{
            ableLoad = false;
        }
    });

    //5.给列表dom监听touchend事件，此时说明用户已经松开了手指，应该进行异步操作了
    parent.on('touchend',function (e) {
        if(isTop() && ableLoad){
            if( typeof(callback) == "function" ){
                setTimeout(function(){
                    refreshText.classList.add("hidden");
                    console.log("回调函数");
                    callback();
                    ableLoad = false;

                },2000)
            }else{
                setTimeout(function(){
                    refreshText.classList.add("hidden");
                    console.log('成功刷新');
                    ableLoad = false;

                },2000)
            }
        }
        return;
    });

    function isTop(){
        console.log( $(window).scrollTop());
        console.log(  $(window).height() );
        console.log( $("#page").height());
        return true;
    }

}