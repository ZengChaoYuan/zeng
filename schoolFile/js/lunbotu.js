//获取按钮
var oPrev=document.getElementById('prev'),
    oNext=document.getElementById('next'),
    //类数组,取零
    oMain=document.getElementsByClassName('main')[0],
    oList=document.getElementsByClassName('list')[0],
    oLi=oList.getElementsByTagName('li'),
    oContainer=document.getElementsByClassName('container')[0];
var timer,timer2,
    oLiLength=oLi.length,
    //索引值
    index=0,
    //锁
    flag=true;

//点击向下翻页的函数
//dis为距离
function moveImg(dis) {
    //运动着不能轮播
    flag=false;
    //计时毫秒
    var time=400;//每次轮播需要的时间
    //每一小次移动的时间
    var eachTime=20;
    //每一小次移动的距离
    var eachDis=dis/(time/eachTime);
    //目标点
    var newLeft=oMain.offsetLeft+dis;

    function eachMove() {
        //当前的距离加上每一小次移动的距离的像素
        //left的值
        //设置零界值
        if(dis>0&&oMain.offsetLeft<newLeft||dis<0&&oMain.offsetLeft>newLeft){
            oMain.style.left=oMain.offsetLeft+eachDis+'px';
        }else{
            clearTimeout(timer);
            //强制地挪到目标点上
            oMain.style.left=newLeft+'px';

            if(newLeft==-6000){
                oMain.style.left=-1200+'px';
            }if(newLeft==0){
                oMain.style.left=-4800+'px';
            }
            flag=true;
        }

    }
    timer=setInterval(eachMove,eachTime);

}
//点击向上翻页
oPrev.onclick=function () {

    if(flag==false) return;
    moveImg(1200);
    if(index==0){
        index=3;
    }else {
        index--;
    }

    oLiStyle();
}
//点击向下翻页
oNext.onclick=function () {
    if(flag==false) return;
    moveImg(-1200);
    if(index==3){
        index=0;
    }else{
        index++;
    }
    oLiStyle();
}

function oLiStyle() {

    //找到小圆点点击的位置
    oList.getElementsByClassName('active')[0].className='';

    oLi[index].className='active';
}

//点击小圆点
//绑定点击时间
for(var i=0; i<oLiLength;i++){

    //立即执行函数
    (function (j) {
        if(flag==false) return;
        oLi[j].onclick=function () {
            //算距离
            var offset=(j-index)*-1200;
            //执行滑动函数
            moveImg(offset);
            //设置上
            index=j;

            //变成橘黄色效果
            oLiStyle();

        }
    })(i);

}

//自己运动起来(每隔两秒执行向下函数)
timer2=setInterval(oNext.onclick,3000);
oContainer.onmousemove=function () {
    clearInterval(timer2);
}
oContainer.onmouseout=function () {
    timer2=setInterval(oNext.onclick,3000);
}