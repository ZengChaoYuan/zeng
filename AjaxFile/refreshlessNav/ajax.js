//1.web浏览器
function ajax(method,url,callback,data,flag) {
    //2.ajax对象
    var xml=null;//兼容性的处理

    if(window.XMLHttpRequest){//如果存在XMLHttpRequest
        xml=new XMLHttpRequest();//IE7及以上使用
    }else{//IE6及以下使用
        xml=new ActiveXObject('Microsoft.XMLHttp');
    }
    //3.初始化HTTP请求参数(请求方式，地址，同步异步)
    // xml.open('POST','./post.php',true);//true代表异步
    //
    // //4.发送请求
    // xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');//请求头(内容类型)
    // xml.send(data);//POST传值
    method=method.toUpperCase();//无论大小写，都转换成大写
    //判断
    if(method=='GET'){
        //为了避免浏览器的缓存问题，要使得路径不相同
        var date=new Date();
        timer=date.getTime();
        xml.open(method,url+'?'+data+'&timer='+timer,flag);
        xml.send();
    }else if(method=='POST'){
        xml.open(method,url,flag);
        xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xml.send(data);
    }
    //5.监控数据,每次发生变化才会触发
    xml.onreadystatechange=function () {
        console.log(xml.readyState);
        if(xml.readyState==4){//响应内容解析完成
            //6.检查数据 使用
            if(xml.status==200){//状态码为200的时候
                callback(xml.responseText);
            }

        }
    }

}

