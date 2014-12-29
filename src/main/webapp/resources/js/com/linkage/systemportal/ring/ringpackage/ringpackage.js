com.linkage.systemportal.ring.ringpackage = new Object();

//Ñ¡ÔñÔÊĞíµÄ¶¨¹ºÀ´Ô´
com.linkage.systemportal.ring.ringpackage.isValidSellscope=function isValidSellscope(obj){
	if(obj == null) obj = document.forms[0].sellscope;
	var sellscope = obj.value;
	if(sellscope =="-*"||sellscope==null){
		alert("ÇëÑ¡ÔñÔÊĞíµÄ¶¨¹ºÀ´Ô´!");
		return false;
	}
	return true;
}	
	
//Ñ¡ÔñÔÊĞíµÄ¶¨¹ºÀ´Ô´
com.linkage.systemportal.ring.ringpackage.isValidRingid = function isValidRingid(obj){
	if(obj == null) obj = document.forms[0].ringid;
	var ringid = obj.value;
	if(ringid == null ||ringid== ""){
		alert("ÇëÊäÈëÁåÒô±àÂë!");
		obj.focus();		
		return false;
	}
	
	if(!com.linkage.util.isInteger(ringid)){
		alert("ÁåÒô±àÂëÖ»ÄÜÎªÊı×Ö!");
		obj.focus();			
		return false;	
	}	
	
	if(ringid.length != 12){
	  alert("ÁåÒô±àÂë³¤¶ÈÖ»ÄÜÎª12Î»£¡");	
		obj.focus();
	  return false;	 		
	}	
	return true;
}
	
//ÊÇ·ñÉ¾³ı´ËÒôÀÖºĞÁå
com.linkage.systemportal.ring.ringpackage.isDleRingPackage =function isDleRingPackage(){
  if(confirm("É¾³ıÒôÀÖºĞ»áÉ¾³ı´Ë´óÀñ°üÖĞµÄÁåÒô!")){
     return true;	
  }
	return false;
}


//ÒôÀÖºĞÃû³Æ	com.linkage.util.trim
com.linkage.systemportal.ring.ringpackage.isValidPackageName =function isValidRingPackageName(obj){
	if(obj == null) obj = document.forms[0].packagename;
	var packagename = obj.value;

	if(packagename == ""||packagename==null){
		alert("ÇëÊäÈë´óÀñ°üÃû³Æå!")	
		return false;
	}
	return true;
}

//ÒôÀÖºĞ¼Û¸ñ
com.linkage.systemportal.ring.ringpackage.isValidPackagePrice = function isValidPackagePrice(obj){
	if(obj == null) obj = document.forms[0].price;
	var price = obj.value;
	if(price == null || price == ""){
	  alert("ÇëÊäÈë´óÀñ°ü¼Û¸ñ£¡");	
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
//SPÃû³Æ
com.linkage.systemportal.ring.ringpackage.isValidSpid =function isValidSpid(obj){
	if(obj == null) obj = document.forms[0].spid;
	var spid = obj.value;

	if(spid == ""||spid==null){
		alert("ÇëÑ¡ÔñSPÃû³Æ!");
		return false;
	}
	return true;
}

//ÒôÀÖºĞÓĞĞ§ÆÚ
com.linkage.systemportal.ring.ringpackage.isValidValiddate =function isValidValiddate(obj){
	if(obj == null) obj = document.forms[0].validdate;
	var validdate = obj.value;

	if(validdate == ""||validdate==null){
		alert("ÇëÊäÈë´óÀñ°üÓĞĞ§ÆÚ!");
		return false;
	}
		if(!com.linkage.util.dateBECurrent(validdate)){
			alert("´óÀñ°üÓĞĞ§ÆÚÈÕÆÚĞèÒª´óÓÚµ±Ç°ÈÕÆÚ£¡");
			return false;
		}
	return true;
}