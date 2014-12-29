com.linkage.ring.ringtype = new Object();

com.linkage.ring.ringtype.ringTypeIsExist = function ringTypeIsExist(obj) {
	var obj = document.forms[0].ringtype;
	var  ringtype=obj.value;
	if(ringtype==null||ringtype==""){
		alert("铃音类型不能为空！");
	  return false;	
	}	
  document.forms[0].action = "/systemportal/ring/ringtype/add_ringtype_isexist.action";
	document.forms[0].submit();
}

/*
*****IVR铃音浏览管理门户******
*/
com.linkage.ring.ringtype.SyRefurbish = function SyRefurbish() {
var obj = document.forms[0].ringtype;
var  ringtype=obj.value;
  document.forms[0].action = "/systemportal/ring/basic/search_ivrring.action?model.ringtype="+ringtype+"";
	document.forms[0].submit();
}
com.linkage.ring.ringtype.SyParenttype = function SyParenttype() {
var obj = document.forms[0].ringtype1;
var  ringtype1=obj.value;
  document.forms[0].action = "/systemportal/ring/basic/search_ivrring.action?model.ringtype="+ringtype1+"";
	document.forms[0].submit();
}


/*
*****用户门户******
*/
com.linkage.ring.ringtype.refurbish = function refurbish(obj) {

var obj = eval(document.forms[0].rt_ringtype);
var  ringtype=obj.value;
document.forms[0].rt_ringtype1.value="";
  document.forms[0].action = "/userportal/userring/query_ringtype.action?model.ringtype="+ringtype+"";
  
	document.forms[0].submit();
}


com.linkage.ring.ringtype.Parenttype = function Parenttype() {
var obj = document.forms[0].rt_ringtype1;
var  ringtype1=obj.value;
  document.forms[0].action = "/userportal/userring/query_ringtype.action?model.ringtype="+ringtype1+"";
	document.forms[0].submit();
}

com.linkage.ring.ringtype.isValidTypename = function isValidTypename(obj){
	if(obj == null) obj = document.forms[0].typename;
	var typeName = com.linkage.util.trim(obj.value);
	if(typeName == ''){
		alert("铃音类型名称不能为空，请输入铃音类型名称！");
		obj.select();
		obj.focus();
		return false;	
	}
	
	obj.value = typeName;
	return true;
}

com.linkage.ring.ringtype.isValidBrotherno = function isValidBrotherno(obj){
	if(obj == null) obj = document.forms[0].brotherno;
	var brotherno = com.linkage.util.trim(obj.value);
	if(brotherno != ''){
		if(!com.linkage.util.isInteger(brotherno)){
			alert("兄弟排名必须为整数！");
			obj.select();
			obj.focus();
			return false;	
		}
	}
	
	obj.value = brotherno;
	return true;
}

com.linkage.ring.ringtype.isValidLeafflag = function isValidLeafflag(obj){
	if(obj == null) obj = document.forms[0].leafflag;
	if(!com.linkage.util.isRadioChecked(obj) ){
		alert("请选择叶类型标识！");
			return false;	
	}
	return true;
}

function RingTypeItem(){
	this.ringtype = "";
	this.typename = "";
	this.brotherno = "";
}
