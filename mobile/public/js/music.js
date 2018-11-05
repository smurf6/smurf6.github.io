/**
 * Created by lzz on 2018/9/23.
 */

window.music_init = function(){
    var songs=[
        {title:"遇见",author:"蓝艺环",src:"./public/music/meet.mp3",image:"./public/music/yh1.jpeg",long:"5.0minute"},
        {title:"demo",author:"蓝艺环",src:"./public/music/demo.mp3",image:"./public/music/yh2.jpeg",long:"5.2minute"}];
    var curIndex=0;

//预先设置获取需要使用的数据和参数
    var lastX=0;
    var power=false;
    var silider=document.querySelector('.slider-bar');
    var progress=document.querySelector('.slider-progress');
    var dot=document.querySelector('.slider-dot-control');
    var audio=document.querySelector('audio');
    var playBtn=document.querySelector('.play_bt');
    var poster=document.querySelector('.music-poster');
    var songName=document.querySelector('.song-name');
    var songAuthor=document.querySelector('.song-author');
    var prevSong=document.querySelector('.prev_bt');
    var nextSong=document.querySelector('.next_bt');
//        设置时间滑块事件
    dot.addEventListener('touchstart',function (e) {
        var touch=e.touches[0];
        power=true;
        lastX=touch.clientX;
    })
    document.addEventListener('touchmove',function (e) {
        var touch=e.touches[0];
        if(power){
            var curX=touch.clientX;
            var addW=curX-lastX;
            var setW=progress.offsetWidth+addW;
            var maxW=silider.offsetWidth;
            if(setW>=0&&setW<=maxW){
                lastX=curX;
                var percen=setW/maxW;
            }else if(setW<0){
                percen=0;
            }else {
                percen=1;
            }
            progress.style.width=percen*100+"%";
        }
    })
    document.addEventListener('touchend',function (e) {
        if(power){
            var setW=progress.offsetWidth;
            var maxW=silider.offsetWidth;
            if(setW>=0&&setW<=maxW){
                var percen=setW/maxW;
            }else if(setW<0){
                percen=0;
            }else {
                percen=1;
            }
            progress.style.width=percen*100+"%";
            upDateProgress(percen);
        }
        power=false;
    })
    silider.addEventListener('click',function (e) {
        var setW=e.clientX-this.offsetLeft;
        var maxW=silider.offsetWidth;
        if(setW>=0&&setW<=maxW){
            var percen=setW/maxW;
            progress.style.width=percen*100+"%";
            upDateProgress(percen)
        }
    })
//        上一曲
    prevSong.onclick=function () {
        curIndex--;
        if(curIndex<0){
            curIndex=songs.length-1;
        }
        changeSong(curIndex);
        setTimeout(function () {
            audio.play();
        },200)
    }
//        下一曲
    nextSong.onclick=function () {
        curIndex++;
        if(curIndex>=songs.length){
            curIndex=0;
        }
        changeSong(curIndex);
        setTimeout(function () {
            audio.play();
        },200)
    }
//        更改进度条
    function upDateProgress(percence) {
        audio.currentTime=percence*audio.duration;
    }
//        切换歌曲
    function changeSong(index) {
        if((0<=index)&&(index<songs.length)){
            var curSong=songs[index];
            audio.src=curSong.src;
            poster.src=curSong.image;
            songName.innerHTML=curSong.title;
            songAuthor.innerHTML=curSong.author;
        }
    }
//        监听播放事件
    audio.onplay=function () {
        playBtn.className='play_bt fa fa-play-circle';
        poster.className='playing music-poster';
    }
//        监听暂停事件
    audio.onpause=function () {
        playBtn.className='play_bt fa fa-stop-circle';
        poster.className='music-poster';
    }
//        播放或暂停
    playBtn.onclick=function () {
        if(audio.paused){
            audio.play()
        }else {
            audio.pause()
        }
    }
//        监听可以播放事件
    audio.oncanplay=function () {
        document.querySelector('.all-progress').innerHTML=duration(parseInt(audio.duration))
        if(!power){
            var prence=audio.currentTime/audio.duration;
            progress.style.width=prence*100+"%";
        }
        if(audio.paused){
            playBtn.className='play_bt fa fa-play-circle';
            poster.className='music-poster';
        }else {
            playBtn.className='play_bt fa fa-stop-circle';
            poster.className='playing music-poster';
        }
    }
//        监听播放时间变化事件
    audio.ontimeupdate=function () {
        document.querySelector('.played-progress').innerHTML=duration(parseInt(audio.currentTime))
        if(!power){
            var prence=audio.currentTime/audio.duration;
            progress.style.width=prence*100+"%";
        }
    }
//        监听播放结束事件
    audio.onended=function () {
        curIndex++;
        if(curIndex>=songs.length){
            curIndex=0;
        }
        changeSong(curIndex);
        setTimeout(function () {
            audio.play();
        },200)
    }
//        格式化时间格式
    var duration=function (time) {
        var fen=parseInt(time/60);
        var miao=time%60;
        if(fen<=9){
            fen="0"+fen;
        }
        if(miao<=9){
            miao="0"+miao;
        }
        return fen+'：'+miao;
    }
    changeSong(0);
    setList(songs);
//        初始化显示歌曲列表
    function setList(songs) {
        var list=document.querySelector('table tbody');
        songs.forEach(function (song,idx){
            var html='<tr onclick="playSong('+idx+')"><td>'+song.title+'</td><td>'+song.author+'</td><td>'+ song.long + '</td></tr>';
            list.innerHTML+=html;
        })
    }
//        播放指定位置的歌曲
    function playSong(i) {
        if(curIndex!=i){
            curIndex=i;
            changeSong(curIndex);
        }else {
            audio.play();
        }
    }
}