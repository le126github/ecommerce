com.linkage.userportal.user.ringgroup = new Object();
	
	/**
	**	����Ⱥ�������ж�
	**/
com.linkage.userportal.user.ringgroup.isValidRinggroupname = function isValidRinggroupname(obj){
	if(obj == null) obj=document.forms[0].groupname;
	var groupname = obj.value;
	if(groupname == ""||groupname==null){
		alert("����������������!");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

