com.linkage.ip.segmentipbind = new Object();

/***
   **通过设备类型选择软件版本列表
***/
com.linkage.ip.segmentipbind.onChangeDeviceInfo = function onChangeDeviceInfo(str) {
	
	com.linkage.ip.segmentipbind.prepareInfo(str);
}

com.linkage.ip.segmentipbind.prepareInfo = function prepareInfo(str) {
	/**
	**		@func	onChange事件
	**		@param  str 新开add 修改mod
	**/
	document.forms[0].action = "/systemportal/ip/segmentipbind/"+str+"_init.action";
	document.forms[0].submit();
}