com.linkage.service.email = new Object();

com.linkage.service.email.isValidEmail = function isValidEmail(obj) {
	if (obj == null) obj = document.forms[0].email;
	var str = obj.value;
	var SPECIAL_USERNAME_PREFIX = "~!#$%^&_-.|";//ͬBD_SYS_CONFIG�����USERNAME_PREFIX����һ��
	var SPECIAL_USERNAME_SUFFIX = "~!#$%^&_-.|";//ͬBD_SYS_CONFIG�����USERNAME_SUFFIX����һ��
	var USERNAME_PREFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_PREFIX;
	var USERNAME_SUFFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_SUFFIX;
	var MAX_USERNAME_LENGTH = "40";
	str = com.linkage.util.trim(str);
	if (str == "") {
		alert("Email������Ϊ��.");
		obj.focus();
		obj.select();
		return false;
	}
	if (str.length > MAX_USERNAME_LENGTH) {
		alert("�����Email������̫��.");
		obj.focus();
		obj.select();
		return false;
	}
	if ( USERNAME_PREFIX.indexOf( str.charAt(0) ) == -1) {
		alert("Email�������ԷǷ��ַ�("+str.charAt(0)+")��ͷ.");
		obj.focus();
		obj.select();
		return false;
	}
	for(var i=1;i<str.length;i++){
		if ( USERNAME_SUFFIX.indexOf( str.charAt(i) ) == -1) {
			alert("�����Email�����зǷ��ַ�("+str.charAt(i)+").");
			obj.focus();
		    obj.select();
			return false;
		}
	}
	/*
	if ( (/^[A-Za-z0-9~!#$%^&_-|]+$/g).test(str) == false ) {
		return false;
	}
	*/
	obj.value = str;
	return true;
}

com.linkage.service.email.isValidRealm = function isValidRealm(obj){
    if(obj == null) obj = document.forms[0].realm;
    if(obj.options.length == 0){
        alert("�޿���������");
        return false;
    }
    return true;
}

com.linkage.service.email.isValidPassword = function isValidPassword(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].username;
    if(obj2 == null) obj2 = document.forms[0].password;
    if(obj3 == null) obj3 = document.forms[0].password_sure;
    var username = obj1.value;
    var Password = trim(obj2.value);
    var password_sure = trim(obj3.value);
    if(!com.linkage.util.isValidUserPassword(Password,username))
        return false;
    if (Password != password_sure){
        alert("�����ȷ�����벻��ͬ��");
        return false;
    }
    document.forms[0].password.value = Password;
    document.forms[0].password_sure.value = password_sure;
    return true;
}

com.linkage.service.email.isValidGroupid = function isValidGroupid(obj){
    if(obj == null) obj = document.forms[0].groupid;
    if(obj.options.length == 0){
        alert("�޿������");
        return false;
    }
    return true;
}

com.linkage.service.email.isValidDate = function isValidDate(obj1,obj2,obj3,obj4){
    if(obj1 == null) obj1 = document.forms[0].effectdate;
    if(obj2 == null) obj2 = document.forms[0].expiredate;
    if(obj3 == null) obj3 = document.forms[0].currentdate;
    var effectdate = obj1.value;
    var expiredate = obj2.value;
    var currentdate = obj3.value;
    if(effectdate == ""){
        alert("��ѡ��ͨʱ�䣡");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(expiredate == ""){
        alert("��ѡ��ʧЧʱ�䣡");
        obj2.focus();
        obj2.select();
        return false;
    }
    if(obj4 == null){
        if(!com.linkage.util.dateBEDate(effectdate,currentdate)){
            alert("��ͨʱ��Ӧ���ڵ�ǰʱ�䣡");
            obj1.focus();
            obj1.select();
            return false;
        }
    }else{
        var oldeffectdate = obj4.value;
        if(effectdate != oldeffectdate){
            if(!com.linkage.util.dateBEDate(effectdate,currentdate)){
                alert("��ͨʱ��Ӧ���ڵ�ǰʱ�䣡");
                obj1.focus();
                obj1.select();
                return false;
            }
        }
    }
    if(!com.linkage.util.dateBDate(expiredate,effectdate)){
        alert("ʧЧʱ��Ӧ���ڿ�ͨʱ�䣡");
        obj2.focus();
        obj2.select();
        return false;
    }
    return true;
}

com.linkage.service.email.setEmailAndRealm = function setEmailAndRealm(obj){
    if(obj == null) obj = document.forms[0].emailName;
    var emailName = obj.value;
    var split = emailName.split("@");
    document.forms[0].email.value = split[0];
    document.forms[0].realm.value = split[1];
}

com.linkage.service.email.sel_sendflageffect = function sel_sendflageffect(obj){
    if(obj == null) obj = document.forms[0].sendflag;
    if(obj[0].checked){
        document.all("div_sendflageffect").style.display = "none";
    }
    if(obj[1].checked){
        document.all("div_sendflageffect").style.display = "";
    }
}

com.linkage.service.email.sel_sendflag = function sel_sendflag(obj1,obj2){
    if(obj1 == null) obj1 = document.forms[0].oldsendflag;
    var sendflag = obj1.value;
    if(sendflag == "1"){
        document.all("div_sendflageffect").style.display = "";
        if(obj2 == null) obj2 = document.forms[0].sendflag;
        obj2[1].checked = true;
    }else{
        document.all("div_sendflageffect").style.display = "none";
        if(obj2 == null) obj2 = document.forms[0].sendflag;
        obj2[0].checked = true;
    }
}

com.linkage.service.email.isValidSendsource = function isValidSendsource(obj1,obj2){
    if(obj1 == null) obj1 = document.forms[0].sendflag;
    if(obj1[1].checked){
        if(obj2 == null) obj2 = document.forms[0].sendsource;
        var sendsource = obj2.value;
        if(!com.linkage.util.isValidEmail(sendsource)){
            alert("������Ϸ���ת��Դ��Ϊ��Ч��Email��ַ��");
            return false;
        }
    }else{
        if(obj2 == null) obj2 = document.forms[0].sendsource;
        obj2.value = "";
    }
    return true;
}

com.linkage.service.email.sel_status = function sel_status(obj){
    if(obj == null) obj = document.forms[0].oldstatus;
    var status = obj.value;
    if(status == "0"){
        document.all("div_normal_pause").style.display = "";
        document.all("div_pause_normal").style.display = "none";
    }
    else if(status == "1"){
        document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "";
    }
}

com.linkage.service.email.processStatus = function processStatus(obj,value){
    if(obj == null) obj = document.forms[0].status;
    obj.value = value;
}

com.linkage.service.email.sel_selecttype = function sel_selecttype(obj){
    if(obj == null) obj = document.forms[0].selecttype;
    if(obj[0].checked){
        document.all("div_username").style.display = "";
        document.all("div_areano").style.display = "none";
    }
    if(obj[1].checked){
        document.all("div_username").style.display = "none";
        document.all("div_areano").style.display = "";
    }
}

com.linkage.service.email.setInitPost = function setInitPost(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].selecttype;
    if(obj1[0].checked){
        if(obj2 == null) obj2 = document.forms[0].selectemail;
        document.forms[0].action = obj2.value;
        //document.forms[0].submit();
    }
    if(obj1[1].checked){
        if(obj3 == null) obj3 = document.forms[0].inputemail;
        document.forms[0].action = obj3.value;
        //document.forms[0].submit();
    }
    return true;
}

com.linkage.service.email.isValidInit = function isValidInit(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].selecttype;
    if(obj1[0].checked){
        if(obj2 == null) obj2 = document.forms[0].customername;
        return com.linkage.service.customer.isValidCustomerName(obj2);
    }
    if(obj1[1].checked){
        if(obj3 == null) obj3 = document.forms[0].areano;
        if(obj3.options.length == 0){
            alert("�޿������أ�");
            return false;
        }
    }
    return true;
}

com.linkage.service.email.onKeyDown = function onkeydown(obj1,obj2,obj3){
    key = event.keyCode;
	if (key == 13) {
		com.linkage.service.email.setInitPost(obj1,obj2,obj3);
	}
}

com.linkage.service.email.prepareInfo = function prepareInfo(str1,str2) {
	document.forms[0].action = "/main/mclient/"+str1+"/"+str2+"_prepare.action";
	document.forms[0].submit();
}

com.linkage.service.email.onChangeAreano = function onChangeAreano(str1,str2) {
	com.linkage.service.email.prepareInfo(str1,str2);
}

com.linkage.service.email.isValidEmailQuery = function isValidEmailQuery(obj1,obj2,obj5,obj6,obj7) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].email;
    if (obj5 == null) obj5 = document.forms[0].bopendate;
    if (obj6 == null) obj6 = document.forms[0].eopendate;
    if (obj7 == null) obj7 = document.forms[0].currentdate;

    var _username = com.linkage.util.trim(obj1.value);
    var _email = com.linkage.util.trim(obj2.value);
    var _bopendate = com.linkage.util.trim(obj5.value);
    var _eopendate = com.linkage.util.trim(obj6.value);
    var _currentdate = com.linkage.util.trim(obj7.value);
    var searchCount = 0;

    if(_username != ""){
        if (com.linkage.util.isValidQueryUserName(_username) == false) {
            obj1.focus();
            obj1.select();
            return false;
        }
        searchCount++;
    }

    if(_email != ""){
        if (com.linkage.service.email.isValidEmail(obj2) == false) {
            obj2.focus();
            obj2.select();
            return false;
        }
        searchCount++;
    }

    if (searchCount == 0){
		alert("�û��ʺţ�EMAIL������������������һ�");
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

	obj1.value = _username;
	obj2.value = _email;

	return true;
}

com.linkage.service.email.sel_paytype = function sel_paytype(obj){
    if(obj == null) obj = document.forms[0].paytype;
    var paytype = obj.value;
    if(paytype == 1 || paytype ==2){
        document.all("div_paynum").style.display = "";
        document.all("div_balance").style.display = "none";
    }else if(paytype == 4){
        document.all("div_paynum").style.display = "none";
        document.all("div_balance").style.display = "";
    }else{
        document.all("div_paynum").style.display = "none";
        document.all("div_balance").style.display = "none";
    }
}

com.linkage.service.email.isValidPaytype = function isValidPaytype(obj1,obj2,obj3,obj4) {
    if(obj1 == null) obj1 = document.forms[0].paytype;
    if(obj2 == null) obj2 = document.forms[0].paynum;
    if(obj3 == null) obj3 = document.forms[0].balance;
    if(obj4 == null) obj4 = document.forms[0].telcount;
    if(obj1.options.length == 0){
        alert("�޿��õĸ��ѷ�ʽ��");
        return false;
    }
    var paytype = obj1.value;
    var paynum_ = obj2.value;
    var balance = obj3.value;
    var telcount = obj4.value;
    if(paytype == 1){
        if(!com.linkage.util.isBankNO(paynum_)){
            obj2.focus();
            obj2.select();
            return false;
        }else{
            obj3.value = "0.0";
        }
    }else if(paytype == 2){
        if (!com.linkage.util.isPhoneNumber(paynum_,telcount,"���Ѻ���")){
            //alert("��������ȷ�ĸ��Ѻ��룡");
            obj2.focus();
            obj2.select();
            return false;
        }else{
            obj3.value = "0.0";
        }
    }else if(paytype == 4){
        if(!com.linkage.util.isMoney(balance)){
            obj3.focus();
            obj3.select();
            return false;
        }
        obj2.value = "";
    }else{
        obj3.value = "0.0";
        obj2.value = "";
    }
    return true;
}