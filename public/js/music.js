function initMusicHtml() {
    smarty.html("music",{}, "page", function(){
        initMusic();
        setTimeout(function () {
            if( $(".btn_play").hasClass("btn_pause") ){
                $(".btn_play").click();
            }
        },6000);
    });
}