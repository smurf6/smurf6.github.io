/**
 * Created by lzz on 2018/11/17.
 */

function tourHtml() {
    smarty.html("owner",{}, "page", function(){
        refresh("refreshAll", "top", function () {
            tourHtml();
        });
    });
}