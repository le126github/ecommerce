com.linkage.service.dialup = new Object();

com.linkage.service.dialup.onChangeGroupID = function onChangeGroupID(obj1,obj2,obj3,obj4) {
	/**
	**		@func		组别onChange事件
	**		@param  Object obj1 组别; Object obj2 组别附加字段fixedrentflag; Object obj3 主叫类型
	**/
	if(obj4==null) obj4=document.all("div_callingnum");
	if(obj3==null) obj3=document.forms[0].callingtype;
	if(obj2==null) obj2=document.forms[0].groupid_append1;
	if(obj1==null) obj1=document.forms[0].groupid;
	com.linkage.service.dialup.onChangeCallingType(obj1,obj2,obj3,obj4);
}

com.linkage.service.dialup.onChangeCallingType = function onChangeCallingType(obj1,obj2,obj3,obj4) {
	/**
	**		@func		主叫类型onChange事件 新开时
	**		@param  Object obj1 组别; Object obj2 组别附加字段fixedrentflag; Object obj3 主叫类型
	**/
	if(obj4==null) obj4=document.all("div_callingnum");
	if(obj3==null) obj3=document.forms[0].callingtype;
	if(obj2==null) obj2=document.forms[0].groupid_append1;
	if(obj1==null) obj1=document.forms[0].groupid;
	if(obj1.options.length == 0){
        alert("没有可供修改的本月组别，主叫标识不可以修改！");
        obj3.selectedIndex = 0;
        obj4.style.display = "none";
        return;
	}
	var groupIndex = obj1.selectedIndex;
	//alert(groupIndex);
	obj2.selectedIndex = groupIndex;
	var fixedrentflag = obj2.options[groupIndex].text;
	if (fixedrentflag == 1) {
		obj3.selectedIndex = 1;
	}
	var callingtype = obj3.value;
	if (callingtype == 0) {
		obj4.style.display = "none";
	}else {
		obj4.style.display = "";
	}
}

com.linkage.service.dialup.onChangeNewGroupID = function onChangeNewGroupID(obj1,obj2,obj3,obj4) {
	/**
	**		@func		组别onChange事件
	**		@param  Object obj1 组别; Object obj2 组别附加字段fixedrentflag; Object obj3 主叫类型
	**/
	if(obj4==null) obj4=document.all("div_newcallingnum");
	if(obj3==null) obj3=document.forms[0].newcallingtype;
	if(obj2==null) obj2=document.forms[0].newgroupid_append1;
	if(obj1==null) obj1=document.forms[0].newgroupid;
	com.linkage.service.dialup.onChangeNewCallingType(obj1,obj2,obj3,obj4);
}

com.linkage.service.dialup.onChangeNewCallingType = function onChangeNewCallingType(obj1,obj2,obj3,obj4) {
	/**
	**		@func		主叫类型onChange事件 新开时
	**		@param  Object obj1 组别; Object obj2 组别附加字段fixedrentflag; Object obj3 主叫类型
	**/
	if(obj4==null) obj4=document.all("div_newcallingnum");
	if(obj3==null) obj3=document.forms[0].newcallingtype;
	if(obj2==null) obj2=document.forms[0].newgroupid_append1;
	if(obj1==null) obj1=document.forms[0].newgroupid;
	if(obj1.options.length == 0){
	    alert("没有可供修改的下月组别，主叫标识不可以修改！");
        obj3.selectedIndex = 0;
        obj4.style.display = "none";
        return;
	}
	var groupIndex = obj1.selectedIndex;
	//alert(groupIndex);
	obj2.selectedIndex = groupIndex;
	var fixedrentflag = obj2.options[groupIndex].text;
	if (fixedrentflag == 1) {
		obj3.selectedIndex = 1;
	}
	var callingtype = obj3.value;
	if (callingtype == 0) {
		obj4.style.display = "none";
	}else {
		obj4.style.display = "";
	}
}

com.linkage.service.dialup.onChangeModCallingType = function onChangeCallingType(obj1,obj2,obj3,obj4) {
	/**
	**		@func		主叫类型onChange事件 修改时
	**		@param  Object obj1 组别; Object obj2 组别附加字段fixedrentflag; Object obj3 主叫类型
	**/
	if(obj4==null) obj4=document.all("div_callingnum");
	if(obj3==null) obj3=document.forms[0].callingtype;
	if(obj2==null) obj2=document.forms[0].groupid_append1;
	if(obj1==null) obj1=document.forms[0].groupid;
	var fixedrentflag = obj2.value;
	if (fixedrentflag == 1) {
		obj3.selectedIndex = 1;
	}
	var callingtype = obj3.value;
	if (callingtype == 0) {
		obj4.style.display = "none";
	}else {
		obj4.style.display = "";
	}
}

com.linkage.service.dialup.onChangePayType = function onChangePayType(obj1,obj2,obj3) {
	/**
	**		@func		付费方式onChange事件
	**		@param  Object obj1 组别; Object obj2 组别附加字段fixedrentflag; Object obj3 主叫类型
	**/
	if(obj3==null) obj3=document.all("div_balance");
	if(obj2==null) obj2=document.all("div_paynum");
	if(obj1==null) obj1=document.forms[0].paytype;
	var paytype = obj1.value;
	if (paytype == 1 || paytype == 2) { //银行拖收或电话拖收
		obj2.style.display = "";
		obj3.style.display = "none";
	}else if (paytype == 4) { //预付费
		obj2.style.display = "none";
		obj3.style.display = "";
	}else {
		obj2.style.display = "none";
		obj3.style.display = "none";
	}
}

/*
com.linkage.service.dialup.sel_servicefee = function sel_servicefee(){

		@func		附加服务 暂不做
		@param

	if (document.userinfo.servicename.value == 0){
		document.all("service_fee").style.display = "none";
	}
	else document.all("service_fee").style.display = "";
}
*/


com.linkage.service.dialup.isValidUserPassword = function isValidUserPassword(obj,obj1) {
	/**
	**		@func		窄带用户密码校验 包括密码是否符合,密码和密码确认是否一致等
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

com.linkage.service.dialup.isValidGroupID = function isValidGroupID(obj,obj1) {
	/**
	**		@func		窄带用户组别校验 包括是否有可用组别 是否选择组别 是否有组别附加信息
	**		@param  Object obj	组别
	**						Object obj1	组别附加信息 fixedrentflag 固定租费 必须绑定
	**/
	if (obj1 == null) obj1 = document.forms[0].groupid_append1;
	if (obj == null) obj = document.forms[0].groupid;
	if(obj.options.length == 0){
		alert("无可用组别！");
		return false;
	}
	if(obj1.options.length == 0){
		alert("组别信息异常！");
		return false;
	}
	var groupid = obj.value;
	if ( (/^[0-9-]+$/g).test(groupid) == false ) {
		alert("请选择适当的组别！");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.dialup.isValidCallingNO = function isValidCallingNO(obj1,obj2,obj3,obj4,obj5,obj6) {
	/**
	**		@func		窄带用户主叫号码校验 包括是否是否绑定主叫 主叫号码是否重复 主叫号码是否为指定位数
	**		@param  Object obj1	主叫类型
	**						Object obj2	电话位数
	**						Object obj3	主叫号码1
	**						Object obj4	主叫号码2
	**						Object obj5	主叫号码3
	**						Object obj6	主叫号码 入库用数据
	**/
	if(obj6==null) obj6=document.forms[0].callingno;
	if(obj5==null) obj5=document.forms[0].callingnum3;
	if(obj4==null) obj4=document.forms[0].callingnum2;
	if(obj3==null) obj3=document.forms[0].callingnum1;
	if(obj2==null) obj2=document.forms[0].telcount;
	if(obj1==null) obj1=document.forms[0].callingtype;
	var callingtype = obj1.value;
	var telcount = obj2.value;
	var callingnum1 = obj3.value;
	var callingnum2 = obj4.value;
	var callingnum3 = obj5.value;
	var count = 0;
	var callingno = "";
	if (callingtype != 0) { //需要绑定主叫
		if (!com.linkage.util.isPhoneNumber(callingnum1,telcount,"主叫号码")) {
			obj3.focus();
			obj3.select();
			return false
		}else {
			count++;
			callingno = callingnum1;
		}
		if (callingnum2 != null && callingnum2 != "") {
			if (!com.linkage.util.isPhoneNumber(callingnum2,telcount,"主叫号码")) {
				obj4.focus();
				obj4.select();
				return false
			}else if (callingnum2 == callingnum1) {
				alert("输入的主叫号码重复！");
				obj4.focus();
				obj4.select();
				return false
			}else {
				count++;
				callingno += ","+callingnum2;
			}
		}
		if (callingnum3 != null && callingnum3 != "") {
			if (!com.linkage.util.isPhoneNumber(callingnum3,telcount,"主叫号码")) {
				obj5.focus();
				obj5.select();
				return false
			}else if (callingnum3 == callingnum1 || callingnum3 == callingnum2) {
				alert("输入的主叫号码重复！");
				obj5.focus();
				obj5.select();
				return false
			}else {
				count++;
				callingno += ","+callingnum3;
			}
		}
		if (count == 0) {
			alert("请至少输入一个绑定主叫号码！");
			obj3.focus();
			obj3.select();
			return false
		}
		obj6.value = callingno;
	}else obj6.value = "";
	return true;
}

com.linkage.service.dialup.isValidModGroupID = function isValidModGroupID(obj,obj1,obj7,obj2,obj3,obj4,obj5,obj6) {
	if(!com.linkage.service.dialup.isValidGroupID(obj,obj1))
	    return false;
	if(!com.linkage.service.dialup.isValidCallingNO(obj7,obj2,obj3,obj4,obj5,obj6))
	    return false;

	return true;
}

com.linkage.service.dialup.isValidLimitFee = function isValidLimitFee(obj) {
	/**
	**		@func		窄带用户组别校验 包括是否有可用组别 是否选择组别 是否有组别附加信息
	**		@param  Object obj	当月费用限额
	**/
	if (obj == null) obj = document.forms[0].flimitfee;
	var limitfee = obj.value;
	if (limitfee == null || limitfee == "") {
		alert("当月费用限额不能为空！");
		obj.focus();
		obj.select();
		return false;
	}
	if (limitfee != 0 ) {
		if (!com.linkage.util.isMoney(limitfee)) {
			obj.focus();
			obj.select();
			return false;
		}
	}
	return true;
}

com.linkage.service.dialup.isValidLimitUsers = function isValidLimitUsers(obj) {
	/**
	**		@func		窄带用户组别校验 包括是否有可用组别 是否选择组别 是否有组别附加信息
	**		@param  Object obj	当月费用限额
	**/
	if (obj == null) obj = document.forms[0].limitusers;
	var limitusers = obj.value;
	if (limitusers == null || limitusers == "") {
		alert("允许上网数不能为空！");
		obj.focus();
		obj.select();
		return false;
	}
	if (limitusers != 0) {
		if (!com.linkage.util.isInteger(limitusers)) {
			alert("允许上网数必须为正整数或0！");
			obj.focus();
			obj.select();
			return false;
		}
	}
	return true;
}

com.linkage.service.dialup.isValidDates = function isValidDates(obj1,obj2,obj3,obj4,obj5) {
	/**
	**		@func		时间校验	新开时 开通时间大于当天 失效时间大于开通 计费时间大于开通
	**											修改时 若开通时间未修改 即开通时间等于旧开通时间 则不将开通时间与当天比较 其他同
	**		@param  Object obj1 today; 今天
	**						Object obj2 effectdate  开通时间
	**						Object obj3 expiredate  失效时间
	** 						Object obj4 billingdate 计费时间
	**						Object obj5 effectdate_old 原开通时间
	**/
	if(obj4==null) obj4=document.forms[0].billingdate;
	if(obj3==null) obj3=document.forms[0].expiredate;
	if(obj2==null) obj2=document.forms[0].effectdate;
	if(obj1==null) obj1=document.forms[0].today;
	var today = obj1.value;
	var effectdate = obj2.value;
	var expiredate = obj3.value;
	var billingdate = obj4.value;
	var effectdate_old;
	if(obj5==null) effectdate_old = "";
	else effectdate_old = obj5.value;
	if (effectdate != effectdate_old) { //时间已修改
		if (com.linkage.util.dateBDate(today,effectdate)){
			alert("开通时间不得小于当前时间！");
			obj2.focus();
			obj2.select();
			return false;
		}
	}
	if (!com.linkage.util.dateBDate(expiredate,effectdate)){
		alert("失效时间应大于开通时间！");
		obj3.focus();
		obj3.select();
		return false;
	}
	if (com.linkage.util.dateBDate(effectdate, billingdate)){
		alert("计费时间应大于开通时间！");
		obj4.focus();
		obj4.select();
		return false;
	}
	return true;
}

com.linkage.service.dialup.isValidPayType = function isValidPayType(obj1,obj2,obj3,obj4) {
	/**
	**		@func		时间校验
	**		@param  Object obj1 付费类型
	**						Object obj2 付费号码
	**						Object obj3 余额
	**						Object obj4 telcount 电话位数
	**/
	if(obj4==null) obj4=document.forms[0].telcount;
	if(obj3==null) obj3=document.forms[0].fbalance;
	if(obj2==null) obj2=document.forms[0].paynum;
	if(obj1==null) obj1=document.forms[0].paytype;
	var paytype = obj1.value;
	var paynum = obj2.value;
	var balance = obj3.value;
	var telcount = obj4.value;
	if (paytype == 1) {//银行托收
		if (!com.linkage.util.isBankNO(paynum)) {
			obj2.focus();
			obj2.select();
			return false;
		}else {
			obj3.value = "0.00";
			return true;
		}
	}else if (paytype == 2){//电话托收
		if (!com.linkage.util.isPhoneNumber(paynum,telcount,"付费号码")){
			obj2.focus();
			obj2.select();
			return false;
		}else {
			obj3.value = "0.00";
			return true;
		}
	}else if (paytype == 4){//预付费
		if(!com.linkage.util.isMoney(balance)){
			obj3.focus();
			obj3.select();
			return false;
		}else {
			obj2.value = "";
			return true;
		}
	}else{
		obj2.value = "";
		obj3.value = "0.00";
		return true;
	}
	return true;
}

com.linkage.service.dialup.processStatus = function processStatus(obj,str){
    if(obj == null) obj = document.forms[0].status;
    obj.value = str;
}

com.linkage.service.dialup.isValidExpireDate = function isValidExpireDate(obj1,obj2,obj3){
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

com.linkage.service.dialup.sel_status = function sel_status(obj1,obj2,obj3){
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

com.linkage.service.dialup.sel_cancel_status = function sel_cancel_status(obj1){
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

com.linkage.service.dialup.sel_groupid = function sel_groupid(obj){
    if(obj == null) obj = document.forms[0].checkBillResult;
    var result = obj.value;
    if(result == null){
        document.all("div_groupid").style.display = "";
        document.all("div_newgroupid").style.display = "";
        com.linkage.service.dialup.onChangeCallingType();
        com.linkage.service.dialup.onChangeNewCallingType();
    }else if(result == "1"){
        document.all("div_groupid").style.display = "";
        document.all("div_newgroupid").style.display = "";
        com.linkage.service.dialup.onChangeCallingType();
        com.linkage.service.dialup.onChangeNewCallingType();
    }else if(result == "2"){
        document.all("div_groupid").style.display = "none";
        document.all("div_newgroupid").style.display = "";
        com.linkage.service.dialup.onChangeNewCallingType();
    }else if(result == "3"){
        document.all("div_groupid").style.display = "";
        document.all("div_newgroupid").style.display = "none";
        com.linkage.service.dialup.onChangeCallingType();
    }else if(result == "4"){
        document.all("div_groupid").style.display = "none";
        document.all("div_newgroupid").style.display = "";
        com.linkage.service.dialup.onChangeNewCallingType();
    }else if(result == "5"){
        document.all("div_groupid").style.display = "";
        document.all("div_newgroupid").style.display = "";
        com.linkage.service.dialup.onChangeCallingType();
        com.linkage.service.dialup.onChangeNewCallingType();
    }
}

com.linkage.service.dialup.sel_roam = function sel_roam() {
	/**
	**		@func		隐藏/显示国际漫游模块
	**/
	if (document.forms[0].elements['model.roamInfo.roamlevel'][1].checked) {
		document.all("div_roam").style.display="";
	} else {
		document.all("div_roam").style.display="none";
	}
}

com.linkage.service.dialup.roamInitValid = function roamInitValid() {
	/**
	**		@func		roam_init.jsp页面检查输入的客户名是否为空
	**/
	if (trim(document.forms[0].elements
		['model.roamInfo.comp_id.username'].value) == '')
	{
		alert("请填写客户名！");
		document.forms[0].elements
		['model.roamInfo.comp_id.username'].focus();
		return false;
	}
}

com.linkage.service.dialup.roamInputValid = function roamInputValid() {
	/**
	**		@func		roam_input.jsp页面检查
	**/


	if (document.forms[0].elements['model.roamInfo.roamlevel'][0].checked) //如果不开通国际漫游服务，则直接返回
	{
		return true;
	}

	var startdate = document.roam_input.elements
					['model.roamInfo.startdateStr'].value;//漫游起始日期
	var stopdateStr =  document.forms[0].elements
					['model.roamInfo.stopdateStr'].value;//漫游结束日期
	var temp1 =  document.forms[0].elements
					['model.roamInfo.starttime'].value;//漫游起始时刻
	var temp2 = document.forms[0].elements
					['model.roamInfo.stoptime'].value;//漫游结束时刻
	var starttime =  document.forms[0].elements
					['model.roamInfo.starttime']//漫游起始时刻
	var stoptime = document.forms[0].elements
					['model.roamInfo.stoptime'];//漫游结束时刻
	var limitvalue = document.forms[0].elements
					['model.roamInfo.limitvalue'].value;
	var cDate = new Date();
	var month = cDate.getMonth() + 1;
	var day =  cDate.getDay();
	if (month < 10)
	{
		month = '0' + month;
	}

	if (day < 10)
	{
		day = '0' + day;
	}
	var currentDate = cDate.getYear() + '-' + month + '-' + day;


	if (!com.linkage.util.isValidDate(startdate))
	{
		alert("输入的漫游起始日期格式不正确！");
		return false;
	}

	if (!com.linkage.util.isValidDate(stopdateStr))
	{
		alert("输入的漫游结束日期格式不正确！");
		return false;
	}

	if (document.forms[0].elements
					['model.roamInfo.roamStatus'].value == 'false')//新开通的客户
	{
		if ( com.linkage.util.dateBDate(currentDate,startdate))//漫游起始日期如果小于当前日期
		{
			alert("漫游起始日期不能小于当前日期！");
			return false;
		}

		if ( com.linkage.util.dateBDate(startdate ,stopdateStr))//漫游结束日期如果小于漫游起始日期
		{
			alert("漫游结束日期不能小于漫游起始日期！");
			return false;
		}

	}

		if (temp1 == "") {
			alert("请填入漫游起始时刻！");
			starttime.focus();
			starttime.select();
			return false;
		} else if (temp1.length != 6 || temp1<0 || temp1>240000 || !isInteger(temp1)) {
			alert("请填入正确的漫游起始时刻(000000-240000)！");
			starttime.focus();
			starttime.select();
			return false;
		}
		if (temp2 == "") {
			alert("请填入漫游结束时刻！");
			stoptime.focus();
			stoptime.select();
			return false;
		} else if (temp2.length != 6 || temp2<0 || temp2>240000 || !isInteger(temp2)) {
			alert("请填入正确的漫游结束时刻(000000-240000)！");
			stoptime.focus();
			stoptime.select();
			return false;
		}
		if (temp1 > temp2) {
			alert("漫游起始时刻应该小于漫游结束时刻！");
			starttime.focus();
			starttime.select();
			return false;
		}

		var regexp = /^[0-9]{0,}$/;

		if (trim(limitvalue) == '')
		{
			alert('请输入国际漫游限额！');
			document.forms[0].elements
					['model.roamInfo.limitvalue'].focus();
			return false;
		}


		if (!regexp.test(limitvalue))
		{
			alert("请输入合法的国际漫游限额1！");
			document.forms[0].elements
					['model.roamInfo.limitvalue'].focus();
			return false;
		}


}

com.linkage.service.dialup.trim = function trim(str){
	/**
	**		@func		提出字符串中的空格
	**/
    	var i = 0;
        while ((i < str.length)&&((str.charAt(i) == " ")||(str.charAt(i) == "　"))){i++;}
    	var j = str.length-1;
    	while ((j >= 0)&&((str.charAt(j) == " ")||(str.charAt(j) == "　"))){j--;}
    	if ( i > j )
    		return "";
    	else
    		return str.substring(i,j+1);
}

com.linkage.service.dialup.init = function init(){
	document.forms[0].elements
		['model.roamInfo.comp_id.username'].focus();
}

com.linkage.service.dialup.onChangeAreano = function onChangeAreano(str) {
	com.linkage.service.dialup.prepareInfo(str);
}

com.linkage.service.dialup.prepareInfo = function prepareInfo(str) {
	document.forms[0].action = "/main/mclient/"+str+"/query_prepare.action";
	document.forms[0].submit();
}

com.linkage.service.dialup.isValidDialupQuery = function isValidDialupQuery(obj1,obj2,obj3,obj5,obj6,obj7) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].paynum;
    if (obj3 == null) obj3 = document.forms[0].callingno;
    //if (obj4 == null) obj4 = document.forms[0].reserved2;
    if (obj5 == null) obj5 = document.forms[0].bopendate;
    if (obj6 == null) obj6 = document.forms[0].eopendate;
    if (obj7 == null) obj7 = document.forms[0].currentdate;

    var _username = com.linkage.util.trim(obj1.value);
    var _paynum = com.linkage.util.trim(obj2.value);
    var _callingno = com.linkage.util.trim(obj3.value);
    //var _reserved2 = com.linkage.util.trim(obj4.value);
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
		searchCount ++;
    }

    if(_paynum != ""){
		searchCount ++;
	}

	if (_callingno != ""){
	    if(!com.linkage.util.isGsmOrPhone(_callingno)){
            alert("请输入合法的主叫号码！");
			obj3.focus();
			obj3.select();
			return false;
        }
		searchCount ++;
	}

	//if (_reserved2 != "") {
	//	searchCount ++;
	//}

	if (searchCount == 0){
		alert("用户帐号，付费号码，主叫号码请至少输入其中一项！");
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

	obj1.value = _username;
	obj2.value = _paynum;
	obj3.value = _callingno;
	//obj4.value = _reserved2;

	return true;
}