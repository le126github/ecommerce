com.linkage.systemportal.corp.member = new Object();

com.linkage.systemportal.corp.member.removeInit = function removeInit(){
	var user = document.all("user_div");
	var corp = document.all("corp_div");
	
	var removeType = document.forms[0].removeType.value;
	if(removeType == 1){
		user.style.display = "";
		corp.style.display = "none";
	}else if(removeType == 2){
		user.style.display = "none";
		corp.style.display = "";
	}	
}

com.linkage.systemportal.corp.member.onChangeRemoveType = function onChangeRemoveType(){
	var user = document.all("user_div");
	var corp = document.all("corp_div");
	
	var removeType = document.forms[0].removeType.value;
	if(removeType == 1){
		user.style.display = "";
		corp.style.display = "none";
	}else if(removeType == 2){
		user.style.display = "none";
		corp.style.display = "";
	}	
}

com.linkage.systemportal.corp.member.removeSubmit = function removeSubmit(){	
	var removeType = document.forms[0].removeType.value;
	if(removeType == 1){
		document.forms[0].action="/systemportal/corp/member/remove_member_init.action";
		document.forms[0].submit();
	}else if(removeType == 2){
	  document.forms[0].action="/systemportal/corp/member/remove_query_member.action";
		document.forms[0].submit();
	}	
}


com.linkage.systemportal.corp.member.isVaildCorpId = function isVaildCorpId(obj){
	if(obj==null) obj=document.forms[0].corpid;
	var corpid = obj.value;
	if(corpid == ""){
		alert("�����뼯�ű��룡");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(!isPosInt(corpid)){
		   alert("���ű���ֻ��Ϊ���֣�");
		   obj.select();
		   obj.focus();
		   return false;	
		}
	}
	return true;
}
com.linkage.systemportal.corp.member.isValidCallCorpType = function isValidCallCorpType(obj){
	if(!isRadioChecked(document.forms[0].callcorptype)){
	   alert("��ѡ�������б�ʶ��");
	   return false;
	}
	return true;
}


com.linkage.systemportal.corp.member.isVaildPhoneNumber = function isVaildPhoneNumber(obj){

	if(obj==null) obj=document.forms[0].phonenumber;
	var phoneNumber = obj.value;
	var removeType = document.forms[0].removeType.value;
	if(removeType == 1){

	if(phoneNumber == ""){
		alert("�������û����룡");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(/^\d+$/.test(phoneNumber) == false){
		   alert("�û�����ֻ��Ϊ���֣�");
		   obj.select();
		   obj.focus();
		   return false;	
		}
		
	}

	n = obj.value.length;

		if (n !=12 && n != 11) {
			alert("�û����볤�Ȳ���ȷ��");
			return false;
		}
		if(phoneNumber.substring(0,1)==1){
		  if(n!=11){
		  alert("������Ч���ֻ�����");
		  return false;
		  }
		}
	}
	
	return true;
}

com.linkage.systemportal.corp.member.isValidCallUserType = function isValidCallUserType(obj){
	if(!isRadioChecked(document.forms[0].callusertype)){
	   alert("��ѡ�������б�ʶ��");
	   return false;
	}
	return true;
}

com.linkage.systemportal.corp.member.isRadioChecked = function isRadioChecked(obj){
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


//--------------------------------------------------------------------------
//    description:      �ж��ַ�����������
//    name:       isPosInt
//    parameters: obj   - Դ�ַ���
//    return:           true  - ��
//                false - ��
//
com.linkage.systemportal.corp.member.isPosInt = function isPosInt(obj){
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
com.linkage.systemportal.corp.member.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}
