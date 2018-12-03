/**
 * Created by lzz on 2018/12/3.
 */

function initOwner() {
    window.owner.ownerContent({}, function (obj) {
        smarty.html("owner", obj.res[0], "page", function(){

        });
    });

}
