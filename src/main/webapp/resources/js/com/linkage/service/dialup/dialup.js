com.linkage.service.dialup = new Object();

com.linkage.service.dialup.onChangeGroupID = function onChangeGroupID(obj1,obj2,obj3,obj4) {
	/**
	**		@func		���onChange�¼�
	**		@param  Object obj1 ���; Object obj2 ��𸽼��ֶ�fixedrentflag; Object obj3 ��������
	**/
	if(obj4==null) obj4=document.all("div_callingnum");
	if(obj3==null) obj3=document.forms[0].callingtype;
	if(obj2==null) obj2=document.forms[0].groupid_append1;
	if(obj1==null) obj1=document.forms[0].groupid;
	com.linkage.service.dialup.onChangeCallingType(obj1,obj2,obj3,obj4);
}

com.linkage.service.dialup.onChangeCallingType = function onChangeCallingType(obj1,obj2,obj3,obj4) {
	/**
	**		@func		��������onChange�¼� �¿�ʱ
	**		@param  Object obj1 ���; Object obj2 ��𸽼��ֶ�fixedrentflag; Object obj3 ��������
	**/
	if(obj4==null) obj4=document.all("div_callingnum");
	if(obj3==null) obj3=document.forms[0].callingtype;
	if(obj2==null) obj2=document.forms[0].groupid_append1;
	if(obj1==null) obj1=document.forms[0].groupid;
	if(obj1.options.length == 0){
        alert("û�пɹ��޸ĵı���������б�ʶ�������޸ģ�");
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
	**		@func		���onChange�¼�
	**		@param  Object obj1 ���; Object obj2 ��𸽼��ֶ�fixedrentflag; Object obj3 ��������
	**/
	if(obj4==null) obj4=document.all("div_newcallingnum");
	if(obj3==null) obj3=document.forms[0].newcallingtype;
	if(obj2==null) obj2=document.forms[0].newgroupid_append1;
	if(obj1==null) obj1=document.forms[0].newgroupid;
	com.linkage.service.dialup.onChangeNewCallingType(obj1,obj2,obj3,obj4);
}

com.linkage.service.dialup.onChangeNewCallingType = function onChangeNewCallingType(obj1,obj2,obj3,obj4) {
	/**
	**		@func		��������onChange�¼� �¿�ʱ
	**		@param  Object obj1 ���; Object obj2 ��𸽼��ֶ�fixedrentflag; Object obj3 ��������
	**/
	if(obj4==null) obj4=document.all("div_newcallingnum");
	if(obj3==null) obj3=document.forms[0].newcallingtype;
	if(obj2==null) obj2=document.forms[0].newgroupid_append1;
	if(obj1==null) obj1=document.forms[0].newgroupid;
	if(obj1.options.length == 0){
	    alert("û�пɹ��޸ĵ�����������б�ʶ�������޸ģ�");
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
	**		@func		��������onChange�¼� �޸�ʱ
	**		@param  Object obj1 ���; Object obj2 ��𸽼��ֶ�fixedrentflag; Object obj3 ��������
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
	**		@func		���ѷ�ʽonChange�¼�
	**		@param  Object obj1 ���; Object obj2 ��𸽼��ֶ�fixedrentflag; Object obj3 ��������
	**/
	if(obj3==null) obj3=document.all("div_balance");
	if(obj2==null) obj2=document.all("div_paynum");
	if(obj1==null) obj1=document.forms[0].paytype;
	var paytype = obj1.value;
	if (paytype == 1 || paytype == 2) { //�������ջ�绰����
		obj2.style.display = "";
		obj3.style.display = "none";
	}else if (paytype == 4) { //Ԥ����
		obj2.style.display = "none";
		obj3.style.display = "";
	}else {
		obj2.style.display = "none";
		obj3.style.display = "none";
	}
}

/*
com.linkage.service.dialup.sel_servicefee = function sel_servicefee(){

		@func		���ӷ��� �ݲ���
		@param

	if (document.userinfo.servicename.value == 0){
		document.all("service_fee").style.display = "none";
	}
	else document.all("service_fee").style.display = "";
}
*/


com.linkage.service.dialup.isValidUserPassword = function isValidUserPassword(obj,obj1) {
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

com.linkage.service.dialup.isValidGroupID = function isValidGroupID(obj,obj1) {
	/**
	**		@func		խ���û����У�� �����Ƿ��п������ �Ƿ�ѡ����� �Ƿ�����𸽼���Ϣ
	**		@param  Object obj	���
	**						Object obj1	��𸽼���Ϣ fixedrentflag �̶���� �����
	**/
	if (obj1 == null) obj1 = document.forms[0].groupid_append1;
	if (obj == null) obj = document.forms[0].groupid;
	if(obj.options.length == 0){
		alert("�޿������");
		return false;
	}
	if(obj1.options.length == 0){
		alert("�����Ϣ�쳣��");
		return false;
	}
	var groupid = obj.value;
	if ( (/^[0-9-]+$/g).test(groupid) == false ) {
		alert("��ѡ���ʵ������");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.service.dialup.isValidCallingNO = function isValidCallingNO(obj1,obj2,obj3,obj4,obj5,obj6) {
	/**
	**		@func		խ���û����к���У�� �����Ƿ��Ƿ������ ���к����Ƿ��ظ� ���к����Ƿ�Ϊָ��λ��
	**		@param  Object obj1	��������
	**						Object obj2	�绰λ��
	**						Object obj3	���к���1
	**						Object obj4	���к���2
	**						Object obj5	���к���3
	**						Object obj6	���к��� ���������
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
	if (callingtype != 0) { //��Ҫ������
		if (!com.linkage.util.isPhoneNumber(callingnum1,telcount,"���к���")) {
			obj3.focus();
			obj3.select();
			return false
		}else {
			count++;
			callingno = callingnum1;
		}
		if (callingnum2 != null && callingnum2 != "") {
			if (!com.linkage.util.isPhoneNumber(callingnum2,telcount,"���к���")) {
				obj4.focus();
				obj4.select();
				return false
			}else if (callingnum2 == callingnum1) {
				alert("��������к����ظ���");
				obj4.focus();
				obj4.select();
				return false
			}else {
				count++;
				callingno += ","+callingnum2;
			}
		}
		if (callingnum3 != null && callingnum3 != "") {
			if (!com.linkage.util.isPhoneNumber(callingnum3,telcount,"���к���")) {
				obj5.focus();
				obj5.select();
				return false
			}else if (callingnum3 == callingnum1 || callingnum3 == callingnum2) {
				alert("��������к����ظ���");
				obj5.focus();
				obj5.select();
				return false
			}else {
				count++;
				callingno += ","+callingnum3;
			}
		}
		if (count == 0) {
			alert("����������һ�������к��룡");
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
	**		@func		խ���û����У�� �����Ƿ��п������ �Ƿ�ѡ����� �Ƿ�����𸽼���Ϣ
	**		@param  Object obj	���·����޶�
	**/
	if (obj == null) obj = document.forms[0].flimitfee;
	var limitfee = obj.value;
	if (limitfee == null || limitfee == "") {
		alert("���·����޶��Ϊ�գ�");
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
	**		@func		խ���û����У�� �����Ƿ��п������ �Ƿ�ѡ����� �Ƿ�����𸽼���Ϣ
	**		@param  Object obj	���·����޶�
	**/
	if (obj == null) obj = document.forms[0].limitusers;
	var limitusers = obj.value;
	if (limitusers == null || limitusers == "") {
		alert("��������������Ϊ�գ�");
		obj.focus();
		obj.select();
		return false;
	}
	if (limitusers != 0) {
		if (!com.linkage.util.isInteger(limitusers)) {
			alert("��������������Ϊ��������0��");
			obj.focus();
			obj.select();
			return false;
		}
	}
	return true;
}

com.linkage.service.dialup.isValidDates = function isValidDates(obj1,obj2,obj3,obj4,obj5) {
	/**
	**		@func		ʱ��У��	�¿�ʱ ��ͨʱ����ڵ��� ʧЧʱ����ڿ�ͨ �Ʒ�ʱ����ڿ�ͨ
	**											�޸�ʱ ����ͨʱ��δ�޸� ����ͨʱ����ھɿ�ͨʱ�� �򲻽���ͨʱ���뵱��Ƚ� ����ͬ
	**		@param  Object obj1 today; ����
	**						Object obj2 effectdate  ��ͨʱ��
	**						Object obj3 expiredate  ʧЧʱ��
	** 						Object obj4 billingdate �Ʒ�ʱ��
	**						Object obj5 effectdate_old ԭ��ͨʱ��
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
	if (com.linkage.util.dateBDate(effectdate, billingdate)){
		alert("�Ʒ�ʱ��Ӧ���ڿ�ͨʱ�䣡");
		obj4.focus();
		obj4.select();
		return false;
	}
	return true;
}

com.linkage.service.dialup.isValidPayType = function isValidPayType(obj1,obj2,obj3,obj4) {
	/**
	**		@func		ʱ��У��
	**		@param  Object obj1 ��������
	**						Object obj2 ���Ѻ���
	**						Object obj3 ���
	**						Object obj4 telcount �绰λ��
	**/
	if(obj4==null) obj4=document.forms[0].telcount;
	if(obj3==null) obj3=document.forms[0].fbalance;
	if(obj2==null) obj2=document.forms[0].paynum;
	if(obj1==null) obj1=document.forms[0].paytype;
	var paytype = obj1.value;
	var paynum = obj2.value;
	var balance = obj3.value;
	var telcount = obj4.value;
	if (paytype == 1) {//��������
		if (!com.linkage.util.isBankNO(paynum)) {
			obj2.focus();
			obj2.select();
			return false;
		}else {
			obj3.value = "0.00";
			return true;
		}
	}else if (paytype == 2){//�绰����
		if (!com.linkage.util.isPhoneNumber(paynum,telcount,"���Ѻ���")){
			obj2.focus();
			obj2.select();
			return false;
		}else {
			obj3.value = "0.00";
			return true;
		}
	}else if (paytype == 4){//Ԥ����
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
	**		@func		����/��ʾ��������ģ��
	**/
	if (document.forms[0].elements['model.roamInfo.roamlevel'][1].checked) {
		document.all("div_roam").style.display="";
	} else {
		document.all("div_roam").style.display="none";
	}
}

com.linkage.service.dialup.roamInitValid = function roamInitValid() {
	/**
	**		@func		roam_init.jspҳ��������Ŀͻ����Ƿ�Ϊ��
	**/
	if (trim(document.forms[0].elements
		['model.roamInfo.comp_id.username'].value) == '')
	{
		alert("����д�ͻ�����");
		document.forms[0].elements
		['model.roamInfo.comp_id.username'].focus();
		return false;
	}
}

com.linkage.service.dialup.roamInputValid = function roamInputValid() {
	/**
	**		@func		roam_input.jspҳ����
	**/


	if (document.forms[0].elements['model.roamInfo.roamlevel'][0].checked) //�������ͨ�������η�����ֱ�ӷ���
	{
		return true;
	}

	var startdate = document.roam_input.elements
					['model.roamInfo.startdateStr'].value;//������ʼ����
	var stopdateStr =  document.forms[0].elements
					['model.roamInfo.stopdateStr'].value;//���ν�������
	var temp1 =  document.forms[0].elements
					['model.roamInfo.starttime'].value;//������ʼʱ��
	var temp2 = document.forms[0].elements
					['model.roamInfo.stoptime'].value;//���ν���ʱ��
	var starttime =  document.forms[0].elements
					['model.roamInfo.starttime']//������ʼʱ��
	var stoptime = document.forms[0].elements
					['model.roamInfo.stoptime'];//���ν���ʱ��
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
		alert("�����������ʼ���ڸ�ʽ����ȷ��");
		return false;
	}

	if (!com.linkage.util.isValidDate(stopdateStr))
	{
		alert("��������ν������ڸ�ʽ����ȷ��");
		return false;
	}

	if (document.forms[0].elements
					['model.roamInfo.roamStatus'].value == 'false')//�¿�ͨ�Ŀͻ�
	{
		if ( com.linkage.util.dateBDate(currentDate,startdate))//������ʼ�������С�ڵ�ǰ����
		{
			alert("������ʼ���ڲ���С�ڵ�ǰ���ڣ�");
			return false;
		}

		if ( com.linkage.util.dateBDate(startdate ,stopdateStr))//���ν����������С��������ʼ����
		{
			alert("���ν������ڲ���С��������ʼ���ڣ�");
			return false;
		}

	}

		if (temp1 == "") {
			alert("������������ʼʱ�̣�");
			starttime.focus();
			starttime.select();
			return false;
		} else if (temp1.length != 6 || temp1<0 || temp1>240000 || !isInteger(temp1)) {
			alert("��������ȷ��������ʼʱ��(000000-240000)��");
			starttime.focus();
			starttime.select();
			return false;
		}
		if (temp2 == "") {
			alert("���������ν���ʱ�̣�");
			stoptime.focus();
			stoptime.select();
			return false;
		} else if (temp2.length != 6 || temp2<0 || temp2>240000 || !isInteger(temp2)) {
			alert("��������ȷ�����ν���ʱ��(000000-240000)��");
			stoptime.focus();
			stoptime.select();
			return false;
		}
		if (temp1 > temp2) {
			alert("������ʼʱ��Ӧ��С�����ν���ʱ�̣�");
			starttime.focus();
			starttime.select();
			return false;
		}

		var regexp = /^[0-9]{0,}$/;

		if (trim(limitvalue) == '')
		{
			alert('��������������޶');
			document.forms[0].elements
					['model.roamInfo.limitvalue'].focus();
			return false;
		}


		if (!regexp.test(limitvalue))
		{
			alert("������Ϸ��Ĺ��������޶�1��");
			document.forms[0].elements
					['model.roamInfo.limitvalue'].focus();
			return false;
		}


}

com.linkage.service.dialup.trim = function trim(str){
	/**
	**		@func		����ַ����еĿո�
	**/
    	var i = 0;
        while ((i < str.length)&&((str.charAt(i) == " ")||(str.charAt(i) == "��"))){i++;}
    	var j = str.length-1;
    	while ((j >= 0)&&((str.charAt(j) == " ")||(str.charAt(j) == "��"))){j--;}
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
            alert("������Ϸ������к��룡");
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
		alert("�û��ʺţ����Ѻ��룬���к�����������������һ�");
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
	obj2.value = _paynum;
	obj3.value = _callingno;
	//obj4.value = _reserved2;

	return true;
}