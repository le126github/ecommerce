com.linkage.userportal.user.phonegroup = new Object();
	
	/**
	**	����Ⱥ�������ж�
	**/
com.linkage.userportal.user.phonegroup.isValidPhonegroupname = function isValidPhonegroupname(){
	var phonegroupname = document.forms[0].phonegroupname.value;
	if(phonegroupname == ""||phonegroupname==null){
		alert("���������Ⱥ������!");
		return false;
	}
	return true;
}

com.linkage.userportal.user.phonegroup.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = document.forms[0].memberphonenumber.value;
	if(phonenumber == ""||phonenumber==null){
		alert("������绰����!");
		return false;
	}
	if (/^\d+$/.test(phonenumber) == false) {
			alert("�绰����ֻ��Ϊ����");
			return false;
	}
	return true;
}