/**
 * Created by lzz on 2018/12/6.
 */


if(window != top){
    console.log("开始执行下面");
    window.parent.postMessage( JSON.stringify({"type":"device", "res":"mobile"}),"*");

    $(document).on("dblclick",".admin-edit", function () {
        var table = $(this).data("table");
        var id = $(this).data("id");
        var field = $(this).data("field");
        var jsonMsg = {"table":table, "id":id, "field":field};
        var param = {"type":"admin", "res":jsonMsg};
        window.parent.postMessage( JSON.stringify(param),"*");
    });
}
