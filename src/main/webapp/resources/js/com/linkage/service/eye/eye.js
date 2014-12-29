com.linkage.service.eye = new Object();

com.linkage.service.eye.isValidUserDomain = function isValidUserDomain(obj) {
  if(obj == null) obj = document.forms[0].userdomain;
	var str = trim(obj.value);
	len = str.length;
	//没有@
	if(str.indexOf('@') >= 0){
	    alert("请输入合法的域名！");
	    obj.focus();
	    obj.select();
  	    return false;
  	}
	if(str.indexOf('.') == -1){
	    alert("请输入合法的域名！");
	    obj.focus();
	    obj.select();
  	    return false;
    }
    if (str.lastIndexOf('.') == (len-1) ){//'.'在最后一位
        alert("请输入合法的域名！");
        obj.focus();
	    obj.select();
  	    return false;
  	}
    for(var j=0;j<len-1;j++){//判断是否有".."
  	    if((str.charAt(j) == '.' && str.charAt(j+1) == '.')){
  	        alert("请输入合法的域名！");
  	        obj.focus();
	        obj.select();
    	    return false;
    	}
  	}
	validstr = "1234567890abcdefghijklmnopqrstuvwxyz_-.~";
    lowerstr = str.toLowerCase();
    for(i=0;i<len;i++){
  	    if(validstr.indexOf(lowerstr.charAt(i)) == -1){
  	        alert("请输入合法的域名！");
  	        obj.focus();
	        obj.select();
    	    return false;
    	}
 	}
 	return true;
}

com.linkage.service.eye.isValidPassword = function isValidPassword(obj,obj1) {
	/**
	**		@func		窄带用户密码校验 包括密码是否符合,密码和密码确认是否一致等
	**		@param  Object obj	密码
	**						Object obj1	密码确认
	**/
	if (obj1 == null) obj1 = document.forms[0].password_sure;
	if (obj == null) obj = document.forms[0].password;
	var passwd = obj.value;
	var passwd_sure = obj1.value;
	if (com.linkage.util.isValidPassword(passwd) == false) {
		obj.focus();
		obj.select();
		return false;
	}
	if (passwd != passwd_sure){
		alert("密码与密码确认不一致！");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.eye.isValidGroupid = function isValidGroupid(obj){
    if(obj == null) obj = document.forms[0].groupid;
    if(obj.options.length == 0){
        alert("无可用的组别！");
        return false;
    }
    return true;
}

com.linkage.service.eye.isValidSize = function isValidSize(obj) {
	/**
	**		@func		全球眼用户 录像存储空间
	**		@param  Object obj	录像存储空间
	**/
	if (obj == null) obj = document.forms[0].size;
	var size = obj.value;
	if (com.linkage.util.isInteger(size) == false) {
		alert("存储空间必须为整数值");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.eye.isValidCertificate = function isValidEyeCertificate(obj) {
	/**
	**		@func		客户证件号码校验
	**		@param  Object obj	客户证件号码
	**/
	if (obj == null) obj = document.forms[0].certificate;
	var certificate = obj.value;
	if (com.linkage.util.isValidData(certificate,'证件号码') == false) {
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.eye.isValidIDCard = function isValidIDCard(obj1,obj2) {
  /**
	**		@func		客户证件号码校验 只校验身份证号码
	**		@param  Object obj	客户联系电话
	**/
	if(obj2==null) obj2=document.forms[0].certtype;
	if(obj1==null) obj1=document.forms[0].certificate;
	var certificate=obj1.value;
	var certtype = obj2.value;
	if (certtype == 1) { //只有身份证才校验号码
		if(com.linkage.util.isValidIDCard(certificate)==true)
			return true;
		else{
			alert("身份证号码不正确！");
			obj1.focus();
			obj1.select();
			return false;
		}
	}
	return true;
}

com.linkage.service.eye.isValidContactphone = function isValidEyeContactphone(obj) {
  /**
	**		@func		客户联系电话校验
	**		@param  Object obj	客户联系电话
	**/
	if(obj==null) obj=document.forms[0].contactphone;
	var contactphone=obj.value;
	//alert("contactphone的值为："+contactphone);
	if(com.linkage.util.isValidPhone(contactphone)==true)
	     return true;
	else
		{
		 alert("请输入正确的联系电话：手机(11位)或者固定电话(7位或8位也可加上分机号)");
		 //obj.value="";
		 obj.focus();
		 obj.select();
		 return false;
		}
}

com.linkage.service.eye.isValidDates = function isValidDates(obj1,obj2,obj3,obj4) {
	/**
	**		@func		时间校验	新开时 开通时间大于当天 失效时间大于开通 计费时间大于开通
	**											修改时 若开通时间未修改 即开通时间等于旧开通时间 则不将开通时间与当天比较 其他同
	**		@param  Object obj1 today; 今天
	**						Object obj2 effectdate  开通时间 
	**						Object obj3 expiredate  失效时间
	**						Object obj4 effectdate_old 原开通时间
	**/	
	if(obj3==null) obj3=document.forms[0].expiredate;
	if(obj2==null) obj2=document.forms[0].effectdate;
	if(obj1==null) obj1=document.forms[0].today;
	var today = obj1.value;
	var effectdate = obj2.value;
	var expiredate = obj3.value;
	var effectdate_old;
	if(obj4==null) effectdate_old = "";
	else effectdate_old = obj4.value;
	if (effectdate != effectdate_old) { //时间已修改
		if (com.linkage.util.dateBDate(today,effectdate)){
			alert("开通时间不得小于当前时间！");
			obj2.focus();
			obj2.select();
			return false;
		}
	}
	if (!com.linkage.util.dateBDate(expiredate,effectdate)){
		alert("失效时间应大于开通时间！");
		obj3.focus();
		obj3.select();
		return false;
	}
	return true;
}

com.linkage.service.eye.sel_status = function sel_status(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    if(obj2 == null) obj2 = document.forms[0].currentdate;
    if(obj3 == null) obj3 = document.forms[0].expiredate;
    var status = obj1.value;
    var currentdate = obj2.value;
    var expiredate = obj3.value;
    if(status == "0"){
        document.all("div_expiredate").style.display = "none";
        document.all("div_normal_pause").style.display = "";
        document.all("div_pause_normal").style.display = "none";
    }
    else if(status == "1"){
        if(!com.linkage.util.dateBEDate(expiredate,currentdate)){
            document.all("div_expiredate").style.display = "";
        }else{
            document.all("div_expiredate").style.display = "none";
        }
        document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "";
    }
}

com.linkage.service.eye.isValidExpireDate = function isValidExpireDate(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    if(obj2 == null) obj2 = document.forms[0].currentdate;
    if(obj3 == null) obj3 = document.forms[0].expiredate;
    var status = obj1.value;
    var currentdate = obj2.value;
    var expiredate = obj3.value;

    if(status == "1"){
        if(expiredate == ""){
            alert("请选择失效时间！");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(!com.linkage.util.dateBEDate(expiredate,currentdate)){
            alert("失效时间应大于当前时间！");
            obj3.focus();
            obj3.select();
            return false;
        }
    }
    return true;
}

com.linkage.service.eye.processStatus = function processStatus(obj,str){
    if(obj == null) obj = document.forms[0].status;
    obj.value = str;
}