com.linkage.systemportal.ring.basic = new Object();

//同步选择
 com.linkage.systemportal.ring.basic.flag =function flag(obj){
	var flag;
	if(obj.length>1){
		for(var i=0;i<obj.length;i++){
			if(obj[i].checked){
				flag = obj[i].value;
				//return true;
			}
		}
	}
	if(flag == null || flag == ""){
  	alert("请选择同步!");	
  	return false;  
	}
	
	return true;
}
//活动编号
com.linkage.systemportal.ring.basic.isValidActivityno =function isValidActivityno(obj){
	if(obj == null) obj = document.forms[0].activityno;
	var activityno = obj.value;
	if(activityno == ""||activityno==null){
		alert("请输入活动编号!");
		return false; 
	}
	if(!com.linkage.util.isInteger(activityno)){
		alert("活动编号只能为数字!");
		return false;	
	}
	return true;
}
//活动名称
com.linkage.systemportal.ring.basic.isValidActivityname =function isValidActivityname(obj){
	if(obj == null) obj = document.forms[0].activityname;
	var activityname = obj.value;
	if(activityname == ""||activityname==null){
		alert("请输入活动名称!");
		return false;
	}
	return true;
}
//推荐铃音序号
com.linkage.systemportal.ring.basic.isValidCommendno =function isValidCommendno(obj){
	if(obj == null) obj = document.forms[0].commendno;
	var commendno = obj.value;
	if(commendno == ""||commendno==null){
		alert("请输入推荐铃音序号!");
		return false;
	}
	if(!com.linkage.util.isInteger(commendno)){
		alert("推荐铃音序号只能为数字!");
		return false;	
	}
	return true;
}

//推荐铃音序号
com.linkage.systemportal.ring.basic.isValidCommendnoNew =function isValidCommendnoNew(obj){
	if(obj == null) obj = document.forms[0].commendnonew;
	var commendnonew = obj.value;
	if(commendnonew == ""||commendnonew==null){
		alert("请输入推荐铃音序号!");
		return false;
	}
	if(!com.linkage.util.isInteger(commendnonew)){
		alert("推荐铃音序号只能为数字!");
		return false;	
	}
	return true;
}

//促销范围
com.linkage.systemportal.ring.basic.isValidAreano =function isValidAreano(obj){
	if(obj == null) obj = document.forms[0].areano;
	var areano = obj.value;
	if(areano == " "||areano==null){
		alert("请选择促销范围!");
		return false;
	}
	return true;
}

com.linkage.systemportal.ring.basic.isValidRingBoxRingId =function isValidRingBoxRingId(obj){
	if(obj == null) obj = document.forms[0].delringid;
	var delringid = obj.value;
	if(delringid == ""||delringid==null){
		alert("请输入铃音盒编码!");
		return false;
	}
	if(!com.linkage.util.isInteger(delringid)){
		alert("铃音盒编码只能为数字!");
		return false;	
	}
	if(delringid.length != 12){
	  alert("铃音盒编码长度只能为12位！");	
		obj.select();
		obj.focus();
	  return false;	 		
	}	
	return true;
}


com.linkage.systemportal.ring.basic.isValidRingId =function isValidRingId(){
	var ringid = document.forms[0].ringid.value;
	if(ringid == ""||ringid==null){
		alert("请输入铃音编码!");
		return false;
	}
	
	ringid=com.linkage.util.full_trim(ringid);
	
	if(!com.linkage.util.isInteger(ringid)){
		alert("铃音编码只能为数字!");
		return false;	
	}
	if(ringid.length != 12){
	  alert("铃音编码长度只能为12位！");	
	  return false;	 		
	}	
	return true;
}

/**下载次数
**/
com.linkage.systemportal.ring.basic.isValiddownloadtimes =function isValiddownloadtimes(obj){
	if(obj == null) obj=document.forms[0].downloadtimes;
	var downloadtimes = obj.value;
	if(downloadtimes == ""||downloadtimes==null){
		alert("请输入下载次数!");
		return false;
	}
	if(!com.linkage.util.isInteger(downloadtimes)){
		alert("下载次数只能为数字!");
		return false;	
	}
	return true;
}

/**设置次数
**/
com.linkage.systemportal.ring.basic.isValidsettimes =function isValidsettimes(obj){
	if(obj == null) obj=document.forms[0].settimes;
	var settimes = obj.value;
	if(settimes == ""||settimes==null){
		alert("请输入设置次数!");
		return false;
	}
	if(!com.linkage.util.isInteger(settimes)){
		alert("设置次数只能为数字!");
		return false;	
	}
	return true;
}
com.linkage.systemportal.ring.basic.isValidspno =function isValidspno(){
	var spno =document.forms[0].spno.value;
	if(spno == ""||spno==null){
		alert("业务编号不能为空!");
		return false;
	}
	
	return true;
}

com.linkage.systemportal.ring.basic.isValidCommendno =function isValidCommendno(){
	var commendno =document.forms[0].commendno.value;
		if(commendno == ""||commendno==null){
		alert("推荐铃音序号不能为空!");
		return false;
	}
			if(!com.linkage.util.isInteger(commendno)){
			alert("推荐铃音序号只能为数字!");
			return false;	
		}
	return true;
}


com.linkage.systemportal.ring.basic.isValidSpid =function isValidSpid(){
	var spid =document.forms[0].spid.value;
		if(spid == ""||spid==null){
		alert("业务代码不能为空!");
		return false;
	}
			if(!com.linkage.util.isInteger(spid)){
			alert("业务代码只能为数字!");
			return false;	
		}
	return true;
}

com.linkage.systemportal.ring.basic.isValidRingtype =function isValidRingtype(){
	var ringtype =document.forms[0].ringtype.value;
		if(ringtype == ""||ringtype==null){
		alert("铃音类型不能为空!");
		return false;
	}
	return true;
}

com.linkage.systemportal.ring.basic.isValidAreano =function isValidAreano(){
	var areano =document.forms[0].areano.value;
		if(areano == ""||areano==null){
		alert("请选择促销范围!");
		return false;
	}
	return true;
}

com.linkage.systemportal.ring.basic.isValidTime =function isValidTime(obj1,obj2){
 if(obj1 == null) obj1=document.forms[0].starttime;
 if(obj2 == null) obj2=document.forms[0].endtime;
	var starttime =document.forms[0].starttime.value;
	var endtime =document.forms[0].endtime.value;	
	if(endtime<starttime){
		alert("促销结束时间不能小于促销开始时间!");
		return false;
	}

	return true;
}

com.linkage.systemportal.ring.basic.isValidRingnameletter = function isValidRingnameletter(obj){
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
}

com.linkage.systemportal.ring.basic.isValidSinger = function isValidSinger(obj){
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

com.linkage.systemportal.ring.basic.isValidSingerletter = function isValidSingerletter(obj){
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

com.linkage.systemportal.ring.basic.isValidRingname = function isValidRingname(obj){
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

com.linkage.systemportal.ring.basic.isValidRingPrice = function isValidRingPrice(obj){
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

com.linkage.systemportal.ring.basic.isValidValiddate = function isValidValiddate(obj){
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

com.linkage.systemportal.ring.basic.isValidPresentAlone = function isValidPresentAlone(obj1,obj2,obj3){
	if(obj1 == null) obj1 = document.forms[0].phonenumber;
	if(obj2 == null) obj2 = document.forms[0].ringid;
	if(obj3 == null) obj3 = document.forms[0].ringtype;
	
	var phonenumber = com.linkage.util.trim(obj1.value);
	var ringid = com.linkage.util.trim(obj2.value);
	
	if(obj1 == null || phonenumber == ""){
	  alert("请输入用户号码！");	
		obj1.select();
		obj1.focus();	
		return false;		
	}
	
		if(ringid == ""||ringid==null){
			alert("请输入铃音编码！");
			obj2.select();
			obj2.focus();			
			return false;
		}
		if(!com.linkage.util.isInteger(ringid)){
			alert("铃音编码只能为数字！");
			obj2.select();
			obj2.focus();			
			return false;	
		}
			
	var ringtype;
	if(obj3 == null){
	  alert("请选择铃音类型！");	
		obj3.select();
		obj3.focus();	
		return false;		
	}
	
	if(obj3.length>1){
	  for(var i=0;i<obj3.length;i++){
	   if(obj3[i].checked){
	    	ringtype = obj3[i].value;
		 }
		}
	}	
	
	if(ringtype == 1){
		if(ringid.length != 12){
		  alert("铃音编码长度只能为12位！");	
			obj2.select();
			obj2.focus();
		  return false;	 		
		}		
	}else if(ringtype == 2){
		if(ringid.length != 10){
		  alert("铃音盒编码长度只能为10位！");	
			obj2.select();
			obj2.focus();
		  return false;	 		
		}		
	}
	
	document.forms[0].phonenubmer.value=trim(phonenumber);
	document.forms[0].ringid.value=trim(ringid);
	
	return true;
	
}

com.linkage.systemportal.ring.basic.isValidActivityNO = function isValidActivityNO(obj){
	 if(obj == null) obj = document.forms[0].queryactivityno;
	 
	 var queryactivityno = obj.value;
	 if(queryactivityno == null || queryactivityno == ""){
		  alert("请输入活动编号!");	
			obj.select();
			obj.focus();
		  return false;		    	
	 }
	  if ( (/^\d+$/).test(queryactivityno) == false ){
	 		 alert("铃音类型必须由数字组成!");
	 		 return false;
	 		 }
	 return true;
}

com.linkage.systemportal.ring.basic.selectRingid = function selectRingid(sForm,selectName){    
    formObj = eval('document.'+sForm);
    selectObj = eval('document.'+sForm+'.'+selectName);
    
    var tmp ="";
    var textValue="";
    var hiddenValue="";
    var selectLength = selectObj.length;
    var selectIndex = selectObj.selectedIndex;

    for(var j=0;j<selectLength;j++){
    	if(selectObj.options[j].selected==true){
    		hiddenValue = hiddenValue+selectObj.options[j].value+",";
      }
    }
    
    if(hiddenValue.substr((hiddenValue.length-1),hiddenValue.length)==","){
    	hiddenValue = hiddenValue.substr(0,hiddenValue.length-1);
    }
             
    return hiddenValue;
}

com.linkage.systemportal.ring.basic.addRingBoxRing = function addRingBoxRing(obj1,obj2){
  
  if(obj1 == null) obj1 = document.forms[0].ringid;
  if(obj2 == null) obj2 = document.forms[0].existRingInfo;
  
  var ringid = obj1.value;  
  var existRingInfo = obj2.value;
        
  ringid = com.linkage.util.trim(ringid);
  existRingInfo = com.linkage.util.trim(existRingInfo);    
    
  if(ringid == null || ringid == ""){
     alert("请选择要加入音乐盒的铃音！");	
     return false;
  }
  
  if(existRingInfo != null && existRingInfo != ""){
  	 if(existRingInfo.indexOf(ringid)>=0){
  	   alert("此音乐盒已存在该铃音！");	
  	   return false;
  	 }
  }
  
	return true;
}