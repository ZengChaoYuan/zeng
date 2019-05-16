var oInput=document.getElementsByTagName('input')[0];
var oUl=document.getElementsByTagName('ul')[0];
//onkeydowm是提前获取,输入前能获取
oInput.oninput=function () {
    var value=oInput.value;//取值
    var oScript=document.createElement('script');
    oScript.src='https://suggest.taobao.com/sug?&q='+value+'&callback=cbs';
    document.body.appendChild(oScript);
    //把创建的ul删除
    oScript.remove();

};
function cbs(data) {
    console.log(data);
    var str='';
    if(data.result.length>0){
        oUl.style.display='block';
        data.result.forEach(function (ele,index) {
            str+='<li>'+ele[0]+'</li>'
        });
        oUl.innerHTML=str;
    }else{
        oUl.style.display='none';
    }
}

