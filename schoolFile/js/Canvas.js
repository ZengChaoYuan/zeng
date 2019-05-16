//获取Canvas元素
var canvas=document.getElementById("myCanvas");
//返回一个对象，该用户提供了用于画布上绘图的方法和属性
var context=canvas.getContext("2d");
//为粒子创建一个数组
var particles=[];
//循环600次，生成600粒雪花
for(var i=0;i<600;i++){
    //设置雪花的初始x、y位置，x、y方向上的速度，以及雪花的大小，颜色
    particles.push({
        x:Math.random()*window.innerWidth,
        y:Math.random()*window.innerHeight,
        vx:(Math.random()*1-.5),
        vy:(Math.random()*1+.5),
        size:1+Math.random()*2,
        color:"#FFF"
        // , color: '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
    });
}
function timeUpdate() {
    //清除画布区域
    context.clearRect(0,0,window.innerWidth,window.innerHeight);
    var particle;
    //遍历循环所有雪花
    for(var i=0;i<600;i++){
        particle=particles[i];
        //更新雪花的新x、y位置
        particle.x+=particle.vx;
        particle.y+=particle.vy;
        if(particle.x<0){
            //当雪花移动到窗口左侧以外时，使其显示在窗口最右侧
            particle.x=window.innerWidth;

        }
        if(particle.x>window.innerWidth){
            //当雪花移动到窗口右侧以外时，使其显示在窗口最左侧
            particle.x=0;
        }
        if(particle.y>=window.innerHeight){
            //使雪花移动到窗口顶部以外时，使其重新显示在窗口最顶部
            particle.y=0;

        }
        //设置雪花颜色
        context.fillStyle=particle.color;
        //开始绘制雪花
        context.beginPath();
        //绘制圆形
        context.arc(particle.x,particle.y,particle.size,0,Math.PI*2);
        //闭合路径
        context.closePath();
        //填充颜色
        context.fill();

    }
}
//每过40毫秒执行一次timeUpdate函数
setInterval(timeUpdate,40);
