com.linkage.flow.operationdef = new Object();



com.linkage.flow.operationdef.isValidFlowId = function isValidFlowId(obj) {
	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/
	if (obj == null) obj = document.forms[0].flowId;
	var flowId = obj.value;
	if (flowId == null || flowId == ""|| flowId == "-*") {
		alert("请选择流程名称！");
		return false;
	}
	return true;
}	
	
com.linkage.flow.operationdef.isValidOperation = function isValidOperation(obj) {
	/**
	**		@func		节点编号
	**		@param  Object obj	节点编号
	**/
	if (obj == null) obj = document.forms[0].nodeId;
	var operation = obj.value;
	if (operation == null || operation == "") {
		alert("流程操作不能为空！");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}


com.linkage.flow.operationdef.isValidOperationName = function isValidOperationName(obj) {
	/**
	**		@func		节点名称
	**		@param  Object obj	节点名称
	**/
	if (obj == null) obj = document.forms[0].flowName;
	var operationName = obj.value;
	if (operationName == null || operationName == "") {
		alert(" 操作名称不能为空！");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}