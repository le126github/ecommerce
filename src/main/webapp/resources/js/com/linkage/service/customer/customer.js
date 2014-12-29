com.linkage.service.customer = new Object();

com.linkage.service.customer.onChangeCustomerType = function onChangeCustomerType() {
	/**
	**		@func		����customertype�Ĳ�ͬѡ�� ��ʾҳ�治ͬ����
	**						�����û���Ҫ����֤����
	**						��λ�û���Ҫ������ҵ
	**						���ɿͻ���Ҫ������ҵ ����Ϊ�ǹ��� ����ҵΪ����
	**/
	if (document.forms[0].customertype[0].checked) {
		document.all("customertype_group").style.display = "none";
		document.all("customertype_single1").style.display = "";
		document.all("customertype_single2").style.display = "";
		document.all("customertype_single3").style.display = "";
	}else if (document.forms[0].customertype[1].checked) {
	 	document.all("customertype_group").style.display = "";
	 	document.all("customertype_single1").style.display = "none";
	 	document.all("customertype_single2").style.display = "none";
	 	document.all("customertype_single3").style.display = "none";
	}else if (document.forms[0].customertype[2].checked) {
		document.all("customertype_group").style.display = "";
		document.all("customertype_single1").style.display = "none";
		document.all("customertype_single2").style.display = "none";
		document.all("customertype_single3").style.display = "none";
		document.forms[0].accounttype.options[0].selected = true;
		document.forms[0].tradetype.options[0].selected = true;
	}
}

com.linkage.service.customer.onChangeAccountType = function onChangeAccountType() {
	if (document.forms[0].customertype[2].checked) {
		alert("���ɿͻ��˻����ͱ���Ϊ[�ǹ���]��");
		document.forms[0].accounttype.options[0].selected = true;
	}
}

com.linkage.service.customer.onChangeTradeType = function onChangeTradeType() {
	if (document.forms[0].customertype[2].checked) {
		alert("���ɿͻ���ҵ�������Ϊ[���ɿͻ�]��");
		document.forms[0].tradetype.options[0].selected = true;
	}
}

com.linkage.service.customer.showCustomerType = function showCustomerType() {
	/**
	**		@func		����customertype�Ĳ�ͬѡ�� ��ʾҳ�治ͬ����
	**						�����û���Ҫ��ʾ֤����
	**						��λ�û���Ҫ��ʾ��ҵ
	**						���ɿͻ���Ҫ��ʾ��ҵ ����Ϊ�ǹ��� ����ҵΪ����
	**/
	var customertype = document.forms[0].customertype.value;
	if (customertype == 1) {
		document.all("customertype_group").style.display = "none";
		document.all("customertype_single1").style.display = "";
		document.all("customertype_single2").style.display = "";
		document.all("customertype_single3").style.display = "";
	}else if (customertype == 2) {
	 	document.all("customertype_group").style.display = "";
	 	document.all("customertype_single1").style.display = "none";
	 	document.all("customertype_single2").style.display = "none";
	 	document.all("customertype_single3").style.display = "none";
	}else if (customertype == 3) {
		document.all("customertype_group").style.display = "";
		document.all("customertype_single1").style.display = "none";
		document.all("customertype_single2").style.display = "none";
		document.all("customertype_single3").style.display = "none";
	}
}

com.linkage.service.customer.isValidNewCustomerName = function isValidNewCustomerName(obj) {
	/**
	**		@func		�ͻ���У��
	**		@param  Object obj �û���
	**/
	if (obj == null) obj = document.forms[0].customername;
	var str = com.linkage.util.trim(obj.value);
	//alert(temp);
	if (com.linkage.util.isValidNewUserName(str) == false) {
		obj.focus();
		obj.select();
		return false;
	}
	obj.value = str;
	return true;
}

com.linkage.service.customer.isValidCustomerName = function isValidCustomerName(obj) {
	/**
	**		@func		�ͻ���У��
	**		@param  Object obj �û���
	**/
	if (obj == null) obj = document.forms[0].customername;
	var str = com.linkage.util.trim(obj.value);
	//alert(temp);
	if (com.linkage.util.isValidUserName(str) == false) {
		obj.focus();
		obj.select();
		return false;
	}
	obj.value = str;
	return true;
}

com.linkage.service.customer.isValidCustomerPassword = function isValidCustomerPassword(obj,obj1) {
	/**
	**		@func		�ͻ�����У�� ���������Ƿ����,���������ȷ���Ƿ�һ�µ�
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

com.linkage.service.customer.isValidCustomerType = function isValidCustomerType(obj) {
	/**
	**		@func		�ͻ�����
	**		@param  Object obj	�ͻ�����
	**/
	if (obj == null) obj = document.forms[0].customertype;
	if (!document.forms[0].customertype[0].checked && !document.forms[0].customertype[1].checked && !document.forms[0].customertype[2].checked) {
		alert("��ѡ��ͻ�����");
		return false;
	}
	return true;
}

com.linkage.service.customer.isValidCustomerRealname = function isValidCustomerRealname(obj) {
	/**
	**		@func		�ͻ�ʵ��У��
	**		@param  Object obj	�ͻ�ʵ��
	**/
	if (obj == null) obj = document.forms[0].realname;
	var realname = obj.value;
	if (realname != null && realname != "") {
		if (com.linkage.util.isValidData(realname,'�ͻ�ʵ��') == false) {
			obj.focus();
			obj.select();
			return false;
		}
	}
	return true;
}

com.linkage.service.customer.isValidCustomerCertificate = function isValidCustomerCertificate(obj) {
	/**
	**		@func		�ͻ�֤������У��
	**		@param  Object obj	�ͻ�֤������
	**/
	if (document.forms[0].customertype[0].checked) {
		if (obj == null) obj = document.forms[0].certificate;
		var certificate = obj.value;
		if (com.linkage.util.isValidData(certificate,'֤������') == false) {
			obj.focus();
			obj.select();
			return false;
		}
		return true;
		}
	return true;
}

com.linkage.service.customer.isValidCustomerContactphone = function isValidCustomerContactphone(obj) {
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

com.linkage.service.customer.isValidIDCard = function isValidIDCard(obj1,obj2) {
  /**
	**		@func		�ͻ�֤������У�� ֻУ�����֤����
	**		@param  Object obj	�ͻ���ϵ�绰
	**/
	if (document.forms[0].customertype[0].checked) {
		if(obj2==null) obj2=document.forms[0].certtype;
		if(obj1==null) obj1=document.forms[0].certificate;
		var certificate=obj1.value;
		var certtype = obj2.value;
		if (certtype == 1) { //ֻ�����֤��У�����
			if(com.linkage.util.isValidIDCard(certificate)==true)
				return true;
			else{
			    alert("��������ȷ�����֤���룡");
				obj1.focus();
				obj1.select();
				return false;
			}
		}
	}
	return true;
}

com.linkage.service.customer.isValidCustomerEmail = function isValidCustomerEmail(obj) {
	/**
	**		@func		�ͻ�EmailУ��
	**		@param  Object obj	�ͻ�Email
	**/
	if(obj==null) obj=document.forms[0].email;
	var email = obj.value;
		if (email != null && email != "") {
		if(com.linkage.util.isValidEmail(email)==true)
		     return true;
		else{
		 alert("��������ȷ��Email");
		 obj.focus();
		 obj.select();
		 return false;
		}
	}
}

com.linkage.service.customer.isValidCustomerQuery = function isValidCustomerQuery(obj1,obj2,obj3,obj4,obj5,obj6,obj7) {
    if (obj1 == null) obj1 = document.forms[0].customername;
    if (obj2 == null) obj2 = document.forms[0].realname;
    if (obj3 == null) obj3 = document.forms[0].certificate;
    if (obj4 == null) obj4 = document.forms[0].contactphone;
    if (obj5 == null) obj5 = document.forms[0].bopendate;
    if (obj6 == null) obj6 = document.forms[0].eopendate;
    if (obj7 == null) obj7 = document.forms[0].currentdate;

    var _customername = com.linkage.util.trim(obj1.value);
    var _realname = com.linkage.util.trim(obj2.value);
    var _certificate = com.linkage.util.trim(obj3.value);
    var _contactphone = com.linkage.util.trim(obj4.value);
    var _bopendate = com.linkage.util.trim(obj5.value);
    var _eopendate = com.linkage.util.trim(obj6.value);
    var _currentdate = com.linkage.util.trim(obj7.value);
    var searchCount = 0;

    if(_customername != ""){
        if (com.linkage.util.isValidQueryUserName(_customername) == false) {
            obj1.focus();
            obj1.select();
            return false;
        }
				searchCount ++;
    }

    if(_realname != ""){
		searchCount ++;
	}

	if (_certificate != ""){
		searchCount ++;
	}

	if (_contactphone != "") {
		if (!com.linkage.util.isGsmOrPhone(_contactphone)) {
			alert("��ϵ�绰����ȷ��");
			obj4.focus();
			obj4.select();
			return false;
		}
		searchCount ++;
	}

	if (searchCount == 0){
		alert("�û��ʺţ��û�������֤�����룬��ϵ�绰��������������һ�");
		obj1.focus();
		obj1.select();
		return false;
	}

	if(_bopendate != "" && _eopendate == ""){
		alert("�����뿪������ʱ�䣡");
		return false;
	}
	if(_bopendate == "" && _eopendate != ""){
		alert("�����뿪����ʼʱ�䣡");
		return false;
	}
	if((_bopendate != "") && (com.linkage.util.dateBDate(_bopendate, _currentdate))) {
		alert("������ʼʱ��ӦС�ڵ�ǰʱ�䣡");
		obj5.focus();
		obj5.select();
		return false;
	}
	if((_eopendate != "")&&(com.linkage.util.dateBDate(_eopendate, _currentdate))) {
		alert("��������ʱ��ӦС�ڵ�ǰʱ�䣡");
		obj6.focus();
		obj6.select();
		return false;
	}
	if(_bopendate != "" && _eopendate != ""){
		if ( com.linkage.util.dateBDate(_bopendate,_eopendate)){
			alert("����ʱ�������ڿ�ʼʱ�䣡");
			obj5.focus();
		    obj5.select();
			return false;
		}
	}

	obj1.value = _customername;
	obj2.value = _realname;
	obj3.value = _certificate;
	obj4.value = _contactphone;

	return true;
}