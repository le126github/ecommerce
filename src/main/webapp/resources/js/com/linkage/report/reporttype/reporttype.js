com.linkage.report.reporttype = new Object();

com.linkage.report.reporttype.reportTypeIsExist = function reportTypeIsExist(obj) {
	var obj = document.forms[0].reporttype;
	var  reporttype=obj.value;
	if(reporttype==null||reporttype==""){
		alert("报表类型不能为空！");
	  return false;	
	}	
  document.forms[0].action = "/systemportal/report/reporttype/add_reporttype_isexist.action";
	document.forms[0].submit();
}


com.linkage.report.reporttype.isValidTypename = function isValidTypename(obj){
	if(obj == null) obj = document.forms[0].typename;
	var typeName = com.linkage.util.trim(obj.value);
	if(typeName == ''){
		alert("报表类型名称不能为空，请输入报表类型名称！");
		obj.select();
		obj.focus();
		return false;	
	}
	
	obj.value = typeName;
	return true;
}

com.linkage.report.reporttype.isValidBrotherno = function isValidBrotherno(obj){
	if(obj == null) obj = document.forms[0].brotherno;
	var brotherno = com.linkage.util.trim(obj.value);
	if(brotherno != ''){
		if(!com.linkage.util.isInteger(brotherno)){
			alert("兄弟排名必须为整数！");
			obj.select();
			obj.focus();
			return false;	
		}
	}
	
	obj.value = brotherno;
	return true;
}

com.linkage.report.reporttype.isValidLeafflag = function isValidLeafflag(obj){
	if(obj == null) obj = document.forms[0].leafflag;
	if(!com.linkage.util.isRadioChecked(obj) ){
		alert("请选择叶类型标识！");
			return false;	
	}
	return true;
}

function ReportTypeItem(){
	this.reporttype = "";
	this.typename = "";
	this.brotherno = "";
}
