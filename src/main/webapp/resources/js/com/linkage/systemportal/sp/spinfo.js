com.linkage.systemportal.sp = new Object();

com.linkage.systemportal.sp.isValidSpId = function isValidSpId(obj){
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

com.linkage.systemportal.sp.isValidSpname = function isValidSpname(obj){
  if(obj == null) obj=document.forms[0].spname;
  var spname=obj.value;
  if(spname==null || spname==""){
		alert("������ҵ�����ƣ�");
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
	   alert("������ؼ��֣�");	
	   obj1.select();
	   obj1.focus();
	   return false;
	 }
	 
	 if(queryType == null || queryType ==""){
	   alert("��ѡ���ѯ��ʽ��");	
	   obj2.focus();
	   return false;
	 }else{
	    if(queryType == "1"){
				if(/^\d+$/.test(keyword) == false){
						alert("ҵ�����ֻ��Ϊ���֣�");
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
		alert("������SP�ʺţ�");
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
		alert("���������룡");
		obj.focus();
		obj.select();
		return false;		
	}
	if(passwd_sure==null || passwd_sure==""){
		alert("������ȷ�����룡");
		obj1.focus();
		obj1.select();
		return false;		
	}	
	if (passwd != passwd_sure){
		alert("����ȷ�ϲ�һ�£�");
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
		alert("��������ҵ��ʶ��");
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(corpid) == false){
		alert("��ҵ��ʶֻ��Ϊ���֣�");
		obj.focus();
		return false;  	
  }	
  
  return true;
}

com.linkage.systemportal.sp.isValidCorpName = function isValidCorpName(obj){
  if(obj == null) obj=document.forms[0].corpname;
  var corpname=obj.value;
  if(corpname==null || corpname==""){
		alert("�����빫˾���ƣ�");
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
		alert("�����빫˾��ַ��");
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
		alert("�����빫˾�绰��");
		obj.select();		
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(corptel) == false){
		alert("��˾�绰ֻ��Ϊ���֣�");
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
		alert("�����빫˾���棡");
		obj.select();		
		obj.focus();
		return false;  	 
  }else{ 
  	 corpfax = com.linkage.util.replaceAll(corpfax,"-","");
	   if(/^\d+$/.test(corpfax) == false){
			alert("��˾����ֻ��Ϊ���֣�");
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
		alert("������ͷ��绰��");
		obj.select();		
		obj.focus();
		return false;  	 
  }else if(/^\d+$/.test(customerservicetel) == false){
		alert("�ͷ��绰ֻ��Ϊ���֣�");
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
	  alert("��Ч���ڱ�����ڵ�ǰ���ڣ�");
	 	obj1.select();
		return false; 	
	}
		
	if(!compDate(expiretime)){
	  alert("ʧЧ���ڱ�����ڵ�ǰ���ڣ�");
	 	obj2.select();
		return false;	
	}
	
	if(effecttime > expiretime){
	  alert("ʧЧ���ڱ��������Ч���ڣ�");
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