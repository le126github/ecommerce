com.linkage.service.corpemail = new Object();

com.linkage.service.corpemail.onChangeAreano = function onChangeAreano(str) {
	com.linkage.service.corpemail.prepareInfo(str);
}

com.linkage.service.corpemail.prepareInfo = function prepareInfo(str) {
	document.forms[0].action = "/main/mclient/corpemail/"+str+"_prepare.action";
	document.forms[0].submit();
}

com.linkage.service.corpemail.onChangeGroupid = function onChangeGroupid(obj1,obj2,obj3) {
	if(obj1 == null) obj1 = document.forms[0].groupid;
	if(obj2 == null) obj2 = document.forms[0].maxsize;
	if(obj3 == null) obj3 = document.forms[0].check_maxchild;
	obj2.selectedIndex = obj1.selectedIndex;
	var tmp = obj2.value;
	if(tmp != "-*")
	    obj3.value = tmp/1024/2;
}

com.linkage.service.corpemail.isValidGroupid = function isValidGroupid(obj){
    if(obj == null) obj = document.forms[0].groupid;
    if(obj.options.length == 0){
        alert("无可用的邮箱容量！");
        return false;
    }
    if(obj.value == "-*"){
        alert("请选择邮箱容量！");
        return false;
    }
    return true;
}

com.linkage.service.corpemail.sel_paytype = function sel_paytype(obj){
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

com.linkage.service.corpemail.isValidDomain = function isValidDomain(obj) {
    if(obj == null) obj = document.forms[0].domain;
	var str = trim(obj.value);
	len = str.length;
	//没有@
	if(str.indexOf('@') >= 0){
	    alert("请输入合法的域名！");
	    obj.focus();
	    obj.select();
  	    return false;
  	}
	if(str.indexOf('.') == -1){
	    alert("请输入合法的域名！");
	    obj.focus();
	    obj.select();
  	    return false;
    }
    if (str.lastIndexOf('.') == (len-1) ){//'.'在最后一位
        alert("请输入合法的域名！");
        obj.focus();
	    obj.select();
  	    return false;
  	}
    for(var j=0;j<len-1;j++){//判断是否有".."
  	    if((str.charAt(j) == '.' && str.charAt(j+1) == '.')){
  	        alert("请输入合法的域名！");
  	        obj.focus();
	        obj.select();
    	    return false;
    	}
  	}
	validstr = "1234567890abcdefghijklmnopqrstuvwxyz_-.~";
    lowerstr = str.toLowerCase();
    for(i=0;i<len;i++){
  	    if(validstr.indexOf(lowerstr.charAt(i)) == -1){
  	        alert("请输入合法的域名！");
  	        obj.focus();
	        obj.select();
    	    return false;
    	}
 	}
 	return true;
}

com.linkage.service.corpemail.isValidMaxchild = function isValidMaxchild(obj1,obj2) {
    if(obj1 == null) obj1 = document.forms[0].maxchild;
    if(obj2 == null) obj2 = document.forms[0].check_maxchild;
    if(obj1.value == ''){
        alert("请输入最大子邮箱数！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isNaturalNum(obj1.value)){
        alert("最大子邮箱数必须是大于0的整数！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(parseInt(obj1.value) > parseInt(obj2.value)){
        alert("最大子邮箱数超出范围，不得大于"+obj2.value);
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.service.corpemail.isValidMaxlayer = function isValidMaxlayer(obj) {
    if(obj == null) obj = document.forms[0].maxlayer;
    var maxlayer = obj.value;
    if(maxlayer == ''){
        alert("请输入最大层数！");
        obj.focus();
        obj.select();
        return false;
    }
    if(!com.linkage.util.isNaturalNum(maxlayer)){
        alert("最大层数必须是大于0的整数！");
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}

com.linkage.service.corpemail.isValidPaytype = function isValidPaytype(obj1,obj2,obj3,obj4) {
    if(obj1 == null) obj1 = document.forms[0].paytype;
    if(obj2 == null) obj2 = document.forms[0].paynum;
    if(obj3 == null) obj3 = document.forms[0].telcount;
    if(obj4 == null) obj4 = document.forms[0].balance;
    var paytype = obj1.value;
    var paynum = obj2.value;
    var telcount = obj3.value;
    var balance = obj4.value;
    if(paytype == 1){
        if(!com.linkage.util.isBankNO(paynum)){
            obj2.focus();
            obj2.select();
            return false;
        }else{
            obj4.value = "0.0";
        }
    }else if(paytype == 2){
        if (!com.linkage.util.isPhoneNumber(paynum,telcount,"付费号码")){
            obj2.focus();
            obj2.select();
            return false;
        }else{
            obj4.value = "0.0";
        }
    }else if(paytype == 4){
        if(balance == ""){
            alert("余额不能为空！");
            obj4.focus();
            obj4.select();
            return false;
        }
        if(!com.linkage.util.isMoney(balance)){
            obj4.focus();
            obj4.select();
            return false;
        }
        obj2.value = "";
    }else{
        obj2.value = "";
        obj4.value = "0.0";
    }
    return true;
}

com.linkage.service.corpemail.isValidPassword = function isValidPassword(obj1,obj2){
    if(obj1 == null) obj1 = document.forms[0].password;
    if(obj1 == null) obj1 = document.forms[0].password_sure;
    var Password = trim(obj1.value);
    var password_sure = trim(obj2.value);
    if(!com.linkage.util.isValidUserPassword(Password)){
        obj1.focus();
        obj1.select();
        return false;
    }
    if (Password != password_sure){
        alert("密码和确认密码不相同！");
        return false;
    }
    document.forms[0].password.value = Password;
    document.forms[0].password_sure.value = password_sure;
    return true;
}

com.linkage.service.corpemail.isValidCorpemailDomain = function isValidCorpemailDomain(obj1,obj2,obj3) {
    if(obj1 == null) obj1 = document.forms[0].corpemail;
    if(obj2 == null) obj2 = document.forms[0].name;
    if(obj3 == null) obj3 = document.forms[0].domain;
	var defaultdomain="master";
	var corpemail = trim(obj1.value);
	if(corpemail == null || corpemail == ''){
	    alert("请输入域名！");
	    obj1.focus();
	    obj1.select();
	    return false;
	}
	if(corpemail.indexOf("@")>=0){
	    var tmp1 = corpemail.substring(0,corpemail.indexOf("@"));
	    var tmp2 = corpemail.substring(corpemail.indexOf("@")+1);
	    if(tmp1 != defaultdomain){
	        alert("域名必须为"+defaultdomain+"@"+tmp2);
	        return false;
	    }
	    obj2.value = defaultdomain;
	    obj3.value = tmp2;
	}else{
        obj2.value = defaultdomain;
        obj3.value = corpemail;
    }
 	return true;
}

com.linkage.service.corpemail.processStatus = function processStatus(obj,value){
    if(obj == null) obj = document.forms[0].status;
    obj.value = value;
}

com.linkage.service.corpemail.sel_status = function sel_status(obj1,obj2,obj3){
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

com.linkage.service.corpemail.isValidExpireDate = function isValidExpireDate(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    if(obj2 == null) obj2 = document.forms[0].currentdate;
    if(obj3 == null) obj3 = document.forms[0].expiredate;
    var status = obj1.value;
    var currentdate = obj2.value;
    var expiredate = obj3.value;

    if(status == "1"){
        if(expiredate == ""){
            alert("请选择失效时间！");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(!com.linkage.util.dateBEDate(expiredate,currentdate)){
            alert("失效时间应大于当前时间！");
            obj3.focus();
            obj3.select();
            return false;
        }
    }
    return true;
}

com.linkage.service.corpemail.isValidDate = function isValidExpireDate(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].currentdate;
    if(obj2 == null) obj2 = document.forms[0].expiredate;
    if(obj3 == null) obj3 = document.forms[0].birthday;

    var currentdate = obj1.value;
    var expiredate = obj2.value;
    var birthday = obj3.value;

    if(!com.linkage.util.dateBEDate(expiredate,currentdate)){
        alert("失效时间应大于当前时间！");
        obj2.focus();
        obj2.select();
        return false;
    }

    if(!com.linkage.util.dateBEDate(currentdate,birthday)){
        alert("生日应小于当前时间！");
        obj3.focus();
        obj3.select();
        return false;
    }
    return true;
}

com.linkage.service.corpemail.isValidCorpemailQuery = function isValidCorpemailQuery(obj1,obj2,obj3,obj4,obj5,obj6,obj7) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].name;
    if (obj3 == null) obj3 = document.forms[0].domain;
    if (obj4 == null) obj4 = document.forms[0].openoperator;
    if (obj5 == null) obj5 = document.forms[0].bopendate;
    if (obj6 == null) obj6 = document.forms[0].eopendate;
    if (obj7 == null) obj7 = document.forms[0].currentdate;

    var _corpemail = com.linkage.util.trim(obj1.value);
    var _openoperator = com.linkage.util.trim(obj4.value);
    var _bopendate = com.linkage.util.trim(obj5.value);
    var _eopendate = com.linkage.util.trim(obj6.value);
    var _currentdate = com.linkage.util.trim(obj7.value);
    var searchCount = 0;

    if(_corpemail != ""){
        var defaultdomain="master";
	    if(_corpemail.indexOf("@")>=0){
	        var tmp1 = _corpemail.substring(0,_corpemail.indexOf("@"));
	        var tmp2 = _corpemail.substring(_corpemail.indexOf("@")+1);
	        if(tmp1 != defaultdomain){
	            alert("域名必须为"+defaultdomain+"@"+tmp2);
	            return false;
	        }
	        obj2.value = defaultdomain;
	        obj3.value = tmp2;
	    }else{
            obj2.value = defaultdomain;
            obj3.value = _corpemail;
        }
		searchCount ++;
    }

    if(_openoperator != ""){
		searchCount ++;
	}

	if (searchCount == 0){
		alert("域名、开户管理员请至少输入其中一项！");
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

	obj4.value = _openoperator;

	return true;
}