com.linkage.systemportal.corp.ringset = new Object();

com.linkage.systemportal.corp.ringset.initField = function initField(obj1,obj2,obj3){
	if(obj1 == null) obj1 = document.forms[0].queryType;
	if(obj2 == null) obj2 = document.all("div_corp");
	if(obj3 == null) obj3 = document.all("div_dept");
		
	if(obj1.value == null || obj1.value == ""){
	   obj1.value == 1;
	}
	
	if(obj1.value == 1){
		 obj2.style.display = "";
		 obj3.style.display = "none";
	}else if(obj1.value == 2){
		 obj2.style.display = "none";
		 obj3.style.display = "";		
	}
}

com.linkage.systemportal.corp.ringset.initRingSetField = function initRingSetField(obj1,obj2,obj3,obj4,obj5,obj6){
  com.linkage.systemportal.corp.ringset.changePhoneType();
  com.linkage.systemportal.corp.ringset.changeTimeType();
  
  if(obj1 == null) obj1=document.forms[0].starttime;
  if(obj2 == null) obj2=document.forms[0].endtime;
  
  //������ʼʱ��
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

com.linkage.systemportal.corp.ringset.initBasicInfo = function initBasicInfo(obj1,obj2,obj3,obj4,obj5,obj6){
  if(obj1 == null) obj1=document.all("basic_default");
  if(obj2 == null) obj2=document.all("basic_nodefault");
  
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
	  	 if(phonetype==1){
	  	  obj1.style.display = "";	
	  	  obj2.style.display = "none"	;  	 	
	  	 }else{
	  	 	obj1.style.display = "none";
	  	 	obj2.style.display = ""	; 
	  	 }	  	
	   	 obj4.style.display = "none";   
		   obj5.style.display = "none";
	  }else if(phonetype==2){
	  	 obj1.style.display = "none"
	  	 obj2.style.display = ""
	   	 obj4.style.display = "";   
		   obj5.style.display = "none";
	  }else if(phonetype==3){
	  	 obj1.style.display = "none"
	  	 obj2.style.display = ""	  	
	   	 obj4.style.display = "none";   
		   obj5.style.display = "";
	  }   	
  }   
}

com.linkage.systemportal.corp.ringset.initTimeInfo = function initTimeInfo(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13,obj14,obj15,obj16,obj17){
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
   if(obj16 == null) obj16=document.all("begyearnew_div");	
   if(obj17 == null) obj17=document.all("endyearnew_div");	
      	 
   
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
   	  //������ʱ������
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "none";
		  obj8.style.display = "none";
		  obj9.style.display = "";
		  obj10.style.display = ""; 
		  obj16.style.display = "none";
		  obj17.style.display = "none";
   }else if(timetype == 5){
   	  //���ڼ�������
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none"; 
			obj16.style.display = "none";
		  obj17.style.display = "none";  	     	
   }else if(timetype == 4){
   	  //��ÿ������   	  
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "none";
		  obj8.style.display = "none";
		  obj9.style.display = "none";
		  obj10.style.display = "none";   
		  obj16.style.display = "";
		  obj17.style.display = "";  	  	  
   }else if(timetype == 3){
   	  //��ÿ������
		  obj2.style.display = "none";   
	    obj3.style.display = "";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none";  
			obj16.style.display = "none";
		  obj17.style.display = "none";  			  
		  document.forms[0].months.value = parseTimes(document.forms[0].daydes.value,3);		    	  
   }else if(timetype == 2){
   	  //��ÿ������
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
   	  //��ÿ������
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none";	
			obj16.style.display = "none";
		  obj17.style.display = "none";  			      	
   }   
}

com.linkage.systemportal.corp.ringset.isVaildCorpId = function isVaildCorpId(obj){
	if(obj==null) obj=document.forms[0].corpid;
	var corpid = obj.value;
	if(corpid == ""){
		alert("�����뼯�ű��룡");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(!isPosInt(corpid)){
		   alert("���ű���ֻ��Ϊ���֣�");
		   obj.select();
		   obj.focus();
		   return false;	
		}
	}
	return true;
}
com.linkage.systemportal.corp.ringset.isValidCallCorpType = function isValidCallCorpType(obj){
	if(!isRadioChecked(document.forms[0].callcorptype)){
	   alert("��ѡ�������б�ʶ��");
	   return false;
	}
	return true;
}

com.linkage.systemportal.corp.ringset.isValidQueryType = function isValidQueryType(obj){
	if(!isRadioChecked(document.forms[0].queryType)){
	   alert("��ѡ���ѯ��ʽ��");
	   return false;
	}
	return true;
}
	
com.linkage.systemportal.corp.ringset.isRadioChecked = function isRadioChecked(obj){
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

com.linkage.systemportal.corp.ringset.isVaildDeptInfoId = function isVaildDeptInfoId(obj){
	if(obj==null) obj=document.forms[0].deptinfoid;
	var deptinfoid = obj.value;
	if(deptinfoid == ""){
		alert("�����벿�ű�ʶ��");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.systemportal.corp.ringset.changeQueryType = function changeQueryType(obj1,obj2,obj3){
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

com.linkage.systemportal.corp.ringset.checkQueryInfo = function  checkQueryInfo(obj){
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
    	 if(!com.linkage.systemportal.corp.ringset.isVaildCorpId(document.forms[0].corpid)){
    	     return false;	
    	 }
    	 if(!com.linkage.systemportal.corp.ringset.isValidCallCorpType(document.forms[0].callcorptype)){
    	     return false;	
    	 } 
    	 document.forms[0].deptinfoid.value="";    	 
    }else if(queryType == 2){
    	 if(!com.linkage.systemportal.corp.ringset.isVaildDeptInfoId(document.forms[0].deptinfoid)){
    	     return false;	
    	 }  
    	 document.forms[0].corpid.value="";
    	 document.forms[0].callcorptype.value="";  	
    }	
    
    return true;
}

com.linkage.systemportal.corp.ringset.changePhoneType = function changePhoneType(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13){
	 if(obj1 == null) obj1=document.forms[0].phonetype;
	 if(obj2 == null) obj2=document.all("ringset_div");
   if(obj3 == null) obj3=document.all("groupset_div");	
      
   if(obj4 == null) obj4=document.all("basic_default");
   if(obj5 == null) obj5=document.all("basic_nodefault"); 
         
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
	    
	  	obj4.style.display = "";
	  	obj5.style.display = "none";		  	    
   }else if(phonetype==2){
   	  obj2.style.display = "";   
	    obj3.style.display = "none";
	    	    
	  	obj4.style.display = "none";
	  	obj5.style.display = "";	
	  		    	    
   }else if(phonetype==3){
   	  obj2.style.display = "none";   
	    obj3.style.display = "";
	    
	  	obj4.style.display = "none";
	  	obj5.style.display = "";			    
   }else if(phonetype==5){
   	  obj2.style.display = "none";   
	    obj3.style.display = "none"; 
	    
	  	obj4.style.display = "none";
	  	obj5.style.display = "";	 	      	
   }   
}

com.linkage.systemportal.corp.ringset.isValidLooptype = function isValidLooptype(){
	if(document.forms[0].ringtype.value == 2){
	  if(!isRadioChecked(document.forms[0].looptype)){
		   alert("��ѡ���������ŷ�ʽ");
		   return false;
		}		
	}   
	return true;
	 
}


com.linkage.systemportal.corp.ringset.isValidPhoneTypeCorpDept = function isValidPhoneTypeCorpDept(obj1,obj2,obj3){
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
     alert("�����ú�������");	
     return false;
   }
   
  var portaltype = document.forms[0].portaltype.value;
  if(phonetype==1 || phonetype==4){
  	if(portaltype != null && portaltype=="systemportal"){
  		 document.forms[0].action="/systemportal/corp/phonemembdef/query_mod_corpringset_addsubmit_corpdept.action"; 
  	}else if(portaltype != null && portaltype=="corpportal"){
  		 document.forms[0].action="/corpportal/ringset/mod_ringSet_addSubmit.action"; 
  	} 	
  	return true;
  }else if(phonetype == 2){
		var oppositephone = obj2.value;
		if(oppositephone == ""){
			alert("���������к��룡");
			obj2.select();
			obj2.focus();
			return false;
		}else{
			if(/^\d+$/.test(oppositephone) == false){
			   alert("���к���ֻ��Ϊ���֣�");
			   obj2.select();
			   obj2.focus();
			   return false;	
			}			
		}  	

  }else if(phonetype == 3){
  	var phonegroupid;
  	if(obj3 == null){
  		alert("û��Ⱥ���ѡ��");
  		return false;
  	}else{
  		phonegroupid = obj3.value;
  	}
  	if (phonegroupid == null || phonegroupid == "" ) {
				alert("��ѡ��һ��Ⱥ�飡");
				obj3.focus();
				return false;
			}    	  
  }

  return true;
}

com.linkage.systemportal.corp.ringset.isValidPhoneTypeCorp = function isValidPhoneTypeCorp(obj1,obj2,obj3){
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
     alert("�����ú�������");	
     return false;
   }
   
  var portaltype = document.forms[0].portaltype.value;
  if(phonetype==1 || phonetype==4){
  	if(portaltype != null && portaltype=="systemportal"){
  		 document.forms[0].action="/systemportal/corp/phonememb/query_mod_corpringset_addsubmit_corp.action"; 
  	}else if(portaltype != null && portaltype=="corpportal"){
  		 document.forms[0].action="/corpportal/ringset/mod_ringSet_addSubmit.action"; 
  	} 	
  	return true;
  }else if(phonetype == 2){
		var oppositephone = obj2.value;
		if(oppositephone == ""){
			alert("���������к��룡");
			obj2.select();
			obj2.focus();
			return false;
		}else{
			if(/^\d+$/.test(oppositephone) == false){
			   alert("���к���ֻ��Ϊ���֣�");
			   obj2.select();
			   obj2.focus();
			   return false;	
			}			
		}  	

  }else if(phonetype == 3){
  	var phonegroupid;
  	if(obj3 == null){
  		alert("û��Ⱥ���ѡ��");
  		return false;
  	}else{
  		phonegroupid = obj3.value;
  	}
  	if (phonegroupid == null || phonegroupid == "" ) {
				alert("��ѡ��һ��Ⱥ�飡");
				obj3.focus();
				return false;
			}    	  
  }

  return true;
}

com.linkage.systemportal.corp.ringset.isValidPhoneType = function isValidPhoneType(obj1,obj2,obj3){
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
     alert("�����ú�������");	
     return false;
   }
   
  var portaltype = document.forms[0].portaltype.value;
  if(phonetype==1 || phonetype==4){
  	if(portaltype != null && portaltype=="systemportal"){
  		 document.forms[0].action="/systemportal/corp/ringset/mod_corpringset_addsubmit.action"; 
  	}else if(portaltype != null && portaltype=="corpportal"){
  		 document.forms[0].action="/corpportal/ringset/mod_ringSet_addSubmit.action"; 
  	} 	
  	return true;
  }else if(phonetype == 2){
		var oppositephone = obj2.value;
		if(oppositephone == ""){
			alert("���������к��룡");
			obj2.select();
			obj2.focus();
			return false;
		}else{
			if(/^\d+$/.test(oppositephone) == false){
			   alert("���к���ֻ��Ϊ���֣�");
			   obj2.select();
			   obj2.focus();
			   return false;	
			}			
		}  	

  }else if(phonetype == 3){
  	var phonegroupid;
  	if(obj3 == null){
  		alert("û��Ⱥ���ѡ��");
  		return false;
  	}else{
  		phonegroupid = obj3.value;
  	}
  	if (phonegroupid == null || phonegroupid == "" ) {
				alert("��ѡ��һ��Ⱥ�飡");
				obj3.focus();
				return false;
			}    	  
  }

  return true;
}

com.linkage.systemportal.corp.ringset.changeTimeType = function changeTimeType(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj16,obj17){
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
   if(obj16 == null) obj16=document.all("begyearnew_div");	
   if(obj17 == null) obj17=document.all("endyearnew_div");	
   var timetype = obj1.value;
   if(obj1.length>1){
    for(var i=0;i<obj1.length;i++){
	    if(obj1[i].checked){
	    	timetype = obj1[i].value;
	    }
	  }
   }   
   
   if(timetype == 6){
   	  //������ʱ������
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "none";
		  obj8.style.display = "none";
		  obj9.style.display = "";
		  obj10.style.display = ""; 
		  obj16.style.display = "none";
		  obj17.style.display = "none";		  
   }else if(timetype == 5){
   	  //���ڼ�������
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none"; 
		  obj16.style.display = "none";
		  obj17.style.display = "none";			  	     	
   }else if(timetype == 4){
   	  //��ÿ������   	  
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "none";
		  obj8.style.display = "none";
		  obj9.style.display = "none";
		  obj10.style.display = "none"; 
		  obj16.style.display = "";
		  obj17.style.display = "";	    	  	  
   }else if(timetype == 3){
   	  //��ÿ������
		  obj2.style.display = "none";   
	    obj3.style.display = "";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none";  
		  obj16.style.display = "none";
		  obj17.style.display = "none";	    		    	  
   }else if(timetype == 2){
   	  //��ÿ������
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = ""; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none"; 
		  obj16.style.display = "none";
		  obj17.style.display = "none";	 		   	
   }else if(timetype == 1){
   	  //��ÿ������
		  obj2.style.display = "none";   
	    obj3.style.display = "none";
		  obj4.style.display = "none"; 
		  obj5.style.display = "none";
		  obj6.style.display = "none";
		  obj7.style.display = "";
		  obj8.style.display = "";
		  obj9.style.display = "none";
		  obj10.style.display = "none";		
		  obj16.style.display = "none";
		  obj17.style.display = "none";		      	
   }
   
   
}

com.linkage.systemportal.corp.ringset.showTime = function showTime(sForm,textName,selectName,hiddenName){    
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

com.linkage.systemportal.corp.ringset.checkTime = function checkTime(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12){
	
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
		  	
	if(!isRadioChecked(obj1)){
	   alert("��ѡ��ʱ�����÷�ʽ��");
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
		   alert("�����뿪ʼ����!")	;
		   return false;
		 }	 
		 if(bdate!=""){       
		   var bdates = bdate.split("-");	
		   strBhouse = isHouse(bdates[0],bdates[1],bdates[2],twobite(beginhour),twobite(beginsecond));
		   begindate = bdates[0]+bdates[1]+bdates[2]+twobite(beginhour)+twobite(beginsecond);
	     if(strBhouse == "1"){
	       alert("���뿪ʼʱ���Сʱ���Ϸ�");
				 obj6.select();
				 obj6.focus(); 
				 return false;     	
	     }else if(strBhouse == "2"){
	       alert("���뿪ʼʱ��ķ��Ӳ��Ϸ�");
				 obj7.select();
				 obj7.focus(); 
				 return false;   	
	     }else if(strBhouse == "3"){
	     	 alert("���뿪ʼʱ�������ڵ�ǰʱ��");
	     	 return false;
	     }		   
		 }
		 if(edate==""){
		   alert("�������������!")	;
		   return false;
		 }		 
		 if(edate!=""){       
		   var edates = edate.split("-");	
		   strEhouse = isHouse(edates[0],edates[1],edates[2],twobite(endhour),twobite(endsecond));
		   enddate = edates[0]+edates[1]+edates[2]+twobite(endhour)+twobite(endsecond);
	     if(strEhouse == "1"){
	       alert("�������ʱ���Сʱ���Ϸ�");
				 obj8.select();
				 obj8.focus(); 
				 return false;     	
	     }else if(strEhouse == "2"){
	       alert("�������ʱ��ķ��Ӳ��Ϸ�");
				 obj9.select();
				 obj9.focus(); 
				 return false;   	
	     }else if(strEhouse == "3"){
	     	 alert("�������ʱ�������ڵ�ǰʱ��");
	     	 return false;
	     }		   
		 }
		 
    if(begindate>=enddate){
      alert("��ʼʱ�����С�ڽ���ʱ��"); 
			return false;      	 
    }		
    
    document.forms[0].begindate.value=bdate+" "+twobite(beginhour)+":"+twobite(beginsecond)+":00";
    document.forms[0].enddate.value=edate+" "+twobite(endhour)+":"+twobite(endsecond)+":59";
    
	}else{
		if(timetype == 2){
			 if(trim(document.forms[0].weeks.value)==""){
				 alert("������ÿ����������ʱ��Σ�");	
				 return false;
			}
	  }if(timetype == 3){
			 if(trim(document.forms[0].months.value)==""){
				  alert("������ÿ����������ʱ��Σ�");	
				  return false;				
			 }
		}if(timetype == 5){
			 if(document.forms[0].holidayid.value==""){
				  alert("�����ýڼ�����������ʱ��Σ�");	
				  return false;				
			 }
		}	
			
    strBhouse = isHouse("","","",bhour,bsecond);
    if(strBhouse == "1"){
      alert("���뿪ʼʱ�̵�Сʱ���Ϸ�");
			obj2.select();
			obj2.focus(); 
			return false;     	
    }else if(strBhouse == "2"){
      alert("���뿪ʼʱ�̵ķ��Ӳ��Ϸ�");
			obj3.select();
			obj3.focus(); 
			return false;   	
    }
    
    strEhouse = isHouse("","","",ehour,esecond);
    if(strEhouse == "1"){
      alert("�������ʱ�̵�Сʱ���Ϸ�");
			obj4.select();
			obj4.focus(); 
			return false;      	
    }else if(strEhouse == "2"){
      alert("�������ʱ�̵ķ��Ӳ��Ϸ�");
			obj5.select();
			obj5.focus(); 
			return false;    	
    }
    
    var starttime = ""+twobite(bhour)+":"+twobite(bsecond);
    var endtime = ""+twobite(ehour)+":"+twobite(esecond);  
    
    if(starttime>=endtime){
      alert("��ʼʱ�̱���С�ڽ���ʱ��"); 
			return false;      	 
    }
    
    document.forms[0].starttime.value=starttime+":00";
    document.forms[0].endtime.value=endtime+":59";
    
	}
	return true;
}

com.linkage.systemportal.corp.ringset.checkRingSetInfo = function checkRingSetInfo(obj,obj1){
	 if(!com.linkage.systemportal.corp.ringset.isValidLooptype()){
	   return false;	
	 }

	 if(!com.linkage.systemportal.corp.ringset.isValidPhoneType()){
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
		 if(!com.linkage.systemportal.corp.ringset.checkTime()){
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
   	  //������ʱ������	  
		  document.forms[0].yeardes.value="0";		  		  	 
		  document.forms[0].monthdes.value="0";
		  document.forms[0].weekdes.value="0";
		  document.forms[0].daydes.value="0";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].starttime.value="";
		  document.forms[0].endtime.value="";
		  
   }else if(timetype == 5){
   	  //���ڼ�������		  
		  document.forms[0].yeardes.value="0";		  		  	 
		  document.forms[0].monthdes.value="0";
		  document.forms[0].weekdes.value="0";
		  document.forms[0].daydes.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";		     	
   }else if(timetype == 4){
   	  //��ÿ������     	  	  
		  document.forms[0].yeardes.value="1~9999";		  		  	 
		  document.forms[0].monthdes.value="0";
		  document.forms[0].weekdes.value="0";
		  document.forms[0].daydes.value="0";   	  
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";	     	  	  
   }else if(timetype == 3){
   	  //��ÿ������ 		  
		  document.forms[0].yeardes.value="0";		  		  	 
		  document.forms[0].weekdes.value="1~9999";
		  //document.forms[0].daydes.value="";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";			    	  
   }else if(timetype == 2){
   	  //��ÿ������		  
		  document.forms[0].yeardes.value="";		  		  	 
		  document.forms[0].monthdes.value="";
		  //document.forms[0].daydes.value="";
		  document.forms[0].holidayid.value="0";
		  document.forms[0].begindate.value="";
		  document.forms[0].enddate.value="";			   	
   }else if(timetype == 1){
   	  //��ÿ������	  
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

com.linkage.systemportal.corp.ringset.isHouse = function isHouse(year,month,day,house,minute){
  var intHouse =parseInt(house,10);
  var intMinute=parseInt(minute,10);

	//�ж�Сʱ�Ƿ�Ϸ�
	if((!isPosInt(house)) || intHouse < 0 || intHouse > 23){
		return "1";//"Сʱ���Ϸ�";
	}
	//�жϷ����Ƿ�Ϸ�
	if((!isPosInt(minute)) || intMinute < 0 || intMinute > 59){
		return "2";//"���Ӳ��Ϸ�";
	}
	//�ж����Ƿ�Ϸ�

	if(year!="" && month!="" && day!=""){
	  var intYear = parseInt(year,10);
	  var intMonth = parseInt(month,10);
	  var intDay = parseInt(day,10);
		var dati=""+intYear+twobite(intMonth)+twobite(intDay)+twobite(intHouse)+twobite(intMinute);
		//�жϿ�ʼʱ���Ƿ�С�ڵ�ǰʱ��
	  if(!compDate(dati))
	  {
	    return "3";
	  }	  		
	}

	  return "";
}

com.linkage.systemportal.corp.ringset.compDate = function compDate(dati)
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
  
com.linkage.systemportal.corp.ringset.twobite = function twobite(str)
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
//    description:      �ж��ַ�����������
//    name:       isPosInt
//    parameters: obj   - Դ�ַ���
//    return:           true  - ��
//                false - ��
//
com.linkage.systemportal.corp.ringset.isPosInt = function isPosInt(obj){
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
//    description:      ȥ���ַ�����β�Ŀո�
//    name:       trim
//    parameters: obj     - source string
//    return:           ȥ���ַ�����β�Ŀո����ַ���
//
com.linkage.systemportal.corp.ringset.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}

com.linkage.systemportal.corp.ringset.queryPrepare = function queryPrepare(){
	var obj = document.forms[0].queryCorpid;
	var corpid = obj.value;
	if(corpid == null || corpid == ""){
		alert("�����뼯�ű��룡");
		obj.select();
		obj.focus();
		return false;	
	}
	
   document.forms[0].action="/systemportal/corp/ringset/query_prepare.action";
   document.forms[0].submit();
}

com.linkage.systemportal.corp.ringset.modQueryPrepare = function modQueryPrepare(){
	var obj = document.forms[0].queryCorpid;
	var corpid = obj.value;
	if(corpid == null || corpid == ""){
		alert("�����뼯�ű��룡");
		obj.select();
		obj.focus();
		return false;	
	}
	
   document.forms[0].action="/systemportal/corp/ringset/mod_query_prepare.action";
   document.forms[0].submit();
}




//���鰴������ʱ�Ŀ�ʼ����ʱ��У��
com.linkage.systemportal.corp.ringset.checkTimeRingSet = function checkTimeRingSet()
{
 var startmonth=document.forms[0].beginmonth.value;
 var endmonth=document.forms[0].endmonth.value;
 
 var startdate=document.forms[0].beginday.value;
 var enddate=document.forms[0].endday.value;
 
 var startminutes=document.forms[0].bneweginsecond.value;
 var endminutes=document.forms[0].endnewsecond.value;
 
 var starthour=document.forms[0].bneweginhour.value;
 var endhour=document.forms[0].endnewhour.value;
 
 strBhouse = isHouse("","","",starthour,startminutes);
    if(strBhouse == "1"){
      alert("���뿪ʼʱ�̵�Сʱ���Ϸ�");
			return false;     	
    }else if(strBhouse == "2"){
      alert("���뿪ʼʱ�̵ķ��Ӳ��Ϸ�");
			return false;   	
    }
    
    strEhouse = isHouse("","","",endhour,endminutes);
    if(strEhouse == "1"){
      alert("�������ʱ�̵�Сʱ���Ϸ�");
			return false;      	
    }else if(strEhouse == "2"){
      alert("�������ʱ�̵ķ��Ӳ��Ϸ�");
			return false;    	
    }
 
 if(!com.linkage.util.checkTimetwo(null,null,startmonth,endmonth,startdate,enddate,starthour,endhour,startminutes,endminutes)){
 alert("��ʼʱ�����С�ڽ���ʱ��");
 return false;
 }
 return true;
}