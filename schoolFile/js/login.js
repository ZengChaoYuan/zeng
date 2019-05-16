

window.onload=function(){
        //验证码
        var code=document.getElementById("code");
        //刷新验证码
        function change(){
            // 验证码组成库
            var arrays=new Array(
                '2','3','4','5','6','7','8','9',
                'a','b','c','d','e','f','g','h','j',
                'k','m','n','p','q','r','s','t',
                'u','v','w','x','y','z',
                'A','B','C','D','E','F','G','H','J',
                'K','L','M','N','P','Q','R','S','T',
                'U','V','W','X','Y','Z'
            );
            // 重新初始化验证码
            codes ='';
            // 随机从数组中获取四个元素组成验证码
            for(var i = 0; i<4; i++){
                // 随机获取一个数组的下标
                var r = parseInt(Math.random()*arrays.length);
                codes += arrays[r];
            }
            // 验证码添加到input里
            code.value = codes;
        }


        //加载显示在页面上
        change();
        //单击更换验证码
        code.onclick = change;

        //单击验证
        var account=document.getElementById("account");
        var adminPswd=document.getElementById("adminPswd");
        var check=document.getElementById("check");
        var chongzhi=document.getElementById("chongzhi");
        var input=document.getElementById("input");

        
       
        //验证码验证
        check.onclick=function(){
            var inputCode = input.value.toUpperCase(); //取得输入的验证码并转化为大写
            var zjlaccount=account.value;
            var zjladminPswd=adminPswd.value;
            if(zjlaccount.length==0) { //若输入的账号长度为0
                alert("请输入账号！"); //则弹出请输入账号
            }else if(zjladminPswd.length==0) { //若输入的密码长度为0
                alert("请输入密码！"); //则弹出请输入密码
            }else if(inputCode.length==0) { //若输入的验证码长度为0
                alert("请输入验证码！"); //则弹出请输入验证码
            }else{
            	if(inputCode!=codes.toUpperCase()) { //若输入的验证码与产生的验证码不一致时
                    alert("验证码输入错误！请重新输入"); //则弹出验证码输入错误
                    change();//刷新验证码
                    input.value="";//清空文本框
                }else if(zjlaccount!="zjl"||zjladminPswd!="zjl123"){

                    alert("账号或密码错误！");

                }else{

                    alert("登录成功！");
            	    window.location.href="SenLiOneself.html";
                }
            	
            }
            
            
            
        }
        
        //重置
        //清空所有登录信息
        //验证码刷新
        chongzhi.onclick=function(){
            change();//刷新验证码
            input.value="";//清空文本框
            account.value="";
            adminPswd.value="";
        }





    }
