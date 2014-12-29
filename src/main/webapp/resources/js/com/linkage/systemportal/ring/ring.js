com.linkage.systemportal.ring = new Object();

	/**
	** ÅÐ¶ÏÊÇ·ñÕý³£×´Ì¬
	**/
com.linkage.systemportal.ring.CheckType = function CheckType(obj1){
    if(obj1 == null) obj1 = document.forms[0].checktype;
    var checktype = obj1.value;
    if(checktype == "1"){
        document.all("div_normal_pause").style.display = "";
        document.all("div_close").style.display = "none";
    }
    else {
        document.all("div_normal_pause").style.display = "none";
        document.all("div_close").style.display = "";
    }
   
}