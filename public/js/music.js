function initMusicHtml() {
    smarty.html("music",{}, "page", function(){
        initMusic();
        refresh("refreshAll", "top", function () {
            initMusicHtml();
        });
    });
}