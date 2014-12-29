com.linkage.systemportal.ring.salecode = new Object();

com.linkage.systemportal.ring.salecode.isValidSpId = function isValidSpId(obj){
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

com.linkage.systemportal.ring.salecode.onChangeSpId = function onChangeSpId(){
  var spid=document.forms[0].spid.value;
  document.forms[0].accesscode.value=spid;	

}

com.linkage.systemportal.ring.salecode.isValidAccesscode = function isValidAccesscode(obj){
  if(obj == null) obj=document.forms[0].accesscode;
  var accesscode=obj.value;
  if(accesscode==null || accesscode==""){
		alert("请输入接入代码！");
		obj.select();
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(accesscode) == false){
		alert("接入代码只能为数字！");
		obj.select();
		obj.focus();
		return false;  	
  }	  
  return true;
}

com.linkage.systemportal.ring.salecode.isValidSaleCode = function isValidSaleCode(obj){
  if(obj == null) obj=document.forms[0].salecode;	
  var salecode = obj.value;
  if(salecode == null || salecode==""){
		alert("请输入营销短编号！");
		obj.select();
		obj.focus();
		return false;  	
  }else if(/^\d+$/.test(salecode) == false){
		alert("营销短编号只能为数字！");
		obj.select();
		obj.focus();
		return false;  	
  }
  salecode = trim(salecode);
  if(salecode.length>10){
		alert("营销短编号长度不能超过10位！");
		obj.select();
		obj.focus();
		return false;   	
  }	  
  return true;
}


com.linkage.systemportal.ring.salecode.isValidRingId =function isValidRingId(obj){
	if(obj == null) obj=document.forms[0].ringid;
	var ringid = obj.value;
	if(ringid == null || ringid==""){
		alert("请输入铃音编码!");
		obj.select();
		obj.focus();
		return false;		
	}
	if(!com.linkage.util.isInteger(ringid)){
		alert("铃音编码只能为数字!");
		obj.select();
		obj.focus();
		return false;			
	}
	if(ringid.length != 12){
	  alert("铃音编码长度只能为12位！");	
		obj.select();
		obj.focus();
	  return false;	 		
	}		
	return true;
}

com.linkage.systemportal.ring.salecode.isValidRingBoxId =function isValidRingBoxId(obj){
	if(obj == null) obj=document.forms[0].ringid;
	var ringid = obj.value;
	if(ringid == null || ringid==""){
		alert("请输入音乐盒编码!");
		obj.select();
		obj.focus();
		return false;		
	}
	if(!com.linkage.util.isInteger(ringid)){
		alert("音乐盒编码只能为数字!");
		obj.select();
		obj.focus();
		return false;			
	}
	if(ringid.length != 10){
	  alert("音乐盒编码长度只能为10位！");	
		obj.select();
		obj.focus();
	  return false;	 		
	}		
	return true;
}

com.linkage.systemportal.ring.salecode.isValidSaletimes = function isValidSaletimes(obj){
  if(obj == null) obj=document.forms[0].saletimes;
  var saletimes=obj.value;
  if(saletimes==null || saletimes==""){
		alert("请输入促销次数！");
		obj.select();
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(saletimes) == false){
		alert("促销次数只能为数字！");
		obj.select();
		obj.focus();
		return false;  	
  }	  
  return true;
}

com.linkage.systemportal.ring.salecode.isValidSaleusernum = function isValidSaleusernum(obj){
  if(obj == null) obj=document.forms[0].saleusernum;
  var saleusernum=obj.value;
  if(saleusernum==null || saleusernum==""){
		alert("请输入促销用户数！");
		obj.select();
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(saleusernum) == false){
		alert("促销用户数只能为数字！");
		obj.select();
		obj.focus();
		return false;  	
  }	  
  return true;
}

com.linkage.systemportal.ring.salecode.isValidTime =function isValidTime(obj1,obj2){
 if(obj1 == null) obj1=document.forms[0].starttime;
 if(obj2 == null) obj2=document.forms[0].endtime;
	var starttime = trim(obj1.value);
	var endtime = trim(obj2.value);	
	if(starttime == null || starttime == ""){
		alert("请选择促销开始时间！");	
		obj1.select();	
		return false;	  			
	}else{
		if(!com.linkage.util.dateBECurrent(starttime)){
		  alert("促销开始时间必须大于或等于当前时间！");	
		  obj1.select();			
		  return false;
		}
	}
	
	if(endtime == null || endtime == ""){
		alert("请选择促销结束时间！");	
		obj2.select();	
		return false;	  			
	}else{
		if(!com.linkage.util.dateBECurrent(endtime)){
		  alert("促销结束时间必须大于或等于当前时间！");	
		  obj2.select();			
		  return false;
		}
	}	
	
  if(!com.linkage.util.dateBDate(endtime,starttime)){
		  alert("促销结束时间必须大于促销开始时间！");	
		  obj2.select();			
		  return false;  	
  }
	return true;
}

com.linkage.systemportal.ring.salecode.isValidSaletype = function isValidSaletype(obj){
	 if(obj == null) obj=document.forms[0].saletype;
	 var saletype = obj.value;
	 if(saletype == null || saletype == "" || saletype == "-*"){
	   alert("请选择营销类型！");	
	   obj.focus();
	   return false;
	 }	
}

com.linkage.systemportal.ring.salecode.isValidrRingtype = function isValidRingtype(obj){
	 if(obj == null) obj=document.forms[0].ringtype;
	 var ringtype = obj.value;
	 if(ringtype == null || ringtype =="" || ringtype == "-*"){
	   alert("请选择铃音类型！");	
	   obj.focus();
	   return false;
	 }	
}

com.linkage.systemportal.ring.salecode.isValidrAreano = function isValidAreano(obj){
	 if(obj == null) obj=document.forms[0].areano;
	 var areano = obj.value;
	 if(areano == null || areano =="" || areano == "-*"){
	   alert("请选择促销范围！");	
	   obj.focus();
	   return false;
	 }	
}

com.linkage.systemportal.ring.salecode.initInfo = function initInfo(){
	var message = document.forms[0].process_result_message.value;
	if(message != null){
		if(message == "此营销短编码已被使用,请重新输入" || message == "此营销短编码可以使用"){
			alert(message+"！");
		}
	}
}

com.linkage.systemportal.ring.salecode.checkSaleCode = function checkSaleCode(){
	var salecode = document.forms[0].salecode.value;
	if(salecode == null || salecode == ""){		
	  alert("请输入营销短编号！");	
	  document.forms[0].salecode.focus();
	  return false;
	}
	var ringtype = document.forms[0].ringtype.value;
	if(ringtype == 1){
		document.forms[0].action="/systemportal/ring/salecode/add_valid.action";
	}else if(ringtype == 2){
		document.forms[0].action="/systemportal/ring/ringbox/salecode/add_valid.action";
	}	
	document.forms[0].submit();
}

//--------------------------------------------------------------------------
//    description:      去除字符串首尾的空格
//    name:       trim
//    parameters: obj     - source string
//    return:           去除字符串首尾的空格后的字符串
//
com.linkage.systemportal.ring.salecode.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}