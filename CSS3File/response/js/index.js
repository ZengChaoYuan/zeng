var gnMore=document.getElementsByClassName('gn-more')[0],
    gnlist=document.getElementsByClassName('gn-list')[0];
gnMore.onclick=function () {
    if(document.getElementsByClassName('gn-list-active')[0]){
        gnlist.classList.remove('gn-list-active');
    }else {
        gnlist.classList.add('gn-list-active');
    }
}
