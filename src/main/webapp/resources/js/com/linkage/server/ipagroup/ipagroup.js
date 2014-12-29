com.linkage.server.ipagroup = new Object();

/***
   **通过设备类型选择软件版本列表
***/
com.linkage.server.ipagroup.onChangeCenterid = function onChangeCenterid(str) {
	
	com.linkage.server.ipagroup.prepareInfo(str);
}

com.linkage.server.ipagroup.prepareInfo = function prepareInfo(str) {
	/**
	**		@func	onChange事件
	**		@param  str 新开add 修改mod
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
		alert("请选择要添加的属地");
		return;
	}
	var inputValue = oSelectInput.options[oSelectInput.selectedIndex].value;
	var inputText = oSelectInput.options[oSelectInput.selectedIndex].text;
	if(HasTheValue(inputValue,oSelectList)>=0){
		alert("属地【"+inputText+"】或其上级/下级属地已经存在");
		return;
	}
	var sel = new Option(inputText,inputValue);
	sel.title=inputText;
	oSelectList.add(sel);
} 
com.linkage.server.ipagroup.deleteSelect = function deleteSelect(oSelectList,oSelectInput)
{
	if(oSelectList.selectedIndex<0){
		alert("请选择要删除的属地");
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
