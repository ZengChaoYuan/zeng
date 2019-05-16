var oLi=$('li');
var arr=[0,1,2,5,8,7,6,3];
var len=arr.length;
var flag=false;//抽奖的状态
$('.start').click(function () {
    if(flag) return;
    $('.result').hide();
    start(random(0,8));
    flag=true;
});
//点击立即抽奖 顺时针旋转
function start(num) {
    console.log(num);
    var speed=100;
    var round=4;//默认圈数
    var roundNum=round*len;
    var n=0;//转动了多少次
    timer=setTimeout(turn,speed);
    function turn() {
        var index=arr[n%8];
        //清除小框框
        oLi.removeClass('active').eq(index).addClass('active');
        n++;
        if(n>roundNum+num){
            clearTimeout(timer);
            result(index);
            return;
        }else if(n>roundNum&&n<roundNum+num){
            speed+=100;
        }
        timer=setTimeout(turn,speed);
    }
}
//生成随机数
function random(min,max) {

    return parseInt(Math.random()*(max-min)+min);

}

//处理结果
function result(index) {
   var str='';
   switch (index) {

       case 0:
           str='好冷啊';
           break;
       case 1:
           str='猫狗CP';
           break;
       case 2:
           str='好嗨哦,下雪了';
           break;
       case 3:
           str='听你使唤';
           break;
       case 5:
           str='沙发真爽';
           break;
       case 6:
           str='你好啊';
           break;
       case 7:
           str='好好学习';
           break;
       case 8:
           str='我酷不酷';
           break;
   }
   var timer2=setTimeout(function () {
       $('.result').html(str).show();
       flag=false;
   },800);
}
