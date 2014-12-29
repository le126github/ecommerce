com.linkage.systemportal.dept.member = new Object();

com.linkage.systemportal.dept.member.initField = function initField(obj1,obj2,obj3){
	if(obj1 == null) obj1 = document.forms[0].queryType;
	if(obj2 == null) obj2 = document.all("find_corpid_div");
	if(obj3 == null) obj3 = document.all("find_corpname_div");
	
	var queryType = obj1.value;
	  		
	if(queryType == 1){
		 obj2.style.display = "";
		 obj3.style.display = "none";
		 document.forms[0].likeCorpName.value = "";
	}else if(queryType == 2){
		 obj2.style.display = "none";
		 obj3.style.display = "";	
		 document.forms[0].corpid.value = "";	
	}	
	
	return true;
}

com.linkage.systemportal.dept.member.onChangeQueryType = function onChangeQueryType(){
	var obj2 = document.all("find_corpid_div");
	var obj3 = document.all("find_corpname_div");
	
	var queryType = document.forms[0].queryType.value;
	  		
	if(queryType == 1){
		 obj2.style.display = "";
		 obj3.style.display = "none";
		 document.forms[0].likeCorpName.value = "";
	}else if(queryType == 2){
		 obj2.style.display = "none";
		 obj3.style.display = "";	
		 document.forms[0].corpid.value = "";	
	}	
	
	return true;
}

com.linkage.systemportal.dept.member.isVaildCorpInfoId = function isVaildCorpInfoId(obj){
	if(obj==null) obj=document.forms[0].corpinfoid;
	var corpinfoid = obj.value;
	if(corpinfoid == -1){
		alert("请选择公司！");
		return false;
	}
	return true;
}

com.linkage.systemportal.dept.member.isVaildDeptInfoId = function isVaildDeptInfoId(obj){
	if(obj==null) obj=document.forms[0].deptinfoid;
	var deptinfoid = obj.value;
	if(deptinfoid == -1){
		alert("请选择部门！");
		return false;
	}
	return true;
}

com.linkage.systemportal.dept.member.isVaildPhoneNumber = function isVaildPhoneNumber(obj){

	if(obj==null) obj=document.forms[0].phonenumber;
	var phoneNumber = obj.value;
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
	
	return true;
}

com.linkage.systemportal.dept.member.isValidCallUserType = function isValidCallUserType(obj){
	if(!isRadioChecked(document.forms[0].callusertype)){
	   alert("请选择主被叫标识！");
	   return false;
	}
	return true;
}

com.linkage.systemportal.dept.member.isRadioChecked = function isRadioChecked(obj){
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

com.linkage.systemportal.dept.member.onChangeMemberAdd = function onChangeMemberAdd(){  
   document.forms[0].action="/systemportal/dept/member/add_prepare.action";
   document.forms[0].submit();	
}

com.linkage.systemportal.dept.member.onChangeMemberRemove = function onChangeMemberRemove(){  
   document.forms[0].action="/systemportal/dept/member/remove_prepare.action";
   document.forms[0].submit();	
}

com.linkage.systemportal.dept.member.onChangeMemberQuery = function onChangeMemberQuery(){  
   document.forms[0].action="/systemportal/dept/member/query_prepare.action";
   document.forms[0].submit();	
}
//--------------------------------------------------------------------------
//    description:      判断字符串是正整数
//    name:       isPosInt
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
//
com.linkage.systemportal.dept.member.isPosInt = function isPosInt(obj){
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
com.linkage.systemportal.dept.member.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}
