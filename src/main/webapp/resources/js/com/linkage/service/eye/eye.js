com.linkage.service.eye = new Object();

com.linkage.service.eye.isValidUserDomain = function isValidUserDomain(obj) {
  if(obj == null) obj = document.forms[0].userdomain;
	var str = trim(obj.value);
	len = str.length;
	//û��@
	if(str.indexOf('@') >= 0){
	    alert("������Ϸ���������");
	    obj.focus();
	    obj.select();
  	    return false;
  	}
	if(str.indexOf('.') == -1){
	    alert("������Ϸ���������");
	    obj.focus();
	    obj.select();
  	    return false;
    }
    if (str.lastIndexOf('.') == (len-1) ){//'.'�����һλ
        alert("������Ϸ���������");
        obj.focus();
	    obj.select();
  	    return false;
  	}
    for(var j=0;j<len-1;j++){//�ж��Ƿ���".."
  	    if((str.charAt(j) == '.' && str.charAt(j+1) == '.')){
  	        alert("������Ϸ���������");
  	        obj.focus();
	        obj.select();
    	    return false;
    	}
  	}
	validstr = "1234567890abcdefghijklmnopqrstuvwxyz_-.~";
    lowerstr = str.toLowerCase();
    for(i=0;i<len;i++){
  	    if(validstr.indexOf(lowerstr.charAt(i)) == -1){
  	        alert("������Ϸ���������");
  	        obj.focus();
	        obj.select();
    	    return false;
    	}
 	}
 	return true;
}

com.linkage.service.eye.isValidPassword = function isValidPassword(obj,obj1) {
	/**
	**		@func		խ���û�����У�� ���������Ƿ����,���������ȷ���Ƿ�һ�µ�
	**		@param  Object obj	����
	**						Object obj1	����ȷ��
	**/
	if (obj1 == null) obj1 = document.forms[0].password_sure;
	if (obj == null) obj = document.forms[0].password;
	var passwd = obj.value;
	var passwd_sure = obj1.value;
	if (com.linkage.util.isValidPassword(passwd) == false) {
		obj.focus();
		obj.select();
		return false;
	}
	if (passwd != passwd_sure){
		alert("����������ȷ�ϲ�һ�£�");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.eye.isValidGroupid = function isValidGroupid(obj){
    if(obj == null) obj = document.forms[0].groupid;
    if(obj.options.length == 0){
        alert("�޿��õ����");
        return false;
    }
    return true;
}

com.linkage.service.eye.isValidSize = function isValidSize(obj) {
	/**
	**		@func		ȫ�����û� ¼��洢�ռ�
	**		@param  Object obj	¼��洢�ռ�
	**/
	if (obj == null) obj = document.forms[0].size;
	var size = obj.value;
	if (com.linkage.util.isInteger(size) == false) {
		alert("�洢�ռ����Ϊ����ֵ");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.eye.isValidCertificate = function isValidEyeCertificate(obj) {
	/**
	**		@func		�ͻ�֤������У��
	**		@param  Object obj	�ͻ�֤������
	**/
	if (obj == null) obj = document.forms[0].certificate;
	var certificate = obj.value;
	if (com.linkage.util.isValidData(certificate,'֤������') == false) {
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.eye.isValidIDCard = function isValidIDCard(obj1,obj2) {
  /**
	**		@func		�ͻ�֤������У�� ֻУ�����֤����
	**		@param  Object obj	�ͻ���ϵ�绰
	**/
	if(obj2==null) obj2=document.forms[0].certtype;
	if(obj1==null) obj1=document.forms[0].certificate;
	var certificate=obj1.value;
	var certtype = obj2.value;
	if (certtype == 1) { //ֻ�����֤��У�����
		if(com.linkage.util.isValidIDCard(certificate)==true)
			return true;
		else{
			alert("���֤���벻��ȷ��");
			obj1.focus();
			obj1.select();
			return false;
		}
	}
	return true;
}

com.linkage.service.eye.isValidContactphone = function isValidEyeContactphone(obj) {
  /**
	**		@func		�ͻ���ϵ�绰У��
	**		@param  Object obj	�ͻ���ϵ�绰
	**/
	if(obj==null) obj=document.forms[0].contactphone;
	var contactphone=obj.value;
	//alert("contactphone��ֵΪ��"+contactphone);
	if(com.linkage.util.isValidPhone(contactphone)==true)
	     return true;
	else
		{
		 alert("��������ȷ����ϵ�绰���ֻ�(11λ)���߹̶��绰(7λ��8λҲ�ɼ��Ϸֻ���)");
		 //obj.value="";
		 obj.focus();
		 obj.select();
		 return false;
		}
}

com.linkage.service.eye.isValidDates = function isValidDates(obj1,obj2,obj3,obj4) {
	/**
	**		@func		ʱ��У��	�¿�ʱ ��ͨʱ����ڵ��� ʧЧʱ����ڿ�ͨ �Ʒ�ʱ����ڿ�ͨ
	**											�޸�ʱ ����ͨʱ��δ�޸� ����ͨʱ����ھɿ�ͨʱ�� �򲻽���ͨʱ���뵱��Ƚ� ����ͬ
	**		@param  Object obj1 today; ����
	**						Object obj2 effectdate  ��ͨʱ�� 
	**						Object obj3 expiredate  ʧЧʱ��
	**						Object obj4 effectdate_old ԭ��ͨʱ��
	**/	
	if(obj3==null) obj3=document.forms[0].expiredate;
	if(obj2==null) obj2=document.forms[0].effectdate;
	if(obj1==null) obj1=document.forms[0].today;
	var today = obj1.value;
	var effectdate = obj2.value;
	var expiredate = obj3.value;
	var effectdate_old;
	if(obj4==null) effectdate_old = "";
	else effectdate_old = obj4.value;
	if (effectdate != effectdate_old) { //ʱ�����޸�
		if (com.linkage.util.dateBDate(today,effectdate)){
			alert("��ͨʱ�䲻��С�ڵ�ǰʱ�䣡");
			obj2.focus();
			obj2.select();
			return false;
		}
	}
	if (!com.linkage.util.dateBDate(expiredate,effectdate)){
		alert("ʧЧʱ��Ӧ���ڿ�ͨʱ�䣡");
		obj3.focus();
		obj3.select();
		return false;
	}
	return true;
}

com.linkage.service.eye.sel_status = function sel_status(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    if(obj2 == null) obj2 = document.forms[0].currentdate;
    if(obj3 == null) obj3 = document.forms[0].expiredate;
    var status = obj1.value;
    var currentdate = obj2.value;
    var expiredate = obj3.value;
    if(status == "0"){
        document.all("div_expiredate").style.display = "none";
        document.all("div_normal_pause").style.display = "";
        document.all("div_pause_normal").style.display = "none";
    }
    else if(status == "1"){
        if(!com.linkage.util.dateBEDate(expiredate,currentdate)){
            document.all("div_expiredate").style.display = "";
        }else{
            document.all("div_expiredate").style.display = "none";
        }
        document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "";
    }
}

com.linkage.service.eye.isValidExpireDate = function isValidExpireDate(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    if(obj2 == null) obj2 = document.forms[0].currentdate;
    if(obj3 == null) obj3 = document.forms[0].expiredate;
    var status = obj1.value;
    var currentdate = obj2.value;
    var expiredate = obj3.value;

    if(status == "1"){
        if(expiredate == ""){
            alert("��ѡ��ʧЧʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(!com.linkage.util.dateBEDate(expiredate,currentdate)){
            alert("ʧЧʱ��Ӧ���ڵ�ǰʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
    }
    return true;
}

com.linkage.service.eye.processStatus = function processStatus(obj,str){
    if(obj == null) obj = document.forms[0].status;
    obj.value = str;
}