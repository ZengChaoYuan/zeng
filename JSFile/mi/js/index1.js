var tabs=document.getElementById("tabs").getElementsByTagName("li");
var lists=document.getElementById("lists").getElementsByTagName("ul");
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=showList;
}
//内容也跟着随之发生改变
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