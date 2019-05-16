var tabs=document.getElementById("tabs").getElementsByTagName("li");
for (var i=0; i<tabs.length;i++){
    tabs[i].onclick=showList;
}
//改变得到active类的样式
function showList() {
    for (var i=0;i<tabs.length;i++){
        if(tabs[i]===this){
            tabs[i].className="active";
        }else{
            tabs[i].className="";
        }
    }
}