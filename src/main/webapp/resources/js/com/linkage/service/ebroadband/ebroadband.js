com.linkage.service.ebroadband = new Object();

com.linkage.service.ebroadband.sel_authtype = function sel_authtype(obj){
    if(obj == null) obj = document.forms[0].authtype;
    var authtype = obj.value;
    if(authtype == null){
        document.all("div_frameip").style.display = "none";
        document.all("div_url").style.display = "none";
    }else if(authtype == "-1"){
        document.all("div_frameip").style.display = "none";
        document.all("div_url").style.display = "none";
    }else if(authtype == "1001"){
        document.all("div_frameip").style.display = "";
        document.all("div_url").style.display = "none";
    }else if(authtype == "1002"){
        document.all("div_frameip").style.display = "none";
        document.all("div_url").style.display = "";
    }else if(authtype == "1003"){
        document.all("div_frameip").style.display = "";
        document.all("div_url").style.display = "";
    }
}

com.linkage.service.ebroadband.sel_servicefee = function sel_servicefee(obj){
    if(obj == null) obj = document.forms[0].optionalservice;
    var optionalservice = obj.value;
    if(optionalservice > "-1"){
        document.all("div_service_fee").style.display = "";
    }else{
        document.all("div_service_fee").style.display = "none";
    }
}

com.linkage.service.ebroadband.sel_bindtype = function sel_bindtype(){
    document.forms[0].writeattr.disabled = document.forms[0].bindtype.disabled;
    document.forms[0].bindattr.value = "";
}

com.linkage.service.ebroadband.sel_paytype = function sel_paytype(obj){
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

com.linkage.service.ebroadband.isValidAuthtype = function isValidAuthtype(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].authtype;
    if(obj2 == null) obj2 = document.forms[0].frameip;
    if(obj3 == null) obj3 = document.forms[0].url;
    var authtype = obj1.value;
    var frameip = trim(obj2.value);
    var URL = trim(obj3.value);
    if(authtype == "-1"){
        document.forms[0].frameip.value = "";
        document.forms[0].url.value = "";
    }else if(authtype == "1001"){
        document.forms[0].url.value = "";
        if(!com.linkage.util.isValidIP(frameip)){
            obj2.focus();
            obj2.select();
            return false;
        }
        document.forms[0].frameip.value = frameip;
    }else if(authtype == "1002"){
        document.forms[0].frameip.value = "";
        if(URL == ""){
            alert("请输入URL！");
            obj3.focus();
            obj3.select();
            return false;
        }
        document.forms[0].url.value = URL;
    }else if(authtype == "1003"){
        if(!com.linkage.util.isValidIP(frameip)){
            obj2.focus();
            obj2.select();
            return false;
        }
        if(URL == ""){
            alert("请输入URL！");
            obj3.focus();
            obj3.select();
            return false;
        }
        document.forms[0].frameip.value = frameip;
        document.forms[0].url.value = URL;
    }
    return true;
}

com.linkage.service.ebroadband.isValidGroupid = function isValidGroupid(obj){
    if(obj == null) obj = document.forms[0].groupid;
    if(obj.options.length == 0){
        alert("无可用组别！");
        return false;
    }
    return true;
}

com.linkage.service.ebroadband.isValidPassword = function isValidPassword(obj1,obj2,obj3){
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

com.linkage.service.ebroadband.isValidPhone = function isValidPhone(obj1,obj2) {
	if(obj1 == null) obj1 = document.forms[0].carrytelephone;
	if(obj2 == null) obj2 = document.forms[0].telcount;
	var phone=obj1.value;
	var telcount = obj2.value;
	if(!com.linkage.util.isPhoneNumber(phone,telcount,"承载电话")){
	    //alert("请输入正确的承载电话：手机(11位)或者固定电话(7位或8位也可加上分机号)");
	    obj1.focus();
	    obj1.select();
	    return false;
	}
	return true;
}

com.linkage.service.ebroadband.isValidPaytype = function isValidPaytype(obj1,obj2,obj3,obj4) {
    if(obj1 == null) obj1 = document.forms[0].paytype;
    if(obj2 == null) obj2 = document.forms[0].paynum;
    if(obj3 == null) obj3 = document.forms[0].balance;
    if(obj4 == null) obj4 = document.forms[0].telcount;
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
        if (!com.linkage.util.isPhoneNumber(paynum_,telcount,"付费号码")){
            //alert("请输入正确的付费号码！");
            obj2.focus();
            obj2.select();
            return false;
        }else{
            obj3.value = "0.0";
        }
    }else if(paytype == 4){
        if(!com.linkage.util.isMoney(balance)){
            obj3.balance.focus();
            obj3.balance.select();
            return false;
        }else{
            obj2.value = "";
        }
    }else{
        obj3.value = "0.0";
        obj2.value = "";
    }
    return true;
}

com.linkage.service.ebroadband.isValidLimitfee = function isValidLimitfee(obj){
    if(obj == null) obj = document.forms[0].limitfee;
    var limitfee = obj.value;
    if(!com.linkage.util.isMoney(limitfee)){
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}

com.linkage.service.ebroadband.isValidLimituser = function isValidLimituser(obj){
    if(obj == null) obj = document.forms[0].limitusers;
    var limitusers = obj.value;
    if(!com.linkage.util.isInteger(limitusers)){
        alert("请输入正确的允许上网数！");
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}

com.linkage.service.ebroadband.isValidDate = function isValidDate(obj1,obj2,obj3,obj4,obj5){
    if(obj1 == null) obj1 = document.forms[0].effectdate;
    if(obj2 == null) obj2 = document.forms[0].expiredate;
    if(obj3 == null) obj3 = document.forms[0].billingdate;
    if(obj4 == null) obj4 = document.forms[0].currentdate;
    var effectdate = obj1.value;
    var expiredate = obj2.value;
    var billingdate = obj3.value;
    var currentdate = obj4.value;
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
    if(billingdate == ""){
        alert("请选择计费开始时间！");
        obj3.focus();
        obj3.select();
        return false;
    }
    if(obj5 == null){
        if(!com.linkage.util.dateBEDate(effectdate,currentdate)){
            alert("开通时间应大于当前时间！");
            obj1.focus();
            obj1.select();
            return false;
        }
    }else{
        var oldeffectdate = obj5.value;
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
    if(!com.linkage.util.dateBEDate(billingdate,effectdate)){
        alert("计费时间应大于开通时间！");
        obj3.focus();
        obj3.select();
        return false;
    }
    return true;
}

com.linkage.service.ebroadband.writeAttr = function writeAttr(obj){
    if(obj == null) obj = document.forms[0].bindtype;
    var bindtype = obj.value;
    if(bindtype > "0")
        window.open("write_attr.html", "addBindAttr","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizeble=no,width=550,height=300");
    else
        alert("请选择绑定类型！");
}

com.linkage.service.ebroadband.setBindattr = function setBindattr(value){
    document.forms[0].bindattr.value = value;
}

com.linkage.service.ebroadband.processStatus = function processStatus(obj,value){
    if(obj == null) obj = document.forms[0].status;
    obj.value = value;
    //if(com.linkage.service.ebroadband.isValidExpireDate(obj1,obj2,obj3))
    //    document.forms[0].submit();
}

com.linkage.service.ebroadband.sel_status = function sel_status(obj1,obj2,obj3){
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

com.linkage.service.ebroadband.isValidExpireDate = function isValidExpireDate(obj1,obj2,obj3){
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

com.linkage.service.ebroadband.sel_cancel_status = function sel_cancel_status(obj1){
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

com.linkage.service.ebroadband.sel_groupid = function sel_groupid(obj){
    if(obj == null) obj = document.forms[0].checkBillResult;
    var result = obj.value;
    if(result == null){
        document.all("div_groupid").style.display = "";
        document.all("div_newgroupid").style.display = "";
    }else if(result == "1"){
        document.all("div_groupid").style.display = "";
        document.all("div_newgroupid").style.display = "";
    }else if(result == "2"){
        document.all("div_groupid").style.display = "none";
        document.all("div_newgroupid").style.display = "";
    }else if(result == "3"){
        document.all("div_groupid").style.display = "";
        document.all("div_newgroupid").style.display = "none";
    }else if(result == "4"){
        document.all("div_groupid").style.display = "none";
        document.all("div_newgroupid").style.display = "";
    }else if(result == "5"){
        document.all("div_groupid").style.display = "";
        document.all("div_newgroupid").style.display = "";
    }
}

com.linkage.service.ebroadband.isValidModGroupid = function isValidModGroupid(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].checkBillResult;
    if(obj2 == null) obj2 = document.forms[0].groupid;
    if(obj3 == null) obj3 = document.forms[0].newgroupid;
    var result = obj1.value;
    if(result == "1"){
        if(obj2.options.length == 0){
            alert("无可用新组别！");
            obj2.focus();
            obj2.select();
            return false;
        }
        if(obj3.options.length == 0){
            alert("无可用新下月组别！");
            obj3.focus();
            obj3.select();
            return false;
        }
    }else if(result == "2"){
        if(obj3.options.length == 0){
            alert("无可用新下月组别！");
            obj3.focus();
            obj3.select();
            return false;
        }
    }else if(result == "3"){
        if(obj2.options.length == 0){
            alert("无可用新组别！");
            obj2.focus();
            obj2.select();
            return false;
        }
    }
    else if(result == "4"){
        if(obj3.options.length == 0){
            alert("无可用新下月组别！");
            obj3.focus();
            obj3.select();
            return false;
        }
    }
    return true;
}

com.linkage.service.ebroadband.sel_present = function sel_present(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].oldfreeflag;
    if(obj2 == null) obj2 = document.forms[0].canchange;
    var freeflag = obj1.value;
    var canchange = obj2.value;
    if(freeflag == "1"){
        document.all("div_freedate").style.display = "";
        if(canchange == "true"){
            document.all("div_presenteffect").style.display = "";
            if(obj3 == null) obj3 = document.forms[0].freeflag;
            obj3[1].checked = true;
        }
    }else{
        document.all("div_freedate").style.display = "none";
        if(canchange == "true"){
            document.all("div_presenteffect").style.display = "none";
            if(obj3 == null) obj3 = document.forms[0].freeflag;
            obj3[0].checked = true;
        }
    }
}

com.linkage.service.ebroadband.sel_presenteffect = function sel_presenteffect(obj){
    if(obj == null) obj = document.forms[0].freeflag;
    if(obj[0].checked){
        document.all("div_presenteffect").style.display = "none";
    }
    if(obj[1].checked){
        document.all("div_presenteffect").style.display = "";
    }
}

com.linkage.service.ebroadband.isValidPresenteffect = function isValidPresenteffect(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].presenteffect;
    if(obj2 == null) obj2 = document.forms[0].nextbilldate;
    if(obj3 == null) obj3 = document.forms[0].freeflag;
    var presenteffect = obj1.value;
    var nextbilldate = obj2.value;
    if(obj3[1].checked){
        if(presenteffect == ""){
            alert("请选择赠送开始时间！");
            obj1.focus();
            obj1.select();
            return false;
        }
        if(!com.linkage.util.dateBEDate(presenteffect,nextbilldate)){
            alert("赠送开始时间必须大于等于"+nextbilldate+"！");
            obj1.focus();
            obj1.select();
            return false;
        }
    }
    return true;
}

com.linkage.service.ebroadband.onChangeAreano = function onChangeAreano(str) {
	com.linkage.service.ebroadband.prepareInfo(str);
}

com.linkage.service.ebroadband.prepareInfo = function prepareInfo(str) {
	document.forms[0].action = "/vpdn/mclient/broadbandvpdn/"+str+"_prepare.action";
	document.forms[0].submit();
}

com.linkage.service.ebroadband.isValidEBroadbandQuery = function isValidEBroadbandQuery(obj1,obj5,obj6,obj7) {
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