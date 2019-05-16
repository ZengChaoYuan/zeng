//     scrollHeight:获取对象的滚动高度。
//     scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离
//     scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
//     scrollWidth:获取对象的滚动宽度
//     offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
//     offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
//     offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
//     event.clientX 相对文档的水平座标
//     event.clientY 相对文档的垂直座标
//获取元素
var audio=document.getElementById("audio"),
    ocurrentTime=document.getElementsByClassName("current-time")[0],
    oduration=document.getElementsByClassName("duration")[0],
    btn=document.getElementsByClassName("btn")[0],
    oIsPlay=btn.getElementsByClassName("iconfont")[0],
    proActive=document.getElementsByClassName("pro-active")[0],
    oProBox=document.getElementsByClassName("pro-box")[0],
    oRadioBox=document.getElementsByClassName("radio-box")[0];
//计时器
var timer;
//全局变量
var allduration;
//进度条宽度
var bgWidth=232;
//加载完执行事件
//在线请求 ondurationchange
//audio.oncanplay
window.onload=function () {
    ocurrentTime.innerHTML=conversion(0);
    allduration=audio.duration;
    oduration.innerHTML=conversion(allduration);
}
//转换数字
function conversion(time) {
    //秒
    var sec=parseInt(time%60)<10 ? '0'+parseInt(time%60):parseInt(time%60);
    //分
    var min=parseInt(time/60)<10 ? '0'+parseInt(time/60):parseInt(time/60);
    return min +":"+sec;
}
//播放点击事件
btn.onmouseup=function () {
    if(audio.paused){
        musicPlay();
    }else{
        musicPaused();
    }
}
//移动的进度条
function movePro() {
// currentTime/duration=width/allWidth
// currentTime/duration*allWidth=width 按比列计算进度条走的时长
    var currentTime=audio.currentTime;
    //每一秒都会获取到current值,并赋上值
    ocurrentTime.innerHTML=conversion(currentTime);
    proActive.style.width=currentTime/allduration*bgWidth+8+"px";
}
//音乐播放
function musicPlay(){
    audio.play();
    oIsPlay.className="iconfont icon-zanting";
    //movePro()括号不能加，加了就立即执行
    timer=setInterval(movePro,200);
}
//音乐暂停
function musicPaused(){
    audio.pause();
    oIsPlay.className="iconfont icon-bofang";
    clearInterval(timer);
}
//播放结束后重新播放事件
audio.onended=function () {
    //从头再播
    //1.先暂停
    musicPaused();
    audio.currentTime=0;
    ocurrentTime.innerHTML=conversion(0);
    proActive.style.width=8+"px";
    musicPlay();
}
//鼠标拖拽
oRadioBox.onmousedown=function () {
    clearInterval(timer);
    var c=audio.currentTime;
    //给整个body绑定移动
    document.body.onmousemove=function (e) {
        //距离浏览器左侧的值
        var newWidth=e.clientX-oProBox.getBoundingClientRect().left;
        if(newWidth<8){
            newWidth=8;
        }else if(newWidth>240){
            newWidth=240;
        }
        proActive.style.width=newWidth+"px";
        //计算
        c=(newWidth-8)/bgWidth*allduration;
        audio.currentTime=c;
        ocurrentTime.innerHTML=conversion(c);

    }
    document.body.onmouseup=function () {
        document.body.onmousemove=null;
        document.body.onmouseup=null;
        musicPlay();
        audio.currentTime=c;
    }
}


