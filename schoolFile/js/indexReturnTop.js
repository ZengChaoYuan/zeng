window.onload=function () {

        var returntopnav=document.getElementById("returnTop");
        var fixtopnav=document.getElementById("fixtop");
        window.onscroll=function () {
            var scrollTop=window.pageYOffset;//位置的偏移
            if(scrollTop>60){
                fixtopnav.className="show";
                returntopnav.className="showtop";
            } else{
                returntopnav.className="";
                fixtopnav.className="";
            }

            returntopnav.onclick=function () {

                window.scroll(0,0);

            }
        }




}