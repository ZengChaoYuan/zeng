var content=document.getElementsByClassName('content')[0];
var val=document.getElementsByClassName('val')[0];
var text=document.getElementsByClassName('text')[0];
var file,
    step = 1024 * 1024,
    total,
    reader = new FileReader(),
    loaded=0;//已经上传了多少

content.addEventListener('dragover',function (e) {
    e.preventDefault();
});
content.addEventListener('drop',function (e) {
    e.preventDefault();
    file=e.dataTransfer.files[0];
    // total=file.size;
    var loader=new FileLoader(file,events);
    // readBlob(reader,0,step);
    // bindEvent();
});
var events={
    //进行中
    progressIng:function (per) {
        val.style.width=per*250+'px';
        text.innerHTML=Math.round(per*100)+'%';
    },
    stepLoad:function (loaded) {
        console.log('上传'+loaded+'部分');
    },
    finish:function () {
        console.log('我终于上传完成了');
    }
}
//读取
function readBlob(reader,start,step) {

    if(file.slice){
        var blob=file.slice(start,start+step);
    }else{
        var blob=file;
    }
    reader.readAsText(blob);
}
//模块化
function bindEvent() {
    reader.onprogress=function (e) {
        onProgress(e.loaded);
    }
    reader.onload=function () {
        onLoad();
    }
}
function onProgress(num) {
    loaded+=num;
    var per=loaded/total;
    if(per>1){
        per=1;
    }
   events.progressIng(per);

}
function onLoad() {
    //执行文件上传的操作
    var result=reader.result;
    events.stepLoad(loaded);
    //判断文件是否已经全部读取完成
    if(loaded<total){
        readBlob(reader,loaded,step);
    }else{
       events.finish();
    }
}