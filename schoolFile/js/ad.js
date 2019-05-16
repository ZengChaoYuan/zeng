var myAD=document.getElementById("myAD");
var myClose=document.getElementById("myClose");
var adHeight=0;
var allHeiht=324;
//关闭 是让这个Clss效果隐藏掉
myClose.onclick=function () {
    var Close=setInterval(CloseFunc,1);
    function CloseFunc() {
        if(allHeiht<=324){
            allHeiht-=1;
            myAD.style.height=allHeiht+"px";//字符串
        }else if(allHeiht==0){
            myAD.style.display="none";
            clearInterval(Close);
        }
    }
}
var timer=setTimeout(adShowFunc,15000);
function adShowFunc() {
    var show = setInterval(function() {
        if(adHeight<324){
            adHeight+=2;
            myAD.style.height=adHeight+"px";//字符串
        }else{
            myAD.style.height="324px";
            clearInterval(show);
        }
    }, 2);



}