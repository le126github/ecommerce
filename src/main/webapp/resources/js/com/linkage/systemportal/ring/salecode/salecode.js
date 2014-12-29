com.linkage.systemportal.ring.salecode = new Object();

com.linkage.systemportal.ring.salecode.isValidSpId = function isValidSpId(obj){
  if(obj == null) obj=document.forms[0].spid;
  var spid=obj.value;
  if(spid==null || spid==""){
		alert("������ҵ����룡");
		obj.select();
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(spid) == false){
		alert("ҵ�����ֻ��Ϊ���֣�");
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
		alert("�����������룡");
		obj.select();
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(accesscode) == false){
		alert("�������ֻ��Ϊ���֣�");
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
		alert("������Ӫ���̱�ţ�");
		obj.select();
		obj.focus();
		return false;  	
  }else if(/^\d+$/.test(salecode) == false){
		alert("Ӫ���̱��ֻ��Ϊ���֣�");
		obj.select();
		obj.focus();
		return false;  	
  }
  salecode = trim(salecode);
  if(salecode.length>10){
		alert("Ӫ���̱�ų��Ȳ��ܳ���10λ��");
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
		alert("��������������!");
		obj.select();
		obj.focus();
		return false;		
	}
	if(!com.linkage.util.isInteger(ringid)){
		alert("��������ֻ��Ϊ����!");
		obj.select();
		obj.focus();
		return false;			
	}
	if(ringid.length != 12){
	  alert("�������볤��ֻ��Ϊ12λ��");	
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
		alert("���������ֺб���!");
		obj.select();
		obj.focus();
		return false;		
	}
	if(!com.linkage.util.isInteger(ringid)){
		alert("���ֺб���ֻ��Ϊ����!");
		obj.select();
		obj.focus();
		return false;			
	}
	if(ringid.length != 10){
	  alert("���ֺб��볤��ֻ��Ϊ10λ��");	
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
		alert("���������������");
		obj.select();
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(saletimes) == false){
		alert("��������ֻ��Ϊ���֣�");
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
		alert("����������û�����");
		obj.select();
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(saleusernum) == false){
		alert("�����û���ֻ��Ϊ���֣�");
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
		alert("��ѡ�������ʼʱ�䣡");	
		obj1.select();	
		return false;	  			
	}else{
		if(!com.linkage.util.dateBECurrent(starttime)){
		  alert("������ʼʱ�������ڻ���ڵ�ǰʱ�䣡");	
		  obj1.select();			
		  return false;
		}
	}
	
	if(endtime == null || endtime == ""){
		alert("��ѡ���������ʱ�䣡");	
		obj2.select();	
		return false;	  			
	}else{
		if(!com.linkage.util.dateBECurrent(endtime)){
		  alert("��������ʱ�������ڻ���ڵ�ǰʱ�䣡");	
		  obj2.select();			
		  return false;
		}
	}	
	
  if(!com.linkage.util.dateBDate(endtime,starttime)){
		  alert("��������ʱ�������ڴ�����ʼʱ�䣡");	
		  obj2.select();			
		  return false;  	
  }
	return true;
}

com.linkage.systemportal.ring.salecode.isValidSaletype = function isValidSaletype(obj){
	 if(obj == null) obj=document.forms[0].saletype;
	 var saletype = obj.value;
	 if(saletype == null || saletype == "" || saletype == "-*"){
	   alert("��ѡ��Ӫ�����ͣ�");	
	   obj.focus();
	   return false;
	 }	
}

com.linkage.systemportal.ring.salecode.isValidrRingtype = function isValidRingtype(obj){
	 if(obj == null) obj=document.forms[0].ringtype;
	 var ringtype = obj.value;
	 if(ringtype == null || ringtype =="" || ringtype == "-*"){
	   alert("��ѡ���������ͣ�");	
	   obj.focus();
	   return false;
	 }	
}

com.linkage.systemportal.ring.salecode.isValidrAreano = function isValidAreano(obj){
	 if(obj == null) obj=document.forms[0].areano;
	 var areano = obj.value;
	 if(areano == null || areano =="" || areano == "-*"){
	   alert("��ѡ�������Χ��");	
	   obj.focus();
	   return false;
	 }	
}

com.linkage.systemportal.ring.salecode.initInfo = function initInfo(){
	var message = document.forms[0].process_result_message.value;
	if(message != null){
		if(message == "��Ӫ���̱����ѱ�ʹ��,����������" || message == "��Ӫ���̱������ʹ��"){
			alert(message+"��");
		}
	}
}

com.linkage.systemportal.ring.salecode.checkSaleCode = function checkSaleCode(){
	var salecode = document.forms[0].salecode.value;
	if(salecode == null || salecode == ""){		
	  alert("������Ӫ���̱�ţ�");	
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
//    description:      ȥ���ַ�����β�Ŀո�
//    name:       trim
//    parameters: obj     - source string
//    return:           ȥ���ַ�����β�Ŀո����ַ���
//
com.linkage.systemportal.ring.salecode.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}