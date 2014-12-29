com.linkage.systemportal.corp.info = new Object();
	
	/**
	**	是否为指定长度的集团编码
	**/
com.linkage.systemportal.corp.info.isValidCorpId = function isValidCorpId(){
	var corpid = com.linkage.util.trim(document.forms[0].corpid.value);
	if(corpid ==""||corpid==null){
		alert("请输入集团编码!");
		return false;
	}
	var n = document.forms[0].corpid.value.length;
	if ( (/^\d+$/).test(corpid) == false)  {
	    alert("集团编码只能为数字！");
		return false;
	}
	if (n !=10 ) {
		alert("集团编码长度不正确！");
		return false;
	}
	return true;
}

	/**
	** 判断主被叫彩铃集团类型是否为空 
	**/
com.linkage.systemportal.corp.info.isValidCallCorpType = function isValidCallCorpType(obj) {
if(!com.linkage.systemportal.corp.info.isRadioChecked(document.forms[0].callcorptype)){
		alert("请选择主被叫彩铃集团类型！");
		return false;
	}
	return true; 
}

com.linkage.systemportal.corp.info.isRadioChecked = function isRadioChecked(obj){
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
com.linkage.systemportal.corp.info.isvalidateEmail=function isvalidateEmail(obj){
        
		if(obj.value!=""){
		    if(com.linkage.util.isValidEmail(obj.value)==false){
		    alert("邮件格式错误!");
		    return false;
		    }
		    return true;
		 }
		 return true
		}  

	/**
	**	是否为指定长度的用户号码
	**/
com.linkage.systemportal.corp.info.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = com.linkage.util.trim(document.forms[0].contactphone.value);
	if(phonenumber != ""){
		if (/^\d+$/.test(phonenumber) == false) {
		alert("用户号码只能为数字")
		return false;
	}
		n = document.forms[0].contactphone.value.length;
		if (n !=12 && n != 11&&n!=10) {
			alert("用户号码长度不正确！");
			return false;
		}
	}
	return true;
}
	/**
	**	属地选择
	**/
com.linkage.systemportal.corp.info.isValidAreaNo = function isValidAreaNo(){
	var areano = document.forms[0].areano.value;
	if(areano == ""||areano==null|| areano == "-*"){
		alert("请选择用户属地!");
		return false;
	}	
	return true;
}
	/**
	**	检验集团名称
	**/
com.linkage.systemportal.corp.info.isValidCorpName = function isValidCorpName(){
	var corpname = document.forms[0].corpname.value;
	if(corpname == ""||corpname==null){
		alert("集团名称不能为空!");
		return false;
	}	
	return true;
}

