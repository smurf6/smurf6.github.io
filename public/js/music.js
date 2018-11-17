function initMusicHtml() {
    smarty.html("music",{}, "page", function(){
        initMusic();
        refresh("minirefresh",function () {
            initMusicHtml();
        }, null);
    });
}