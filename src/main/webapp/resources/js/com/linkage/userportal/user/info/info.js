com.linkage.userportal.user.info = new Object();


com.linkage.userportal.user.info.processStatus = function processStatus(obj,str){
    if(obj == null) obj = document.forms[0].status;
    obj.value = str;
}

/**
	** 显示激活与暂停状态
	**/
com.linkage.userportal.user.info.selStatus = function selStatus(obj1){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    var status = obj1.value;
    if(status == "1"){
        document.all("div_normal_pause").style.display = "";
        document.all("div_pause_normal").style.display = "none";
         document.all("div_close").style.display = "none";
    }
    else if(status == "2"){
        document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "";
         document.all("div_close").style.display = "none";
    }else{
    	 document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "none";
         document.all("div_close").style.display = "";
    	}
 }  
	
	/**
	**	用户号码判断
	**/
com.linkage.userportal.user.info.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = document.user_add.phonenumber.value;
	if(phonenumber == ""||phonenumber==null){
		alert("请输入电话号码!");
		return false;
	}
		if (/^\d+$/.test(phonenumber) == false) {
			alert("电话号码只能为数字");
			return false;
	}
	return true;
}

	/**
	** 判断主被叫彩铃用户类型是否为空 
	**/
com.linkage.userportal.user.info.isValidCallUserType = function isValidCallUserType(obj) {
if(!com.linkage.userportal.user.info.isRadioChecked(document.forms[0].callusertype)){
		alert("请选择主被叫类型！");
		return false;
	}

	return true; 
}
	/**
	**	区号判断
	**/
com.linkage.userportal.user.info.isValidAreaNo = function isValidAreaNo(){
	var areano = document.user_add.areano.value;
	if(areano == ""||areano==null){
		alert("请输入区号!");
		obj.select();
		obj.focus();
		return false;
	}
		if (/^\d+$/.test(areano) == false) {
			alert("区号只能为数字");
			return false;
	}
	return true;
}
	/**
	** 判断是否被选择
	**/
com.linkage.userportal.user.info.isRadioChecked = function isRadioChecked(obj){
	if(obj.length>1){
		for(var i=0;i<obj.length;i++){
			if(obj[i].checked){
				return true;
			}
		}
	}else{
		if(obj.checked)
		return true;
	}
	return false;
}
com.linkage.userportal.user.info.isValidPhoneNum = function isValidPhoneNum(){
	var	n = document.user_add.phonenumber.value.length;
	var	m = document.user_add.areano.value.length;
	var	sum = m+n;
		if (n < 7 || n > 8) {
			alert("电话号码长度不正确！");
			return false;
		}
		if (m < 2 || m > 4) {
			alert("区号不正确！");
			return false;
		}
		if (sum != 10 && sum != 11) {
			alert("区号加电话号码长度之和不正确！");
			return false;
		}
	
	return true;
}