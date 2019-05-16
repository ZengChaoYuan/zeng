//树形菜单
function showTwoMenu(id) {
    var ul=document.getElementsByTagName('ul');
    for(var i=0; i<ul.length;i++){
        var tid=ul[i].id;
        if(tid==id){
            ul[i].style.display='block';
        }else{
            ul[i].style.display='none';
        }
    }
}

//退出登录
function tuichu() {
    var tuichuhuiyuan=window.confirm("是否退出森力会员平台？");
    if(tuichuhuiyuan){
        window.location.href="index.html";
    }else{

    }

}
//如何更换头像
$(function() {
    $(".pic").click(function () {
        $(this).parent().find(".upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $(this).parent().find(".upload").on("change",function(){
            var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl) {
                $(this).parent().find(".pic").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
            }
        });
    });
});

function getObjectURL(file) {
    //使用不同的浏览器浏览
    var url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url;
}