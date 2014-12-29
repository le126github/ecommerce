com.linkage.systemportal.user.info = new Object();
	
com.linkage.systemportal.user.info.processStatus = function processStatus(obj,str){
    if(obj == null) obj = document.forms[0].status;
    obj.value = str;
}

    /**
	**	根据终端判断号码是否正确
	**/
com.linkage.systemportal.user.info.isValidNumber = function isValidNumber(){

   var phonenumber = com.linkage.util.trim(document.forms[0].phonenumber.value);
   var terminatortype = document.forms[0].terminatortype.value;
   
   if(terminatortype==0){         //如果终端类型为手机,则做手机格式校验
    if(phonenumber.length!=11){
      alert("手机号码长度不正确");
      return false;
      }
     if(phonenumber.substring(0,1)!=1){
		  alert("不是有效的手机号码");
		  return false;
	  } 
    }
    else{                        //如果为电话号码,则做电话号码校验
     if(phonenumber.substring(0,1)==1){
          alert("不是有效的电话号码");
		  return false;
     }
    }
    return true;
   }
   
	/**
	**	是否为指定长度的用户号码
	**/
com.linkage.systemportal.user.info.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = com.linkage.util.trim(document.forms[0].phonenumber.value);

	if(phonenumber == ""||phonenumber==null){
		alert("请输入用户号码!");
		return false;
	}
		if (/^\d+$/.test(phonenumber) == false) {
				alert("用户号码只能为数字")
		return false;
	}
		n = phonenumber.length;
		if (n !=12 && n != 11) {
			alert("用户号码长度不正确！");
			return false;
		}
		if(phonenumber.substring(0,1)==1){
		  if(n!=11){
		  alert("不是有效的手机号码");
		  return false;
		  }
		}
	
	return true;
}

	/**
	** 判断主被叫彩铃用户类型是否为空 
	**/
com.linkage.systemportal.user.info.isValidCallUserType = function isValidCallUserType(obj) {
if(!com.linkage.systemportal.user.info.isRadioChecked(document.forms[0].callusertype)){
		alert("请选择主被叫彩铃用户类型！");
		return false;
	}

	return true; 
}

	/**
	**	用户类型选择
	**/
com.linkage.systemportal.user.info.isValidUserType = function isValidUserType(){
	var usertype = document.forms[0].usertype.value;
	if(usertype == ""||usertype==null|| usertype == "-*"){
		alert("请选择用户类型!");
		return false;
	}	
	return true;
}

	/**
	**	属地选择
	**/
com.linkage.systemportal.user.info.isValidAreaNo = function isValidAreaNo(){
	var areano = document.forms[0].areano.value;
	if(areano == ""||areano==null|| areano == "-*"){
		alert("请选择用户属地!");
		return false;
	}	
	return true;
}

	/**
	**	付费方式
	**/
com.linkage.systemportal.user.info.isValidPayType = function isValidPayType(){
	var paytype = document.forms[0].paytype;
if(!com.linkage.systemportal.user.info.isRadioChecked(paytype)){
		alert("请选择付费方式！");
		return false;
	}
	return true;
}

	/**
	**	终端类型
	**/
com.linkage.systemportal.user.info.isValidTerminatorType = function isValidTerminatorType(){
	var terminatortype = document.forms[0].terminatortype.value;
	if(terminatortype == ""||terminatortype==null|| terminatortype == "-*"){
		alert("请选择终端类型!");
		return false;
	}	
	return true;
}
	/**
	** 判断是否被选择
	**/
com.linkage.systemportal.user.info.isRadioChecked = function isRadioChecked(obj){
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

	/**
	** 显示激活与暂停状态
	**/
com.linkage.systemportal.user.info.selStatus = function selStatus(obj1){
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


