com.linkage.userportal.user.ringlib = new Object();

com.linkage.userportal.user.ringlib.initBasicInfo = function initBasicInfo(obj1,obj2,obj3,obj4,obj5,obj6){
  if(obj3 == null) obj3=document.forms[0].phonetype;
	if(obj4 == null) obj4=document.all("ringset_div");
  if(obj5 == null) obj5=document.all("groupset_div");	 
  
  var phonetype;
   if(obj3.length>1){
    for(var i=0;i<obj3.length;i++){
	    if(obj3[i].checked){
	    	phonetype = obj3[i].value;
	    }
	  }
   }
      
  if(phonetype == null || phonetype==""){
  	document.forms[0].phonetype.value="1";
	   	 obj4.style.display = "none";   
		   obj5.style.display = "none";  	
  }else{
	  if(phonetype==1 || phonetype==4 || phonetype==5){
	   	 obj4.style.display = "none";   
		   obj5.style.display = "none";
	  }else if(phonetype==2){
	   	 obj4.style.display = "";   
		   obj5.style.display = "none";
	  }else if(phonetype==3){
	   	 obj4.style.display = "none";   
		   obj5.style.display = "";
	  }   	
  }

  
  /*com.linkage.userportal.user.ringlib.changePhoneType();
  com.linkage.userportal.user.ringlib.changeTimeType();
  
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
  }*/
   
}

com.linkage.userportal.user.ringlib.initPhoneGroup = function initPhoneGroup(obj1,obj2,obj3,obj4){
  if(obj1 == null) obj1 = document.forms[0].callusertypeflag;
  if(obj2 == null) obj2 = document.forms[0].callusertype;
	if(obj3 == null) obj3=document.all("phonegroup_1");
  if(obj4 == null) obj4=document.all("phonegroup_2");	
  
  var callusertypeflag = obj1.value;
  if(obj1 != null && callusertypeflag == 1){
	   var callusertype;
	   if(obj2.length>1){
	    for(var i=0;i<obj2.length;i++){
		    if(obj2[i].checked){
		    	callusertype = obj2[i].value;
		    }
		  }
	   }
	   
	   if(callusertype == 1){
	   	 obj3.style.display = "";   
		   obj4.style.display = "none"; 	   	
	   }else if(callusertype == 2){
	   	 obj3.style.display = "none";   
		   obj4.style.display = "";	   	
	   }	
  }     
}

com.linkage.userportal.user.ringlib.changeCallusertype = function changeCallusertype(obj1,obj2,obj3,obj4){
  if(obj1 == null) obj1 = document.forms[0].callusertypeflag;
  if(obj2 == null) obj2 = document.forms[0].callusertype;
	if(obj3 == null) obj3=document.all("phonegroup_1");
  if(obj4 == null) obj4=document.all("phonegroup_2");	
  
  var callusertypeflag = obj1.value;
  if(obj1 != null && callusertypeflag == 1){
	   var callusertype;
	   if(obj2.length>1){
	    for(var i=0;i<obj2.length;i++){
		    if(obj2[i].checked){
		    	callusertype = obj2[i].value;
		    }
		  }
	   }
	   
	   if(callusertype == 1){
	   	 obj3.style.display = "";   
		   obj4.style.display = "none"; 	   	
	   }else if(callusertype == 2){
	   	 obj3.style.display = "none";   
		   obj4.style.display = "";	   	
	   }	
  }	
}


com.linkage.userportal.user.ringlib.initTimeInfo = function initTimeInfo(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13,obj14,obj15){
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
   if(obj11 == null) obj11=document.forms[0].starttime;
   if(obj12 == null) obj12=document.forms[0].endtime;	
   if(obj13 == null) obj13=document.forms[0].begindate;	
   if(obj14 == null) obj14=document.forms[0].enddate;
   if(obj15 == null) obj15=document.forms[0].daydes;	   	 
   
   var starttime = obj11.value;
   var endtime = obj12.value;
   var begindate = obj13.value;
   var enddate = obj14.value;
   
   var dayes = obj15.value;
   
   if(starttime != null && starttime != ''){
     var starttimes = starttime.split(":");
     document.forms[0].bhour.value=	starttimes[0];
     document.forms[0].bsecond.value=	starttimes[1];
   }
   
   if(endtime != null && endtime != ''){
     var endtimes = endtime.split(":");
     document.forms[0].ehour.value=	endtimes[0];
     document.forms[0].esecond.value=	endtimes[1];
   }   
   
   if(begindate != null && begindate != ''){
     var bdate = begindate.substring(0,10);
     document.forms[0].bdate.value = bdate;
     
     var times = trim(begindate.substring(11,begindate.length));
     times = times.substring(0,8);
     
     var starttimes = times.split(":");
     document.forms[0].beginhour.value=	starttimes[0];
     document.forms[0].beginsecond.value=	starttimes[1];
   }
   
   if(enddate != null && enddate != ''){
     var edate = enddate.substring(0,10);
     document.forms[0].edate.value = edate;
     
     var times = trim(enddate.substring(11,enddate.length));
     times = times.substring(0,8);
     
     var endtimes = times.split(":");
     document.forms[0].endhour.value=	endtimes[0];
     document.forms[0].endsecond.value=	endtimes[1];
   }   
   
   var timetype = obj1.value;
   if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	timetype = obj1[i].value;
	    }
	  }
   }   
   if(timetype == null || timetype==""){
     timetype=1;
     document.forms[0].timetype.value=1;	
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
		  
		  document.forms[0].months.value = parseTimes(document.forms[0].daydes.value,3);		    	  
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
      document.forms[0].weeks.value = parseTimes(document.forms[0].daydes.value,2);		    	  		   		   	
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

com.linkage.userportal.user.ringlib.isVaildPhoneNumber = function isVaildPhoneNumber(obj){
	if(obj==null) obj=document.forms[0].phonenumber;
	var phoneNumber = obj.value;
	if(phoneNumber == ""){
		alert("请输入用户号码！");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(/^\d+$/.test(phoneNumber) == false){
		   alert("用户号码只能为数字！");
		   obj.select();
		   obj.focus();
		   return false;	
		}
	}
	return true;
}

com.linkage.userportal.user.ringlib.isValidCallUserType = function isValidCallUserType(obj){
	if(!isRadioChecked(document.forms[0].callusertype)){
	   alert("请选择主被叫标识！");
	   return false;
	}
	return true;
}
	
com.linkage.userportal.user.ringlib.isRadioChecked = function isRadioChecked(obj){
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

com.linkage.userportal.user.ringlib.changePhoneType = function changePhoneType(obj1,obj2,obj3){
	 if(obj1 == null) obj1=document.forms[0].phonetype;
	 if(obj2 == null) obj2=document.all("ringset_div");
   if(obj3 == null) obj3=document.all("groupset_div");	
   
   var phonetype;
   if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	phonetype = obj1[i].value;
	    }
	  }
   }
   
   if(phonetype==1 || phonetype==4 || phonetype==5){
   	  obj2.style.display = "none";   
	    obj3.style.display = "none";
   }else if(phonetype==2){
   	  obj2.style.display = "";   
	    obj3.style.display = "none";
   }else if(phonetype==3){
   	  obj2.style.display = "none";   
	    obj3.style.display = "";
   }   
}

com.linkage.userportal.user.ringlib.isValidLooptype = function isValidLooptype(){ 
	if(document.forms[0].ringtype.value!=1){
	  if(!isRadioChecked(document.forms[0].looptype)){
		   alert("请选择铃音播放方式");
		   return false;
		}		
	}  
	return true;
	 
}

com.linkage.userportal.user.ringlib.isValidHoliday = function isValidHoliday(obj){   
		if (obj == null) obj = document.forms[0].holidayid;
	  var holidayid = obj.value;
			if (obj == null || holidayid == "" || holidayid == "0") {
				alert("请选择节假日！");
				obj.focus();
				return false;
			}	  	
	  return true; 
}

com.linkage.userportal.user.ringlib.isValidPhoneType12 = function isValidPhoneType12(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8){
   if(obj1 == null) obj1=document.forms[0].phonetype;
   if(obj2 == null) obj2=document.forms[0].oppositephone;
   if(obj3 == null) obj3=document.forms[0].groupserial;
   if(obj4 == null) obj4=document.forms[0].forward;
   if(obj5 == null) obj5=document.forms[0].callusertypeflag;
   if(obj6 == null) obj6=document.forms[0].groupserial2;
   if(obj7 == null) obj7=document.forms[0].groupserial1;
   if(obj8 == null) obj8=document.forms[0].callusertype;
   
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
   
  if(phonetype==1 || phonetype==4){
  	 if(obj4 != null && obj4.value == "ringgroup"){
	  	 document.forms[0].action="/userportal/ringgroup/userringset_add.action";
	  	 document.forms[0].submit(); 
	  	 return true; 	 	
  	 }else if(obj4 != null && obj4.value == "ringlib"){
  	 	document.forms[0].action="/userportal/myringlib/userringset_add.action";
  	 	return true;
  	 }else if(obj4 != null && obj4.value == "modringset"){
  	   document.forms[0].action="/userportal/ringset/userringset_mod.action"; 	 	
  	   return true;
  	 }else{
  	   document.forms[0].action="/userportal/ringset/userringset_add.action"; 	 	
  	   return true;
  	 }

      //return true;
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
  	var callusertypeflag = obj5.value;
  	if(callusertypeflag == 0){
	  	if(obj3 == null){
	  		  phonegroupid = "";
	  	}else{
	  	  	phonegroupid = obj3.value;
	  	}  		
  	}else if(callusertypeflag == 1){
		   var callusertype;
		   if(obj8.length>1){
		    for(var i=0;i<obj8.length;i++){
			    if(obj8[i].checked){
			    	callusertype = obj8[i].value;
			    }
			  }
		   }
		   
		   if(callusertype == 1){
			  	if(obj7 == null){
			  		  phonegroupid = "";
			  	}else{
			  	  	phonegroupid = obj7.value;
			  	} 	   	
		   }else if(callusertype == 2){
			  	if(obj8 == null){
			  		  phonegroupid = "";
			  	}else{
			  	  	phonegroupid = obj6.value;
			  	}   	
		   }  		
  	}
  	
    if(phonegroupid == null || phonegroupid == "" ) {
		 	alert("请选择一个群组");
			return false;
		}else{
			
		}    
  }

  return true;
}

com.linkage.userportal.user.ringlib.isValidPhoneType = function isValidPhoneType(obj1,obj2,obj3,obj4){
   if(obj1 == null) obj1=document.forms[0].phonetype;
   if(obj2 == null) obj2=document.forms[0].oppositephone;
   if(obj3 == null) obj3=document.forms[0].groupserial;
   if(obj4 == null) obj4=document.forms[0].forward;
   
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
   
  if(phonetype==1 || phonetype==4){
  	 if(obj4 != null && obj4.value == "ringgroup"){
	  	 document.forms[0].action="/userportal/ringgroup/userringset_add.action";
	  	 document.forms[0].submit(); 
	  	 return true; 	 	
  	 }else if(obj4 != null && obj4.value == "ringlib"){
  	 	document.forms[0].action="/userportal/myringlib/userringset_add.action";
  	 	return true;
  	 }else{
  	   document.forms[0].action="/userportal/ringset/userringset_add.action"; 	 	
  	   return true;
  	 }

      //return true;
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
  		  phonegroupid = "";
  	}else{
  	  	phonegroupid = obj3.value;
  	}
  	
    if(phonegroupid == null || phonegroupid == "" ) {
		 	alert("请选择一个群组");
			return false;
		}    
  }

  return true;
}

com.linkage.userportal.user.ringlib.changeTimeType = function changeTimeType(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10){
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

com.linkage.userportal.user.ringlib.showTime = function showTime(sForm,textName,selectName,hiddenName){    
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

com.linkage.userportal.user.ringlib.checkTime = function checkTime(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11){
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
    
	}else if(timetype!=6){
		if(timetype == 5){
			 if(!isValidHoliday(document.forms[0].holidayid)){
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

com.linkage.userportal.user.ringlib.checkRingSetInfo = function checkRingSetInfo(obj){
	 if(!com.linkage.userportal.user.ringlib.isValidLooptype()){
	   return false;	
	 }
	 
	 if(!com.linkage.userportal.user.ringlib.isValidPhoneType()){
	    return false;	
	 }
	 if(!com.linkage.userportal.user.ringlib.checkTime()){
	    return false;	
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
		  document.forms[0].yeardes.value="";		  		  	 
		  document.forms[0].monthdes.value="";
		  document.forms[0].weekdes.value="";
		  document.forms[0].daydes.value="";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].starttime.value="";
		  document.forms[0].endtime.value="";
		  
   }else if(timetype == 5){
   	  //按节假日设置		  
		  document.forms[0].yeardes.value="";		  		  	 
		  document.forms[0].monthdes.value="";
		  document.forms[0].weekdes.value="";
		  document.forms[0].daydes.value="";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";		     	
   }else if(timetype == 4){
   	  //按每年设置     	  	  
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";	     	  	  
   }else if(timetype == 3){
   	  //按每月设置 		  
		  document.forms[0].yeardes.value="";		  		  	 
		  document.forms[0].weekdes.value="";
		  document.forms[0].daydes.value="";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";			    	  
   }else if(timetype == 2){
   	  //按每周设置		  
		  document.forms[0].yeardes.value="";		  		  	 
		  document.forms[0].monthdes.value="";
		  document.forms[0].daydes.value="";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";			   	
   }else if(timetype == 1){
   	  //按每天设置	  
		  document.forms[0].yeardes.value="";		  		  	 
		  document.forms[0].monthdes.value="";
		  document.forms[0].weekdes.value="";
		  document.forms[0].daydes.value="";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";			      	
   }
   
	 return true;
}

com.linkage.userportal.user.ringlib.isHouse = function isHouse(year,month,day,house,minute){
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

com.linkage.userportal.user.ringlib.compDate = function compDate(dati)
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
  
com.linkage.userportal.user.ringlib.twobite = function twobite(str)
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
com.linkage.userportal.user.ringlib.isPosInt = function isPosInt(obj){
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
com.linkage.userportal.user.ringlib.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}

com.linkage.userportal.user.ringlib.parseTimes = function parseTimes(times,timetype){
   var returnTime = "";
   
   var parseTime;
   
   if(times != null){
   	 parseTime = times.split(",");   	  
	   if(timetype == 1){
	   	
	   }else if(timetype == 2){   	  
	   	  for(var i=0;i<parseTime.length;i++){
	   	     returnTime = returnTime+parseWeek(parseTime[i])+",";
	   	  }
	   }else if(timetype == 3){
	   	  for(var i=0;i<parseTime.length;i++){
	   	     	returnTime = returnTime+parseTime[i]+"日,";
	   	  }   	
	   }else if(timetype == 4){
	   	
	   }else if(timetype == 5){
	   	
	   }else if(timetype == 6){
	   	
	   }   
	   
	   return returnTime;  
   }else{
   	  return "";
   }
		
}

com.linkage.userportal.user.ringlib.parseWeek = function parseWeek(day){
	 var returnDay = "";
	 var i = parseInt(day);
   switch(i){
     case 1: {returnDay = "周日";return returnDay;}
     case 2: {returnDay = "周一";return returnDay;}
     case 3: {returnDay = "周二";return returnDay;}
     case 4: {returnDay = "周三";return returnDay;}
     case 5: {returnDay = "周四";return returnDay;}
     case 6: {returnDay = "周五";return returnDay;}
     case 7: {returnDay = "周六";return returnDay;}
   } 
  
} 

com.linkage.userportal.user.ringlib.isValidSelRing = function isValidSelRing(sForm,sObj,formAction,opttype){
    formObj = eval('document.'+sForm);
    objName = eval('document.'+sForm+'.'+sObj);
         	       	    
    if(!com.linkage.util.checkBox(formObj,objName)){
       alert("对不起，您没有选择要设置的铃音");
       return false;    	    	
    }
    
    var selinfo = "";     	
    if (formObj == null)
    {
       return false ;
    }
    var count = formObj.elements.length ;
    for(var i=0 ; i<count ;i++){
        var obj = formObj.elements[i] ;        
        if(obj.checked == true && obj.disabled != true) {
          selinfo = selinfo + obj.value + ",";	
        }           
    } 
    
    var ringInfoAry = selinfo.split(",");
        	    
    var ringtypeList ="";
    for(var j=1;j<ringInfoAry.length;j=j+2){
    	 ringtypeList = ringtypeList+ringInfoAry[j]+",";    	 
    }
    
    ringtypeList = trim(ringtypeList);
    var ringTypeCount = ringtypeList.split(",");
    if(opttype == "ringset"){
	    if(ringTypeCount.length > 2){
	       if(ringtypeList.indexOf("2")>=0){
	          alert("音乐盒只能单独设置！");
	          return false;       		
	       }	
	    }
    }else if(opttype== "delringlib"){
	     if(ringtypeList.indexOf("2")>=0){
        if(opttype== "delringlib"){
	          alert("音乐盒不能删除，请到 [我的设置] -> [音乐盒订购管理] 中退订！");
	          return false;        		
	       	}
	     }    	
    }
	  
	  formObj.action=formAction;
    formObj.submit();
    //return true;
}

com.linkage.userportal.user.ringlib.isValidSelRingGroup = function isValidSelRingGroup(sForm,sObj,formAction){
    formObj = eval('document.'+sForm);
    objName = eval('document.'+sForm+'.'+sObj);
         	    
    if(!com.linkage.util.checkBox(formObj,objName)){
       alert("对不起，您没有选择要增加的铃音");
       return false;    	    	
    }
    
    var selinfo = "";     	
    if (formObj == null)
    {
       return false ;
    }
    var count = formObj.elements.length ;
    for(var i=0 ; i<count ;i++){
        var obj = formObj.elements[i] ;        
        if(obj.checked == true && obj.disabled != true) {
          selinfo = selinfo + obj.value + ",";	
        }           
    } 
    
    var ringInfoAry = selinfo.split(",");
        	    
    var ringtypeList ="";
    for(var j=1;j<ringInfoAry.length;j=j+2){
    	 ringtypeList = ringtypeList+ringInfoAry[j]+",";    	 
    }
    
    ringtypeList = trim(ringtypeList);
    var ringTypeCount = ringtypeList.split(",");
    if(ringtypeList.indexOf("2")>=0){
       alert("音乐盒不能作为铃音组成员！");
       return false;
    }	
	  
	  formObj.action=formAction;
    formObj.submit();
    return false;
}

com.linkage.userportal.user.ringlib.isValidCallUserTypeFlag = function isValidCallUserTypeFlag(obj){
	if(obj == null) obj = document.forms[0].callusertypeflag;
	var callusertypeflag = obj.value;
	if(callusertypeflag != null && callusertypeflag == 1){
		if(!isRadioChecked(document.forms[0].callusertype)){
		   alert("请选择主被叫标识！");
		   return false;
		}		
	}
	return true;
}