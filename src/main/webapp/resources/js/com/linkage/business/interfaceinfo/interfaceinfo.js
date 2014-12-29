com.linkage.business.interfaceinfo = new Object();


com.linkage.business.interfaceinfo.IsNum = function IsNum(str)
{
	if(str.length==0)
	{
    	return false;
	}
	for(var i=0;i<str.length;i++)
	{
	    if(str.charAt(i)<"0" || str.charAt(i)>"9")
	    {
     		return false;
	    }
	}
	return true;
}
com.linkage.business.interfaceinfo.checkIp = function checkIp(strpart)
{
	var iparr=strpart.split(".");
	if(iparr.length!=4)
 	{
		return false;
	}
	else
	{
		var part;
		for(part in iparr)
		{
			if(IsNum(iparr[part]))
			{
				if(parseInt(iparr[part],10)<0 || parseInt(iparr[part],10)>255)
				{
					return false;
				}
			}
			else
			{
				return false;
			}
		}
	}
	return true;
}
com.linkage.business.interfaceinfo.getFormatIp = function getFormatIp(strpart)
{
	var iparr=strpart.split(".");
	if(iparr.length!=4)
 	{
		return "";
	}
	else
	{
		var part;
		for(part in iparr)
		{
			if(IsNum(iparr[part]))
			{
				if(parseInt(iparr[part],10)<0 || parseInt(iparr[part],10)>255)
				{
					return "";
				}
			}
			else
			{
				return "";
			}
		}
	}
	return parseInt(iparr[0],10)+"."+parseInt(iparr[1],10)+"."+parseInt(iparr[2],10)+"."+parseInt(iparr[3],10);
}
com.linkage.business.interfaceinfo.Combo_Select = function Combo_Select(oSelect,oText)
{
	oText.value=oSelect.options[oSelect.selectedIndex].text;
}
com.linkage.business.interfaceinfo.addInput = function addInput(oSelect,oText)
{
	if(oText.value==''){
		alert("添加的ip不能为空");
		return;
	}
	var flag=checkIp(oText.value);
	if(!flag){
		alert("IP格式错误！");
		oText.focus();
		return false;
	}
	else {
		oText.value = getFormatIp(oText.value);
	}
	if(HasTheValue(oText.value,oSelect)>=0){
		alert("ip"+oText.value+"已经存在");
		return;
	}
	oSelect.add(new Option(oText.value,oText.value));
	oText.value="";
} 
com.linkage.business.interfaceinfo.deleteSelect = function deleteSelect(oSelect,oText)
{
	if(oSelect.selectedIndex<0){
		alert("请选择要删除的ip");
		return;
	}
	var index = oSelect.selectedIndex;
	oSelect.removeChild(oSelect.options[oSelect.selectedIndex]);
	oSelect.selectedIndex = index;
	if(oSelect.options.length <= index)
		oSelect.selectedIndex = oSelect.options.length-1;
	if(oSelect.selectedIndex<0) return;
	//oText.value=oSelect.options[oSelect.selectedIndex].text;
}
com.linkage.business.interfaceinfo.HasTheValue = function HasTheValue(name,oSelect)
{
	if(oSelect.options.length<1)
		return -1;
	var i=0;
	for(i=0;i<oSelect.options.length;i++)
	{  
		if(oSelect.options[i].text==name)
		return i;
	}
	return -1;
}  
com.linkage.business.interfaceinfo.getIplist = function getIplist(oSelect)
{ 
	var Iplist = '';
	if(oSelect.options.length<1)
		return '';
	var i=0;
	for(i=0;i<oSelect.options.length;i++)
	{
		Iplist+=oSelect.options[i].text+";";
	}
	return Iplist;
}