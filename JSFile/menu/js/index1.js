var navList=document.getElementById("navList").getElementsByTagName("li");
for(var i=0;i<navList.length;i++){
    navList[i].onmouseover=function () {
        if(this.className !="show"){
            this.className="show";
        }

    }
    navList[i].onmouseout=function () {
        if( this.className !=""){
            this.className="";
        }

    }
}