/**
 * ��ҳ�ؼ��Ĳ�ѯ������������
 * �������ֵ������¸�ʽ��Ȼ��ͨ���󶨵�flexigrid�ռ��query��������У�����˽�����
 * key1:value1,key2:value2
 * ��������key�д���,����:
 * ����value�е�,��:������ʹ��\,��\:����ת��
 * ��˳����ݲ�֧�ָ�ѡ�򣬻���ɳ�ͻ
 * @author shoru
 */
 
function getJSONStr(formId) {
	var a = [];

	// �ı���
	$("#" + formId + " input[type=text]").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});
	});
	// �ı���
	$("#" + formId + " input[type=hidden]").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});
	});

	// �����ı���
	$("#" + formId + " textarea").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});
	});

	// �����б�
	$("#" + formId + " select").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});

	});
	// ��ѡ��
	$("#" + formId+" :radio").filter(":checked").each(function(i) {
		a.push({
			name : this.name,
			value : this.value
		});
	});
	// ��ѡ��ʼ
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

	// ��ѡ�����
	// ���ΪĿ��json��ʽ
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


/*��ҳ��ʾ��������*/
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
		document.getElementById("advlink").innerHTML="���ظ߼�ѡ��";
	}else{
		advance.css("display","none");
		$(':input',advance).each(function(i,n){
									n.value='';
								})
		document.getElementById("advlink").innerHTML="����߼�ѡ��";
	}
}

/*�������������ȥ�����.0��*/
function removeTimeEnd(value, pid){
	var endStr = value.substring(value.length-2);
	if(endStr == ".0"){
		return value.substring(0,value.length-2)
	}
	return value;
}
/*end*/