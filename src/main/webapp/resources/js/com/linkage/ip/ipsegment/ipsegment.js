com.linkage.ip.ipsegment = new Object();


/***
   **ͨ���豸����ѡ������汾�б�
***/
com.linkage.ip.ipsegment.onChangeIpSpace = function onChangeIpSpace(str,formId) {
	
	com.linkage.ip.ipsegment.prepareInfo(str,formId);
}

com.linkage.ip.ipsegment.prepareInfo = function prepareInfo(str,formId) {
	/**
	**		@func	onChange�¼�
	**		@param  str �¿�add �޸�mod
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