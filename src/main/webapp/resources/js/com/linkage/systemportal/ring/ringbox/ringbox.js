com.linkage.systemportal.ring.ringbox = new Object();

//选择允许的定购来源
com.linkage.systemportal.ring.ringbox.isValidSellscope=function isValidSellscope(obj){
	if(obj == null) obj = document.forms[0].sellscope;
	var sellscope = obj.value;
	if(sellscope =="-*"||sellscope==null){
		alert("请选择允许的定购来源!");
		return false;
	}
	return true;
}	
	
	
//是否删除此音乐盒铃
com.linkage.systemportal.ring.ringbox.isDleRingBox =function isDleRingBox(){
  if(confirm("删除音乐盒会删除此音乐盒中的铃音!")){
     return true;	
  }
	return false;
}


//音乐盒名称	com.linkage.util.trim
com.linkage.systemportal.ring.ringbox.isValidRingname =function isValidRingname(obj){
	if(obj == null) obj = document.forms[0].ringname;
	var ringname = obj.value;

	if(ringname == ""||ringname==null){
		alert("请输入音乐盒名称!");
		return false;
	}
	return true;
}

//音乐盒价格
com.linkage.systemportal.ring.ringbox.isValidRingBoxPrice = function isValidRingBoxPrice(obj){
	if(obj == null) obj = document.forms[0].price;
	var price = obj.value;
	if(price == null || price == ""){
	  alert("请输入铃音价格！");	
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
com.linkage.systemportal.ring.ringbox.isValidSpid =function isValidSpid(obj){
	if(obj == null) obj = document.forms[0].spid;
	var spid = obj.value;

	if(spid == ""||spid==null){
		alert("请选择SP名称!");
		return false;
	}
	return true;
}

//音乐盒有效期
com.linkage.systemportal.ring.ringbox.isValidValiddate =function isValidValiddate(obj){
	if(obj == null) obj = document.forms[0].validdate;
	var validdate = obj.value;

	if(validdate == ""||validdate==null){
		alert("请输入音乐盒有效期!");
		return false;
	}
		if(!com.linkage.util.dateBECurrent(validdate)){
			alert("音乐盒有效期日期需要大于当前日期！");
			return false;
		}
	return true;
}