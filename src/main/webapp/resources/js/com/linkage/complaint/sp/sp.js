com.linkage.complaint.sp = new Object();
/**���� spcomplaintAction ˢ��,��ѯҳ��ˢ��
	**/

com.linkage.complaint.sp.onChangeQueryCorpId = function onChangeQueryCorpId(){  
   document.forms[0].action="/main/complaint/sp/query_refresh_sp.action";
   document.forms[0].submit();	
}
/**���� spcomplaintAction ˢ��,ɾ��ҳ��ˢ��
	**/
com.linkage.complaint.sp.onChangeDeleteCorpId = function onChangeDeleteCorpId(){  
   document.forms[0].action="/main/complaint/sp/delete_refresh_sp.action";
   document.forms[0].submit();	
}

com.linkage.complaint.sp.isValidOperation = function isValidOperation(obj){
	if(obj==null) obj=document.forms[0].operation;
	var operation = obj.value;
	if(operation==null || operation == ""){
		alert("��ѡ����������");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.complaint.sp.isValidRemark = function isValidRemark(obj) {

	if (obj == null) obj = document.forms[0].remark;
	var remark = obj.value;
	if (remark == null || remark == "") {
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
	/**
	**		@func		userId
	**		@param  Object obj	userId
	**/
com.linkage.complaint.sp.isValidUserId = function isValidUserId(obj) {
	if (obj == null) obj = document.forms[0].userId;
	var userId = obj.value;
	if (userId == null || userId == "") {
		alert("SP����Ա����Ϊ�գ�");
		obj.focus();
		obj.select();
		return false;
	}
return true;  
}	

	/**
	**		@func		complainant
	**		@param  Object obj	complainant
	**/
com.linkage.complaint.sp.isValidComplainant = function isValidComplainant(obj) {
	if (obj == null) obj = document.forms[0].complainant;
	var complainant = obj.value;
	if (complainant == null || complainant == "") {
		alert("Ͷ������������Ϊ�գ�");
		return false;
	}
return true;  
}	

com.linkage.complaint.sp.isValidAreaNo = function isValidAreaNo(obj) {
	/**
	**		@func		���̱��
	**		@param  Object obj	���̱��
	**/
	if (obj == null) obj = document.forms[0].areaNo;
	var areaNo = obj.value;
	if (areaNo == null || areaNo == ""||areaNo=="-*") {
		alert("��ѡ��Ͷ��������������");
		return false;
	}
return true;
}	
	/**
	**		@func		���̱��
	**		@param  Object obj	���̱��
	**/
com.linkage.complaint.sp.isValidSubject = function isValidSubject(obj) {

	if (obj == null) obj = document.forms[0].subject;
	var subject = obj.value;
	if (subject == null || subject == "") {
		alert("��ѡ��Ͷ�������⣡");
		return false;
	}
return true;
}	
	/**
	**		@func		Email��ַ
	**		@param  Object obj	Email��ַ
	**/
com.linkage.complaint.sp.isValidEmail = function isValidEmail(obj){
	if(obj==null) obj=document.forms[0].email;
	var email = obj.value;
	if(email == ""){
		alert("������Email��ַ");
		return false;	
	}else{
		if(!isEmail(email)){
		  alert("Email��ַ���淶��");
		  obj.select();
		  obj.focus();
		  return false;
	  }
	}
	return true;
}

com.linkage.complaint.sp.isValidPhone = function isValidPhone(obj){
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
//--------------------------------------------------------------------------
//    description:      �ж�email�Ƿ���ȷ�Դ�
//    name:       isCharNumLine
//    parameters: obj   - Դ�ַ���
//    return:           true  - ��
//                false - ��
//
com.linkage.complaint.sp.isEmail = function isEmail(email){
	  var reEmail = /^([A-Za-z0-9])(\w)+@(\w)+(\.)(com|com\.cn|net|cn|net\.cn|org|biz|info|gov|gov\.cn|edu|edu\.cn)/;
    if (!email.match(reEmail))
    {
         return false;
    }
    else return true;
}

com.linkage.complaint.sp.isPosInt = function isPosInt(obj){
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

com.linkage.complaint.sp.onChangePlatformType = function onChangePlatformType(){  
   document.forms[0].action="/main/task/newtask/spcomplaint/add_prepare.action";
   document.forms[0].submit();	
}
com.linkage.complaint.sp.initField = function initField(obj){
   if(obj==null) obj = document.forms[0].adminRealmFlag;
   
   var adminRealmFlag = obj.value;
   if(adminRealmFlag == 1){
   	  document.all("admin_realmFlag").style.display = "";
   }else{
   	  document.all("admin_realmFlag").style.display = "none";
   }
   
} 

com.linkage.complaint.sp.isValidContent = function isValidContent(obj){
	if(obj==null) obj=document.forms[0].content;
	var content = obj.value;
	if(content == ""){
		alert("�������������ݣ�");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(content);
	if(len >255){
		alert("�������ݳ��Ȳ��ܴ���255���ַ�����ǰ����Ϊ"+len+"���ַ���");
		obj.select();
		obj.focus();
		return false;		
	}
	return true;
}