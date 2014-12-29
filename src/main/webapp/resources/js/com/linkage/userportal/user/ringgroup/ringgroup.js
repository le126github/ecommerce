com.linkage.userportal.user.ringgroup = new Object();
	
	/**
	**	铃音群组名称判断
	**/
com.linkage.userportal.user.ringgroup.isValidRinggroupname = function isValidRinggroupname(obj){
	if(obj == null) obj=document.forms[0].groupname;
	var groupname = obj.value;
	if(groupname == ""||groupname==null){
		alert("请输入铃音组名称!");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

