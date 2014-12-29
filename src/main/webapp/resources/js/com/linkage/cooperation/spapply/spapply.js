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
		alert("请输入合作申请号！");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(!isPosInt(applyNo)){
		   alert("合作申请号只能为数字！");
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
		alert("请输入申请人姓名！");
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
		alert("请选择受理结果！");
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(remark);
	if(len >255){
		alert("受理意见长度不能大于255个字符，当前长度为"+len+"个字符！");
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
		alert("请输入受理意见！");
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
		alert("请输入业务代码！");
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
		alert("请输入业务平台类型！");
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
		alert("请输入企业标识！");
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
		alert("请输入活动内容！");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(actionContent);
	if(len >255){
		alert("活动内容长度不能大于255个字符，当前长度为"+len+"个字符！");
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
		  alert("活动积分只能为数字！");
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
		 alert("请输入联系电话！");
		 return false;	
	}else{
		if(!isPosInt(phone)){
		  alert("联系电话只能为数字！");
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
		alert("请输入Email地址");
		return false;	
	}else{
		if(!com.linkage.util.isValidEmail(email)){
		  alert("请输入正确的Email地址！");
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
	 	 alert("活动开始时间不能小于当前时间！");
		 return false;
	 }
	 if(startTime>endTime){
	 	 alert("活动开始时间不能大于活动结束时间！");
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
			alert("请选择业务平台类型！");
			obj.focus();
			return false;
		}
		if (com.linkage.util.isInteger(platformType) == false ) {
			alert("业务平台类型异常！");
			obj.focus();
			return false;
		}
		
		var spid = document.forms[0].spid.value;
		if (spid == null || spid == "" || spid == "-*") {
			alert("请选择业务名称！");
			obj.focus();
			return false;
		}
		if (com.linkage.util.isInteger(spid) == false ) {
			alert("业务名称异常！");
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
		alert("请选择业务名称！");
		obj.focus();
		return false;
	}
	if (com.linkage.util.isInteger(spid) == false ) {
		alert("业务名称异常！");
		obj.focus();
		return false;
	}
	return true;
}

//--------------------------------------------------------------------------
//    description:      判断email是否正确对待
//    name:       isCharNumLine
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
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
//    description:      判断字符串是否仅仅是由数字组成
//    name:       isCharNumLine
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
//
com.linkage.cooperation.spapply.isNum = function isValidNum(obj){
	return  isList(obj,"0123456789");
}

//--------------------------------------------------------------------------
//    description:      判断字符串是否仅仅是由指定的字符集合中的字符组成
//    name:       isList
//    parameters: str   - 源字符串
//                sModel      - 指定的字符集合
//    return:           true  - 是
//                false - 否
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
//    description:      判断字符串是正整数
//    name:       isPosInt
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
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
//    description:      去除字符串首尾的空格
//    name:       trim
//    parameters: obj     - source string
//    return:           去除字符串首尾的空格后的字符串
//
com.linkage.cooperation.spapply.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}