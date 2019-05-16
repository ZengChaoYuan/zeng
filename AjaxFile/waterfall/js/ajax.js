// （1） web浏览器
// （2） ajax对象       
// （3） 初始化 HTTP 请求参数(请求方式, 地址, 同步or异步)
// （4） 发送请求
// （5） 监控数据        
// （6） 检查数据 使用

// （1） web浏览器
function ajax(method, url, callback, data, flag) {
    // （2） ajax对象
    var xml = null;
    if(window.XMLHttpRequest) {
        xml = new XMLHttpRequest();
    }else {
        xml = new ActiveXObject('Microsoft.XMLHttp');
    }
    // （3） 初始化 HTTP 请求参数(请求方式, 地址, 同步异步)
    // （4） 发送请求
    method = method.toUpperCase();
    if(method == 'GET') {
        var date = new Date();
        timer = date.getTime();
        xml.open(method, url +'?'+data + '&timer='+timer,  flag);
        xml.send();
    }else if(method == 'POST') {
        xml.open(method, url,  flag);
        xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xml.send(data);
    }
    // （5） 监控数据  0 1 2 3 4 
    xml.onreadystatechange = function () {
       
        if(xml.readyState == 4) {
            // （6） 检查数据 使用
            if(xml.status == 200) {
                callback(xml.responseText);
            }
        }
    }
}


