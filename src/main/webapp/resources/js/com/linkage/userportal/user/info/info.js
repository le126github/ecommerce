com.linkage.userportal.user.info = new Object();


com.linkage.userportal.user.info.processStatus = function processStatus(obj,str){
    if(obj == null) obj = document.forms[0].status;
    obj.value = str;
}

/**
	** ��ʾ��������ͣ״̬
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
	**	�û������ж�
	**/
com.linkage.userportal.user.info.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = document.user_add.phonenumber.value;
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

	/**
	** �ж������в����û������Ƿ�Ϊ�� 
	**/
com.linkage.userportal.user.info.isValidCallUserType = function isValidCallUserType(obj) {
if(!com.linkage.userportal.user.info.isRadioChecked(document.forms[0].callusertype)){
		alert("��ѡ�����������ͣ�");
		return false;
	}

	return true; 
}
	/**
	**	�����ж�
	**/
com.linkage.userportal.user.info.isValidAreaNo = function isValidAreaNo(){
	var areano = document.user_add.areano.value;
	if(areano == ""||areano==null){
		alert("����������!");
		obj.select();
		obj.focus();
		return false;
	}
		if (/^\d+$/.test(areano) == false) {
			alert("����ֻ��Ϊ����");
			return false;
	}
	return true;
}
	/**
	** �ж��Ƿ�ѡ��
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
			alert("�绰���볤�Ȳ���ȷ��");
			return false;
		}
		if (m < 2 || m > 4) {
			alert("���Ų���ȷ��");
			return false;
		}
		if (sum != 10 && sum != 11) {
			alert("���żӵ绰���볤��֮�Ͳ���ȷ��");
			return false;
		}
	
	return true;
}