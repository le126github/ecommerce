com.linkage.cooperation.spsource = new Object();

com.linkage.cooperation.spsource.isVaildSourceType = function isVaildSourceType(obj){
	if(obj==null) obj=document.forms[0].sourceType;
	var sourceType = obj.value;
	if(sourceType == ""){
		alert("请输入资源类型！");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(!isPosInt(sourceType)){
		   alert("资源类型只能为数字！");
		   obj.select();
		   obj.focus();
		   return false;	
		}
	}
}

com.linkage.cooperation.spsource.isValidSourceId = function isValidSourceId(obj){
	if(obj==null) obj=document.forms[0].sourceId;
	var sourceId = obj.value;
	if(sourceId == ""){
		alert("请输入资源标识！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}


//--------------------------------------------------------------------------
//    description:      判断字符串是否仅仅是由数字组成
//    name:       isCharNumLine
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
//
com.linkage.cooperation.spsource.isNum = function isValidNum(obj){
	return  isList(obj,"0123456789");
}

//--------------------------------------------------------------------------
//    description:      判断字符串是否仅仅是由指定的字符集合中的字符组成
//    name:       isList
//    parameters: str   - 源字符串
//                sModel      - 指定的字符集合
//    return:           true  - 是
//                false - 否
//
com.linkage.cooperation.spsource.isList = function isList(str,strModel){
	if (str.length==0)
            return false;
      for (i=0;i<str.length;i++){
            var a = str.substr(i,1);
            if (strModel.indexOf(a,0)==-1)
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
com.linkage.cooperation.spsource.isPosInt = function isPosInt(obj){
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
com.linkage.cooperation.spsource.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}