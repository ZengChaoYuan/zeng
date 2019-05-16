$(".menu li").click(function() {
    var index = $(".menu li").index(this);
    $(".menu li").removeClass("active");
    $(this).addClass("active");
    var h = $(".content li").eq(index).offset().top;
    $('html, body').animate({
        scrollTop: h + 'px'
    }, 500);
});
function denglu() {
    var denglu=window.confirm("请先登录！");

    if(denglu){
        window.location.href="login.html";
    }else{


    }
}
