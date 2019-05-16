
//实现功能
//规则:存值为1,用户拿到的值和我们运算的值不能是一样的
//使用find()可以使用end()回退事件
var value=1;
//当值大于等于20或者小于等于1的时候，把样式添加上
function notIn() {
    if(value>=20){
        $('.next').addClass('min');
    }else if(value<=1){
        $('.prev').addClass('min');
    }else {//其他情况下，谁有就清除掉这个class类名
        $('.min').removeClass('min');
    }
}
//一开始默认是灰色的
notIn();
//因为加和减里面的代码差不多，所以精简一点
function count(num){
    //这边必须从input框中取值,不能直接用value了,这边要用$(this).val()
    //这边要使用取整，把字符串转成整数
    value=parseInt($('.text').val())+num;
    //判断值的边界
    if(value<=1){
        value=1;
    }else if(value>=20){
        value=20;
    }
    //把值赋给输入框
    $('.text').val(value);
}
// $('.wrapper').find('.prev').click(function () {
//   count(-1);
//   //变灰效果
//     notIn();
// }).end().find('.next').click(function () {
//    count(+1);
//   //变灰效果
//     notIn();
// });
$('.prev').add('.next').click(function () {
    //判断一下是不是有prev类
    if($(this).hasClass('prev')){
        count(-1);
    }else{
        count(+1);
    }
    notIn();
});
