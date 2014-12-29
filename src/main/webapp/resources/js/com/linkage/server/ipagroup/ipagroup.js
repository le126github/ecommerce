com.linkage.server.ipagroup = new Object();

/***
   **ͨ���豸����ѡ������汾�б�
***/
com.linkage.server.ipagroup.onChangeCenterid = function onChangeCenterid(str) {
	
	com.linkage.server.ipagroup.prepareInfo(str);
}

com.linkage.server.ipagroup.prepareInfo = function prepareInfo(str) {
	/**
	**		@func	onChange�¼�
	**		@param  str �¿�add �޸�mod
	**/
	document.forms[0].action = "/systemportal/server/ipagroup/"+str+"_init.action";
	document.forms[0].submit();
}


com.linkage.server.ipagroup.Combo_Select = function Combo_Select(oSelectList,oSelectInput)
{
	oSelectInput.value=oSelectList.options[oSelectList.selectedIndex].text;
}
com.linkage.server.ipagroup.addInput = function addInput(oSelectList,oSelectInput)
{
	if(oSelectInput.selectedIndex < 0){
		alert("��ѡ��Ҫ��ӵ�����");
		return;
	}
	var inputValue = oSelectInput.options[oSelectInput.selectedIndex].value;
	var inputText = oSelectInput.options[oSelectInput.selectedIndex].text;
	if(HasTheValue(inputValue,oSelectList)>=0){
		alert("���ء�"+inputText+"�������ϼ�/�¼������Ѿ�����");
		return;
	}
	var sel = new Option(inputText,inputValue);
	sel.title=inputText;
	oSelectList.add(sel);
} 
com.linkage.server.ipagroup.deleteSelect = function deleteSelect(oSelectList,oSelectInput)
{
	if(oSelectList.selectedIndex<0){
		alert("��ѡ��Ҫɾ��������");
		return;
	}
	var index = oSelectList.selectedIndex;
	oSelectList.removeChild(oSelectList.options[oSelectList.selectedIndex]);
	oSelectList.selectedIndex = index;
	if(oSelectList.options.length <= index)
		oSelectList.selectedIndex = oSelectList.options.length-1;
	if(oSelectList.selectedIndex<0) return;
}
com.linkage.server.ipagroup.HasTheValue = function HasTheValue(value,oSelectList)
{
	if(oSelectList.options.length<1)
		return -1;
	var i=0;
	for(i=0;i<oSelectList.options.length;i++)
	{
		if(oSelectList.options[i].value.indexOf(value) == 0){
			return i;
		}
		else if(value.indexOf(oSelectList.options[i].value) == 0){
			return i;
		}
	}
	return -1;
}  
com.linkage.server.ipagroup.getSelectList = function getSelectList(oSelectList)
{ 
	var listStr = '';
	if(oSelectList.options.length<1)
		return '';
	var i=0;
	for(i=0;i<oSelectList.options.length;i++)
	{
		listStr+=oSelectList.options[i].value+";";
	}
	return listStr;
}
com.linkage.server.ipagroup.getTextByValue = function getTextByValue(value, oSelect){
	if(oSelect.options.length<1)
		return '';
	var i=0;
	for(i=0;i<oSelect.options.length;i++)
	{
		var oValue = oSelect.options[i].value;
		if(value == oValue){
			return oSelect.options[i].text;
		}
	}
	return '';
}
