com.linkage.flow.nodedef = new Object();



com.linkage.flow.nodedef.isValidFlowId = function isValidFlowId(obj) {
	/**
	**		@func		流程编号
	**		@param  Object obj	流程编号
	**/
	if (obj == null) obj = document.forms[0].flowId;
	var flowId = obj.value;
	if (flowId == null || flowId == "") {
		alert("流程编号不能为空！");
		obj.focus();
		obj.select();
		return false;
	}
return true;
}	
	
com.linkage.flow.nodedef.isValidNodeId = function isValidNodeId(obj) {
	/**
	**		@func		节点编号
	**		@param  Object obj	节点编号
	**/
	if (obj == null) obj = document.forms[0].nodeId;
	var nodeId = obj.value;
	if (nodeId == null || nodeId == "") {
		alert("节点编号不能为空==！");
		obj.focus();
		obj.select();
		return false;
	}else{
		if(!isPosInt(nodeId)){
		  alert("流程编号只能为数字！");
		  obj.select();
		  obj.focus();
		  return false;
	  }
	}
return true;
}	

com.linkage.flow.nodedef.isPosInt = function isPosInt(obj){
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

com.linkage.flow.nodedef.isValidNodeName = function isValidNodeName(obj) {
	/**
	**		@func		节点名称
	**		@param  Object obj	节点名称
	**/
	if (obj == null) obj = document.forms[0].flowName;
	var flowName = obj.value;
	if (flowName == null || flowName == "") {
		alert("节点名称不能为空！");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

//--------------------------------------------------------------------------
//    description:      去除字符串首尾的空格
//    name:       trim
//    parameters: obj     - source string
//    return:           去除字符串首尾的空格后的字符串
//
com.linkage.flow.nodedef.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}