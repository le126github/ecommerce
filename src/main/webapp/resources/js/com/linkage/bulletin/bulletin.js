com.linkage.bulletin = new Object();

com.linkage.bulletin.onChangePublishType = function onChangePublishType(){
	var length = document.forms[0].publishType.length;
	var publishType;
	if(length>1){
		for(var i=0;i<length;i++){
			if(document.forms[0].publishType[i].checked)
				publishType = document.forms[0].publishType[i].value;
		}
	}else{
		if(document.forms[0].publishType.checked)
			publishType = document.forms[0].publishType.value;
	}	
		if(publishType=="0"||publishType=="3"){
		document.all("responseUrl_div").style.display = "";
	}else{
		document.all("responseUrl_div").style.display = "none";
	}

}
 /***
   **如果订阅操作员列表,组列表和角色列表为空值
***/
com.linkage.bulletin.isValidOperatorList = function isValidOperatorList(obj,obj2,obj3) {
	if (obj == null) obj = document.forms[0].OperatorList;
	if (obj2==null) obj2= document.forms[0].groupList;
	if (obj3==null) obj3= document.forms[0].roleId;
	var OperatorList = obj.value;
	var groupList = obj2.value;
	var roleId = obj3.value;	
	
	if (OperatorList != "") {
		document.forms[0].groupList.selectedIndex = 0;
		document.forms[0].roleId.options.length=1;
		document.forms[0].roleId.options[0].value='-1';
		document.forms[0].roleId.options[0].text='不选择';
		document.forms[0].roleId.options[0].selected = true;
		//obj.focus();
		//obj.select();
		
		return true;
	}
	
	return true;  
}	
	
/***
   **通过组选择角色
***/
com.linkage.bulletin.onChangeGroupno = function onChangeGroupno(str,obj1,obj2,obj3) {
//	if (obj3==null) obj3=document.forms[0].groupno_realmflag_value;
//	if (obj2==null) obj2=document.forms[0].groupno_realmflag;
	if (obj1==null) obj1=document.forms[0].groupList;
	var groupnoIndex = obj1.selectedIndex;
//	obj2.selectedIndex = groupnoIndex;
//	obj3.value = obj2.options[groupnoIndex].text;

com.linkage.bulletin.prepareInfo(str);

}

com.linkage.bulletin.prepareInfo = function prepareInfo(str) {
	/**
	**		@func		组号onChange事件
	**		@param  str 新开add 修改mod
	**/
  obj1 = document.forms[0].groupList;
  document.forms[0].action = "/systemportal/system/bulletin/"+str+"_prepare.action";
	document.forms[0].submit();
  obj1.disabled = true;
  
}
	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/
com.linkage.bulletin.isValidSubject = function isValidSubject(obj) {
	if (obj == null) obj = document.forms[0].subject;
	var subject = obj.value;
	if (subject == null || subject == "") {
		alert("主题不能为空！");
		obj.focus();
		obj.select();
		return false;
	}
return true;  
}	
com.linkage.bulletin.isValidRoleid = function isValidRoleid(obj) {
	/**
	**		@func		角色
	**		@param  Object obj
	**/
	if (obj == null) obj = document.forms[0].roleId;
	var roleId = obj.value;
	if (roleId == null || roleId == "") {
		alert("请选择操组员角色！");
		obj.focus();
		return false;
	}
	return true;
}
	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/
com.linkage.bulletin.isValidPublishType = function isValidPublishType(obj) {
	if (obj == null) obj = document.forms[0].publishType;
	for(var i=0;i<obj.length;i++){
			if(obj[i].checked){
				return true;
			}
	}
		alert("请选择发布方式！");
		return false;
  
}	
com.linkage.bulletin.isValidPublisher = function isValidPublisher(obj) {
	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/
	if (obj == null) obj = document.forms[0].publisher;
	var publisher = obj.value;
	if (publisher == null || publisher == "") {
		alert("发布者不能为空！");
		obj.focus();
		obj.select();
		return false;
	}
return true;
}	


	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/

com.linkage.bulletin.isValidAreaNo = function isValidAreaNo(obj) {

	if (obj == null) obj = document.forms[0].areaNo;
	var areaNo = obj.value;
	if (areaNo == null || areaNo == ""|| areaNo == "-*") {
		alert("请选择发布区域!");
		return false;
	}
return true;
}	

com.linkage.bulletin.isValidGroupList = function isValidGroupList(obj) {

	if (obj == null) obj = document.forms[0].groupList;
	var groupList = obj.value;
	if (groupList == null || groupList == "") {
		alert("请订阅操作员组!");
		return false;
	}
return true;
}	

com.linkage.bulletin.isValidRoleList = function isValidRoleList(obj) {

	if (obj == null) obj = document.forms[0].roleList;
	var roleList = obj.value;
	if (roleList == null || roleList == ""|| roleList == "-*") {
		alert("请订阅操组员角色!");
		return false;
	}
return true;
}	

com.linkage.bulletin.selectAll = function selectAll(){
	
	if(document.forms[0].selectAll.checked){
		for(var i=0;i<document.forms[0].roleId.options.length;i++){
			document.forms[0].roleId.options[i].selected = true;
		}
	}else{
		for(var i=0;i<document.forms[0].roleId.options.length;i++){
			document.forms[0].roleId.options[i].selected = false;
		}
	}
}