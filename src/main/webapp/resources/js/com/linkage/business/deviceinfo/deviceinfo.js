com.linkage.business.deviceinfo = new Object();

/***
   **ͨ���豸����ѡ������汾�б�
***/
com.linkage.business.deviceinfo.onChangeDevicetype = function onChangeDevicetype(str) {
	
	com.linkage.business.deviceinfo.prepareInfo(str);
}

com.linkage.business.deviceinfo.prepareInfo = function prepareInfo(str) {
	/**
	**		@func	onChange�¼�
	**		@param  str �¿�add �޸�mod
	**/
	document.forms[0].action = "/systemportal/business/deviceinfo/"+str+"_init.action";
	document.forms[0].submit();
}