com.linkage.systemportal.dept.info = new Object();
	
	/**
	**	�Ƿ�Ϊָ�����ȵļ��ű���
	**/
com.linkage.systemportal.dept.info.isValidCorpId = function isValidCorpId(){
	var corpid = document.forms[0].corpid.value;
	if(corpid == ""||corpid==null){
		alert("�����뼯�ű���!");
		return false;
	}
	var n = document.forms[0].corpid.value.length;
	if (n !=10 ) {
		alert("���ű��볤�Ȳ���ȷ��");
		return false;
	}
	return true;
}

	/**
	** �ж������в��弯�������Ƿ�Ϊ�� 
	**/
com.linkage.systemportal.dept.info.isValidCallCorpType = function isValidCallCorpType(obj) {
if(!com.linkage.systemportal.dept.info.isRadioChecked(document.forms[0].callcorptype)){
		alert("��ѡ�������в��弯�����ͣ�");
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
		alert("�����벿������!");
		return false;
	}
	return true;
}

com.linkage.systemportal.dept.info.isValidDeptInfoId = function isValidDeptInfoId(){
	var deptinfoid = document.forms[0].deptinfoid.value;
	if(deptinfoid == ""||deptinfoid==null){
		alert("�����벿�ű�ʶ!");
		return false;
	}
	return true;
}

