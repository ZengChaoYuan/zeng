var tabs=document.getElementById("tabs").getElementsByTagName("li");
var lists=document.getElementById("lists").getElementsByTagName("ul");
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=showList;
}

function showList() {
    for(var i=0;i<tabs.length;i++){
        //如何使值一一对应，this
        if(tabs[i]===this){
            tabs[i].className="active";
            lists[i].className="clearfix active"
        }else{
            tabs[i].className="";
            lists[i].className="clearfix"
        }
    }
}
var seckillNav=document.getElementById("seckillNav");
window.onscroll=function () {
    //滚动的偏移值
    var scroll=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||0;
    if(scroll>=260){
        seckillNav.className="seckill-nav seckill-navfixed";
    }else{
        seckillNav.className="seckill-nav";
    }
}
