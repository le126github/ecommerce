com.linkage.systemportal.user.ringgroup = new Object();
	
	/**
	**	�Ƿ�Ϊָ�����ȵ��û�����
	**/
com.linkage.systemportal.user.ringgroup.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = com.linkage.util.trim(document.forms[0].phonenumber.value);
	if( phonenumber == ""||phonenumber ==null){
		alert("�������û�����!");
		return false;
	}
	
	if ( (/^\s*\d+\s*$/).test(phonenumber) == false)  {
	    alert("�û�����ֻ��Ϊ���֣�");
		return false;
	}
	var n = phonenumber.replace(/(^\s*)|(\s*$)/g,"").length;
	if (n !=11 ) {
		alert("�û����볤�Ȳ���ȷ��");
		return false;
	}
	return true;
}

/**
	**	��������������
	**/
com.linkage.systemportal.user.ringgroup.isValidGroupName = function isValidGroupName(){
	var groupname = document.forms[0].groupname.value;
	if(groupname == ""||groupname==null){
		alert("���������Ʋ���Ϊ��!");
		return false;
	}	
	return true;
}

	

