//获取元素
var myAD=document.getElementById("myAD");
var myClose=document.getElementById("myClose");
//设置参数
var adHeight=0;
var allHeight=324;
//怎么让功能不会执行第二次

//关闭功能
myClose.onclick=function () {
    var interest=window.confirm("您对此广告不感兴趣吗？");
    if(interest){
        var close=setInterval(CloseFuc,50);
        function CloseFuc() {
            if(allHeight<=324){
                adHeight-=2;
                myAD.style.height=adHeight+"px";
            }else if(allHeight==0){
                myAD.style.display="none";
                clearInterval(close);
            }
        }
    }else{

    }

}

//延时2秒显示
var timer=setTimeout(showFuc,2000);
function showFuc() {
    var show=setInterval(function () {
        if(adHeight<324){
            adHeight+=2;
            myAD.style.height=adHeight+"px";
        }else{
            adHeight=="324px";
            clearInterval(show);
        }
    },2)

}