com.linkage.systemportal.user.info = new Object();
	
com.linkage.systemportal.user.info.processStatus = function processStatus(obj,str){
    if(obj == null) obj = document.forms[0].status;
    obj.value = str;
}

    /**
	**	�����ն��жϺ����Ƿ���ȷ
	**/
com.linkage.systemportal.user.info.isValidNumber = function isValidNumber(){

   var phonenumber = com.linkage.util.trim(document.forms[0].phonenumber.value);
   var terminatortype = document.forms[0].terminatortype.value;
   
   if(terminatortype==0){         //����ն�����Ϊ�ֻ�,�����ֻ���ʽУ��
    if(phonenumber.length!=11){
      alert("�ֻ����볤�Ȳ���ȷ");
      return false;
      }
     if(phonenumber.substring(0,1)!=1){
		  alert("������Ч���ֻ�����");
		  return false;
	  } 
    }
    else{                        //���Ϊ�绰����,�����绰����У��
     if(phonenumber.substring(0,1)==1){
          alert("������Ч�ĵ绰����");
		  return false;
     }
    }
    return true;
   }
   
	/**
	**	�Ƿ�Ϊָ�����ȵ��û�����
	**/
com.linkage.systemportal.user.info.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = com.linkage.util.trim(document.forms[0].phonenumber.value);

	if(phonenumber == ""||phonenumber==null){
		alert("�������û�����!");
		return false;
	}
		if (/^\d+$/.test(phonenumber) == false) {
				alert("�û�����ֻ��Ϊ����")
		return false;
	}
		n = phonenumber.length;
		if (n !=12 && n != 11) {
			alert("�û����볤�Ȳ���ȷ��");
			return false;
		}
		if(phonenumber.substring(0,1)==1){
		  if(n!=11){
		  alert("������Ч���ֻ�����");
		  return false;
		  }
		}
	
	return true;
}

	/**
	** �ж������в����û������Ƿ�Ϊ�� 
	**/
com.linkage.systemportal.user.info.isValidCallUserType = function isValidCallUserType(obj) {
if(!com.linkage.systemportal.user.info.isRadioChecked(document.forms[0].callusertype)){
		alert("��ѡ�������в����û����ͣ�");
		return false;
	}

	return true; 
}

	/**
	**	�û�����ѡ��
	**/
com.linkage.systemportal.user.info.isValidUserType = function isValidUserType(){
	var usertype = document.forms[0].usertype.value;
	if(usertype == ""||usertype==null|| usertype == "-*"){
		alert("��ѡ���û�����!");
		return false;
	}	
	return true;
}

	/**
	**	����ѡ��
	**/
com.linkage.systemportal.user.info.isValidAreaNo = function isValidAreaNo(){
	var areano = document.forms[0].areano.value;
	if(areano == ""||areano==null|| areano == "-*"){
		alert("��ѡ���û�����!");
		return false;
	}	
	return true;
}

	/**
	**	���ѷ�ʽ
	**/
com.linkage.systemportal.user.info.isValidPayType = function isValidPayType(){
	var paytype = document.forms[0].paytype;
if(!com.linkage.systemportal.user.info.isRadioChecked(paytype)){
		alert("��ѡ�񸶷ѷ�ʽ��");
		return false;
	}
	return true;
}

	/**
	**	�ն�����
	**/
com.linkage.systemportal.user.info.isValidTerminatorType = function isValidTerminatorType(){
	var terminatortype = document.forms[0].terminatortype.value;
	if(terminatortype == ""||terminatortype==null|| terminatortype == "-*"){
		alert("��ѡ���ն�����!");
		return false;
	}	
	return true;
}
	/**
	** �ж��Ƿ�ѡ��
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
	** ��ʾ��������ͣ״̬
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


