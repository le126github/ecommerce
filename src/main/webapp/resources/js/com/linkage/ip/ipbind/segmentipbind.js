com.linkage.ip.segmentipbind = new Object();

/***
   **ͨ���豸����ѡ������汾�б�
***/
com.linkage.ip.segmentipbind.onChangeDeviceInfo = function onChangeDeviceInfo(str) {
	
	com.linkage.ip.segmentipbind.prepareInfo(str);
}

com.linkage.ip.segmentipbind.prepareInfo = function prepareInfo(str) {
	/**
	**		@func	onChange�¼�
	**		@param  str �¿�add �޸�mod
	**/
	document.forms[0].action = "/systemportal/ip/segmentipbind/"+str+"_init.action";
	document.forms[0].submit();
}