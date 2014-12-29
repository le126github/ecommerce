com.linkage.service.line = new Object();

com.linkage.service.line.onChangeRouter = function onChangeRouter(str1,str2) {
	com.linkage.service.line.prepareInfo(str1,str2);
}

com.linkage.service.line.prepareInfo = function prepareInfo(str1,str2) {
	document.forms[0].action = "/main/mclient/"+str1+"/"+str2+"_prepare.action";
	document.forms[0].submit();
}

com.linkage.service.line.isValidGroupid = function isValidGroupid(obj){
    if(obj == null) obj = document.forms[0].groupid;
    if(obj.options.length == 0){
        alert("无可用组别！");
        return false;
    }
    return true;
}

com.linkage.service.line.isValidIP = function isValidIP(obj){
    if(obj == null) obj = document.forms[0].devid;
    if(obj.value == "-*"){
        alert("请选择IP地址！");
        return false;
    }
    return true;
}

com.linkage.service.line.isValidPortid = function isValidPortid(obj){
    if(obj == null) obj = document.forms[0].portid;
    if(obj.value == "-*"){
        alert("请选择端口！");
        return false;
    }
    return true;
}

com.linkage.service.line.isValidDate = function isValidDate(obj1,obj2,obj3,obj4){
    if(obj1 == null) obj1 = document.forms[0].effectdate;
    if(obj2 == null) obj2 = document.forms[0].expiredate;
    if(obj3 == null) obj3 = document.forms[0].currentdate;
    var effectdate = obj1.value;
    var expiredate = obj2.value;
    var currentdate = obj3.value;
    if(effectdate == ""){
        alert("请选择生效时间！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(expiredate == ""){
        alert("请选择失效时间！");
        obj2.focus();
        obj2.select();
        return false;
    }
    if(obj4 == null){
        if(!com.linkage.util.dateBEDate(effectdate,currentdate)){
            alert("生效时间应大于当前时间！");
            obj1.focus();
            obj1.select();
            return false;
        }
    }else{
        var oldeffectdate = obj4.value;
        if(effectdate != oldeffectdate){
            if(!com.linkage.util.dateBEDate(effectdate,currentdate)){
                alert("生效时间应大于当前时间！");
                obj1.focus();
                obj1.select();
                return false;
            }
        }
    }
    if(!com.linkage.util.dateBDate(expiredate,effectdate)){
        alert("失效时间应大于生效时间！");
        obj2.focus();
        obj2.select();
        return false;
    }
    return true;
}

com.linkage.service.line.setDevAndPort = function setDevAndPort(obj){
    if(obj == null) obj = document.forms[0].lineUser;
    var lineUser = obj.value;
    var split = lineUser.split("--");
    document.forms[0].devid.value = split[0];
    document.forms[0].portid.value = split[1];
}

com.linkage.service.line.sel_status = function sel_status(obj1,obj2,obj3){
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

com.linkage.service.line.processStatus = function processStatus(obj,value){
    if(obj == null) obj = document.forms[0].status;
    obj.value = value;
}

com.linkage.service.line.isValidExpireDate = function isValidExpireDate(obj1,obj2,obj3){
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

com.linkage.service.line.onChangeAreano = function onChangeAreano(str1,str2) {
	com.linkage.service.line.prepareInfo(str1,str2);
}

com.linkage.service.line.isValidLineQuery = function isValidLineQuery(obj1,obj5,obj6,obj7) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj5 == null) obj5 = document.forms[0].bopendate;
    if (obj6 == null) obj6 = document.forms[0].eopendate;
    if (obj7 == null) obj7 = document.forms[0].currentdate;

    var _username = com.linkage.util.trim(obj1.value);
    var _bopendate = com.linkage.util.trim(obj5.value);
    var _eopendate = com.linkage.util.trim(obj6.value);
    var _currentdate = com.linkage.util.trim(obj7.value);

    if(_username != ""){
        if (com.linkage.util.isValidQueryUserName(_username) == false) {
            obj1.focus();
            obj1.select();
            return false;
        }
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

	obj1.value = _username;

	return true;
}