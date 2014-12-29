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
		alert("请输入集团编码！");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(!isPosInt(corpid)){
		   alert("集团编码只能为数字！");
		   obj.select();
		   obj.focus();
		   return false;	
		}
	}
	return true;
}
com.linkage.systemportal.corp.member.isValidCallCorpType = function isValidCallCorpType(obj){
	if(!isRadioChecked(document.forms[0].callcorptype)){
	   alert("请选择主被叫标识！");
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
		alert("请输入用户号码！");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(/^\d+$/.test(phoneNumber) == false){
		   alert("用户号码只能为数字！");
		   obj.select();
		   obj.focus();
		   return false;	
		}
		
	}

	n = obj.value.length;

		if (n !=12 && n != 11) {
			alert("用户号码长度不正确！");
			return false;
		}
		if(phoneNumber.substring(0,1)==1){
		  if(n!=11){
		  alert("不是有效的手机号码");
		  return false;
		  }
		}
	}
	
	return true;
}

com.linkage.systemportal.corp.member.isValidCallUserType = function isValidCallUserType(obj){
	if(!isRadioChecked(document.forms[0].callusertype)){
	   alert("请选择主被叫标识！");
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
//    description:      判断字符串是正整数
//    name:       isPosInt
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
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
//    description:      去除字符串首尾的空格
//    name:       trim
//    parameters: obj     - source string
//    return:           去除字符串首尾的空格后的字符串
//
com.linkage.systemportal.corp.member.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}
