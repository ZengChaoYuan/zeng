
//切换场景
var leftImgAry=document.getElementById("left").getElementsByTagName("img");
var rightImgAry=document.getElementById("right").getElementsByTagName("img");
var pointer=document.getElementById("pointer");
//鼠标移动
var TopAry=[0,144,284];
for( var i=0;i<leftImgAry.length;i++){
    leftImgAry[i].onmouseover=mouseOver;
    //存值非常重要
    leftImgAry[i].index=i;
}
function mouseOver() {
    for ( var i=0;i<rightImgAry.length;i++){
        if( i == this.index){
            //右侧图片显示
            rightImgAry[i].className="show";
            //pointer移动
            Top=TopAry[i];
            nowTop=pointer.offsetTop;
            if(moveLoop=null){
                moveLoop=setInterval(moveTo,10);
            }

        }else rightImgAry[i].className="";


    }
}
//刷新所使用的计时器
var moveLoop=setInterval(moveTo,10);
//移动
var Top=284;
var nowTop=0;
var speed=1;
function moveTo() {
    //从上往下移动
    if(nowTop<Top){
        nowTop+=speed;
        if(nowTop>=Top){
            nowTop=Top;
            //结束
            clearInterval(moveLoop);
            moveLoop=null;
        }
    }

    //从下往上移动
    //这边符号写错了，和moveLoop=null写成了moveLoop==null
    if(nowTop>Top){
        nowTop-=speed;
        if(nowTop<=Top){
            nowTop=Top;
            //结束
            clearInterval(moveLoop);
            moveLoop=null;
        }

    }
    if(nowTop == Top){
        clearInterval(moveLoop);
        moveLoop=null;

    }
    //重要，计算中最重要
    pointer.style.top=nowTop+"px";
}


