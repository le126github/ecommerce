com.linkage.systemportal.ring.ringpackage = new Object();

//选择允许的定购来源
com.linkage.systemportal.ring.ringpackage.isValidSellscope=function isValidSellscope(obj){
	if(obj == null) obj = document.forms[0].sellscope;
	var sellscope = obj.value;
	if(sellscope =="-*"||sellscope==null){
		alert("请选择允许的定购来源!");
		return false;
	}
	return true;
}	
	
//选择允许的定购来源
com.linkage.systemportal.ring.ringpackage.isValidRingid = function isValidRingid(obj){
	if(obj == null) obj = document.forms[0].ringid;
	var ringid = obj.value;
	if(ringid == null ||ringid== ""){
		alert("请输入铃音编码!");
		obj.focus();		
		return false;
	}
	
	if(!com.linkage.util.isInteger(ringid)){
		alert("铃音编码只能为数字!");
		obj.focus();			
		return false;	
	}	
	
	if(ringid.length != 12){
	  alert("铃音编码长度只能为12位！");	
		obj.focus();
	  return false;	 		
	}	
	return true;
}
	
//是否删除此音乐盒铃
com.linkage.systemportal.ring.ringpackage.isDleRingPackage =function isDleRingPackage(){
  if(confirm("删除音乐盒会删除此大礼包中的铃音!")){
     return true;	
  }
	return false;
}


//音乐盒名称	com.linkage.util.trim
com.linkage.systemportal.ring.ringpackage.isValidPackageName =function isValidRingPackageName(obj){
	if(obj == null) obj = document.forms[0].packagename;
	var packagename = obj.value;

	if(packagename == ""||packagename==null){
		alert("请输入大礼包名称�!")	
		return false;
	}
	return true;
}

//音乐盒价格
com.linkage.systemportal.ring.ringpackage.isValidPackagePrice = function isValidPackagePrice(obj){
	if(obj == null) obj = document.forms[0].price;
	var price = obj.value;
	if(price == null || price == ""){
	  alert("请输入大礼包价格！");	
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
//SP名称
com.linkage.systemportal.ring.ringpackage.isValidSpid =function isValidSpid(obj){
	if(obj == null) obj = document.forms[0].spid;
	var spid = obj.value;

	if(spid == ""||spid==null){
		alert("请选择SP名称!");
		return false;
	}
	return true;
}

//音乐盒有效期
com.linkage.systemportal.ring.ringpackage.isValidValiddate =function isValidValiddate(obj){
	if(obj == null) obj = document.forms[0].validdate;
	var validdate = obj.value;

	if(validdate == ""||validdate==null){
		alert("请输入大礼包有效期!");
		return false;
	}
		if(!com.linkage.util.dateBECurrent(validdate)){
			alert("大礼包有效期日期需要大于当前日期！");
			return false;
		}
	return true;
}