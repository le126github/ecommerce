com.linkage.service.view = new Object();

com.linkage.service.view.hello = function hello(){
    alert("hello");
}

com.linkage.service.view.isValidUserAccount = function isValidUserAccount(obj){
    if(obj == null) obj = document.forms[0].useraccount;
    var useraccount = com.linkage.util.trim(obj.value);
    if(useraccount == "" || !com.linkage.util.isInteger(useraccount)
        || useraccount < 2000000 || useraccount > 8999999){
        alert("请输入用户的代码在2000000~8999999之间！");
		obj.select();
		obj.focus();
		return false;
    }
    if(useraccount.length != 7){
        alert("请输入7位数字的用户代码！");
        obj.select();
		obj.focus();
		return false;
    }
    obj.value = useraccount;
    return true;
}

com.linkage.service.view.isValidPassword = function isValidPassword(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].username;
    if(obj2 == null) obj2 = document.forms[0].password;
    if(obj3 == null) obj3 = document.forms[0].password_sure;
    var username = obj1.value;
    var Password = trim(obj2.value);
    var password_sure = trim(obj3.value);
    if(!com.linkage.util.isValidUserPassword(Password,username))
        return false;
    if (Password != password_sure){
        alert("密码和确认密码不相同！");
        return false;
    }
    document.forms[0].password.value = Password;
    document.forms[0].password_sure.value = password_sure;
    return true;
}

com.linkage.service.view.isValidLimitfee = function isValidLimitfee(obj){
    if(obj == null) obj = document.forms[0].limitfee;
    var limitfee = obj.value;
    if(limitfee == ""){
        alert("当月费用限额不能为空！");
        obj.focus();
        obj.select();
        return false;
    }
    if(!com.linkage.util.isMoney(limitfee)){
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}

com.linkage.service.view.isValidMeetingrate = function isValidMeetingrate(obj){
    if(obj == null) obj = document.forms[0].meetrate;
    if(obj.options.length == 0){
        alert("无可用的会场速率！");
        return false;
    }
    return true;
}

com.linkage.service.view.isValidDate = function isValidDate(obj1,obj2,obj3,obj4){
    if(obj1 == null) obj1 = document.forms[0].effectdate;
    if(obj2 == null) obj2 = document.forms[0].expiredate;
    if(obj3 == null) obj3 = document.forms[0].currentdate;
    var effectdate = obj1.value;
    var expiredate = obj2.value;
    var currentdate = obj3.value;
    if(effectdate == ""){
        alert("请选择开通时间！");
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
            alert("开通时间应大于当前时间！");
            obj1.focus();
            obj1.select();
            return false;
        }
    }else{
        var oldeffectdate = obj4.value;
        if(effectdate != oldeffectdate){
            if(!com.linkage.util.dateBEDate(effectdate,currentdate)){
                alert("开通时间应大于当前时间！");
                obj1.focus();
                obj1.select();
                return false;
            }
        }
    }
    if(!com.linkage.util.dateBDate(expiredate,effectdate)){
        alert("失效时间应大于开通时间！");
        obj2.focus();
        obj2.select();
        return false;
    }
    return true;
}

com.linkage.service.view.changeMediaNumber = function changeMediaNumber(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].areacode;
    if(obj2 == null) obj2 = document.forms[0].usertype;
    if(obj3 == null) obj3 = document.forms[0].useraccount;
//    var areacode = obj1.value;
//    alert(areacode);
//    var usertype = obj2.value;
//    alert(usertype);
//    var useraccount = obj3.value;
//    alert(useraccount);
    document.forms[0].medianumber.value = obj1.value + obj2.value + obj3.value;
}

com.linkage.service.view.sel_status = function sel_status(obj1,obj2,obj3){
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
        document.all("div_close").style.display = "none";
    }
    else if(status == "1"){
        document.all("div_expiredate").style.display = "none";
        document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "";
        document.all("div_close").style.display = "none";
    }
    else if(status == "2"){
        if(!com.linkage.util.dateBEDate(expiredate,currentdate)){
            document.all("div_expiredate").style.display = "";
        }else{
            document.all("div_expiredate").style.display = "none";
        }
        document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "none";
        document.all("div_close").style.display = "";
    }
}

com.linkage.service.view.isValidExpireDate = function isValidExpireDate(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    if(obj2 == null) obj2 = document.forms[0].currentdate;
    if(obj3 == null) obj3 = document.forms[0].expiredate;
    var status = obj1.value;
    var currentdate = obj2.value;
    var expiredate = obj3.value;

    if(status == "2"){
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

com.linkage.service.view.processStatus = function processStatus(obj,value){
    if(obj == null) obj = document.forms[0].status;
    obj.value = value;
}

com.linkage.service.view.sel_cancel_status = function sel_cancel_status(obj1){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    var status = obj1.value;
    if(status == "0"){
        document.all("div_normal_cancel").style.display = "";
        document.all("div_pause_cancel").style.display = "none";
    }
    else if(status == "1"){
        document.all("div_normal_cancel").style.display = "none";
        document.all("div_pause_cancel").style.display = "";
    }
}

com.linkage.service.view.isValidGroupid = function isValidGroupid(obj){
    if(obj == null) obj = document.forms[0].groupid;
    if(obj.options.length == 0){
        alert("无可用组别！");
        return false;
    }
    return true;
}

com.linkage.service.view.onChangeAreano = function onChangeAreano(str1) {
	com.linkage.service.view.prepareInfo(str1);
}

com.linkage.service.view.prepareInfo = function prepareInfo(str1) {
	document.forms[0].action = "/main/mclient/view/"+str1+"_prepare.action";
	document.forms[0].submit();
}

com.linkage.service.view.isValidViewQuery = function isValidViewQuery(obj1,obj2,obj5,obj6,obj7) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].useraccount;
    if (obj5 == null) obj5 = document.forms[0].bopendate;
    if (obj6 == null) obj6 = document.forms[0].eopendate;
    if (obj7 == null) obj7 = document.forms[0].currentdate;

    var _username = com.linkage.util.trim(obj1.value);
    var _useraccount = com.linkage.util.trim(obj2.value);
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

    if(_useraccount != ""){
        if(!com.linkage.util.isInteger(_useraccount)){
            alert("请输入正确终端号码！");
            obj2.focus();
            obj2.select();
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
	obj2.value = _useraccount;

	return true;
}