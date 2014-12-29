com.linkage.flow.nodedef = new Object();



com.linkage.flow.nodedef.isValidFlowId = function isValidFlowId(obj) {
	/**
	**		@func		���̱��
	**		@param  Object obj	���̱��
	**/
	if (obj == null) obj = document.forms[0].flowId;
	var flowId = obj.value;
	if (flowId == null || flowId == "") {
		alert("���̱�Ų���Ϊ�գ�");
		obj.focus();
		obj.select();
		return false;
	}
return true;
}	
	
com.linkage.flow.nodedef.isValidNodeId = function isValidNodeId(obj) {
	/**
	**		@func		�ڵ���
	**		@param  Object obj	�ڵ���
	**/
	if (obj == null) obj = document.forms[0].nodeId;
	var nodeId = obj.value;
	if (nodeId == null || nodeId == "") {
		alert("�ڵ��Ų���Ϊ��==��");
		obj.focus();
		obj.select();
		return false;
	}else{
		if(!isPosInt(nodeId)){
		  alert("���̱��ֻ��Ϊ���֣�");
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
	**		@func		�ڵ�����
	**		@param  Object obj	�ڵ�����
	**/
	if (obj == null) obj = document.forms[0].flowName;
	var flowName = obj.value;
	if (flowName == null || flowName == "") {
		alert("�ڵ����Ʋ���Ϊ�գ�");
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

//--------------------------------------------------------------------------
//    description:      ȥ���ַ�����β�Ŀո�
//    name:       trim
//    parameters: obj     - source string
//    return:           ȥ���ַ�����β�Ŀո����ַ���
//
com.linkage.flow.nodedef.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}