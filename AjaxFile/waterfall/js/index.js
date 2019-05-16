//创建一个li
var oLi = document.getElementsByTagName('li');
var flag = false;//是否在请求中
var num = 1;
function send() {
    if (!flag) {//没有在请求中
        ajax('GET', 'http://localhost/waterfall/getPics.php', dealData, 'cpage=' + num, true);
        console.log('请求中');
        flag = true;//锁住
        num++;
    }
}

//没有执行怎么会有数据呢？
send();
//处理
function dealData(data) {
    console.log('走了没');

    //把字符串转换成JSON
    var data = JSON.parse(data);


    if (data.length > 0) {
        //拼接返回回来的数据
        //data是一个数组
        data.forEach(function (ele, index) {//ele代表数组中的每个对象
            //创建一个单元格
            var oItem = document.createElement('div');
            //单元格的class名称
            oItem.className = 'item';
            //创建图片
            var oImg = new Image();
            oImg.src = ele.image;
            //h=wH/W;这样使得高度先占好位置
            oImg.height = 230 * ele.height / ele.width;
            //单元格中插入图片
            oItem.appendChild(oImg);
            //查找最短li的函数
            oLi[findShortest(oLi)].appendChild(oItem);
        });
        //执行完后,解开锁
        flag = false;
    } else {
        console.log('已无数据');
    }
}
//查找最短那列的函数
function findShortest(list) {
    var len = list.length;
    //第一条
    var min = list[0].offsetHeight;//300
    var index = 0;
    for (var i = 1; i < len; i++) {
        var h = list[i].offsetHeight;//160
        if (h < min) {
            min = h;
            index = i;//1
        }
    }
    return index;
}
//滚动条
window.onscroll = function () {
    var index = findShortest(oLi);
    var h = oLi[index].offsetHeight;//最短列高度
    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;//滚动条滚动的高度(兼容性的写法)
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;//窗口的高度
    //滚动出去的高度+窗口的高度>最短列高度则需要加载数据了;
    if (scrollHeight + clientHeight > h) {
        console.log('到底了吗');
        send();
    }
}