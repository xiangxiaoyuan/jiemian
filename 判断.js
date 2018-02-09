function denglu(){
	var uname = document.getElementById("username").value;
	var upassword = document.getElementById("password").value;
	if(uname == '123' && upassword == '123'){
		alert("您已成功登陆！");
	}
	else{
		alert("账号或密码错误！");		
	}
}
