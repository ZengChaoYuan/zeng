window.onload=function () {

    var returntopnav=document.getElementById("returnTop");

    window.onscroll=function () {
        var scrollTop=window.pageYOffset;//位置的偏移
        if(scrollTop>300){

            returntopnav.className="showtop";
        } else{
            returntopnav.className="";

        }

        returntopnav.onclick=function () {

            window.scroll(0,0);

        }
    }

}