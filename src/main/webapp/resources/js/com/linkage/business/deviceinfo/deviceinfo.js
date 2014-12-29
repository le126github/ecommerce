com.linkage.business.deviceinfo = new Object();

/***
   **通过设备类型选择软件版本列表
***/
com.linkage.business.deviceinfo.onChangeDevicetype = function onChangeDevicetype(str) {
	
	com.linkage.business.deviceinfo.prepareInfo(str);
}

com.linkage.business.deviceinfo.prepareInfo = function prepareInfo(str) {
	/**
	**		@func	onChange事件
	**		@param  str 新开add 修改mod
	**/
	document.forms[0].action = "/systemportal/business/deviceinfo/"+str+"_init.action";
	document.forms[0].submit();
}