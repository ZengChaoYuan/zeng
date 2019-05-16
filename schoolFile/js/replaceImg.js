//获取元素
var holder = document.getElementById('holder');
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//获取画布的属性
var ctx = canvas.getContext('2d');
//当某被拖动的对象在另一对象容器范围内拖动时触发此事件
holder.ondragover = function() {
    this.className = 'hover';
    return false;
};
// 用户完成元素拖动后触发
holder.ondragend = function() {
    this.className = 'normal';
    return false;
};
//在一个拖动过程中，释放鼠标键时触发此事件
holder.ondrop = function(e) {
    this.className = 'normal';
    e.preventDefault();
    //获取到所拖拽的第一个文件
    var file = e.dataTransfer.files[0];
    //创建一个FileReader对象
    reader = new FileReader();
    //当本地文件读取完毕后调用以下函数
    reader.onload = function(event) {
        //创建一个Image对象
        img = new Image();
        //将读取的二进制位图数据赋予该对象
        img.src = event.target.result;
        img.onload = function() {
            //清除Canvas中已有的内容
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //将Image对象显示在Canvas中
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
            //删除Image对象，以释放缓存
            delete this;
        }
    };
    //在FileReader对象中读取文件内容
    reader.readAsDataURL(file);
    return false;
};