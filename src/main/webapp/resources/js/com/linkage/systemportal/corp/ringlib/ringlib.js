com.linkage.systemportal.corp.ringlib = new Object();

com.linkage.systemportal.corp.ringlib.initField = function initField(obj1,obj2,obj3){
	if(obj1 == null) obj1 = document.forms[0].queryType;
	if(obj2 == null) obj2 = document.all("div_corp");
	if(obj3 == null) obj3 = document.all("div_dept");
	
	  var queryType;
	  if(obj1.length>1){
	    for(var i=0;i<obj1.length;i++){
		    if(obj1[i].checked){
					queryType = obj1[i].value;
		    }
		  }
	  }
	  		
	if(queryType == 1){
		 obj2.style.display = "";
		 obj3.style.display = "none";
	}else if(queryType == 2){
		 obj2.style.display = "none";
		 obj3.style.display = "";		
	}
}

com.linkage.systemportal.corp.ringlib.initRingSetField = function initRingSetField(obj1,obj2,obj3,obj4,obj5,obj6){
  com.linkage.systemportal.corp.ringlib.changePhoneType();
  com.linkage.systemportal.corp.ringlib.changeTimeType();
  
  if(obj1 == null) obj1=document.forms[0].starttime;
  if(obj2 == null) obj2=document.forms[0].endtime;
  
  //解析开始时刻
  var starttime = obj1.value;
  if(starttime!=""){
    var starttimes = starttime.split(":"); 
    document.forms[0].bhour.value = starttimes[0]; 
    document.forms[0].bsecond.value = starttimes[1];
  }else{
  	document.forms[0].bhour.value = "";
    document.forms[0].bsecond.value = "";
  }
  
  var endtime = obj2.value;
  if(endtime!=""){
    var endtimes = endtime.split(":");
    document.forms[0].ehour.value = endtimes[0];
    document.forms[0].esecond.value = endtimes[1];
  }else{
  	document.forms[0].ehour.value = "";
    document.forms[0].esecond.value = "";
  }
   
}

com.linkage.systemportal.corp.ringlib.initUploadField = function initUploadField(obj){
	if(obj == null) obj = document.forms[0].corpAreaCode;		
	
	var querytype = document.forms[0].queryType.value;	

	var corpid1 = document.all("corpid_div1");
	var corpid2= document.all("corpid_div2");	
	
	var corpname1 = document.all("corpname_div1");
	var corpname2= document.all("corpname_div2");	
	
	if(querytype == 1){
		corpid1.style.display = "";		
    corpid2.style.display = "";
    
		corpname1.style.display = "none";
    corpname2.style.display = "none";	
    
    document.forms[0].likeCorpName.value = "";    		
	}else if(querytype == 2){
		corpid1.style.display = "none";		
    corpid2.style.display = "none";
    
		corpname1.style.display = "";
    corpname2.style.display = "";		
    
    document.forms[0].corpid.value = "";	
	}	
	
	var corpAreaCode = obj.value;
	var ringid = document.forms[0].ringid.value;
	if(corpAreaCode == null || corpAreaCode == ""){
	  document.forms[0].corpAreaCode.value="";
	  document.forms[0].ringid.value="";		
	}else{		
		ringid = trim(ringid);
		if(ringid == null || ringid == "" || ringid.length != 12){
			document.forms[0].ringid.value=corpAreaCode;
		}else if(ringid != null && ringid != "" && ringid.length == 12){
			var ringidStart = ringid.substring(0,corpAreaCode.length);
			var ringidEnd = ringid.substring(corpAreaCode.length,ringid.length);
			if(ringidStart != corpAreaCode){
				 ringidStart = corpAreaCode;
			}
			ringid = ringidStart+ringidEnd;
		}
		
	}	
}

com.linkage.systemportal.corp.ringlib.onchangeCorpinfoid = function onchangeCorpinfoid(obj){
	if(obj == null) obj = document.forms[0].corpinfoid;		
	var corpinfoid = obj.value;
	if(corpinfoid != null && corpinfoid != ""){
   document.forms[0].action="/systemportal/corp/ringlib/upload/upload_prepare.action";
   document.forms[0].submit();		
	}else{
	  document.forms[0].corpinfoid.value = "";
	  document.forms[0].ringid.value="";
	}			
}


com.linkage.systemportal.corp.ringlib.uploadPrepare = function uploadPrepare(){
   document.forms[0].action="/systemportal/corp/ringlib/upload/upload_prepare.action";
   document.forms[0].submit();
}

com.linkage.systemportal.corp.ringlib.isVaildCorpinfoid = function isVaildCorpinfoid(obj){
	if(obj==null) obj=document.forms[0].corpinfoid;
	//var corpinfoid = obj.value;
	var corpinfoid=obj.options[obj.selectedIndex].value;
	if(corpinfoid == ""){
		alert("请选择一个集团！");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.systemportal.corp.ringlib.isVaildCorpId = function isVaildCorpId(obj){
	if(obj==null) obj=document.forms[0].corpid;
	var corpid = obj.value;
	if(corpid == ""){
		alert("请输入集团编码！");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(!isPosInt(corpid)){
		   alert("集团编码只能为数字！");
		   obj.select();
		   obj.focus();
		   return false;	
		}
	}
	return true;
}

com.linkage.systemportal.corp.ringlib.isValidCallCorpType = function isValidCallCorpType(obj){
	if(!isRadioChecked(document.forms[0].callcorptype)){
	   alert("请选择主被叫标识！");
	   return false;
	}
	return true;
}

com.linkage.systemportal.corp.ringlib.isValidQueryType = function isValidQueryType(obj){
	if(!isRadioChecked(document.forms[0].queryType)){
	   alert("请选择查询方式！");
	   return false;
	}
	return true;
}
	
com.linkage.systemportal.corp.ringlib.isRadioChecked = function isRadioChecked(obj){
  if(obj == null){
     return false;	
  }
  if(obj.length>1){
    for(var i=0;i<obj.length;i++){
	    if(obj[i].checked){
	      return true;
	    }
	  }
  }else{
	  if(obj.checked)
	    return true;
    }
    return false;	
}

com.linkage.systemportal.corp.ringlib.isVaildDeptInfoId = function isVaildDeptInfoId(obj){
	if(obj==null) obj=document.forms[0].deptinfoid;
	var deptinfoid = obj.value;
	if(deptinfoid == ""){
		alert("请选择部门标识！");
		return false;
	}
	return true;
}

com.linkage.systemportal.corp.ringlib.changeQueryType = function changeQueryType(obj1,obj2,obj3){
  if(obj1 == null) obj1 = document.forms[0].queryType; 
	if(obj2 == null) obj2 = document.all("div_corp");
	if(obj3 == null) obj3 = document.all("div_dept");
		  
  if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	if(obj1[i].value==1){
	    	  obj2.style.display = "";
		      obj3.style.display = "none";
	    	}else if(obj1[i].value==2){
	    	  obj2.style.display = "none";
		      obj3.style.display = "";	
	    	}
	      return true;
	    }
	  }
  }	
}

com.linkage.systemportal.corp.ringlib.checkQueryInfo = function  checkQueryInfo(obj){
	  if(obj == null) obj = document.forms[0].queryType;
	   var queryType;
	  if(obj.length>1){
	    for(var i=0;i<obj.length;i++){
		    if(obj[i].checked){
					queryType = obj[i].value;
		    }
		  }
	  }		  
    if(queryType == 1){
    	 if(!com.linkage.systemportal.corp.ringlib.isVaildCorpId(document.forms[0].corpid)){
    	     return false;	
    	 }
    	 if(!com.linkage.systemportal.corp.ringlib.isValidCallCorpType(document.forms[0].callcorptype)){
    	     return false;	
    	 } 
    	 document.forms[0].deptinfoid.value="";    	 
    }else if(queryType == 2){
    	 if(!com.linkage.systemportal.corp.ringlib.isVaildDeptInfoId(document.forms[0].deptinfoid)){
    	     return false;	
    	 }  
    	 document.forms[0].corpid.value="";
    	 document.forms[0].callcorptype.value="";  	
    }	
    
    return true;
}

com.linkage.systemportal.corp.ringlib.changePhoneType = function changePhoneType(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13){
	 if(obj1 == null) obj1=document.forms[0].phonetype;
	 if(obj2 == null) obj2=document.all("ringset_div");
   if(obj3 == null) obj3=document.all("groupset_div");	

	 if(obj4 == null) obj4=document.all("yeardes_div");
   if(obj5 == null) obj5=document.all("monthdes_div");	 
   if(obj6 == null) obj6=document.all("weekdes_div");	 
   if(obj7 == null) obj7=document.all("daydes_div");	 
   if(obj8 == null) obj8=document.all("holidayid_div");	 
   if(obj9 == null) obj9=document.all("starttime_div");
   if(obj10 == null) obj10 = document.all("endtime_div");	
   if(obj11 == null) obj11 = document.all("begindate_div");	
   if(obj12 == null) obj12 = document.all("enddate_div");
   if(obj13 == null) obj13 = document.all("timetype_div");	
      
   var phonetype;
   if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	phonetype = obj1[i].value;
	    }
	  }
   }
   
   if(phonetype==1 || phonetype==4){
   	  obj2.style.display = "none";   
	    obj3.style.display = "none";
	    
		  obj4.style.display = "none";   
	    obj5.style.display = "none";
		  obj6.style.display = "none"; 
		  obj7.style.display = "none";
		  obj8.style.display = "none";
		  obj9.style.display = "none";
		  obj10.style.display = "none";
		  obj11.style.display = "none";
		  obj12.style.display = "none";
		  obj13.style.display = "none";  
		  	    
   }else if(phonetype==2){
   	  obj2.style.display = "";   
	    obj3.style.display = "none";
	    
		  obj4.style.display = "none";   
	    obj5.style.display = "";
		  obj6.style.display = ""; 
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "";
		  obj10.style.display = "";
		  obj11.style.display = "";
		  obj12.style.display = "";
		  obj13.style.display = ""; 	    
   }else if(phonetype==3){
   	  obj2.style.display = "none";   
	    obj3.style.display = "";
	    
		  obj4.style.display = "none";   
	    obj5.style.display = "";
		  obj6.style.display = ""; 
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "";
		  obj10.style.display = "";
		  obj11.style.display = "";
		  obj12.style.display = "";
		  obj13.style.display = ""; 		    
   }else if(phonetype==5){
   	  obj2.style.display = "none";   
	    obj3.style.display = "none"; 
	    
		  obj4.style.display = "none";   
	    obj5.style.display = "";
		  obj6.style.display = ""; 
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "";
		  obj10.style.display = "";
		  obj11.style.display = "";
		  obj12.style.display = "";
		  obj13.style.display = ""; 	      	
   }   
}

com.linkage.systemportal.corp.ringlib.isValidLooptype = function isValidLooptype(){
	if(document.forms[0].ringtype.value == 2){
	  if(!isRadioChecked(document.forms[0].looptype)){
		   alert("请选择铃音播放方式");
		   return false;
		}		
	}   
	return true;
	 
}
com.linkage.systemportal.corp.ringlib.isValidPhoneType = function isValidPhoneType(obj1,obj2,obj3){
   if(obj1 == null) obj1=document.forms[0].phonetype;
   if(obj2 == null) obj2=document.forms[0].oppositephone;
   if(obj3 == null) obj3=document.forms[0].groupserial;
   
/*	 if(obj4 == null) obj4=document.all("yeardes_div");
   if(obj5 == null) obj5=document.all("monthdes_div");	 
   if(obj6 == null) obj6=document.all("weekdes_div");	 
   if(obj7 == null) obj7=document.all("daydes_div");	 
   if(obj8 == null) obj8=document.all("holidayid_div");	 
   if(obj9 == null) obj9=document.all("starttime_div");
   if(obj10 == null) obj10=document.all("endtime_div");	
   if(obj11 == null) obj11=document.all("begindate_div");	
   if(obj12 == null) obj12=document.all("enddate_div");*/	
      
   var phonetype;
   var count=0;
   if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	count++;
	    	phonetype = obj1[i].value;
	    }
	  }
   }	
   
   if(count==0){
     alert("请设置号码类型");	
     return false;
   }
   
  if(phonetype==1 || phonetype==4 || phonetype==5){  	
  	return true;
  }else if(phonetype == 2){
		var oppositephone = obj2.value;
		if(oppositephone == ""){
			alert("请输入主叫号码！");
			obj2.select();
			obj2.focus();
			return false;
		}else{
			if(/^\d+$/.test(oppositephone) == false){
			   alert("主叫号码只能为数字！");
			   obj2.select();
			   obj2.focus();
			   return false;	
			}			
		}  	

  }else if(phonetype == 3){
  	var phonegroupid;
  	if(obj3 == null){
  		alert("没有群组可选择！");
  		return false;
  	}else{
  		phonegroupid = obj3.value;
  	}
  	if (phonegroupid == null || phonegroupid == "" ) {
				alert("请选择一个群组！");
				obj3.focus();
				return false;
			}    	  
  }

  return true;
}

com.linkage.systemportal.corp.ringlib.changeTimeType = function changeTimeType(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10){
	 if(obj1 == null) obj1=document.forms[0].timetype;
	 if(obj2 == null) obj2=document.all("yeardes_div");
   if(obj3 == null) obj3=document.all("monthdes_div");	 
   if(obj4 == null) obj4=document.all("weekdes_div");	 
   if(obj5 == null) obj5=document.all("daydes_div");	 
   if(obj6 == null) obj6=document.all("holidayid_div");	 
   if(obj7 == null) obj7=document.all("starttime_div");
   if(obj8 == null) obj8=document.all("endtime_div");	
   if(obj9 == null) obj9=document.all("begindate_div");	
   if(obj10 == null) obj10=document.all("enddate_div");		 
   
   var timetype = obj1.value;
   if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	timetype = obj1[i].value;
	    }
	  }
   }   
   
   if(timetype == 6){
   	  //按特殊时间设置
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "none";
		  obj8.style.display = "none";
		  obj9.style.display = "";
		  obj10.style.display = ""; 
		  
   }else if(timetype == 5){
   	  //按节假日设置
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none"; 
		  	     	
   }else if(timetype == 4){
   	  //按每年设置   	  
		  obj2.style.display = "";   
	    obj3.style.display = "";
		  obj4.style.display = ""; 
		  obj5.style.display = "";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none";     	  	  
   }else if(timetype == 3){
   	  //按每月设置
		  obj2.style.display = "none";   
	    obj3.style.display = "";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none";  		    	  
   }else if(timetype == 2){
   	  //按每周设置
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = ""; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none";  		   	
   }else if(timetype == 1){
   	  //按每天设置
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none";			      	
   }
   
   
}

com.linkage.systemportal.corp.ringlib.showTime = function showTime(sForm,textName,selectName,hiddenName){    
    formObj = eval('document.'+sForm);
    textObj = eval('document.'+sForm+'.'+textName);
    selectObj = eval('document.'+sForm+'.'+selectName);
    hiddenObj = eval('document.'+sForm+'.'+hiddenName);
    
    var tmp ="";
    var textValue="";
    var hiddenValue="";
    var selectLength = selectObj.length;
    var selectIndex = selectObj.selectedIndex;

    for(var j=0;j<selectLength;j++){
    	if(selectObj.options[j].selected==true){
    		hiddenValue = hiddenValue+selectObj.options[j].value+",";
    		textValue = textValue+selectObj.options[j].text+",";
      }
    }
    
    if(hiddenValue.substr((hiddenValue.length-1),hiddenValue.length)==","){
    	hiddenValue = hiddenValue.substr(0,hiddenValue.length-1);
    }
    hiddenObj.value = hiddenValue;
       
    if(textValue.substr((textValue.length-1),textValue.length)==","){
    	textValue = textValue.substr(0,textValue.length-1);
    }    
    textObj.value=textValue;
}

com.linkage.systemportal.corp.ringlib.checkTime = function checkTime(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12){
	
	if(obj1 == null) obj1=document.forms[0].timetype; 
	
	if(obj2 == null) obj2=document.forms[0].bhour;
	if(obj3 == null) obj3=document.forms[0].bsecond;
	if(obj4 == null) obj4=document.forms[0].ehour;
	if(obj5 == null) obj5=document.forms[0].esecond;

	if(obj6 == null) obj6=document.forms[0].beginhour;
	if(obj7 == null) obj7=document.forms[0].beginsecond;
	if(obj8 == null) obj8=document.forms[0].endhour;
	if(obj9 == null) obj9=document.forms[0].endsecond;
	
	if(obj10 == null) obj10=document.forms[0].bdate;
	if(obj11 == null) obj11=document.forms[0].edate;
	
  if(obj12 == null) obj12=document.forms[0].phonetype;	
  
	var bhour = obj2.value;
	var bsecond = obj3.value;
	var ehour = obj4.value;
	var esecond = obj5.value;
	
	var beginhour = obj6.value;
	var beginsecond = obj7.value;
	var endhour = obj8.value;
	var endsecond = obj9.value;
	var bdate = obj10.value;
	var edate = obj11.value;
		
	var phonetype=document.forms[0].phonetype.value;
   if(obj12.length>1){
    for(var i=0;i<obj12.length;i++){
	    if(obj12[i].checked){
	    	phonetype = obj12[i].value;
	    }
	  }
   }
   
  if(phonetype == 1){
    return true;	
  } 	
  	
	if(!isRadioChecked(obj1)){
	   alert("请选择时间设置方式！");
	   return false;
	}		
	var timetype = obj1.value;
   if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	timetype = obj1[i].value;
	    }
	  }
   }
   	
	var strBhouse = "";
	var strEhouse = "";
	var begindate = "";
	var enddate = "";
	   	
	if(timetype == 6){			 
		 if(bdate==""){
		   alert("请输入开始日期!")	;
		   return false;
		 }	 
		 if(bdate!=""){       
		   var bdates = bdate.split("-");	
		   strBhouse = isHouse(bdates[0],bdates[1],bdates[2],twobite(beginhour),twobite(beginsecond));
		   begindate = bdates[0]+bdates[1]+bdates[2]+twobite(beginhour)+twobite(beginsecond);
	     if(strBhouse == "1"){
	       alert("输入开始时间的小时不合法");
				 obj6.select();
				 obj6.focus(); 
				 return false;     	
	     }else if(strBhouse == "2"){
	       alert("输入开始时间的分钟不合法");
				 obj7.select();
				 obj7.focus(); 
				 return false;   	
	     }else if(strBhouse == "3"){
	     	 alert("输入开始时间必须大于当前时间");
	     	 return false;
	     }		   
		 }
		 if(edate==""){
		   alert("请输入结束日期!")	;
		   return false;
		 }		 
		 if(edate!=""){       
		   var edates = edate.split("-");	
		   strEhouse = isHouse(edates[0],edates[1],edates[2],twobite(endhour),twobite(endsecond));
		   enddate = edates[0]+edates[1]+edates[2]+twobite(endhour)+twobite(endsecond);
	     if(strEhouse == "1"){
	       alert("输入结束时间的小时不合法");
				 obj8.select();
				 obj8.focus(); 
				 return false;     	
	     }else if(strEhouse == "2"){
	       alert("输入结束时间的分钟不合法");
				 obj9.select();
				 obj9.focus(); 
				 return false;   	
	     }else if(strEhouse == "3"){
	     	 alert("输入结束时间必须大于当前时间");
	     	 return false;
	     }		   
		 }
		 
    if(begindate>=enddate){
      alert("开始时间必须小于结束时间"); 
			return false;      	 
    }		
    
    document.forms[0].begindate.value=bdate+" "+twobite(beginhour)+":"+twobite(beginsecond)+":00";
    document.forms[0].enddate.value=edate+" "+twobite(endhour)+":"+twobite(endsecond)+":59";
    
	}else{
		if(phonetype == 1){
			 return true;								
		}

		if(timetype == 2){
			 if(trim(document.forms[0].weeks.value)==""){
				 alert("请设置每周铃音播放时间段！");	
				 return false;
			}
	  }if(timetype == 3){
			 if(trim(document.forms[0].months.value)==""){
				  alert("请设置每月铃音播放时间段！");	
				  return false;				
			 }
		}if(timetype == 5){
			 if(document.forms[0].holidayid.value==""){
				  alert("请设置节假日铃音播放时间段！");	
				  return false;				
			 }
		}	
			
    strBhouse = isHouse("","","",bhour,bsecond);
    if(strBhouse == "1"){
      alert("输入开始时刻的小时不合法");
			obj2.select();
			obj2.focus(); 
			return false;     	
    }else if(strBhouse == "2"){
      alert("输入开始时刻的分钟不合法");
			obj3.select();
			obj3.focus(); 
			return false;   	
    }
    
    strEhouse = isHouse("","","",ehour,esecond);
    if(strEhouse == "1"){
      alert("输入结束时刻的小时不合法");
			obj4.select();
			obj4.focus(); 
			return false;      	
    }else if(strEhouse == "2"){
      alert("输入结束时刻的分钟不合法");
			obj5.select();
			obj5.focus(); 
			return false;    	
    }
    
    var starttime = ""+twobite(bhour)+":"+twobite(bsecond);
    var endtime = ""+twobite(ehour)+":"+twobite(esecond);  
    
    if(starttime>=endtime){
      alert("开始时刻必须小于结束时刻"); 
			return false;      	 
    }
    
    document.forms[0].starttime.value=starttime+":00";
    document.forms[0].endtime.value=endtime+":59";
    
	}
	return true;
}

com.linkage.systemportal.corp.ringlib.checkRingSetInfo = function checkRingSetInfo(obj,obj1){
	 if(!com.linkage.systemportal.corp.ringlib.isValidLooptype()){
	   return false;	
	 }

	 if(!com.linkage.systemportal.corp.ringlib.isValidPhoneType()){
	    return false;	
	 }
	 
	 if(obj == null) obj1=document.forms[0].phonetype;
   var phonetype;
   var count=0;
   if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	count++;
	    	phonetype = obj1[i].value;
	    }
	  }
   }		 

	 if(phonetype != 1){
		 if(!com.linkage.systemportal.corp.ringlib.checkTime()){
		    return false;	
		 }	 	
	 }

	 
	 if(obj == null) obj=document.forms[0].timetype;
   
   var timetype = obj.value;
   if(obj.length>1){
    for(var i=0;i<obj.length;i++){
	    if(obj[i].checked){
	    	timetype = obj[i].value;
	    }
	  }
   }   
   
   if(timetype == 6){
   	  //按特殊时间设置	  
		  document.forms[0].yeardes.value="0";		  		  	 
		  document.forms[0].monthdes.value="0";
		  document.forms[0].weekdes.value="0";
		  document.forms[0].daydes.value="0";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].starttime.value="";
		  document.forms[0].endtime.value="";
		  
   }else if(timetype == 5){
   	  //按节假日设置		  
		  document.forms[0].yeardes.value="0";		  		  	 
		  document.forms[0].monthdes.value="0";
		  document.forms[0].weekdes.value="0";
		  document.forms[0].daydes.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";		     	
   }else if(timetype == 4){
   	  //按每年设置     	  	  
		  document.forms[0].yeardes.value="1~9999";		  		  	 
		  document.forms[0].monthdes.value="0";
		  document.forms[0].weekdes.value="0";
		  document.forms[0].daydes.value="0";   	  
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";	     	  	  
   }else if(timetype == 3){
   	  //按每月设置 		  
		  document.forms[0].yeardes.value="0";		  		  	 
		  document.forms[0].weekdes.value="1~9999";
		  //document.forms[0].daydes.value="";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";			    	  
   }else if(timetype == 2){
   	  //按每周设置		  
		  document.forms[0].yeardes.value="";		  		  	 
		  document.forms[0].monthdes.value="";
		  //document.forms[0].daydes.value="";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";			   	
   }else if(timetype == 1){
   	  //按每天设置	  
		  document.forms[0].yeardes.value="0";		  		  	 
		  document.forms[0].monthdes.value="0";
		  document.forms[0].weekdes.value="0";
		  document.forms[0].daydes.value="1~9999";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";			      	
   }
   
	 return true;
}

com.linkage.systemportal.corp.ringlib.isHouse = function isHouse(year,month,day,house,minute){
  var intHouse =parseInt(house,10);
  var intMinute=parseInt(minute,10);

	//判断小时是否合法
	if((!isPosInt(house)) || intHouse < 0 || intHouse > 23){
		return "1";//"小时不合法";
	}
	//判断分钟是否合法
	if((!isPosInt(minute)) || intMinute < 0 || intMinute > 59){
		return "2";//"分钟不合法";
	}
	//判断秒是否合法

	if(year!="" && month!="" && day!=""){
	  var intYear = parseInt(year,10);
	  var intMonth = parseInt(month,10);
	  var intDay = parseInt(day,10);
		var dati=""+intYear+twobite(intMonth)+twobite(intDay)+twobite(intHouse)+twobite(intMinute);
		//判断开始时间是否小于当前时间
	  if(!compDate(dati))
	  {
	    return "3";
	  }	  		
	}

	  return "";
}

com.linkage.systemportal.corp.ringlib.compDate = function compDate(dati)
{   
	
	  
    var dati1=dati;
    var dateobj = new Date();

    var sYear = dateobj.getYear();
    var sMonth=dateobj.getMonth()+1;
    var sDay=dateobj.getDate();
    var sHour=dateobj.getHours();
    var sMinute=dateobj.getMinutes();

    var dati2=""+sYear+twobite(sMonth)+twobite(sDay)+twobite(sHour)+twobite(sMinute);

    if(dati1>=dati2)
    {
      return true;
    }
    else
    {
    return false;
    }

  }
  
com.linkage.systemportal.corp.ringlib.twobite = function twobite(str)
{
	
  var intTemp = parseInt(str,10);
  if(intTemp < 10)
  {
    return "0"+intTemp;
  }
  else
  {
    return ""+str;
  }
}

//--------------------------------------------------------------------------
//    description:      判断字符串是正整数
//    name:       isPosInt
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
//
com.linkage.systemportal.corp.ringlib.isPosInt = function isPosInt(obj){
	if (obj.length==0)
            return false;
      obj = trim(obj);
      for (i=0;i<obj.length;i++){
            var a = obj.substr(i,1);
            strModel = "0123456789";
            if (i==0){
                  strModel=strModel+"+";
            }
            if (strModel.indexOf(a,0)==-1){
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
com.linkage.systemportal.corp.ringlib.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}

com.linkage.systemportal.corp.ringlib.isValidRingid = function isValidRingid(obj){
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
	var corpAreaCode = trim(document.forms[0].corpAreaCode.value);
	if(corpAreaCode != null && corpAreaCode != ""){
		var corpAreaCodeLength = corpAreaCode.length;
		var startRingid = ringid.substring(0,corpAreaCodeLength);
		if(startRingid != corpAreaCode){
		  alert("铃音编码必须以地区编码["+corpAreaCode+"]开始！");	
			obj.select();
			obj.focus();
		  return false;			
		}	
	
	}else{
		alert("请选择一个集团！");
		return false;		
	}
	
	 return true;	
}

com.linkage.systemportal.corp.ringlib.isValidRingPrice = function isValidRingPrice(obj){
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

com.linkage.systemportal.corp.ringlib.isValidRingname = function isValidRingname(obj){
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

com.linkage.systemportal.corp.ringlib.isValidRingnameletter = function isValidRingnameletter(obj){
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

com.linkage.systemportal.corp.ringlib.isValidSinger = function isValidSinger(obj){
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

com.linkage.systemportal.corp.ringlib.isValidSingerletter = function isValidSingerletter(obj){
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

com.linkage.systemportal.corp.ringlib.isValidValiddate = function isValidValiddate(obj){
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

com.linkage.systemportal.corp.ringlib.isValidUpload = function isValidUpload(obj){
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

com.linkage.systemportal.corp.ringlib.changeUploadType = function changeUploadType(){
	var querytype = document.forms[0].queryType.value;

  var likeCorpName = document.forms[0].likeCorpName.value;
  var corpid = document.forms[0].corpid.value;
  
	var corpid1 = document.all("corpid_div1");
	var corpid2= document.all("corpid_div2");	
	
	var corpname1 = document.all("corpname_div1");
	var corpname2= document.all("corpname_div2");	
	
	if(querytype == 1){
		corpid1.style.display = "";		
    corpid2.style.display = "";
    
		corpname1.style.display = "none";
    corpname2.style.display = "none";	
    
    document.forms[0].likeCorpName.value = "";    		
	}else if(querytype == 2){
		corpid1.style.display = "none";		
    corpid2.style.display = "none";
    
		corpname1.style.display = "";
    corpname2.style.display = "";		
    
    document.forms[0].corpid.value = "";	
	}	
	
}