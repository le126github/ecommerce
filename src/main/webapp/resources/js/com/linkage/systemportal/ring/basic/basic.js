com.linkage.systemportal.ring.basic = new Object();

//ͬ��ѡ��
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
  	alert("��ѡ��ͬ��!");	
  	return false;  
	}
	
	return true;
}
//����
com.linkage.systemportal.ring.basic.isValidActivityno =function isValidActivityno(obj){
	if(obj == null) obj = document.forms[0].activityno;
	var activityno = obj.value;
	if(activityno == ""||activityno==null){
		alert("���������!");
		return false; 
	}
	if(!com.linkage.util.isInteger(activityno)){
		alert("����ֻ��Ϊ����!");
		return false;	
	}
	return true;
}
//�����
com.linkage.systemportal.ring.basic.isValidActivityname =function isValidActivityname(obj){
	if(obj == null) obj = document.forms[0].activityname;
	var activityname = obj.value;
	if(activityname == ""||activityname==null){
		alert("����������!");
		return false;
	}
	return true;
}
//�Ƽ��������
com.linkage.systemportal.ring.basic.isValidCommendno =function isValidCommendno(obj){
	if(obj == null) obj = document.forms[0].commendno;
	var commendno = obj.value;
	if(commendno == ""||commendno==null){
		alert("�������Ƽ��������!");
		return false;
	}
	if(!com.linkage.util.isInteger(commendno)){
		alert("�Ƽ��������ֻ��Ϊ����!");
		return false;	
	}
	return true;
}

//�Ƽ��������
com.linkage.systemportal.ring.basic.isValidCommendnoNew =function isValidCommendnoNew(obj){
	if(obj == null) obj = document.forms[0].commendnonew;
	var commendnonew = obj.value;
	if(commendnonew == ""||commendnonew==null){
		alert("�������Ƽ��������!");
		return false;
	}
	if(!com.linkage.util.isInteger(commendnonew)){
		alert("�Ƽ��������ֻ��Ϊ����!");
		return false;	
	}
	return true;
}

//������Χ
com.linkage.systemportal.ring.basic.isValidAreano =function isValidAreano(obj){
	if(obj == null) obj = document.forms[0].areano;
	var areano = obj.value;
	if(areano == " "||areano==null){
		alert("��ѡ�������Χ!");
		return false;
	}
	return true;
}

com.linkage.systemportal.ring.basic.isValidRingBoxRingId =function isValidRingBoxRingId(obj){
	if(obj == null) obj = document.forms[0].delringid;
	var delringid = obj.value;
	if(delringid == ""||delringid==null){
		alert("�����������б���!");
		return false;
	}
	if(!com.linkage.util.isInteger(delringid)){
		alert("�����б���ֻ��Ϊ����!");
		return false;	
	}
	if(delringid.length != 12){
	  alert("�����б��볤��ֻ��Ϊ12λ��");	
		obj.select();
		obj.focus();
	  return false;	 		
	}	
	return true;
}


com.linkage.systemportal.ring.basic.isValidRingId =function isValidRingId(){
	var ringid = document.forms[0].ringid.value;
	if(ringid == ""||ringid==null){
		alert("��������������!");
		return false;
	}
	
	ringid=com.linkage.util.full_trim(ringid);
	
	if(!com.linkage.util.isInteger(ringid)){
		alert("��������ֻ��Ϊ����!");
		return false;	
	}
	if(ringid.length != 12){
	  alert("�������볤��ֻ��Ϊ12λ��");	
	  return false;	 		
	}	
	return true;
}

/**���ش���
**/
com.linkage.systemportal.ring.basic.isValiddownloadtimes =function isValiddownloadtimes(obj){
	if(obj == null) obj=document.forms[0].downloadtimes;
	var downloadtimes = obj.value;
	if(downloadtimes == ""||downloadtimes==null){
		alert("���������ش���!");
		return false;
	}
	if(!com.linkage.util.isInteger(downloadtimes)){
		alert("���ش���ֻ��Ϊ����!");
		return false;	
	}
	return true;
}

/**���ô���
**/
com.linkage.systemportal.ring.basic.isValidsettimes =function isValidsettimes(obj){
	if(obj == null) obj=document.forms[0].settimes;
	var settimes = obj.value;
	if(settimes == ""||settimes==null){
		alert("���������ô���!");
		return false;
	}
	if(!com.linkage.util.isInteger(settimes)){
		alert("���ô���ֻ��Ϊ����!");
		return false;	
	}
	return true;
}
com.linkage.systemportal.ring.basic.isValidspno =function isValidspno(){
	var spno =document.forms[0].spno.value;
	if(spno == ""||spno==null){
		alert("ҵ���Ų���Ϊ��!");
		return false;
	}
	
	return true;
}

com.linkage.systemportal.ring.basic.isValidCommendno =function isValidCommendno(){
	var commendno =document.forms[0].commendno.value;
		if(commendno == ""||commendno==null){
		alert("�Ƽ�������Ų���Ϊ��!");
		return false;
	}
			if(!com.linkage.util.isInteger(commendno)){
			alert("�Ƽ��������ֻ��Ϊ����!");
			return false;	
		}
	return true;
}


com.linkage.systemportal.ring.basic.isValidSpid =function isValidSpid(){
	var spid =document.forms[0].spid.value;
		if(spid == ""||spid==null){
		alert("ҵ����벻��Ϊ��!");
		return false;
	}
			if(!com.linkage.util.isInteger(spid)){
			alert("ҵ�����ֻ��Ϊ����!");
			return false;	
		}
	return true;
}

com.linkage.systemportal.ring.basic.isValidRingtype =function isValidRingtype(){
	var ringtype =document.forms[0].ringtype.value;
		if(ringtype == ""||ringtype==null){
		alert("�������Ͳ���Ϊ��!");
		return false;
	}
	return true;
}

com.linkage.systemportal.ring.basic.isValidAreano =function isValidAreano(){
	var areano =document.forms[0].areano.value;
		if(areano == ""||areano==null){
		alert("��ѡ�������Χ!");
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
		alert("��������ʱ�䲻��С�ڴ�����ʼʱ��!");
		return false;
	}

	return true;
}

com.linkage.systemportal.ring.basic.isValidRingnameletter = function isValidRingnameletter(obj){
	if(obj == null) obj = document.forms[0].ringnameletter;
	var ringnameletter = obj.value;
	if(ringnameletter == null || ringnameletter == ""){
	  alert("�������������Ƽ�������ĸ��");	
		obj.select();
		obj.focus();	
		return false;  
	}else{
	  if(trim(ringnameletter).length>1){
		  alert("�������Ƽ�������ĸ���Ȳ��ܳ���1λ��");	
			obj.select();
			obj.focus();	
			return false;	  	
	  }
	  if(!com.linkage.util.isValidAlpha(trim(ringnameletter))){
		  alert("�������Ƽ�������ĸֻ��Ϊ��д��ĸ��");	
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
		 alert("������������ƣ�");	
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
	  alert("������������Ƽ�������ĸ��");	
		obj.select();
		obj.focus();	
		return false;  
	}else{
	  if(trim(singerletter).length>1){
		  alert("�������Ƽ�������ĸ���Ȳ��ܳ���1λ��");	
			obj.select();
			obj.focus();	
			return false;	  
	}
	  if(!com.linkage.util.isValidAlpha(trim(singerletter))){
		  alert("�������Ƽ�������ĸֻ��Ϊ��д��ĸ��");	
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
	  alert("�������������ƣ�");	
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
	  alert("�����������۸�");	
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
		alert("��ѡ����Ч���ڣ�");	
		obj.select();	
		return false;	  			
	}else{
		if(!com.linkage.util.dateBCurrent(validdate)){
		  alert("��Ч���ڱ�����ڵ�ǰ���ڣ�");	
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
	  alert("�������û����룡");	
		obj1.select();
		obj1.focus();	
		return false;		
	}
	
		if(ringid == ""||ringid==null){
			alert("�������������룡");
			obj2.select();
			obj2.focus();			
			return false;
		}
		if(!com.linkage.util.isInteger(ringid)){
			alert("��������ֻ��Ϊ���֣�");
			obj2.select();
			obj2.focus();			
			return false;	
		}
			
	var ringtype;
	if(obj3 == null){
	  alert("��ѡ���������ͣ�");	
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
		  alert("�������볤��ֻ��Ϊ12λ��");	
			obj2.select();
			obj2.focus();
		  return false;	 		
		}		
	}else if(ringtype == 2){
		if(ringid.length != 10){
		  alert("�����б��볤��ֻ��Ϊ10λ��");	
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
		  alert("���������!");	
			obj.select();
			obj.focus();
		  return false;		    	
	 }
	  if ( (/^\d+$/).test(queryactivityno) == false ){
	 		 alert("�������ͱ������������!");
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
     alert("��ѡ��Ҫ�������ֺе�������");	
     return false;
  }
  
  if(existRingInfo != null && existRingInfo != ""){
  	 if(existRingInfo.indexOf(ringid)>=0){
  	   alert("�����ֺ��Ѵ��ڸ�������");	
  	   return false;
  	 }
  }
  
	return true;
}