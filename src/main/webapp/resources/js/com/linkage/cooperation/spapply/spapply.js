com.linkage.cooperation.spapply = new Object();

com.linkage.cooperation.spapply.initField = function initField(obj){
   if(obj==null) obj = document.forms[0].adminRealmFlag;
   
   var adminRealmFlag = obj.value;
   if(adminRealmFlag == 1){
   	  document.all("admin_realmFlag").style.display = "";
   }else{
   	  document.all("admin_realmFlag").style.display = "none";
   }
   
} 
com.linkage.cooperation.spapply.isValidApplyNO = function isValidApplyNO(obj){
	if(obj==null) obj=document.forms[0].applyNo;
	var applyNo = obj.value;
	if(applyNo == ""){
		alert("�������������ţ�");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(!isPosInt(applyNo)){
		   alert("���������ֻ��Ϊ���֣�");
		   obj.select();
		   obj.focus();
		   return false;	
		}
	}
}

com.linkage.cooperation.spapply.isValidApplicant = function isValidApplicant(obj){
	if(obj==null) obj=document.forms[0].applicant;
	var applicant = obj.value;
	if(applicant == ""){
		alert("������������������");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.cooperation.spapply.isValidOperation = function isValidOperation(obj){
	if(obj==null) obj=document.forms[0].operation;
	var operation = obj.value;
	if(operation==null || operation == ""){
		alert("��ѡ����������");
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

com.linkage.cooperation.spapply.isValidRemark = function isValidRemark(obj){
	if(obj==null) obj=document.forms[0].remark;
	var remark = obj.value;
	if(remark == ""){
		alert("���������������");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.cooperation.spapply.isValidSpid = function isValidSpid(obj){
	if(obj==null) obj=document.forms[0].spid;
	var spid = obj.value;
	if(spid == ""){
		alert("������ҵ����룡");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.cooperation.spapply.isValidPlatformType = function isValidPlatformType(obj){
	if(obj==null) obj=document.forms[0].platformType;
	var platformType = obj.value;
	if(platformType == ""){
		alert("������ҵ��ƽ̨���ͣ�");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.cooperation.spapply.isValidCorpId = function isValidCorpId(obj){
	if(obj==null) obj=document.forms[0].corpId;
	var corpId = obj.value;
	if(corpId == ""){
		alert("��������ҵ��ʶ��");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.cooperation.spapply.isValidContent = function isValidContent(obj){
	if(obj==null) obj=document.forms[0].actionContent;
	var actionContent = obj.value;
	if(actionContent == ""){
		alert("���������ݣ�");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(actionContent);
	if(len >255){
		alert("����ݳ��Ȳ��ܴ���255���ַ�����ǰ����Ϊ"+len+"���ַ���");
		obj.select();
		obj.focus();
		return false;		
	}
	return true;	
}

com.linkage.cooperation.spapply.isValidPoint = function isValidPoint(obj){
	if(obj==null) obj=document.forms[0].integralPoint;
	var point = obj.value;
	if(point != ""){
		if(!isPosInt(point)){
		  alert("�����ֻ��Ϊ���֣�");
		  obj.select();
		  obj.focus();
		  return false;
	  }
	}
	return true;
}

com.linkage.cooperation.spapply.isValidPhone = function isValidPhone(obj){
	if(obj==null) obj=document.forms[0].contactPhone;
	var phone = obj.value;
	if(phone == ""){
		 alert("��������ϵ�绰��");
		 return false;	
	}else{
		if(!isPosInt(phone)){
		  alert("��ϵ�绰ֻ��Ϊ���֣�");
		  obj.select();
		  obj.focus();
		  return false;
	  }
	}
	return true;
}

com.linkage.cooperation.spapply.isValidEmail = function isValidEmail(obj){
	if(obj==null) obj=document.forms[0].email;
	var email = obj.value;
	if(email == ""){
		alert("������Email��ַ");
		return false;	
	}else{
		if(!com.linkage.util.isValidEmail(email)){
		  alert("��������ȷ��Email��ַ��");
		  obj.select();
		  obj.focus();
		  return false;
	  }
	}
	return true;
}

com.linkage.cooperation.spapply.isValidTime = function isValidTime(obj1,obj2){
   if(obj1==null) obj1=document.forms[0].startTime;
   if(obj2==null) obj2=document.forms[0].endTime;
   
   var objDate = new Date();
	 var year = objDate.getYear();
	 var month = objDate.getMonth()+1;
	 var day = objDate.getDate();

	 month = month < 10? (""+0+month):month;
   day = day < 10? (""+0+day):day;

   
   var nowDate = ""+year+month+day;
	 var time1 = (obj1.value).split("-");
	 var time2 = (obj2.value).split("-");
	
	 var startTime = ""+time1[0]+time1[1]+time1[2];
	 var endTime = ""+time2[0]+time2[1]+time2[2];
	 
	 if(nowDate>startTime){
	 	 alert("���ʼʱ�䲻��С�ڵ�ǰʱ�䣡");
		 return false;
	 }
	 if(startTime>endTime){
	 	 alert("���ʼʱ�䲻�ܴ��ڻ����ʱ�䣡");
  	 return false;	
	 }

	return true;
}

com.linkage.cooperation.spapply.onChangePlatformType = function onChangePlatformType(){  
   document.forms[0].action="/main/task/newtask/cooperation/add_prepare.action";
   document.forms[0].submit();	
}


com.linkage.cooperation.spapply.isValidPlatformType = function isValidPlatformType(obj) {
	if(document.forms[0].adminRealmFlag.value==1){
		if (obj == null) obj = document.forms[0].platformType;
	  var platformType = obj.value;
		if (platformType == null || platformType == "" || platformType == "-*") {
			alert("��ѡ��ҵ��ƽ̨���ͣ�");
			obj.focus();
			return false;
		}
		if (com.linkage.util.isInteger(platformType) == false ) {
			alert("ҵ��ƽ̨�����쳣��");
			obj.focus();
			return false;
		}
		
		var spid = document.forms[0].spid.value;
		if (spid == null || spid == "" || spid == "-*") {
			alert("��ѡ��ҵ�����ƣ�");
			obj.focus();
			return false;
		}
		if (com.linkage.util.isInteger(spid) == false ) {
			alert("ҵ�������쳣��");
			obj.focus();
			return false;
		}
		return true;
		}
		return true; 
}

com.linkage.cooperation.spapply.isValidSpId = function isValidSpId(obj) {
	if (obj == null) obj = document.forms[0].spid;
	var spid = obj.value;
	if (spid == null || spid == "" || spid == "-*") {
		alert("��ѡ��ҵ�����ƣ�");
		obj.focus();
		return false;
	}
	if (com.linkage.util.isInteger(spid) == false ) {
		alert("ҵ�������쳣��");
		obj.focus();
		return false;
	}
	return true;
}

//--------------------------------------------------------------------------
//    description:      �ж�email�Ƿ���ȷ�Դ�
//    name:       isCharNumLine
//    parameters: obj   - Դ�ַ���
//    return:           true  - ��
//                false - ��
//
com.linkage.cooperation.spapply.isEmail = function isEmail(email){
	  var reEmail = /^([A-Za-z0-9])(\w)+@(\w)+(\.)(com|com\.cn|net|cn|net\.cn|org|biz|info|gov|gov\.cn|edu|edu\.cn)/;
    if (!email.match(reEmail))
    {
         return false;
    }
    else return true;
}


//--------------------------------------------------------------------------
//    description:      �ж��ַ����Ƿ���������������
//    name:       isCharNumLine
//    parameters: obj   - Դ�ַ���
//    return:           true  - ��
//                false - ��
//
com.linkage.cooperation.spapply.isNum = function isValidNum(obj){
	return  isList(obj,"0123456789");
}

//--------------------------------------------------------------------------
//    description:      �ж��ַ����Ƿ��������ָ�����ַ������е��ַ����
//    name:       isList
//    parameters: str   - Դ�ַ���
//                sModel      - ָ�����ַ�����
//    return:           true  - ��
//                false - ��
//
com.linkage.cooperation.spapply.isList = function isList(str,strModel){
	if (str.length==0)
            return false;
      for (i=0;i<str.length;i++){
            var a = str.substr(i,1);
            if (strModel.indexOf(a,0)==-1)
                  return false;
      }
      return true;
}

//--------------------------------------------------------------------------
//    description:      �ж��ַ�����������
//    name:       isPosInt
//    parameters: obj   - Դ�ַ���
//    return:           true  - ��
//                false - ��
//
com.linkage.cooperation.spapply.isPosInt = function isPosInt(obj){
	if (obj.length==0)
            return false;
      obj = trim(obj);
      for (i=0;i<obj.length;i++){
            var a = obj.substr(i,1);
            strModel = "0123456789";
            if (i==0){
                  strModel=strModel+"+";
            }
            if (strModel.indexOf(a,0)==-1){
                  return false;
            }
      }
      return true;
}

//--------------------------------------------------------------------------
//    description:      ȥ���ַ�����β�Ŀո�
//    name:       trim
//    parameters: obj     - source string
//    return:           ȥ���ַ�����β�Ŀո����ַ���
//
com.linkage.cooperation.spapply.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}