com.linkage.system.admin = new Object();

com.linkage.system.admin.initField = function initField(obj,obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj10,obj11,obj12,obj13,obj14,obj15,obj16,obj17) {
	if (obj7 == null) obj7 = document.forms[0].groupno_realmflag_value;
	if (obj4 == null) obj4 = document.forms[0].groupno_realmflag;
	if (obj3 == null) obj3 = document.forms[0].groupNo;
	
	//if (obj1 == null) obj1 = document.forms[0].realmTwo;
	//if (obj2 == null) obj2 = document.forms[0].realmThree;
	//if (obj == null)  obj = document.forms[0].platformType;
	
	//if (obj10 == null) obj10 = document.all("realmOne_div");
	//if (obj11 == null) obj11 = document.all("realmTwo_div");
	//if (obj12 == null) obj12 = document.all("realmThree_div");
	//if (obj13 == null) obj13 = document.all("findCorp_div");
	if (obj14 == null) obj14 = document.all("defaultEmail_div");
	if (obj15 == null) obj15 =document.forms[0].defaultEmail;
//	if (obj16 == null) obj16 =document.forms[0].loginModFlag;	
	//if (obj17 == null) obj17 =document.all("findSP_div");
//	var loginModFlag = obj16.value;

	var defaultEmail = obj15.value;
	
	if(defaultEmail == null || defaultEmail == ""){
	   document.forms[0].isCorpAdmin.checked=false;
	}else{
	   document.forms[0].isCorpAdmin.checked=true;
	}
		
	var groupnoIndex = obj3.selectedIndex;
	var realmflag = obj4.options[groupnoIndex].text;
	obj7.value = realmflag;
	if (realmflag == 0) {
		//obj.value = "";
		//obj1.value = "";
		//obj2.value = "";
		
		//obj10.style.display = "none";
		//obj11.style.display = "none";
		//obj12.style.display = "none";
		//obj13.style.display = "none";
		obj14.style.display = "none";
		//obj17.style.display = "none";
	}else if (realmflag == 2) {
		//obj.value = "";
		//obj1.value = "";
		//obj2.value = "";
		
		//obj10.style.display = "";
		//obj11.style.display = "";
		//obj12.style.display = "none";
		//obj13.style.display = "none";		
		obj14.style.display = "none";
		//obj17.style.display = "";						
	}else if (realmflag == 3) {
		//obj.value = "";
		//obj1.value = "";
		//obj2.value = "";
		
		//obj10.style.display = "";
		//obj11.style.display = "none";
		//obj12.style.display = "";
		//obj13.style.display = "";		
		obj14.style.display = "none";
		//obj17.style.display = "none";						
	}
	
	
}

/**
com.linkage.system.admin.isValidAdminName = function isValidAdminName(obj) {
	
	**		@func		����Ա����
	**		@param  Object obj	����Ա�˺�
	
	if (obj == null) obj = document.forms[0].admin;
	var admin = obj.value;
	if (admin == null || admin == "") {
		alert("����Ա���벻��Ϊ�գ�");
		obj.focus();
		obj.select();
		return false;
	}
	if ( (/^[A-Za-z0-9~.!#$^&_-|]+$/g).test(admin) == false ) {
		alert("����Ա���뺬�Ƿ��ַ���");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}
**/


	/**
	**		@func		����Ա����
	**		@param  Object obj	����Ա�˺�Ϊemail
	**/
com.linkage.system.admin.isValidAdminName = function isValidAdminName(obj) {
	/**
	**		@func		��λ
	**		@param  Object obj
	**/
	if (obj == null) obj = document.forms[0].admin;
	var email = obj.value;
	if (email == null || email == "" || com.linkage.util.trim(email) == "") {
		alert("����д����Ա�ʺţ�");
		obj.focus();
		obj.select();
		return false;
	}
	/*if (com.linkage.util.isValidEmail(email) == false ) {
		alert("EMAIL��ʽ����");
		obj.focus();
		obj.select();
		return false;
	}*/
	return true;
}

com.linkage.system.admin.isValidAdmin = function isValidAdmin (obj){
	if (obj == null) obj = document.forms[0].admin;
	var admin = obj.value;
	if (admin == null || admin == "" || com.linkage.util.trim(admin) == "") {
		alert("���������Ա�ʺ�!");
		obj.focus();
		obj.select();
		return false;
	}   
  var length = admin.length;
  for (i = 0; i < length; i++) {
    code = admin.charCodeAt(i);
    if (code > 128) {
       alert("����Ա�ʺź��Ƿ��ַ�!");
       obj.focus();
       obj.select();
       return false;
    }
  }
	return true;
}

com.linkage.system.admin.isValidAdminPassword = function isValidAdminPassword(obj,obj1,obj2) {
	/**
	**		@func		����Ա����У�� ���������Ƿ����,���������ȷ���Ƿ�һ�µ�
	**		@param  Object obj	����
	**						Object obj1	����ȷ��
	**/
	if (obj2 == null) obj2 = document.forms[0].old_password;
	if (obj1 == null) obj1 = document.forms[0].password_sure;
	if (obj == null) obj = document.forms[0].password;
	var old_password = obj2.value;
	var passwd = obj.value;
	var passwd_sure = obj1.value;
	if (passwd != passwd_sure){
		alert("������ȷ�����벻һ�£�");
		obj.focus();
		obj.select();
		return false;
	}
		if (passwd == old_password){
		alert("�޸ĵ����벻��Ϊԭ���룡");
		obj.focus();
		obj.select();
		return false;
	}
	if (com.linkage.util.isValidAdminPassword(passwd,old_password) == false) {
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.system.admin.isValidPassword = function isValidPassword(obj,obj1) {
	/**
	**		@func		����Ա����У�� ���������Ƿ����,���������ȷ���Ƿ�һ�µ�
	**		@param  Object obj	����
	**						Object obj1	����ȷ��
	**/
	if (obj1 == null) obj1 = document.forms[0].password_sure;
	if (obj == null) obj = document.forms[0].password;
	var passwd = obj.value;
	var passwd_sure = obj1.value;
	if (passwd != passwd_sure){
		alert("������ȷ�����벻һ�£�");
		obj.focus();
		obj.select();
		return false;
	}
	if (com.linkage.util.isValidAdminPassword(passwd,passwd_sure) == false) {
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.system.admin.isValidGroupno = function isValidGroupno(obj) {
	/**
	**		@func		����Ա��
	**		@param  Object obj
	**/
	if (obj == null) obj = document.forms[0].groupNo;
	var groupNo = obj.value;
	var admin = document.forms[0].admin.value;
	if(admin == null || admin == ""){
		if (groupNo == null || groupNo == "" || groupNo == "-*") {
			alert("��ѡ�����Ա�飡");
			obj.focus();
			return false;
		}
		if (com.linkage.util.isInteger(groupNo) == false ) {
			alert("����Ա����쳣��");
			obj.focus();
			return false;
		}		
	}
	return true;
}

com.linkage.system.admin.isValidAreano = function isValidAreano(obj) {
	/**
	**		@func		����
	**		@param  Object obj
	**/
	if (obj == null) obj = document.forms[0].areaNo;
	var areaNo = obj.value;
	if (areaNo == null || areaNo == "" || areaNo == "-*") {
		alert("��ѡ�����Ա���أ�");
		obj.focus();
		return false;
	}
	if (com.linkage.util.isInteger(areaNo) == false ) {
		alert("�����쳣��");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.system.admin.isValidFullName = function isValidFullName(obj) {
	/**
	**		@func		����Ա����
	**		@param  Object obj	����Ա�˺�
	**/
	if (obj == null) obj = document.forms[0].fullName;
	var fullName = obj.value;
	if (fullName == null || fullName == "") {
		alert("��������ϵ��������");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.system.admin.isValidRoleid = function isValidRoleid(obj) {
	/**
	**		@func		��ɫ
	**		@param  Object obj
	**/
	if (obj == null) obj = document.forms[0].roleId;
	var roleId = obj.value;
	if (roleId == null || roleId == "" || roleId == "-*") {
		alert("��ѡ�����Ա������ɫ��");
		obj.focus();
		return false;
	}
	if (com.linkage.util.isInteger(roleId) == false ) {
		alert("��ɫ�쳣��");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.system.admin.isValidRealmThree = function isValidRealmThree() {
	/**
	**		�����ƽ̨�����б�
	**		@param  Object obj
	**/
	
	var groupnoIndex = document.forms[0].groupNo.selectedIndex;
	var realmflag = document.forms[0].groupno_realmflag.options[groupnoIndex].text;
	document.forms[0].groupno_realmflag_value.value = realmflag;
	
	if (realmflag == 0) {
		var count = 0;
		for(i=0;i<document.forms[0].platformType.length;i++){
			if(document.forms[0].platformType[i].checked){
				count ++;
				break;
			}
		}
		if(count == 0){
			alert("������ѡ��һ��ƽ̨���ͣ�");
			return false;
		}
	}
	return true;
}

com.linkage.system.admin.isValidRealmOne = function isValidRealmOne() {
	/**
	**		����һ�ж�
	**		@param  Object obj
	**/	
	var groupnoIndex = document.forms[0].groupNo.selectedIndex;
	var realmflag = document.forms[0].groupno_realmflag.options[groupnoIndex].text;
	document.forms[0].groupno_realmflag_value.value = realmflag;
	
	if(realmflag == 1){
		  var realmOne = document.forms[0].realmOne.value;
		  if (realmOne == null || realmOne == "" ) {
			    alert("����д��ҵ��ʶ��");
			    document.forms[0].realmOne.focus();
			    document.forms[0].realmOne.select();
			    return false;
		  }
	}
	return true;
}

com.linkage.system.admin.isValidRealmTwo = function isValidRealmTwo() {
	/**
	**		�������ж�
	**		@param  Object obj
	**/	
	var groupnoIndex = document.forms[0].groupNo.selectedIndex;
	var realmflag = document.forms[0].groupno_realmflag.options[groupnoIndex].text;
	document.forms[0].groupno_realmflag_value.value = realmflag;
	
		if(realmflag == 2){
		  var realmOne = document.forms[0].realmOne.value;
		  if (realmOne == null || realmOne == "" ) {
			    alert("����д��ҵ��ʶ��");
			    document.forms[0].realmOne.focus();
			    document.forms[0].realmOne.select();
			    return false;
			  }
		  var realmTwo = document.forms[0].realmTwo.value;
		  if (realmTwo == null || realmTwo == "" ) {
			    alert("����дSP��ʶ��");
			    document.forms[0].realmTwo.focus();
			    return false;
		  }
	}
	return true;
}
com.linkage.system.admin.isValidMobile = function isValidMobile(obj){
	/**
	**		@func		�Ƿ�Ϊ��ȷ���ֻ�����
	**		@param  String str
	**/
		if (obj == null) obj = document.forms[0].mobile;
	var mobile = obj.value;
	/*if (mobile == null || mobile == "" || com.linkage.util.trim(mobile) == "") {
		alert("����д�ֻ����룡");
		obj.focus();
		obj.select();
		return false;
	}*/
	if(mobile != null && com.linkage.util.trim(mobile) != ""){
		if (com.linkage.util.isInteger(mobile) == false ) {
			alert("��������ȷ���ֻ����룡");
			return false;
		}
		if (mobile.length != 11) {
			alert("�ֻ����볤�Ȳ���ȷ��");
			return false;
		}
		if(mobile.indexOf("13") != 0 && mobile.indexOf("14") != 0
		&& mobile.indexOf("15") != 0 && mobile.indexOf("16") != 0
		&& mobile.indexOf("18") != 0) {
			alert("�ֻ����뿪ʼ�β���ȷ��");
			return false;
		}		
	}

	return true;
}

com.linkage.system.admin.isValidPhoneNumber = function isValidPhoneNumber(obj){
	
	if(obj==null) obj=document.forms[0].phoneNumber;
	var phoneNumber = obj.value;
	if(phoneNumber == ""){
		 alert("������칫�绰��");
		 return false;	
	}else{
		if(!com.linkage.system.admin.isPosInt(phoneNumber)){
		  alert("�칫�绰ֻ��Ϊ���֣�");
		  obj.select();
		  obj.focus();
		  return false;
	  }
	
		/*if (phoneNumber.length != 8 && phoneNumber.length != 7 ) {
			alert("�칫�绰���Ȳ���ȷ��");
			return false;
		}*/
	}
	return true;
}


com.linkage.system.admin.isPosInt = function isPosInt(obj){
	if (obj.length==0)
            return false;
      obj = com.linkage.util.trim(obj);
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
com.linkage.system.admin.isPostvalid = function isPostvalid(obj){
	if (obj.length==0)
            return false;
      obj = trim(obj);
      if ( (/^\d+$/).test(obj) == false ){
	 		 if(obj.length!=6){
	 		 alert("�����������Ϊ��λ����!");
	 		 return false;
	 		 }
	 	}	
      return true;
}
com.linkage.system.admin.isValidEmail = function isValidEmail(obj) {
	/**
	**		@func		��λ
	**		@param  Object obj
	**/
	if (obj == null) obj = document.forms[0].email;
	var email = obj.value;
	if (email == null || email == "" || com.linkage.util.trim(email) == "") {
		alert("����дEMAIL��");
		obj.focus();
		obj.select();
		return false;
	}
	//alert("com.linkage.util.isValidEmail(email)=" );
	if (com.linkage.util.isValidEmail(email) == false ) {
		alert("EMAIL��ʽ����");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.system.admin.onChangeCorpId = function onChangeCorpId(str){
	 var corpId = document.forms[0].realmOne.value;
//	 	document.forms[0].loginModFlag.value="unfirst";
    document.forms[0].action = "/main/system/admin/"+str+"_prepare.action";
   document.forms[0].submit();	
}

/***
   **ͨ����ѡ���ɫ
***/
com.linkage.system.admin.onChangeGroupno = function onChangeGroupno(str,obj1,obj2,obj3) {
	if (obj3==null) obj3=document.forms[0].groupno_realmflag_value;
	if (obj2==null) obj2=document.forms[0].groupno_realmflag;
	if (obj1==null) obj1=document.forms[0].groupNo;
  
	var groupnoIndex = obj1.selectedIndex;
	obj2.selectedIndex = groupnoIndex;
	obj3.value = obj2.options[groupnoIndex].text;
	com.linkage.system.admin.prepareInfo(str);
}

com.linkage.system.admin.prepareInfo = function prepareInfo(str) {
	/**
	**		@func		���onChange�¼�
	**		@param  str �¿�add �޸�mod
	**/
	obj3 = document.forms[0].areaNo;
  obj2 = document.forms[0].powerLevel;  
  obj1 = document.forms[0].groupNo;
  document.forms[0].action = "/systemportal/system/admin/"+str+"_prepare.action";
	document.forms[0].submit();
	obj3.disabled = true;
  //obj2.disabled = true;
  obj1.disabled = true;
}

com.linkage.system.admin.onChangeGroupnoadmin = function onChangeGroupnoadmin(str,obj1,obj2,obj3) {
	if (obj3==null) obj3=document.forms[0].groupno_realmflag_value;
	if (obj2==null) obj2=document.forms[0].groupno_realmflag;
	if (obj1==null) obj1=document.forms[0].groupNo;
	var groupnoIndex = obj1.selectedIndex;
	obj2.selectedIndex = groupnoIndex;
	if(groupnoIndex!=0){
	  obj3.value = obj2.options[groupnoIndex].text;
	  com.linkage.system.admin.prepareInfoadmin(str);
  }
}

com.linkage.system.admin.prepareInfoadmin = function prepareInfoadmin() {
	/**
	**		@func		���onChange�¼�
	**		@param  str �¿�add �޸�mod
	**/
	obj3 = document.forms[0].areaNo;
  obj2 = document.forms[0].powerlevel;
  obj1 = document.forms[0].groupNo;
  document.forms[0].action = "/systemportal/system/admin/query_prepare_admin.action";
	document.forms[0].submit();
	obj3.disabled = true;
  //obj2.disabled = true;
  obj1.disabled = true;
}


com.linkage.system.admin.sel_status = function sel_status(obj1){
    if(obj1 == null) obj1 = document.forms[0].oldstatus;
    var status = obj1.value;
    if(status == "0"){
        document.all("div_normal_pause").style.display = "";
        document.all("div_pause_normal").style.display = "none";
        document.all("div_close").style.display = "none";
    }
    else if(status == "1"){
        document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "";
        document.all("div_close").style.display = "none";
    }
    else if(status == "2"){
        document.all("div_normal_pause").style.display = "none";
        document.all("div_pause_normal").style.display = "none";
        document.all("div_close").style.display = "";
    }
}

com.linkage.system.admin.sel_cancel_status = function sel_cancel_status(obj1){
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

com.linkage.system.admin.processStatus = function processStatus(obj,str){
    if(obj == null) obj = document.forms[0].status;
    obj.value = str;
}

com.linkage.system.admin.isValidAdminQuery = function isValidAdminQuery(obj1,obj2,obj3,obj4,obj5,obj6,obj7) {
    if (obj1 == null) obj1 = document.forms[0].admin;
    if (obj2 == null) obj2 = document.forms[0].userstatus;
    if (obj3 == null) obj3 = document.forms[0].groupno;
    if (obj4 == null) obj4 = document.forms[0].powerlevel;
    if (obj5 == null) obj5 = document.forms[0].areano;
    if (obj6 == null) obj6 = document.forms[0].roleid;
    //if (obj7 == null) obj7 = document.forms[0].vpdnrealm;

    var admin = com.linkage.util.trim(obj1.value);
    var userstatus = com.linkage.util.trim(obj2.value);
    var groupno = com.linkage.util.trim(obj3.value);
    var powerlevel = com.linkage.util.trim(obj4.value);
    var areano = com.linkage.util.trim(obj5.value);
    var roleid = com.linkage.util.trim(obj6.value);
   // var vpdnrealm = com.linkage.util.trim(obj7.value);
    var searchCount = 0;

    if(admin != ""){
		searchCount ++;
    }

    if(userstatus != "" && userstatus != "-*"){
		searchCount ++;
	}

	if (groupno != "" && groupno != "-*"){
		searchCount ++;
	}

	if (powerlevel != "" && powerlevel != "-*") {
		searchCount ++;
	}

	if (areano != "" && areano != "-*") {
		searchCount ++;
	}

	if (roleid != "" && roleid != "-*") {
		searchCount ++;
	}

	//if (vpdnrealm != "" && vpdnrealm != "-*") {
	//	searchCount ++;
	//}

	if (searchCount == 0){
		alert("��������������һ��������");
		obj1.focus();
		obj1.select();
		return false;
	}

	obj1.value = admin;

	return true;
}

com.linkage.system.admin.isCorpAdmin = function isCorpAdmin(obj){
	var groupnoindex = document.forms[0].groupNo.selectedIndex;
	if(groupnoindex == 1){
		 if(document.forms[0].isCorpAdmin.checked){
		 	 document.forms[0].defaultEmail.value = document.forms[0].admin.value;
		 }else{
		 document.forms[0].defaultEmail.value = "";
	   }	 		 
	}
//  document.forms[0].loginModFlag.value="unfirst";	
	return true;	 
}

com.linkage.system.admin.initQuery = function initQuery(obj,obj1){
	if(obj==null) obj=document.forms[0].groupno_realmflag;
	if(obj1==null) obj1=document.all("corpName_div");
	
	var realmflag = obj.value;
	if(realmflag == '401' || realmflag == '501'){
    obj1.style.display = "";						
	}else{
    obj1.style.display = "none";	  	
	}
	return true;
}

com.linkage.system.admin.queryCorpName = function queryCorpName(obj){
	if(obj == null) obj = document.forms[0].likeCorpName;
	var likeCorpName = obj.value;
	if(likeCorpName != null && likeCorpName != ""){
	   document.forms[0].action="/main/spid/admin/query_prepare.action";
	   document.forms[0].submit();			
	}else{
	   alert("��������ҵ���ƣ�");	
	   obj.focus();
		 obj.select();
	   return false;
	}
}

com.linkage.system.admin.isValidRealm = function isValidRealm(obj1,obj2,obj3,obj4){
  if(obj1 == null) obj1=document.forms[0].groupNo;	
  if(obj2 == null) obj2=document.forms[0].realmThree;
  if(obj3 == null) obj3=document.forms[0].realmTwo;
  if(obj4 == null) obj4=document.forms[0].groupno_realmflag_value;
  

  var realmTwo = obj3.value;
  var realmThree = obj2.value; 
  var realmflag = obj4.value;
  if(realmflag == 0){
  	 document.forms[0].realmThree.value="";
  	 document.forms[0].realmTwo.value="";
  }else if(realmflag == 1){
  	 document.forms[0].realmThree.value="";
  	 document.forms[0].realmTwo.value="";  	
  }else if(realmflag == 2){
  	 if(realmTwo == null || realmTwo == ""){
  	   alert("��ѡ��һ��SP��");	
  	   obj3.select();
  	   return false;
  	 }
  	 document.forms[0].realmThree.value="";
  }else if(realmflag == 3){
  	if(realmThree == null || realmThree == ""){
  	  alert("��ѡ��һ����ҵ��");	
  	   obj4.select();
  	   return false;
  	 }  
     document.forms[0].realmTwo.value="";  	  	 	
  }

	
}