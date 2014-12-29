com.linkage.userportal.user.phonegroup = new Object();
	
	/**
	**	号码群组名称判断
	**/
com.linkage.userportal.user.phonegroup.isValidPhonegroupname = function isValidPhonegroupname(){
	var phonegroupname = document.forms[0].phonegroupname.value;
	if(phonegroupname == ""||phonegroupname==null){
		alert("请输入号码群组名称!");
		return false;
	}
	return true;
}

com.linkage.userportal.user.phonegroup.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = document.forms[0].memberphonenumber.value;
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