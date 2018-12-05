/**
 * Created by lzz on 2018/12/6.
 */


if(window != top){
    console.log("开始执行下面");

    $(document).on("dblclick",".admin-edit", function () {
        var table = $(this).data("table");
        var id = $(this).data("id");
        var jsonMsg = {"table":table, "id":id};
        window.parent.postMessage( JSON.stringify(jsonMsg),"*");
    })
}
