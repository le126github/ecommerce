com.linkage.ip.allocatepolicy = new Object();

/***
   **ͨ���豸����ѡ������汾�б�
***/
com.linkage.ip.allocatepolicy.onChangeDeviceInfo = function onChangeDeviceInfo(str) {
	
	com.linkage.ip.allocatepolicy.prepareInfo(str);
}

com.linkage.ip.allocatepolicy.prepareInfo = function prepareInfo(str) {
	/**
	**		@func	onChange�¼�
	**		@param  str �¿�add �޸�mod
	**/
	document.forms[0].action = "/systemportal/ip/allocatepolicy/"+str+"_init.action";
	document.forms[0].submit();
}