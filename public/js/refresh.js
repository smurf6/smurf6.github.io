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
        var distance = Math.abs(e.originalEvent.targetTouches[0].pageY-startY);
        if( isTop() && distance > 50 ){
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
        if(getScrollHeight() == getWindowHeight() + getDocumentTop()){
            return true;
        }
        return false;
    }

}

//文档高度
function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
//可视窗口高度

function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
//滚动条滚动高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

