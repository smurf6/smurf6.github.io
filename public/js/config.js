window.domain="http://39.105.114.48:8182/";
//window.domain="http://localhost:8182/"
window.apiurl=window.domain + "super/api/restful/";

if (window != top) {
    console.log("000");
}
if (self.frameElement) {
    console.log("111");
}
//方式二
if (parent.frames.length) {
    console.log("222");
}
//方式三
if (self != top) {
    console.log("333");
}

if(self.frameElement){
    console.log("开始执行下面");
    initAdminJs();
}

function initAdminJs(){
    $.getScript("http://39.105.114.48:8182/js/admin/config.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/common.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/plugin.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/manager.js",function(){
        console.log("loding manager js");
    });
}