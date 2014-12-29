com.linkage.systemportal.dept.info = new Object();
	
	/**
	**	是否为指定长度的集团编码
	**/
com.linkage.systemportal.dept.info.isValidCorpId = function isValidCorpId(){
	var corpid = document.forms[0].corpid.value;
	if(corpid == ""||corpid==null){
		alert("请输入集团编码!");
		return false;
	}
	var n = document.forms[0].corpid.value.length;
	if (n !=10 ) {
		alert("集团编码长度不正确！");
		return false;
	}
	return true;
}

	/**
	** 判断主被叫彩铃集团类型是否为空 
	**/
com.linkage.systemportal.dept.info.isValidCallCorpType = function isValidCallCorpType(obj) {
if(!com.linkage.systemportal.dept.info.isRadioChecked(document.forms[0].callcorptype)){
		alert("请选择主被叫彩铃集团类型！");
		return false;
	}
	return true; 
}

com.linkage.systemportal.dept.info.isRadioChecked = function isRadioChecked(obj){
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

com.linkage.systemportal.dept.info.isValidDeptName = function isValidDeptName(obj){
	if(obj == null) obj = document.forms[0].deptname;
	var deptname = obj.value;
	if(deptname == ""||deptname==null){
		alert("请输入部门名称!");
		return false;
	}
	return true;
}

com.linkage.systemportal.dept.info.isValidDeptInfoId = function isValidDeptInfoId(){
	var deptinfoid = document.forms[0].deptinfoid.value;
	if(deptinfoid == ""||deptinfoid==null){
		alert("请输入部门标识!");
		return false;
	}
	return true;
}

