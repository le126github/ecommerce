com.linkage.flow.operationdef = new Object();



com.linkage.flow.operationdef.isValidFlowId = function isValidFlowId(obj) {
	/**
	**		@func		���̱��
	**		@param  Object obj	���̱��
	**/
	if (obj == null) obj = document.forms[0].flowId;
	var flowId = obj.value;
	if (flowId == null || flowId == ""|| flowId == "-*") {
		alert("��ѡ���������ƣ�");
		return false;
	}
	return true;
}	
	
com.linkage.flow.operationdef.isValidOperation = function isValidOperation(obj) {
	/**
	**		@func		�ڵ���
	**		@param  Object obj	�ڵ���
	**/
	if (obj == null) obj = document.forms[0].nodeId;
	var operation = obj.value;
	if (operation == null || operation == "") {
		alert("���̲�������Ϊ�գ�");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}


com.linkage.flow.operationdef.isValidOperationName = function isValidOperationName(obj) {
	/**
	**		@func		�ڵ�����
	**		@param  Object obj	�ڵ�����
	**/
	if (obj == null) obj = document.forms[0].flowName;
	var operationName = obj.value;
	if (operationName == null || operationName == "") {
		alert(" �������Ʋ���Ϊ�գ�");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}