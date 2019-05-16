//滑动导航
$(document).ready(function () {
    $('#menu,#close-side-nav').click(function (event) {
        event.preventDefault();
        //toggleClass对设置或移除被选元素的一个或多个类进行切换
        $('#main,#side-nav').toggleClass('off-display');
    });
});
//计算出当前的时间
window.onload = function() {
    var show = document.getElementById("show");
    setInterval(function() {
        var time = new Date();
        // 程序计时的月从0开始取值后+1
        var m = time.getMonth() + 1;
        var t = time.getFullYear() + "-" + m + "-"
            + time.getDate() + " " + time.getHours() + ":"
            + time.getMinutes() + ":" + time.getSeconds();
        show.innerHTML = t;
    }, 1000);
};

//弹出图层
$(document).ready(function () {
    $('a,#close,#popup-bg').click(function (e) {
        //不希望当前页面跳转
        e.preventDefault();
        $('#popup').toggleClass('show');
        $('#popup-content').toggleClass('show');
    });

});