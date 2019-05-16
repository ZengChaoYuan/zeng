
//获得所有元素
var  nav_home=document.getElementById("nav-home");
var  nav_business=document.getElementById("nav-business");
var  nav_car=document.getElementById("nav-car");
var  home=document.getElementById("home");
var  business=document.getElementById("business");
var  car=document.getElementById("car");

//设置business和car初始状态不显示
business.style.display="none";
car.style.display="none";
//设置nav_home初始状态为被点击效果
nav_home.className="active";
nav_home.onclick=function () {
    hideAll();
    home.style.display="block";
    nav_home.className="active";
}
nav_business.onclick=function () {
    hideAll();
    business.style.display="block";
    nav_business.className="active";
}
nav_car.onclick=function () {
    hideAll();
    car.style.display="block";
    nav_car.className="active";
}
function hideAll() {
    //将所有的内容都设置为隐藏，所有链接的样式类都清除
    home.style.display='none';
    business.style.display='none';
    car.style.display='none';
    nav_home.className='';
    nav_business.className='';
    nav_car.className='';

}