com.linkage.systemportal.ring.ringbox = new Object();

//ѡ������Ķ�����Դ
com.linkage.systemportal.ring.ringbox.isValidSellscope=function isValidSellscope(obj){
	if(obj == null) obj = document.forms[0].sellscope;
	var sellscope = obj.value;
	if(sellscope =="-*"||sellscope==null){
		alert("��ѡ������Ķ�����Դ!");
		return false;
	}
	return true;
}	
	
	
//�Ƿ�ɾ�������ֺ���
com.linkage.systemportal.ring.ringbox.isDleRingBox =function isDleRingBox(){
  if(confirm("ɾ�����ֺл�ɾ�������ֺ��е�����!")){
     return true;	
  }
	return false;
}


//���ֺ�����	com.linkage.util.trim
com.linkage.systemportal.ring.ringbox.isValidRingname =function isValidRingname(obj){
	if(obj == null) obj = document.forms[0].ringname;
	var ringname = obj.value;

	if(ringname == ""||ringname==null){
		alert("���������ֺ�����!");
		return false;
	}
	return true;
}

//���ֺм۸�
com.linkage.systemportal.ring.ringbox.isValidRingBoxPrice = function isValidRingBoxPrice(obj){
	if(obj == null) obj = document.forms[0].price;
	var price = obj.value;
	if(price == null || price == ""){
	  alert("�����������۸�");	
		obj.select();
		obj.focus();
	  return false;	  
	}
	if(!com.linkage.util.isMoney(price)){
		obj.select();
		obj.focus();		
		return false;	
	}
	 return true;	
}
//SP����
com.linkage.systemportal.ring.ringbox.isValidSpid =function isValidSpid(obj){
	if(obj == null) obj = document.forms[0].spid;
	var spid = obj.value;

	if(spid == ""||spid==null){
		alert("��ѡ��SP����!");
		return false;
	}
	return true;
}

//���ֺ���Ч��
com.linkage.systemportal.ring.ringbox.isValidValiddate =function isValidValiddate(obj){
	if(obj == null) obj = document.forms[0].validdate;
	var validdate = obj.value;

	if(validdate == ""||validdate==null){
		alert("���������ֺ���Ч��!");
		return false;
	}
		if(!com.linkage.util.dateBECurrent(validdate)){
			alert("���ֺ���Ч��������Ҫ���ڵ�ǰ���ڣ�");
			return false;
		}
	return true;
}