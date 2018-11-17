function initMusicHtml() {
    smarty.html("music",{}, "page", function(){
        initMusic();
        refresh("refreshAll", "bottom");
    });
}