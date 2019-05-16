//展示第一个，索引值为0
var index=0;
//五个图片
var num=5;
//图片宽度520
var itemWidth=520;
//计时器
var timer=undefined;
//图像轮播
timerFun();


//左右按钮的点击事件
function move(direction){
    //怎么清空计时器呢？
    clearTimeout(timer);
    //每次点击之前，我们都要让动画立即执行完成
    $('.img-box').stop(false,true);
    if(direction=='prev'){
        index--;
        //怎么从1快速地切换到5呢?
        if(index<0){
            $('.img-box').css({
                left:num* -itemWidth
            });
            index=4;
        }
    }else if(direction=='next'){
        index++;
        if(index>num){
        //怎么从1快速地切换到2呢?
        $('.img-box').css({
            left: 0
        });
            index=1;
        }
    }
    //让整体图片向左滑动
    $('.img-box').animate({
        left:index* -itemWidth
    },function () {//轮播效果:图片每次向左滑动就执行一次计时器
        timerFun();
    });
    //这边用三元运算符做判断，因为索引值没有5
    active($('.item').eq(index==5 ? 0:index));
}

$('.prevBtn').click(function () {
    move('prev');

});
$('.nextBtn').click(function () {
    move('next');
});
//轮播效果
function timerFun(){
    timer=setTimeout(function () {
        move('next');
    },3000);
}

//橘黄色效果
function active(dom){
    //清除所有的active类名
    $('.active').removeClass('active');
    //添加上橘黄色效果
    dom.addClass('active');
}
//给小圆点:item绑定点击事件
$('.item').click(function () {
    index=$(this).index();
    move('');
});

