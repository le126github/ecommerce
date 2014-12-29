com.linkage.complaint.sp = new Object();
/**流程 spcomplaintAction 刷新,查询页面刷新
	**/

com.linkage.complaint.sp.onChangeQueryCorpId = function onChangeQueryCorpId(){  
   document.forms[0].action="/main/complaint/sp/query_refresh_sp.action";
   document.forms[0].submit();	
}
/**流程 spcomplaintAction 刷新,删除页面刷新
	**/
com.linkage.complaint.sp.onChangeDeleteCorpId = function onChangeDeleteCorpId(){  
   document.forms[0].action="/main/complaint/sp/delete_refresh_sp.action";
   document.forms[0].submit();	
}

com.linkage.complaint.sp.isValidOperation = function isValidOperation(obj){
	if(obj==null) obj=document.forms[0].operation;
	var operation = obj.value;
	if(operation==null || operation == ""){
		alert("请选择受理结果！");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.complaint.sp.isValidRemark = function isValidRemark(obj) {

	if (obj == null) obj = document.forms[0].remark;
	var remark = obj.value;
	if (remark == null || remark == "") {
		alert("请输入受理意见！");
	  obj.select();
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
	/**
	**		@func		userId
	**		@param  Object obj	userId
	**/
com.linkage.complaint.sp.isValidUserId = function isValidUserId(obj) {
	if (obj == null) obj = document.forms[0].userId;
	var userId = obj.value;
	if (userId == null || userId == "") {
		alert("SP操作员不能为空！");
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
		alert("投诉者姓名不能为空！");
		return false;
	}
return true;  
}	

com.linkage.complaint.sp.isValidAreaNo = function isValidAreaNo(obj) {
	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/
	if (obj == null) obj = document.forms[0].areaNo;
	var areaNo = obj.value;
	if (areaNo == null || areaNo == ""||areaNo=="-*") {
		alert("请选择投诉者所属地区！");
		return false;
	}
return true;
}	
	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/
com.linkage.complaint.sp.isValidSubject = function isValidSubject(obj) {

	if (obj == null) obj = document.forms[0].subject;
	var subject = obj.value;
	if (subject == null || subject == "") {
		alert("请选择投诉者主题！");
		return false;
	}
return true;
}	
	/**
	**		@func		Email地址
	**		@param  Object obj	Email地址
	**/
com.linkage.complaint.sp.isValidEmail = function isValidEmail(obj){
	if(obj==null) obj=document.forms[0].email;
	var email = obj.value;
	if(email == ""){
		alert("请输入Email地址");
		return false;	
	}else{
		if(!isEmail(email)){
		  alert("Email地址不规范！");
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
//--------------------------------------------------------------------------
//    description:      判断email是否正确对待
//    name:       isCharNumLine
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
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
		alert("请输入设诉内容！");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(content);
	if(len >255){
		alert("设诉内容长度不能大于255个字符，当前长度为"+len+"个字符！");
		obj.select();
		obj.focus();
		return false;		
	}
	return true;
}