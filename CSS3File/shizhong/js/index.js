var oUl=document.getElementsByTagName('ul')[0];
var str='';
for(var i=1;i<=12;i++){
    str+='<li style="transform: rotate('+i*30+'deg)"></li>'
}
oUl.innerHTML=str;