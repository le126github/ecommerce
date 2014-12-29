com.linkage.corpportal.ringlib = new Object();

com.linkage.corpportal.ringlib.getFileExt = function getFileExt(str){
	if(str=="") return "";
	var idx = str.lastIndexOf(".");
	if(idx<=0) return "";
	return str.substring(idx+1,str.length);
}

com.linkage.corpportal.ringlib.isValidUpload = function isValidUpload(obj){
	 if(obj == null) obj = document.forms[0].ringFile;
	 var ringFile = obj.value;
	 if(ringFile == null || ringFile ==""){
	 	 alert("请上传铃音文件！");
	 	 return false;
	 }else{
			var fileExt = getFileExt(ringFile);
			fileExt = fileExt.toLowerCase();
			if(fileExt!="wav"&&fileExt!="asf"){
				alert("铃音文件名必须以.wav,.asf作为后缀！");
				return false;
			}else{
			  if(fileExt == "wav"){
			  	document.forms[0].auditiontype.value=0;
			  }else{
			  	document.forms[0].auditiontype.value=1;
			  }	
			}	   	
	 }	 
}

com.linkage.corpportal.ringlib.isValidUploadZip = function isValidUploadZip(obj1,obj2){
	 if(obj1 == null) obj1 = document.forms[0].ringInfoFile;
	 if(obj2 == null) obj2 = document.forms[0].ringDataFile;
	 var ringInfoFile = obj1.value;
	 if(ringInfoFile == null || ringInfoFile ==""){
	 	 alert("请上传铃音信息文件！");
	 	 return false;
	 }else{
			var fileExt = getFileExt(ringInfoFile);
			fileExt = fileExt.toLowerCase();
			if(fileExt!="txt"){
				alert("铃音信息文件名必须以.txt作为后缀！");
				return false;
			}  	
	 }
	 
	 var ringDataFile= obj2.value;
	 if(ringDataFile == null || ringDataFile ==""){
	 	 alert("请上传铃音压缩文件！");
	 	 return false;
	 }else{
			var fileExt = getFileExt(ringDataFile);
			fileExt = fileExt.toLowerCase();
			if(fileExt!="zip"){
				alert("铃音压缩文件名必须以.zip作为后缀！");
				return false;
			}  	
	 }	 	 
}

com.linkage.corpportal.ringlib.isValidRingType = function isValidRingType(obj,obj1){
	 if(obj == null) obj= document.forms[0].ringtype;
	 if(obj1 == null) obj1 = document.forms[0].ringtypename;
	 
	 var ringtype = obj.value;
	 var ringtypename = obj1.value;
	 
	 if((ringtype == null || ringtype == "") || (ringtypename == null || ringtypename == "")){
	    alert("请选择铃音类型！");	
	    return false;
	 }
	 return true;
}

com.linkage.corpportal.ringlib.isValidIvrRingType = function isValidIvrRingType(obj,obj1){
	 if(obj == null) obj= document.forms[0].ivrringtype;
	 if(obj1 == null) obj1 = document.forms[0].ivrringtypename;
	 
	 var ivrringtype = obj.value;
	 var ivrringtypename = obj1.value;
	 
	 if((ivrringtype == null || ivrringtype == "")){
	    alert("请选择IVR铃音类型！");	
	    return false;
	 }
	 return true;
}

com.linkage.corpportal.ringlib.isValidRingid = function isValidRingid(obj){
	if(obj == null) obj = document.forms[0].ringid;
	var ringid = obj.value;
	if(ringid == null || ringid == ""){
	  alert("请输入铃音编码！");	
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
	var corpRingid = document.forms[0].corpRingId.value;
	if(corpRingid != null && corpRingid != ""){
		var corpRingidLength = corpRingid.length;
		var startRingid = ringid.substring(0,corpRingidLength);
		if(startRingid != corpRingid){
		  alert("铃音编码必须以地区编码["+corpRingid+"]开始！");	
			obj.select();
			obj.focus();
		  return false;			
		}			
	}
	
	 return true;	
}

com.linkage.corpportal.ringlib.isValidRingPrice = function isValidRingPrice(obj){
	if(obj == null) obj = document.forms[0].ringprice;
	var ringprice = obj.value;
	if(ringprice == null || ringprice == ""){
	  alert("请输入铃音价格！");	
		obj.select();
		obj.focus();
	  return false;	  
	}
	if(!com.linkage.util.isMoney(ringprice)){
		obj.select();
		obj.focus();	
		return false;	
	}	
	return true;	
}

com.linkage.corpportal.ringlib.isValidRingname = function isValidRingname(obj){
	if(obj == null) obj = document.forms[0].ringname;
	var ringname = obj.value;
	if(ringname == null || ringname == ""){
	  alert("请输入铃音名称！");	
		obj.select();
		obj.focus();	
		return false;  
	}
	 return true;	
}

com.linkage.corpportal.ringlib.isValidRingnameletter = function isValidRingnameletter(obj){
	if(obj == null) obj = document.forms[0].ringnameletter;
	var ringnameletter = obj.value;
	if(ringnameletter == null || ringnameletter == ""){
	  alert("请输入铃音名称检索首字母！");	
		obj.select();
		obj.focus();	
		return false;  
	}else{
	  if(trim(ringnameletter).length>1){
		  alert("铃音名称检索首字母长度不能超过1位！");	
			obj.select();
			obj.focus();	
			return false;	  	
	  }	
	  if(!com.linkage.util.isValidAlpha(trim(ringnameletter))){
		  alert("铃音名称检索首字母只能为大写字母！");	
			obj.select();
			obj.focus();	
			return false;		  	
	  }	  
	}
	 return true;	
}

com.linkage.corpportal.ringlib.isValidSinger = function isValidSinger(obj){
  if(obj == null) obj=document.forms[0].singer;
  var singer = obj.value;
	if(singer == null || singer == ""){
		 alert("请输入歌手名称！");	
		 obj.select();
		 obj.focus();	
		 return false;		  	
	}	
	return true;  
}

com.linkage.corpportal.ringlib.isValidSingerletter = function isValidSingerletter(obj){
	if(obj == null) obj = document.forms[0].singerletter;
	var singerletter = obj.value;
	if(singerletter == null || singerletter == ""){
	  alert("请输入歌手名称检索首字母！");	
		obj.select();
		obj.focus();	
		return false;  
	}else{
	  if(trim(singerletter).length>1){
		  alert("歌手名称检索首字母长度不能超过1位！");	
			obj.select();
			obj.focus();	
			return false;	  
	}
	  if(!com.linkage.util.isValidAlpha(trim(singerletter))){
		  alert("歌手名称检索首字母只能为大写字母！");	
			obj.select();
			obj.focus();	
			return false;		  	
	  }		
	 return true;	
 }
}

com.linkage.corpportal.ringlib.isValidValiddate = function isValidValiddate(obj){
	if(obj == null) obj=document.forms[0].validdate;
	var validdate = obj.value;
	if(validdate == null || validdate == ""){
		alert("请选择有效日期！");	
		obj.select();	
		return false;	  			
	}else{
		if(!com.linkage.util.dateBCurrent(validdate)){
		  alert("有效日期必须大于当前日期！");	
		  obj.select();			
		  return false;
		}
	}
	return true;
}

//--------------------------------------------------------------------------
//    description:      去除字符串首尾的空格
//    name:       trim
//    parameters: obj     - source string
//    return:           去除字符串首尾的空格后的字符串
//
com.linkage.corpportal.ringlib.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}

com.linkage.corpportal.ringlib.checkUploadInfo = function checkUploadInfo(){
  document.forms[0].ringid.value = trim(document.forms[0].ringid.value);
  document.forms[0].ringname.value = trim(document.forms[0].ringname.value);
  document.forms[0].ringnameletter.value = trim(document.forms[0].ringnameletter.value);
  document.forms[0].singer.value = trim(document.forms[0].singer.value);
  document.forms[0].singerletter.value = trim(document.forms[0].singerletter.value);
}