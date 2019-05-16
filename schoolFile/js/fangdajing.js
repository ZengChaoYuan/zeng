var oMin = document.getElementsByClassName('min')[0],
    oCover = document.getElementsByClassName('cover')[0],
    oMax = document.getElementsByClassName('max')[0],
    oMaxImg = oMax.getElementsByTagName('img')[0];
//鼠标移进去后都显示出来
oMin.onmouseenter = function () {
    oCover.style.display = 'block';
    oMax.style.display = 'block';
}
//鼠标移出来后都显示出来
oMin.onmouseleave = function () {
    oCover.style.display = 'none';
    oMax.style.display = 'none';
}
////鼠标移动的时候一一对应
oMin.onmousemove = function (e) {
    var x = e.clientX - this.offsetLeft - oCover.offsetWidth/2;
    var y = e.clientY - this.offsetTop - oCover.offsetHeight/2-100;
    var minX = 0;
    var maxX = oMin.offsetWidth - oCover.offsetWidth;
    var minY = 0;
    var maxY = oMin.offsetHeight - oCover.offsetHeight;
    //判断边界值
    if(x <= 0) {
        x = minX;
    }else if(x >= maxX) {
        x = maxX;
    }

    if(y <= minY) {
        y = minY;
    }else if(y >= maxY) {
        y = maxY;
    }

    oCover.style.left = x + 'px';
    oCover.style.top = y + 'px';

    // x/maxX = L/(oMaxImg.offsetWidth - oMax.offsetWidth);
    //按比例横坐标一一对应
    var imgX = x/maxX * (oMax.offsetWidth - oMaxImg.offsetWidth);
    //按比例纵坐标一一对应
    var imgY = y/maxY * (oMax.offsetHeight - oMaxImg.offsetHeight);

    oMaxImg.style.left = imgX + 'px';
    oMaxImg.style.top = imgY + 'px';
}

