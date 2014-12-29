com.linkage.service.customer = new Object();

com.linkage.service.customer.onChangeCustomerType = function onChangeCustomerType() {
	/**
	**		@func		根据customertype的不同选择 显示页面不同部分
	**						个人用户需要输入证件等
	**						单位用户需要输入行业
	**						网吧客户需要输入行业 必须为非公免 且行业为网吧
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
		alert("网吧客户账户类型必须为[非公免]！");
		document.forms[0].accounttype.options[0].selected = true;
	}
}

com.linkage.service.customer.onChangeTradeType = function onChangeTradeType() {
	if (document.forms[0].customertype[2].checked) {
		alert("网吧客户行业代码必须为[网吧客户]！");
		document.forms[0].tradetype.options[0].selected = true;
	}
}

com.linkage.service.customer.showCustomerType = function showCustomerType() {
	/**
	**		@func		根据customertype的不同选择 显示页面不同部分
	**						个人用户需要显示证件等
	**						单位用户需要显示行业
	**						网吧客户需要显示行业 必须为非公免 且行业为网吧
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
	**		@func		客户名校验
	**		@param  Object obj 用户名
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
	**		@func		客户名校验
	**		@param  Object obj 用户名
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
	**		@func		客户密码校验 包括密码是否符合,密码和密码确认是否一致等
	**		@param  Object obj	密码
	**						Object obj1	密码确认
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
		alert("密码与密码确认不一致！");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.customer.isValidCustomerType = function isValidCustomerType(obj) {
	/**
	**		@func		客户类型
	**		@param  Object obj	客户类型
	**/
	if (obj == null) obj = document.forms[0].customertype;
	if (!document.forms[0].customertype[0].checked && !document.forms[0].customertype[1].checked && !document.forms[0].customertype[2].checked) {
		alert("请选择客户类型");
		return false;
	}
	return true;
}

com.linkage.service.customer.isValidCustomerRealname = function isValidCustomerRealname(obj) {
	/**
	**		@func		客户实名校验
	**		@param  Object obj	客户实名
	**/
	if (obj == null) obj = document.forms[0].realname;
	var realname = obj.value;
	if (realname != null && realname != "") {
		if (com.linkage.util.isValidData(realname,'客户实名') == false) {
			obj.focus();
			obj.select();
			return false;
		}
	}
	return true;
}

com.linkage.service.customer.isValidCustomerCertificate = function isValidCustomerCertificate(obj) {
	/**
	**		@func		客户证件号码校验
	**		@param  Object obj	客户证件号码
	**/
	if (document.forms[0].customertype[0].checked) {
		if (obj == null) obj = document.forms[0].certificate;
		var certificate = obj.value;
		if (com.linkage.util.isValidData(certificate,'证件号码') == false) {
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
	**		@func		客户联系电话校验
	**		@param  Object obj	客户联系电话
	**/
	if(obj==null) obj=document.forms[0].contactphone;
	var contactphone=obj.value;
	//alert("contactphone的值为："+contactphone);
	if(com.linkage.util.isValidPhone(contactphone)==true)
	     return true;
	else
		{
		 alert("请输入正确的联系电话：手机(11位)或者固定电话(7位或8位也可加上分机号)");
		 //obj.value="";
		 obj.focus();
		 obj.select();
		 return false;
		}
}

com.linkage.service.customer.isValidIDCard = function isValidIDCard(obj1,obj2) {
  /**
	**		@func		客户证件号码校验 只校验身份证号码
	**		@param  Object obj	客户联系电话
	**/
	if (document.forms[0].customertype[0].checked) {
		if(obj2==null) obj2=document.forms[0].certtype;
		if(obj1==null) obj1=document.forms[0].certificate;
		var certificate=obj1.value;
		var certtype = obj2.value;
		if (certtype == 1) { //只有身份证才校验号码
			if(com.linkage.util.isValidIDCard(certificate)==true)
				return true;
			else{
			    alert("请输入正确的身份证号码！");
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
	**		@func		客户Email校验
	**		@param  Object obj	客户Email
	**/
	if(obj==null) obj=document.forms[0].email;
	var email = obj.value;
		if (email != null && email != "") {
		if(com.linkage.util.isValidEmail(email)==true)
		     return true;
		else{
		 alert("请输入正确的Email");
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
			alert("联系电话不正确！");
			obj4.focus();
			obj4.select();
			return false;
		}
		searchCount ++;
	}

	if (searchCount == 0){
		alert("用户帐号，用户姓名，证件号码，联系电话请至少输入其中一项！");
		obj1.focus();
		obj1.select();
		return false;
	}

	if(_bopendate != "" && _eopendate == ""){
		alert("请输入开户结束时间！");
		return false;
	}
	if(_bopendate == "" && _eopendate != ""){
		alert("请输入开户开始时间！");
		return false;
	}
	if((_bopendate != "") && (com.linkage.util.dateBDate(_bopendate, _currentdate))) {
		alert("开户开始时间应小于当前时间！");
		obj5.focus();
		obj5.select();
		return false;
	}
	if((_eopendate != "")&&(com.linkage.util.dateBDate(_eopendate, _currentdate))) {
		alert("开户结束时间应小于当前时间！");
		obj6.focus();
		obj6.select();
		return false;
	}
	if(_bopendate != "" && _eopendate != ""){
		if ( com.linkage.util.dateBDate(_bopendate,_eopendate)){
			alert("结束时间必须大于开始时间！");
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