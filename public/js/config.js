window.domain="http://39.105.114.48:8182/";
//window.domain="http://localhost:8182/"
window.apiurl=window.domain + "super/api/restful/";

if(window != top){
    console.log("开始执行下面");
    initAdminJs();
}

function initAdminJs(){
    $.getScript("http://39.105.114.48:8182/vender/jquery/jquery-1.10.2.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/flatlab/js/html5shiv.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/flatlab/js/respond.min.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/flatlab/js/bootstrap.min.js",function(){});

        $.getScript("http://39.105.114.48:8182/vender/flatlab/js/jquery.scrollTo.min.js",function(){});
            $.getScript("http://39.105.114.48:8182/vender/flatlab/js/jquery.nicescroll.js",function(){});
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/datatables/jquery.dataTables.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/datatables/dataTables.bootstrap.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/wangeditor/wangEditor.js",function(){});

    $.getScript("http://39.105.114.48:8182/vender/switch/dist/js/bootstrap-switch.js",function(){});


    $.getScript("http://39.105.114.48:8182/vender/sparrow/i18n/lang.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/sparrow/layer/layer.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/sparrow/ajax.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/sparrow/json.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/sparrow/pack.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/sparrow/util.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/sparrow/smarty.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/sparrow/validate.js",function(){});
    $.getScript("http://39.105.114.48:8182/core/userApi.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/common/common.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/common/search-form.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/common/jstpl.js",function(){});

    $.getScript("http://39.105.114.48:8182/js/admin/config.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/common.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/plugin.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/upload/upload.js",function(){});
    $.getScript("http://39.105.114.48:8182/vender/laydate/laydate.js",function(){});

    $.getScript("http://39.105.114.48:8182/js/admin/menu.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/login.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/monitor.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/index.js",function(){});
    $.getScript("http://39.105.114.48:8182/js/admin/manager.js",function(){});
        
       
}