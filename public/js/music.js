function initMusicHtml() {
    smarty.html("music",{}, "page", function(){
        initMusic();
        setTimeout(function () {
            $(".btn_play").click();
        },5000);
    });
}