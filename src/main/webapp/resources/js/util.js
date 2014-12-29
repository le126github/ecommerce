/**
 * 分页控件的查询条件解析函数
 * 将表单域的值组成如下格式，然后通过绑定到flexigrid空间的query请求参数中，供后端解析：
 * key1:value1,key2:value2
 * 不建议在key中带有,或者:
 * 对于value中的,和:，将其使用\,和\:进行转义
 * 后端程序暂不支持复选框，会造成冲突
 * @author shoru
 */
 
function getJSONStr(formId) {
	var a = [];

	// 文本框
	$("#" + formId + " input[type=text]").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});
	});
	// 文本框
	$("#" + formId + " input[type=hidden]").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});
	});

	// 多列文本框
	$("#" + formId + " textarea").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});
	});

	// 下拉列表
	$("#" + formId + " select").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});

	});
	// 单选框
	$("#" + formId+" :radio").filter(":checked").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});
	});
	// 复选框开始
	var temp_cb = "";
	$("#" + formId+" :checkbox").filter(":checked").each(function(i) {
		if (temp_cb.indexOf(this.name) == -1) {
			temp_cb += this.name + ",";
		}

	});
	var temp_cb_arr = temp_cb.split(",");
	var cb_name = "";
	for (var temp_cb_i = 0; temp_cb_i < temp_cb_arr.length - 1; temp_cb_i++) {
		cb_name = temp_cb_arr[temp_cb_i];
		var cb_value_length = $("input[name='" + temp_cb_arr[temp_cb_i]
				+ "']:checked").length;
		$("input[name='" + temp_cb_arr[temp_cb_i] + "']:checked")
				.each(function(i) {
					a.push({
						name : cb_name,
						value : this.value
					})}
				)}

	// 复选框结束
	// 组合为目标json格式
	var temp_json = "";
	var parmas=0;
	for (var json_i = 0; json_i < a.length; json_i++) {
		var value=a[json_i].value.replace(/,/g,"\\,").replace(/:/g,"\\:");
		if(value.length > 0){
		if (json_i != a.length - 1) {
				temp_json += a[json_i].name + ':' + value + ',';
		} else {
				temp_json += a[json_i].name + ':' + value;
		}
	}
	}
	if(temp_json.length > 0){
	return "{" + temp_json + "}";
	}else{
		return "";
	}
}


/*分页显示辅助函数*/
function getQuery(){
	return getJSONStr('search');
}
function flexReload() {
	$("#grid").flexReload();
}
function showAdvanceSearch() {
	var advance=$(".advance");
	if(advance.css("display")=="none"){
		advance.css("display","block");
		document.getElementById("advlink").innerHTML="隐藏高级选项";
	}else{
		advance.css("display","none");
		$(':input',advance).each(function(i,n){
									n.value='';
								})
		document.getElementById("advlink").innerHTML="更多高级选项";
	}
}

/*调整日期输出，去掉最后‘.0’*/
function removeTimeEnd(value, pid){
	var endStr = value.substring(value.length-2);
	if(endStr == ".0"){
		return value.substring(0,value.length-2)
	}
	return value;
}
/*end*/