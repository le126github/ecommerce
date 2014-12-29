com.linkage.server.sysparam = new Object();

com.linkage.server.sysparam.Combo_Select = function Combo_Select(oSelectList,oTextInput)
{
	oTextInput.value=oSelectList.options[oSelectList.selectedIndex].text;
}

com.linkage.server.sysparam.addInput = function addInput(oSelectList,oTextInput)
{
	if(oTextInput.value==''){
		alert("添加的参数不能为空");
		return;
	}
	if(HasTheValue(oTextInput.value,oSelectList)>=0){
		alert("“"+oTextInput.value+"”已经存在");
		return;
	}
	oSelectList.add(new Option(oTextInput.value,oTextInput.value));
	oTextInput.value="";
}
com.linkage.server.sysparam.deleteSelect = function deleteSelect(oSelectList,oTextInput)
{
	if(oSelectList.selectedIndex<0){
		alert("请选择要删除的参数项");
		return;
	}
	var index = oSelectList.selectedIndex;
	oSelectList.removeChild(oSelectList.options[oSelectList.selectedIndex]);
	oSelectList.selectedIndex = index;
	if(oSelectList.options.length <= index)
		oSelectList.selectedIndex = oSelectList.options.length-1;
	if(oSelectList.selectedIndex<0) return;
}
com.linkage.server.sysparam.HasTheValue = function HasTheValue(value,oSelectList)
{
	if(oSelectList.options.length<1)
		return -1;
	var i=0;
	for(i=0;i<oSelectList.options.length;i++)
	{
		if(oSelectList.options[i].value==value){
			return i;
		}
	}
	return -1;
}  
com.linkage.server.sysparam.getSelectList = function getSelectList(oSelectList)
{ 
	var listStr = '';
	if(oSelectList.options.length<1)
		return '';
	var i=0;
	for(i=0;i<oSelectList.options.length;i++)
	{
		value=oSelectList.options[i].value.trim();
		if(value != ""){
			listStr+=value+";||;";
		}
	}
	return listStr;
}
com.linkage.server.sysparam.InitSelectList = function InitSelectList(oSelectList, oTextHidden){
	var values = oTextHidden.value;
	var _split=values.split(";||;"); 
	oSelectList.options.length = 0;
	for(var i=0;i<_split.length-1;i++){
		var text = _split[i].trim();
		if(text == ''){
			continue;
		}
		else{
			oSelectList.add(new Option(text,text)); 
		}
	}
}
com.linkage.server.sysparam.SetListValues = function SetListValues(oSelectList, oTextHidden){
	oTextHidden.value=getSelectList(oSelectList);
	return true;
}

String.prototype.trim=function(){
        return this.replace(/(^\s*)|(\s*$)/g, "");
}

