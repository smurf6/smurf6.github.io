function initMusicHtml() {
    smarty.html("music",{}, "page", function(){
        initMusic();
        setTimeout(function () {
            $("#music-load").addClass("hidden");
        },7000);
    });
}