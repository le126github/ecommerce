com.linkage.systemportal.sp = new Object();

com.linkage.systemportal.sp.isValidSpId = function isValidSpId(obj){
  if(obj == null) obj=document.forms[0].spid;
  var spid=obj.value;
  if(spid==null || spid==""){
		alert("请输入业务代码！");
		obj.select();
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(spid) == false){
		alert("业务代码只能为数字！");
		obj.select();
		obj.focus();
		return false;  	
  }	
  
  return true;
}

com.linkage.systemportal.sp.isValidSpname = function isValidSpname(obj){
  if(obj == null) obj=document.forms[0].spname;
  var spname=obj.value;
  if(spname==null || spname==""){
		alert("请输入业务名称！");
		obj.select();		
		obj.focus();
		return false;  	 
  }  
  return true;
}

com.linkage.systemportal.sp.isValidQuery = function isValidQuery(obj1,obj2){
	 if(obj1 == null) obj1=document.forms[0].keyword;
	 if(obj2 == null) obj2=document.forms[0].queryType;
	 
	 var keyword = obj1.value;
	 var queryType = obj2.value;
	 if(keyword == null || keyword ==""){
	   alert("请输入关键字！");	
	   obj1.select();
	   obj1.focus();
	   return false;
	 }
	 
	 if(queryType == null || queryType ==""){
	   alert("请选择查询方式！");	
	   obj2.focus();
	   return false;
	 }else{
	    if(queryType == "1"){
				if(/^\d+$/.test(keyword) == false){
						alert("业务代码只能为数字！");
						obj1.select();
						obj1.focus();
						return false;  	
				  }	    	
	    }	
	 	
	 }	
	 
	  
	 
	 return true;
}

com.linkage.systemportal.sp.isValidSpAdmin = function isValidSpAdmin(obj){
  if(obj == null) obj=document.forms[0].spadmin;
  var spadmin=obj.value;
  if(spadmin==null || spadmin==""){
		alert("请输入SP帐号！");
		obj.select();		
		obj.focus();
		return false;  	 
  }  
  return true;
}

com.linkage.systemportal.sp.isValidPassword = function isValidPassword(obj,obj1) {
	if (obj1 == null) obj1 = document.forms[0].sppassword_sure;
	if (obj == null) obj = document.forms[0].sppassword;
	var passwd = obj.value;
	var passwd_sure = obj1.value;
	if(passwd==null || passwd==""){
		alert("请输入密码！");
		obj.focus();
		obj.select();
		return false;		
	}
	if(passwd_sure==null || passwd_sure==""){
		alert("请输入确认密码！");
		obj1.focus();
		obj1.select();
		return false;		
	}	
	if (passwd != passwd_sure){
		alert("密码确认不一致！");
		obj.focus();
		obj.select();
		return false;
	}
	if (com.linkage.util.isValidAdminPassword(passwd) == false) {
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.systemportal.sp.isValidCorpId = function isValidCorpId(obj){
  if(obj == null) obj=document.forms[0].corpid;
  var corpid=obj.value;
  if(corpid==null || corpid==""){
		alert("请输入企业标识！");
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(corpid) == false){
		alert("企业标识只能为数字！");
		obj.focus();
		return false;  	
  }	
  
  return true;
}

com.linkage.systemportal.sp.isValidCorpName = function isValidCorpName(obj){
  if(obj == null) obj=document.forms[0].corpname;
  var corpname=obj.value;
  if(corpname==null || corpname==""){
		alert("请输入公司名称！");
		obj.select();		
		obj.focus();
		return false;  	 
  }  
  return true;
}

com.linkage.systemportal.sp.isValidCorpAddress = function isValidCorpAddress(obj){
  if(obj == null) obj=document.forms[0].corpaddress;
  var corpaddress=obj.value;
  if(corpaddress==null || corpaddress==""){
		alert("请输入公司地址！");
		obj.select();		
		obj.focus();
		return false;  	 
  }  
  return true;
}

com.linkage.systemportal.sp.isValidCorptel = function isValidCorptel(obj){
  if(obj == null) obj=document.forms[0].corptel;
  var corptel=obj.value;
  if(corptel==null || corptel==""){
		alert("请输入公司电话！");
		obj.select();		
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(corptel) == false){
		alert("公司电话只能为数字！");
		obj.select();
		obj.focus();
		return false;  	
  }	  
  return true;
}

com.linkage.systemportal.sp.isValidCorpfax = function isValidCorpfax(obj){
  if(obj == null) obj=document.forms[0].corpfax;
  var corpfax=obj.value;
  if(corpfax==null || corpfax==""){
		alert("请输入公司传真！");
		obj.select();		
		obj.focus();
		return false;  	 
  }else{ 
  	 corpfax = com.linkage.util.replaceAll(corpfax,"-","");
	   if(/^\d+$/.test(corpfax) == false){
			alert("公司传真只能为数字！");
			obj.select();
			obj.focus();
			return false; 
	   } 	
  }	  
  return true;
}

com.linkage.systemportal.sp.isValidCustomertel = function isValidCustomertel(obj){
  if(obj == null) obj=document.forms[0].customerservicetel;
  var customerservicetel=obj.value;
  if(customerservicetel==null || customerservicetel==""){
		alert("请输入客服电话！");
		obj.select();		
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(customerservicetel) == false){
		alert("客服电话只能为数字！");
		obj.select();
		obj.focus();
		return false;  	
  }	  
  return true;
}

com.linkage.systemportal.sp.isValidTime = function isValidTime(obj1,obj2){
  if(obj1 == null)	obj1=document.forms[0].effecttime;
  if(obj2 == null)  obj2=document.forms[0].expiretime;
	
	var effecttime = obj1.value;
	var expiretime = obj2.value;

	effecttime = com.linkage.util.replaceAll(effecttime,"-","");
	expiretime = com.linkage.util.replaceAll(expiretime,"-","");
	
	if(!compDate(effecttime)){
	  alert("生效日期必须大于当前日期！");
	 	obj1.select();
		return false; 	
	}
		
	if(!compDate(expiretime)){
	  alert("失效日期必须大于当前日期！");
	 	obj2.select();
		return false;	
	}
	
	if(effecttime > expiretime){
	  alert("失效日期必须大于生效日期！");
	 	obj2.select();
		return false;		
	}		
	return true;
}

com.linkage.systemportal.sp.compDate = function compDate(dati)
{   
    var dati1=dati;
    var dateobj = new Date();

    var sYear = dateobj.getYear();
    var sMonth=dateobj.getMonth()+1;
    var sDay=dateobj.getDate();

    var dati2=""+sYear+twobite(sMonth)+twobite(sDay);

    if(dati1>=dati2)
    {
      return true;
    }
    else
    {
    return false;
    }

  }
  
com.linkage.systemportal.sp.twobite = function twobite(str)
{
  var intTemp = parseInt(str,10);
  if(intTemp < 10)
  {
    return "0"+str;
  }
  else
  {
    return ""+str;
  }
}

com.linkage.systemportal.sp.checkInfo = function checkInfo(){
  if(!com.linkage.systemportal.sp.isValidSpId(document.forms[0].spid.value)){
     return false;
  }
  if(!com.linkage.systemportal.sp.isValidSpname(document.forms[0].spname.value)){
     return false;
  }
  if(!com.linkage.systemportal.sp.isValidSpAdmin(document.forms[0].spadmin.value)){
     return false;
  }  
  
  if(!com.linkage.systemportal.sp.isValidPassword(document.forms[0].sppassword.value,document.forms[0].sppassword_sure.value)){
     return false;
  }    	

}