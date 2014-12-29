com.linkage.complaint.user = new Object();
	/**流程 complaintFlowAction 页面刷新
	**/
com.linkage.complaint.user.onChangePlatformType = function onChangePlatformType(){  
   document.forms[0].action="/main/task/newtask/usercomplaint/add_prepare.action";
   document.forms[0].submit();	
}


com.linkage.complaint.user.onChangeCorpId = function onChangeCorpId(){  
   document.forms[0].action="/main/task/newtask/usercomplaint/add_prepare.action";
   document.forms[0].submit();	
}
/**流程 complaintAction 刷新,查询页面刷新
	**/
com.linkage.complaint.user.onChangeQueryCorpId = function onChangeQueryCorpId(){  
   document.forms[0].action="/main/complaint/user/query_refresh_user.action";
   document.forms[0].submit();	
}

/**流程 complaintAction 刷新,删除页面刷新
	**/
com.linkage.complaint.user.onChangeDeleteCorpId = function onChangeDeleteCorpId(){  
   document.forms[0].action="/main/complaint/user/delete_refresh_user.action";
   document.forms[0].submit();	
}


	/**
	**		@func		userId
	**		@param  Object obj	userId
	**/
com.linkage.complaint.user.isValidUserId = function isValidUserId(obj) {
	if (obj == null) obj = document.forms[0].userId;
	var userId = obj.value;
	if (userId == null || userId == "") {
		alert("用户标识不能为空！");
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
com.linkage.complaint.user.isValidComplainant = function isValidComplainant(obj) {
	if (obj == null) obj = document.forms[0].complainant;
	var complainant = obj.value;
	if (complainant == null || complainant == "") {
		alert("投诉者姓名不能为空！");
		return false;
	}
return true;  
}	

com.linkage.complaint.user.isValidAreaNo = function isValidAreaNo(obj) {
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

com.linkage.complaint.user.isValidPlatformType = function isValidPlatformType(obj) {

	if (obj == null) obj = document.forms[0].platformType;
	var platformType = obj.value;
	if (platformType == null || platformType == "-*") {
		alert("请选择平台类型!");
		return false;
	}
return true;
}	
	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/
com.linkage.complaint.user.isValidSubject = function isValidSubject(obj) {

	if (obj == null) obj = document.forms[0].subject;
	var subject = obj.value;
	if (subject == null || subject == "") {
		alert("请选择投诉者主题！");
		return false;
	}
return true;
}	

com.linkage.complaint.user.isValidRemark = function isValidRemark(obj) {

	if (obj == null) obj = document.forms[0].remark;
	var remark = obj.value;
	if (remark == null || remark == "") {
		alert("请输入受理意见！");
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
	**		@func		Email地址
	**		@param  Object obj	Email地址
	**/
com.linkage.complaint.user.isValidEmail = function isValidEmail(obj){
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

com.linkage.complaint.user.isValidPhone = function isValidPhone(obj){
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

com.linkage.complaint.user.isValidOperation1 = function isValidOperation1(obj){
	if(obj==null) obj=document.forms[0].operation;
	var operation = obj.value;
	if(operation==null || operation == ""){
		alert("请选择受理结果！");
		obj.focus();
		return false;
	}		
}

com.linkage.complaint.user.isValidOperation = function isValidOperation(obj){
	if(obj==null) obj=document.forms[0].operation;
	var operation = obj.value;
	var operationspno=document.forms[0].spno.value;
	if(operationspno == "-*" && operation== "SP处理" ){
		 alert("SP名称为空不能提交给SP处理！");
		 return false;	
	}
	return true;
}


com.linkage.complaint.user.isValidOperationAccept = function isValidOperationAccept(obj,obj1){
	if(obj==null) obj=document.forms[0].operation;
	var operation = obj.value;
	if(obj1==null) obj1=document.forms[0].corpId;
	var corpId = obj1.value;
	if(corpId =="" && operation== "SP处理" ){
		 alert("SP业务代码为空不能提交给SP处理！");
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
com.linkage.complaint.user.isEmail = function isEmail(email){
	  var reEmail = /^([A-Za-z0-9])(\w)+@(\w)+(\.)(com|com\.cn|net|cn|net\.cn|org|biz|info|gov|gov\.cn|edu|edu\.cn)/;
    if (!email.match(reEmail))
    {
         return false;
    }
    else return true;
}

com.linkage.complaint.user.isPosInt = function isPosInt(obj){
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

com.linkage.complaint.user.isValidContent = function isValidContent(obj){
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