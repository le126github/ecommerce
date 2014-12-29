com.linkage.systemportal.ring.systemdefault = new Object();

com.linkage.systemportal.ring.systemdefault.onChangeDeftype = function onChangeDeftype(){
   document.forms[0].action="/systemportal/ring/systemdefault/add_prepare.action";
   document.forms[0].submit();	
}



com.linkage.systemportal.ring.systemdefault.isValidDeftype = function isValidDeftype(obj){
	if(obj==null) obj=document.forms[0].deftype;
	var deftype = obj.value;
	if(deftype == -1||deftype == ""||deftype == null){
	   alert("请选择定义类型！");
	   return false;
	}
	return true;
}

com.linkage.systemportal.ring.systemdefault.isValidDate = function isValidDate(obj1,obj2){
	if(obj1==null) obj1=document.forms[0].effectdate;
   	if(obj2==null) obj2=document.forms[0].expiredate;
   	effectdate = obj1.value;
   	expiredate = obj2.value
	var today = new Date();
	var year = today.getYear();
	var month = today.getMonth()+1;
	var day = today.getDate();
	month = month<10?(""+0+month):month;
	day = day<10?(""+0+day):day;
	var todayString = ""+year+"-"+month+"-"+day;
	if(effectdate<todayString){
	   alert("生效时间必须大于等于当前时间！");
	   return false;
	}
	if(effectdate >= expiredate || todayString >= expiredate){
	   alert("失效时间必须大于生效时间和当前时间！");
	   return false;
	}
	return true;
}

com.linkage.systemportal.ring.systemdefault.isValidRingtype = function isValidRingtype(obj){
	if(obj==null) obj=document.forms[0].ringtype;
	var ringType = obj.value;
	 
	
	if(ringType == -1||ringType == ""||ringType == null){
	   alert("请选择铃音类型！");
	   return false;
	}
	return true;
}


com.linkage.systemportal.ring.systemdefault.isVaildRingid = function isVaildRingid(obj){

	if(obj==null) obj=document.forms[0].ringid;
	var ringid = com.linkage.util.trim(obj.value);
	if(ringid == ""){
		alert("请输入铃音编码！");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(/^\d+$/.test(ringid) == false){
		   alert("铃音编码只能为数字！");
		   obj.select();
		   obj.focus();
		   return false;	
		}
		
	}
	
	return true;
}


com.linkage.systemportal.ring.systemdefault.isVaildAreano = function isVaildAreano(obj){

	if(obj==null) obj=document.forms[0].areano;
	var areano = obj.value;
	if(areano == -1){
		alert("请选择属地！");
		return false;
	}
	
	return true;
}

//--------------------------------------------------------------------------
//    description:      判断字符串是正整数
//    name:       isPosInt
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
//
com.linkage.systemportal.ring.systemdefault.isPosInt = function isPosInt(obj){
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
//    description:      去除字符串首尾的空格
//    name:       trim
//    parameters: obj     - source string
//    return:           去除字符串首尾的空格后的字符串
//
com.linkage.systemportal.ring.systemdefault.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}
