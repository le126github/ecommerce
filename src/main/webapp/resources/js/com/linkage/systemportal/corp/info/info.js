com.linkage.systemportal.corp.info = new Object();
	
	/**
	**	�Ƿ�Ϊָ�����ȵļ��ű���
	**/
com.linkage.systemportal.corp.info.isValidCorpId = function isValidCorpId(){
	var corpid = com.linkage.util.trim(document.forms[0].corpid.value);
	if(corpid ==""||corpid==null){
		alert("�����뼯�ű���!");
		return false;
	}
	var n = document.forms[0].corpid.value.length;
	if ( (/^\d+$/).test(corpid) == false)  {
	    alert("���ű���ֻ��Ϊ���֣�");
		return false;
	}
	if (n !=10 ) {
		alert("���ű��볤�Ȳ���ȷ��");
		return false;
	}
	return true;
}

	/**
	** �ж������в��弯�������Ƿ�Ϊ�� 
	**/
com.linkage.systemportal.corp.info.isValidCallCorpType = function isValidCallCorpType(obj) {
if(!com.linkage.systemportal.corp.info.isRadioChecked(document.forms[0].callcorptype)){
		alert("��ѡ�������в��弯�����ͣ�");
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
		    alert("�ʼ���ʽ����!");
		    return false;
		    }
		    return true;
		 }
		 return true
		}  

	/**
	**	�Ƿ�Ϊָ�����ȵ��û�����
	**/
com.linkage.systemportal.corp.info.isValidPhoneNumber = function isValidPhoneNumber(){
	var phonenumber = com.linkage.util.trim(document.forms[0].contactphone.value);
	if(phonenumber != ""){
		if (/^\d+$/.test(phonenumber) == false) {
		alert("�û�����ֻ��Ϊ����")
		return false;
	}
		n = document.forms[0].contactphone.value.length;
		if (n !=12 && n != 11&&n!=10) {
			alert("�û����볤�Ȳ���ȷ��");
			return false;
		}
	}
	return true;
}
	/**
	**	����ѡ��
	**/
com.linkage.systemportal.corp.info.isValidAreaNo = function isValidAreaNo(){
	var areano = document.forms[0].areano.value;
	if(areano == ""||areano==null|| areano == "-*"){
		alert("��ѡ���û�����!");
		return false;
	}	
	return true;
}
	/**
	**	���鼯������
	**/
com.linkage.systemportal.corp.info.isValidCorpName = function isValidCorpName(){
	var corpname = document.forms[0].corpname.value;
	if(corpname == ""||corpname==null){
		alert("�������Ʋ���Ϊ��!");
		return false;
	}	
	return true;
}

