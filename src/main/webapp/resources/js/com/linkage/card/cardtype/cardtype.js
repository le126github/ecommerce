com.linkage.card.cardtype = new Object();

com.linkage.card.cardtype.isValidCardTypeName = function isValidCardTypeName(obj){
	if(obj == null) obj = document.forms[0].name;
	var cardTypeName = com.linkage.util.trim(obj.value);
	if(cardTypeName == ''){
		alert("卡种类名称不能为空，请输入卡种类名称！");
		obj.select();
		obj.focus();
		return false;	
	}
	if(com.linkage.util.hasSpecialChar(obj.value)){
		alert("卡种类名称中不能含有特殊字符！");
		obj.select();
		obj.focus();
		return false;
	}
	obj.value = cardTypeName;
	return true;
}

com.linkage.card.cardtype.isValidCardPrefix = function isValidCardPrefix(obj){
	var DIGITAL_LENGTH = document.forms[0].digitalLength.value;
	var LETTER_LENGTH = document.forms[0].letterLength.value;
	if(obj == null) obj = document.forms[0].prefix;
	var prefix = com.linkage.util.trim(obj.value);
	if (prefix == ""){
		alert("请输入卡前缀！");
		obj.select();
		obj.focus();
		return false;
	}
	if (com.linkage.util.hasSpecialChar(prefix)){
		alert("卡前缀中不能含有特殊字符！");
		obj.select();
		obj.focus();
		return false;
	}
	
	if ( (/^[A-Z]+$/g).test(prefix) == false && !com.linkage.util.isInteger(prefix) ) {
		alert("卡前缀中字符必须为纯大写字母或纯数字！");
		obj.select();
		obj.focus();
		return false;
	}
	if((/^[A-Z]+$/g).test(prefix) == true){//纯大写字母
		if(prefix.length!=LETTER_LENGTH){
			alert("卡前缀中字符必须为"+LETTER_LENGTH+"位纯大写字母！");
			obj.select();
			obj.focus();
			return false;
		}
	}
	if(com.linkage.util.isInteger(prefix)){//纯数字
		if(prefix.length!=DIGITAL_LENGTH){
			alert("卡前缀中字符必须为"+DIGITAL_LENGTH+"位纯数字！");
			obj.select();
			obj.focus();
			return false;
		}
		if(prefix.charAt(0)=='0'){
			alert("纯数字卡前缀第一位不能为0！");
			obj.select();
			obj.focus();
			return false;
		}
	}	
	obj.value = prefix;
	return true;
}

com.linkage.card.cardtype.isValidRealm = function isValidRealm(obj){
	if(obj == null) obj = document.forms[0].realm;
	var realm = com.linkage.util.trim(obj.value);
	if ((realm != "") && (realm.indexOf("'") >= 0)) {
		alert("域名中不能含有字符(').");
		obj.select();
		obj.focus();
		return false;
	}
	obj.value = realm;
	return true;
}

com.linkage.card.cardtype.isValidServiceList = function isValidServiceList(){
	//var serviceList = "";
	if (document.cardtypeinfo.useservflag[0].checked||document.cardtypeinfo.useservflag[2].checked){
		var count = 0;
		for(var i=0;i<document.forms[0].servicetype.length;i++){
			if(document.forms[0].servicetype[i].checked){
				count ++;
				//serviceList += ","+ document.cardtypeinfo.servicetype[i].value;
			}
		}
		if (count == 0){
			alert("请至少选择一项服务！");
			return false;
		}//else serviceList = serviceList.substring(1);
	}else{
		initCheckBox();//不提交checkbox;
	}
	return true;
}
com.linkage.card.cardtype.isValidSerialLength = function isValidSerialLength(obj1,obj2,obj3,obj4){
	if(obj1 == null) obj1 = document.forms[0].seriallength;
	if(!com.linkage.util.isInteger(obj1.value)){
		alert("序列号长度必须为大于0且不超过9的整数！");
		obj1.select();
		obj1.focus();
		return false;
	}
	if(obj1.value<=0||obj1.value>9){
		alert("序列号长度必须为大于0且不超过9的整数！");
		obj1.select();
		obj1.focus();
		return false;
	}
	
	var prefixLength = obj2.value.length;
	
	var areaLength = obj3.value;
	
	var radomLength = 0;
	if(obj4.value!="") radomLength = obj4.value;
	if((parseInt(obj1.value)+parseInt(prefixLength)+parseInt(areaLength)+parseInt(radomLength))>20){
		alert("卡号长度不能超过20，卡号长度组成为卡前缀长度+属地长度(目前属地长度为"+areaLength+")+随机数长度,请修改！");
		return false;
	}
	
	return true;
}
com.linkage.card.cardtype.isValidDescription = function isValidDescription(obj){
	if(obj == null) obj = document.forms[0].description;
	var description = obj.value;
	if ((description != "") && (description.indexOf("'") >= 0)) {
		alert("描述中不能含有字符(').");
		obj.select();
		obj.focus();
		return false;
	}
        if (description != "") {
		if (description.length > 128) {
			alert("输入的描述太长（0-128），请重新输入！");
			obj.select();
			obj.focus();
			return false;
		}
	}
	return true;
}


com.linkage.card.cardtype.isValidPwdelements = function isValidPwdelements(obj){
	if(obj == null) obj = document.forms[0].pwdelements;
	var pwdelements = com.linkage.util.full_trim(obj.value);
	if (!(/^[\x00-\xff]+$/.test(pwdelements))) {
		alert("密码组成含有非法字符！");
		obj.select();
		obj.focus();
		return false;
	}
	obj.value = pwdelements;
	return true;
}
com.linkage.card.cardtype.isValidPwdlength = function isValidPwdlength(obj){
	if(obj == null) obj = document.forms[0].pwdlength;
	var pwdlength = com.linkage.util.trim(obj.value);
	if (!com.linkage.util.isInteger(pwdlength)){
		alert("密码长度必须为大于等于4小于等于16的整数！");
		obj.select();
		obj.focus();
		return false;
	}
	if(pwdlength<4||pwdlength>16){
		alert("密码长度必须为大于等于4小于等于16的整数！");
		obj.select();
		obj.focus();
		return false;
	}
	obj.value = pwdlength;
	return true;
}

com.linkage.card.cardtype.isValidRandomelements = function isValidRandomelements(obj){
	if(obj == null) obj = document.forms[0].randomelements;
	var randomelements = com.linkage.util.full_trim(obj.value);
	if(document.forms[0].randomlength.value!=""||randomelements!=""){
		if (!com.linkage.util.isInteger(randomelements)){
			alert("随机数序列必须为数字！");
			obj.select();
			obj.focus();
			return false;
		}
		obj.value = randomelements;
	}
	return true;
}

com.linkage.card.cardtype.isValidRandomlength = function isValidRandomlength(obj){
	if(obj == null) obj = document.forms[0].randomlength;
	var randomlength = com.linkage.util.trim(obj.value);
	if(document.forms[0].randomelements.value!=""||randomlength!=""){
		if (!com.linkage.util.isInteger(randomlength)){
			alert("随机数长度必须为整数！");
			obj.select();
			obj.focus();
			return false;
		}
		obj.value = randomlength;
	}
	return true;
}

com.linkage.card.cardtype.sel_serviceType = function sel_serviceType(){
	
	if(document.cardtypeinfo.useservflag[0].checked || document.cardtypeinfo.useservflag[2].checked){//选择服务，显示服务
		document.all("div_servicetype").style.display = "";
	}else{
		document.all("div_servicetype").style.display = "none";
	}
}

com.linkage.card.cardtype.getInOutCardtype = function getInOutCardtype(){

	var hasout = "false";
	var hasin = "false";
	
	if (eval("document.forms[0].outtype") != null) {
		var obj = eval("document.forms[0].outtype");
		if (obj.length > 1) {
			for (var i=0; i<obj.length; i++) {
				if (obj[i].checked) {
					hasout = "true";
				}
			}
		} else {
			if (obj.checked) {
				hasout = "true";
			}
		}
	} else {
		hasout = "false";
	}
	
	

	if (eval("document.forms[0].intype") != null) {
		var obj = eval("document.forms[0].intype");
		if (obj.length > 1) {
			for (var i=0; i<obj.length; i++) {
				if (obj[i].checked) {
					hasin = "true";
				}
			}
		} else {
			if (obj.checked) {
				hasin = "true";
			}
		}
	} else {
		hasin = "false";
	}
	
	
	document.forms[0].hasout.value = hasout;
	document.forms[0].hasin.value = hasin;

	return true;
	
}

com.linkage.card.cardtype.testIn = function testIn(strList,ii){
	var arr = strList.split(",");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==ii)
		return true;
	}
	return false;
}



com.linkage.card.cardtype.disableCheckBox = function disableCheckBox(){
	if(eval("document.forms[0].servicetype")!=null){
		var obj = eval("document.forms[0].servicetype");
		if(obj.length>1){
			for (var i=0; i<obj.length; i++) {
				obj[i].disabled = true;
			}
		}else{
			obj.disabled = true;
		}
	}
}

com.linkage.card.cardtype.initCheckBox = function initCheckBox(){
	if(eval("document.forms[0].servicetype")!=null){
		var obj = eval("document.forms[0].servicetype");
		if(obj.length>1){
			for (var i=0; i<obj.length; i++) {
				obj[i].checked = false;
			}
		}else{
			obj.disabled = false;
		}
	}
}