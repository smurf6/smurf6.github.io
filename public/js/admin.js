/**
 * Created by lzz on 2018/12/6.
 */

if(window != top){
    console.log("开始执行下面");
    window.parent.postMessage( JSON.stringify({"type":"device", "res":"mobile"}),"*");

    $(document).on("mouseover", ".admin-edit", function (e) {
        var table = $(this).data("table");
        var id = $(this).data("id");
        var field = $(this).data("field");
        var jsonMsg = {"table":table, "id":id, "field":field};
        var param = {"type":"edit-field", "res":jsonMsg};
        if( table && id && field ){
            $('.admin-edit').contextMenu('adminMenu', {
                bindings:
                {
                    'menu-edit-field': function(t) {
                        param.type = "edit-field";
                        window.parent.postMessage( JSON.stringify(param),"*");
                    },
                    'menu-delete': function(t) {
                        param.type = "delete-row";
                        window.parent.postMessage( JSON.stringify(param),"*");
                    },
                    'menu-edit-row': function(t) {
                        param.type = "edit-row";
                        window.parent.postMessage( JSON.stringify(param),"*");
                    },
                    'menu-edit-add': function(t) {
                        param.type = "add-row";
                        window.parent.postMessage( JSON.stringify(param),"*");
                    }
                }
            });
        }
    });

}
