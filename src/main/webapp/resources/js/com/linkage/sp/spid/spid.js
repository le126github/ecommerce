com.linkage.sp.spid = new Object();

com.linkage.sp.spid.setValue = function setValue(){
	var length = document.forms[0].platformType.length;
	if(length>1)
		document.forms[0].platformType[0].checked = true;
	else
		document.forms[0].platformType.checked = true;
		
}

com.linkage.sp.spid.isValidOperation = function isValidOperation(obj){
	if(obj==null) obj=document.forms[0].operation;
	var operation = obj.value;
	if(operation==null || operation == ""){
		alert("��ѡ����������");
		obj.focus();
		return false;
	}
	return true;
}
com.linkage.sp.spid.isValidRemark = function isValidRemark(obj){
	if(obj==null) obj=document.forms[0].remark;
	var remark = obj.value;
	if(remark == ""){
		alert("���������������");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(remark);
	if(len >255){
		alert("����������Ȳ��ܴ���255���ַ�����ǰ����Ϊ"+len+"���ַ���");
		obj.select();
		obj.focus();
		return false;		
	}		
  return true;
}

com.linkage.sp.spid.isValidSpsubject = function isValidSpsubject(obj){
	if(obj==null) obj=document.forms[0].spsubject;
	var spsubject = obj.value;
	if(spsubject == ""){
		alert("�������Ŀ���룡");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}


com.linkage.sp.spid.isValidAdmin = function isValidAdmin(obj){
	if(obj==null) obj=document.forms[0].admin;
	var admin = obj.value;
	if(admin == ""){
		alert("��������ϵ���˺ţ�");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidAccessIntro = function isValidAccessIntro(obj){
	if(obj==null) obj=document.forms[0].accessIntro;
	var accessIntro = obj.value;
	if(accessIntro == ""){
		alert("���������˵����");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(accessIntro);
	if(len >255){
		alert("����˵�����ݳ��Ȳ��ܴ���255���ַ�����ǰ����Ϊ"+len+"���ַ���");
		obj.select();
		obj.focus();
		return false;		
	}	
	return true;
}

com.linkage.sp.spid.isCheckBoxSel = function isCheckBoxSel(obj){
	var count = 0;
	for(i=0;i<obj.length;i++){
		if(obj[i].checked){
			count ++;
			break;
		}
	}
	if(count == 0){
		alert("������ѡ��һ�ַ������ͣ�");
		return false;
	}
	return true;
}

com.linkage.sp.spid.onChangePlatformType = function onChangePlatformType(){
	var length = document.forms[0].platformType.length;
	var platformType;
	if(length>1){
		for(var i=0;i<length;i++){
			if(document.forms[0].platformType[i].checked)
				platformType = document.forms[0].platformType[i].value;
		}
	}else{
		if(document.forms[0].platformType.checked)
			platformType = document.forms[0].platformType.value;
	}	
			
	if(platformType=="01"){
		document.all("div_vnet").style.display = "";
        	document.all("div_spms").style.display = "none";
        	
        	document.all("div_servicetype_vnet").style.display = "";
        	document.all("div_servicetype_spms").style.display = "none";
        	document.all("div_servicetype_colour").style.display = "none";
        	document.all("div_servicetype_sound").style.display = "none";
        	
	}else if(platformType=="02"){
		document.all("div_spms").style.display = "";
        	document.all("div_vnet").style.display = "none";
        	
        	document.all("div_servicetype_vnet").style.display = "none";
        	document.all("div_servicetype_spms").style.display = "";
        	document.all("div_servicetype_colour").style.display = "none";
        	document.all("div_servicetype_sound").style.display = "none";
        	
	}else if(platformType=="03"){
		document.all("div_spms").style.display = "none";
        	document.all("div_vnet").style.display = "none";
        	
        	document.all("div_servicetype_vnet").style.display = "none";
        	document.all("div_servicetype_spms").style.display = "none";
        	document.all("div_servicetype_colour").style.display = "";
        	document.all("div_servicetype_sound").style.display = "none";
	}else if(platformType=="04"){
		
		document.all("div_spms").style.display = "none";
        	document.all("div_vnet").style.display = "none";
        	
        	document.all("div_servicetype_vnet").style.display = "none";
        	document.all("div_servicetype_spms").style.display = "none";
        	document.all("div_servicetype_colour").style.display = "none";
        	document.all("div_servicetype_sound").style.display = "";
	}else{
		document.all("div_spms").style.display = "none";
        	document.all("div_vnet").style.display = "none";
        	
        	document.all("div_servicetype_vnet").style.display = "none";
        	document.all("div_servicetype_spms").style.display = "none";
        	document.all("div_servicetype_colour").style.display = "none";
        	document.all("div_servicetype_sound").style.display = "none";
	}

}

com.linkage.sp.spid.isValidPlatformType = function isValidPlatformType(obj){
	if(obj==null) obj=document.forms[0].platformType;
	
	if(!com.linkage.sp.spid.isRadioChecked(obj)){
		alert("��ѡ��ҵ��ƽ̨����");
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidSpno = function isValidSpno(obj){
	if(obj==null) obj=document.forms[0].realmTwo;
	var spno = obj.value;
	if(spno == "-*" || spno == null || spno == "" ){
		alert("��ѡ��ҵ��");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidSpid = function isValidSpid(obj){
	if(obj==null) obj=document.forms[0].spid;
	var spid = obj.value;
	if(com.linkage.util.trim(spid)==""){
		alert("������ҵ����룡");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidSpname = function isValidSpname(obj){
	if(obj==null) obj=document.forms[0].spname;
	var spname = obj.value;
	if(com.linkage.util.trim(spname)==""){
		alert("������ҵ�����ƣ�");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.isRadioChecked = function isRadioChecked(obj){
	if(obj.length>1){
		for(var i=0;i<obj.length;i++){
			if(obj[i].checked){
				return true;
			}
		}
	}else{
		if(obj.checked)
		return true;
	}
	return false;
}
com.linkage.sp.spid.isValidSettleFlag = function isValidSettleFlag(obj){
	if(obj == null ) obj = document.forms[0].settleFlag;
	if(!com.linkage.sp.spid.isRadioChecked(obj)){
		alert("��ѡ���Ƿ�������");
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidErrPercent = function isValidErrPercent(obj){

	if(obj==null) obj=document.forms[0].errPercent;

	var errPercent = obj.value;
	if(com.linkage.util.trim(errPercent)==""){
		alert("�����뻵����");
		obj.select();
		obj.focus();
		return false;
	}

	if(isNaN(errPercent)){
		alert("��������ȷ�Ļ�����");
		obj.select();
		obj.focus();
		return false;
	}
	split = errPercent.split(".");
	if(split.length==2){
		if(split[1].length > 4 || split[1]>9999){ 
			alert("��������ֵС������ܶ���4λ��");
			return false;
		}
        }else if (split.length > 2){
		alert("��������ȷ�Ļ�����");
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidManageFee = function isValidManageFee(obj){
	if(obj==null) obj=document.forms[0].manageFee;
	var manageFee = obj.value;
	if(com.linkage.util.trim(manageFee)==""){
		alert("������ƽ̨�����");
		obj.select();
		obj.focus();
		return false;
	}
	if(isNaN(manageFee)){
		alert("��������ȷ��ƽ̨�����");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidSpInfo = function isValidSpInfo(){
  
	var length = document.forms[0].platformType.length;
 
	var platformType;
	if(length>1){
		for(var i=0;i<length;i++){
			if(document.forms[0].platformType[i].checked)
				platformType = document.forms[0].platformType[i].value;
		}
	}else
		platformType = document.forms[0].platformType.value;
	
	if(platformType=="01"){
		if(!com.linkage.sp.spid.isCheckBoxSel(document.forms[0].serviceType_vnet)){
		  return false;	
		}		
		return com.linkage.sp.spid.isValidVnetInfo();
	}else if(platformType=="02"){
		if(!com.linkage.sp.spid.isCheckBoxSel(document.forms[0].serviceType_spms)){
		  return false;	
		}		
		return com.linkage.sp.spid.isValidSpmsInfo();
	}else if(platformType=="03"){
		if(!com.linkage.sp.spid.isCheckBoxSel(document.forms[0].serviceType_colour)){
		  return false;	
		}		  
	}
	return true;
}

com.linkage.sp.spid.isValidModSpInfo = function isValidModSpInfo(){
  
	var platformType = document.forms[0].platformType.value;
	if(!com.linkage.sp.spid.isCheckBoxSel(document.forms[0].serviceType)){
	   return false;	
	}  
 	
	if(platformType=="01"){
		return com.linkage.sp.spid.isValidVnetInfo();
	}else if(platformType=="02"){
		return com.linkage.sp.spid.isValidSpmsInfo();
	}else if(platformType=="03"){		  
	}
	return true;
}

com.linkage.sp.spid.isValidSpintro = function isValidSpid(obj){
	if(obj==null) obj=document.forms[0].spintro;
	var spintro = obj.value;
	if(com.linkage.util.trim(spintro)==""){
		alert("������SP��飡");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(spintro);
	if(len >255){
		alert("SP������ݳ��Ȳ��ܴ���255���ַ�����ǰ����Ϊ"+len+"���ַ���");
		obj.select();
		obj.focus();
		return false;		
	}
	return true;
}

com.linkage.sp.spid.isValidHostIpList = function isValidHostIpList(obj){
	var hostIpList = obj.value;
	if(com.linkage.util.trim(hostIpList)==""){
		alert("������������ַ�б�");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidPassword = function isValidPassword(obj){
	if(obj==null) obj = document.forms[0].password;
	var password = obj.value;
	if(com.linkage.util.trim(password)==""){
		alert("�������������룡");
		obj.select();
		obj.focus();
		return false;
	}
	return true;	
}

com.linkage.sp.spid.isValidLinkUrl = function isValidLinkUrl(obj){
	if(obj==null) obj = document.forms[0].linkUrl;
	var linkUrl = obj.value;
	if(com.linkage.util.trim(linkUrl)==""){
		alert("�����������ַ��");
		obj.select();
		obj.focus();
		return false;
	}
	return true;	
}

com.linkage.sp.spid.isValidRoamFlag = function isValidRoamFlag(obj){
	if(obj==null) obj=document.forms[0].roamFlag;
	
	if(!com.linkage.sp.spid.isRadioChecked(obj)){
		alert("��ѡ���Ƿ�������������");
		return false;
	}
	return true;
	
}

com.linkage.sp.spid.isValidDetQueryUrl = function isValidDetQueryUrl(obj){
	if(obj==null) obj = document.forms[0].detQueryUrl;
	var detQueryUrl = obj.value;
	if(com.linkage.util.trim(detQueryUrl)==""){
		alert("�������嵥��ѯURL��");
		obj.select();
		obj.focus();
		return false;
	}
	return true;	
}

com.linkage.sp.spid.isValidTariffexPlainUrl = function isValidTariffexPlainUrl(obj){
	if(obj==null) obj = document.forms[0].tariffexPlainUrl;
	var tariffexPlainUrl = obj.value;
	if(com.linkage.util.trim(tariffexPlainUrl)==""){
		alert("�������ʷ�˵��URL��");
		obj.select();
		obj.focus();
		return false;
	}
	return true;	
}

com.linkage.sp.spid.isValidVerifyPwdFlag = function isValidVerifyPwdFlag(obj){
	if(obj==null) obj=document.forms[0].verifyPwdFlag;
	
	if(!com.linkage.sp.spid.isRadioChecked(obj)){
		alert("��ѡ���Ƿ��������У�飡");
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidVnetInfo = function isValidVnetInfo(){
	/*if(!com.linkage.sp.spid.isCheckBoxSel(document.forms[0].serviceType_vnet)){
	  return false;	
	}	*/
	if(!com.linkage.sp.spid.isValidHostIpList(document.forms[0].hostIpList_vnet))
		return false;
	if(!com.linkage.sp.spid.isValidLinkUrl(document.forms[0].linkUrl))
		return false;
	if(!com.linkage.sp.spid.isValidRoamFlag(document.forms[0].roamFlag))
		return false;
	if(!com.linkage.sp.spid.isValidDetQueryUrl(document.forms[0].detQueryUrl))
		return false;
	if(!com.linkage.sp.spid.isValidTariffexPlainUrl(document.forms[0].tariffexPlainUrl))
		return false;	
	if(!com.linkage.sp.spid.isValidVerifyPwdFlag(document.forms[0].verifyPwdFlag))
		return false;						
	return true;
}

com.linkage.sp.spid.isValidAccessStyle = function isValidAccessStyle(obj){
	if(obj==null) obj=document.forms[0].accessStyle;
	
	if(!com.linkage.sp.spid.isRadioChecked(obj)){
		alert("��ѡ����뷽ʽ");
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidTerminalType = function isValidTerminalType(obj){
	if(obj==null) obj=document.forms[0].terminalType;
	
	if(!com.linkage.sp.spid.isRadioChecked(obj)){
		alert("��ѡ���ն�����");
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidHostLocationList = function isValidHostLocationList(obj){
	if(obj==null) obj = document.forms[0].hostLocationList;
	var hostLocationList = obj.value;
	if(com.linkage.util.trim(hostLocationList)==""){
		alert("����������λ�ã�");
		obj.select();
		obj.focus();
		return false;
	}
	return true;	
}

com.linkage.sp.spid.isValidSpmsInfo = function isValidSpmsInfo(){
	/*if(!com.linkage.sp.spid.isCheckBoxSel(document.forms[0].serviceType_spms)){
	  return false;	
	}*/
	if(!com.linkage.sp.spid.isValidAccessStyle(document.forms[0].accessStyle))
		return false;
	if(!com.linkage.sp.spid.isValidTerminalType(document.forms[0].terminalType))
		return false;	
	if(!com.linkage.sp.spid.isValidHostIpList(document.forms[0].hostIpList_spms))
		return false;
	if(!com.linkage.sp.spid.isValidHostLocationList(document.forms[0].hostLocationList))
		return false;		
	if(!com.linkage.sp.spid.isValidPassword(document.forms[0].password))
		return false;		
  if(!com.linkage.sp.spid.isValidAccessIntro(document.forms[0].accessIntro))
		return false;			
	return true;
}

com.linkage.sp.spid.hasChecked = function hasChecked(obj){
	if(com.linkage.sp.spid.isRadioChecked(obj)){
		document.forms[0].hasChecked.value="true";
	}else{
		document.forms[0].hasChecked.value="false";
	}
	return true;
}

com.linkage.sp.spid.onChangeLoginFlag = function onChangeLoginFlag(){
	document.all("div_loginflag").style.display = "none";
	if(document.forms[0].loginFlag[0].checked){
		document.all("div_loginflag").style.display = "";
	}
	
}

com.linkage.sp.spid.onChangeSpid = function onChangeSpid(){
		var length = document.forms[0].platformType.length;
		var platformType;
		if(length>1){
			for(var i=0;i<length;i++){
				if(document.forms[0].platformType[i].checked)
					platformType = document.forms[0].platformType[i].value;
			}
		}else{
			if(document.forms[0].platformType.checked)
				platformType = document.forms[0].platformType.value;
		}	
			
	if(platformType=="02"){
     document.forms[0].userName_spms.value = document.forms[0].spid.value;
        	
	}
}

com.linkage.sp.spid.changeSpid = function changeSpid(){
	 if(document.forms[0].platformType.value=="02"){
  		document.forms[0].userName_spms.value = document.forms[0].spid.value;
  }
}

com.linkage.sp.spid.isValidEmail = function isValidEmail(obj){
	if(obj==null) obj=document.forms[0].admin;
	var admin = obj.value;
	if(!com.linkage.util.isValidEmail(admin)){
		alert("��������ȷ��email");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.isValidLoginFlag = function isValidLoginFlag(){
	if(!com.linkage.sp.spid.isRadioChecked(document.forms[0].loginFlag)){
		alert("��ѡ���Ƿ���Ҫ��¼ϵͳ");
		return false;
	}
	if(document.forms[0].loginFlag[0].checked){
		if(com.linkage.util.trim(document.forms[0].password.value)==""){
			alert("�������¼����");
			document.forms[0].password.select();
			document.forms[0].password.focus();
			return false;
		}
	}else{
		document.forms[0].password.value = "";
	}
	return true;
}

com.linkage.sp.spid.isValidFullName = function isValidFullName(obj){
	if(obj==null) obj=document.forms[0].fullName;
	var fullName = obj.value;
	if(com.linkage.util.trim(fullName)==""){
		alert("��������ϵ������");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.sel_status = function sel_status(obj){
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

com.linkage.sp.spid.sel_cancel = function sel_cancel(obj){
	if(obj == null) obj = document.forms[0].oldstatus;
	var status = obj.value;
	if(status == "0"){        	
      document.all("div_normal_cancel").style.display = "";
      document.all("div_pause_cancel").style.display = "none";
      document.all("div_cancel_normal").style.display = "none"; 	
  }else if(status == "1"){        	
      document.all("div_normal_cancel").style.display = "none";
      document.all("div_pause_cancel").style.display = "";
      document.all("div_cancel_normal").style.display = "none";     	
  }else if(status == "2"){        	
      document.all("div_normal_cancel").style.display = "none";
      document.all("div_pause_cancel").style.display = "none";
      document.all("div_cancel_normal").style.display = "";   	
  }
}

com.linkage.sp.spid.processStatus = function processStatus(obj,value){
	if(obj == null) obj = document.forms[0].status;
    	obj.value = value;
}

com.linkage.sp.spid.onChangeAddCorpId = function onChangeAddCorpId(){
	 var corpId = document.forms[0].corpId.value;
	 if(corpId == null || corpId == "-*" || corpId == "" ){
     document.forms[0].action="/main/spid/add_query_init.action";
   }else{
     document.forms[0].action="/main/spid/add_prepare.action";
   }
   document.forms[0].submit();	
}

com.linkage.sp.spid.onChangeModCorpId = function onChangeModCorpId(){
	 var corpId = document.forms[0].corpId.value;
	 if(corpId == null || corpId == "-*" || corpId == "" ){
     document.forms[0].action="/main/spid/mod_query_init.action";
   }else{
     document.forms[0].action="/main/spid/mod_prepare.action";
   }
   document.forms[0].submit();	
}

com.linkage.sp.spid.onChangeStatusCorpId = function onChangeStatusCorpId(){
	 var corpId = document.forms[0].corpId.value;
	 if(corpId == null || corpId == "-*" || corpId == "" ){
     document.forms[0].action="/main/spid/status_query_init.action";
   }else{
     document.forms[0].action="/main/spid/status_prepare.action";
   }    
   document.forms[0].submit();	
}

com.linkage.sp.spid.onChangeCancelCorpId = function onChangeCancelCorpId(){
	 var corpId = document.forms[0].corpId.value;
	 if(corpId == null || corpId == "-*" || corpId == "" ){
     document.forms[0].action="/main/spid/cancel_query_init.action";
   }else{
     document.forms[0].action="/main/spid/cancel_prepare.action";
   }  
   document.forms[0].submit();	
}

com.linkage.sp.spid.onChangeLimitCorpId = function onChangeLimitCorpId(){
	 var corpId = document.forms[0].corpId.value;
	 if(corpId == null || corpId == "-*" || corpId == "" ){
     document.forms[0].action="/main/spid/limitarea_query_init.action";
   }else{
     document.forms[0].action="/main/spid/limit_prepare.action";
   }  
   document.forms[0].submit();	
}

com.linkage.sp.spid.isValidCorpId = function isValidCorpId(obj){
	if(obj==null) obj=document.forms[0].corpId;
	var corpId = obj.value;
	if(corpId == "-*" || corpId == null || corpId == "" ){
		alert("��ѡ����ҵ���ƣ�");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.spid.onChangeOperation = function onChangeOperation(obj){
  var operationIndex = document.forms[0].operation.selectedIndex;
  if(document.forms[0].operation[operationIndex].text == "�ύ���쵼���"){
  	document.all("leader_select").style.display = "";
  }else{
  	document.all("leader_select").style.display = "none";
  }  
  return true;
}	
