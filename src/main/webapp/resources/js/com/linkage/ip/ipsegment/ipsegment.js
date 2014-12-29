com.linkage.ip.ipsegment = new Object();


/***
   **通过设备类型选择软件版本列表
***/
com.linkage.ip.ipsegment.onChangeIpSpace = function onChangeIpSpace(str,formId) {
	
	com.linkage.ip.ipsegment.prepareInfo(str,formId);
}

com.linkage.ip.ipsegment.prepareInfo = function prepareInfo(str,formId) {
	/**
	**		@func	onChange事件
	**		@param  str 新开add 修改mod
	**/
	url_action = "/systemportal/ip/ipsegment/manage_segmenttree.action";
	//alert(param);
	var param = getJSONStr(formId)
	alert(param);
	$.ajax({
        type: "POST",
        url: url_action,
        data: param,
        success: function(msg){
            alert(msg);
        }
    });
}