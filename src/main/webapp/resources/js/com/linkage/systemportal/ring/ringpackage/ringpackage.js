com.linkage.systemportal.ring.ringpackage = new Object();

//ѡ������Ķ�����Դ
com.linkage.systemportal.ring.ringpackage.isValidSellscope=function isValidSellscope(obj){
	if(obj == null) obj = document.forms[0].sellscope;
	var sellscope = obj.value;
	if(sellscope =="-*"||sellscope==null){
		alert("��ѡ������Ķ�����Դ!");
		return false;
	}
	return true;
}	
	
//ѡ������Ķ�����Դ
com.linkage.systemportal.ring.ringpackage.isValidRingid = function isValidRingid(obj){
	if(obj == null) obj = document.forms[0].ringid;
	var ringid = obj.value;
	if(ringid == null ||ringid== ""){
		alert("��������������!");
		obj.focus();		
		return false;
	}
	
	if(!com.linkage.util.isInteger(ringid)){
		alert("��������ֻ��Ϊ����!");
		obj.focus();			
		return false;	
	}	
	
	if(ringid.length != 12){
	  alert("�������볤��ֻ��Ϊ12λ��");	
		obj.focus();
	  return false;	 		
	}	
	return true;
}
	
//�Ƿ�ɾ�������ֺ���
com.linkage.systemportal.ring.ringpackage.isDleRingPackage =function isDleRingPackage(){
  if(confirm("ɾ�����ֺл�ɾ���˴�����е�����!")){
     return true;	
  }
	return false;
}


//���ֺ�����	com.linkage.util.trim
com.linkage.systemportal.ring.ringpackage.isValidPackageName =function isValidRingPackageName(obj){
	if(obj == null) obj = document.forms[0].packagename;
	var packagename = obj.value;

	if(packagename == ""||packagename==null){
		alert("���������������!")	
		return false;
	}
	return true;
}

//���ֺм۸�
com.linkage.systemportal.ring.ringpackage.isValidPackagePrice = function isValidPackagePrice(obj){
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
com.linkage.systemportal.ring.ringpackage.isValidSpid =function isValidSpid(obj){
	if(obj == null) obj = document.forms[0].spid;
	var spid = obj.value;

	if(spid == ""||spid==null){
		alert("��ѡ��SP����!");
		return false;
	}
	return true;
}

//���ֺ���Ч��
com.linkage.systemportal.ring.ringpackage.isValidValiddate =function isValidValiddate(obj){
	if(obj == null) obj = document.forms[0].validdate;
	var validdate = obj.value;

	if(validdate == ""||validdate==null){
		alert("������������Ч��!");
		return false;
	}
		if(!com.linkage.util.dateBECurrent(validdate)){
			alert("�������Ч��������Ҫ���ڵ�ǰ���ڣ�");
			return false;
		}
	return true;
}