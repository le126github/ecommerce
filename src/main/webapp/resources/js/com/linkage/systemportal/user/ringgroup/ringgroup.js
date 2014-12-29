com.linkage.systemportal.user.ringgroup = new Object();
	
	/**
	**	是否为指定长度的用户号码
	**/
com.linkage.systemportal.user.ringgroup.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = com.linkage.util.trim(document.forms[0].phonenumber.value);
	if( phonenumber == ""||phonenumber ==null){
		alert("请输入用户号码!");
		return false;
	}
	
	if ( (/^\s*\d+\s*$/).test(phonenumber) == false)  {
	    alert("用户号码只能为数字！");
		return false;
	}
	var n = phonenumber.replace(/(^\s*)|(\s*$)/g,"").length;
	if (n !=11 ) {
		alert("用户号码长度不正确！");
		return false;
	}
	return true;
}

/**
	**	检验铃音组名称
	**/
com.linkage.systemportal.user.ringgroup.isValidGroupName = function isValidGroupName(){
	var groupname = document.forms[0].groupname.value;
	if(groupname == ""||groupname==null){
		alert("铃音组名称不能为空!");
		return false;
	}	
	return true;
}

	

