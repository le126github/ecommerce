com.linkage.ring.ringtype = new Object();

com.linkage.ring.ringtype.ringTypeIsExist = function ringTypeIsExist(obj) {
	var obj = document.forms[0].ringtype;
	var  ringtype=obj.value;
	if(ringtype==null||ringtype==""){
		alert("�������Ͳ���Ϊ�գ�");
	  return false;	
	}	
  document.forms[0].action = "/systemportal/ring/ringtype/add_ringtype_isexist.action";
	document.forms[0].submit();
}

/*
*****IVR������������Ż�******
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
*****�û��Ż�******
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
		alert("�����������Ʋ���Ϊ�գ������������������ƣ�");
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
			alert("�ֵ���������Ϊ������");
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
		alert("��ѡ��Ҷ���ͱ�ʶ��");
			return false;	
	}
	return true;
}

function RingTypeItem(){
	this.ringtype = "";
	this.typename = "";
	this.brotherno = "";
}
