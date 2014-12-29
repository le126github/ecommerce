com.linkage.util = new Object();


com.linkage.util.isNumber = function isNumber(str) {
	/**
	**		@func		是否为单个数字符(0~9)
	**		@param  String str
	**/
	if ( (/^\d$/g).test(str) == true )  return true;
	return false;
}

com.linkage.util.isNaturalNum = function isNaturalNum(str) {
	if (com.linkage.util.isInteger(str) == false) {
		return false;
	}else if (parseInt(str) == 0) {
		return false;
	}
	return true;
}

com.linkage.util.isInteger = function isInteger(str) {
	/**
	**		@func		是否为整型
	**		@param  String str
	**/
	if (/^\d+$/.test(str) == true) {
		return true;
	}
	return false;
}

com.linkage.util.isRealInteger = function isRealInteger(str){
	/**
	**		@func		是否为整型数值 包括正值和负值
	**		@param  String str
	**/
	if (com.linkage.util.trim(str) == "") {
		return false;
	}
    if (isNaN(str)){
     	return false;
    }
    if (str<-200000||str>200000) {
    	return false;
    }

    var split=str.split(".");
    if(split.length >= 2){
    	return false;
    }
    return true;
}

com.linkage.util.isMoney = function isMoney(str){
	/**
	**		@func		是否为金额型数值
	**		@param  String str
	**/
	if (com.linkage.util.trim(str) == "") return false;
		if (isNaN(str)){
			alert("金额数值不合法！");
			return false;
		}
		if ( (/^[0-9.]+$/g).test(str) == false ) {
			alert("金额数值格式异常！");
			return false;
		}
		if (str<0||str>200000) {
			alert("金额数值必须介于0到200000之间！");
			return false;
		}
		split=str.split(".");
		if(split.length==2){
			if(split[1].length > 2 || split[1]>99){
				alert("金额数值小数点后不能多于2位！");
				return false;
			}
    }else if (split.length > 2){
			alert("金额数值格式异常！");
			return false;
		}
    return true;
}

com.linkage.util.isRealMoney = function isRealMoney(str){
	/**
	**		@func		是否为金额型数值 包括正值和负值
	**		@param  String str
	**/
	if (com.linkage.util.trim(str) == "") return false;
		if (isNaN(str)){
			return false;
		}
		if ( (/^[0-9.-]+$/g).test(str) == false ) {
			alert("金额数值格式异常！");
			return false;
		}
		if (str<-200000||str>200000) {
			alert("金额数值过大或过小！");
			return false;
		}
		split=str.split(".");
		if(split.length==2){
			if(split[1].length > 2 || split[1]>99){
				alert("金额数值小数点后不能多于2位！");
				return false;
			}
    }else {
			alert("金额数值格式异常！");
			return false;
		}
		return true;
}

com.linkage.util.isBankNO = function isBankNO(str){
	/**
	**		@func		是否为银行账号 改名为付费号码
	**		@param  String str
	**/
	var SPECIAL_STR = "- ";
	var BANKNO_STR = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_STR;
	str = com.linkage.util.trim(str);
	if (str == "") {
		alert("付费号码不能为空！");
		return false;
	}
	for(var i=0; i<str.length; i++){
		if ( BANKNO_STR.indexOf( str.charAt(i) ) == -1) {
			alert("请输入正确的付费号码！");
			return false;
		}
	}
	return true;
}

com.linkage.util.isValidBankNO = function isValidBankNO(str){
	/**
	**		@func		是否为银行账号
	**		@param  String str
	**/
	var SPECIAL_STR = "- ";
	var BANKNO_STR = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_STR;
	str = com.linkage.util.trim(str);
	if (str == "") {
		alert("银行帐号不能为空！");
		return false;
	}
	for(var i=0; i<str.length; i++){
		if ( BANKNO_STR.indexOf( str.charAt(i) ) == -1) {
			alert("请输入正确的银行帐号！");
			return false;
		}
	}
	return true;
}

com.linkage.util.isNotChar = function isNotChar(str){
	/**
	**		@func		是否为特殊字符
	**		@param  String str
	**/
	if ((str>='0'&& str<='9')||(str>='a' &&str<='z')||(str>='A'&& str<='Z'))return false;
	else return true;
}

com.linkage.util.hasSpecialChar = function hasSpecialChar(str){
	/**
	**		@func		是否含有特殊字符
	**		@param  String str
	**/
	var SPECIAL_STR = "~!@%^&*()'\"?><[]{}\\|:/=+—“”‘";
    	for(i=0;i<str.length;i++){
    		if (SPECIAL_STR.indexOf(str.charAt(i)) >= 0)
    			return true;
    	}
    	return false;
}

com.linkage.util.isValidNewUserName = function isValidNewUserName(str) {
	/**
	**		@func		是否为合法用户名
	**		@param  String str
	**/
	var SPECIAL_USERNAME_PREFIX = "~!#@$^&_-.|";//同BD_SYS_CONFIG定义的USERNAME_PREFIX保持一致
	var SPECIAL_USERNAME_SUFFIX = "~!#@$^&_-.|";//同BD_SYS_CONFIG定义的USERNAME_SUFFIX保持一致
	var USERNAME_PREFIX = "0123456789abcdefghijklmnopqrstuvwxyz"+SPECIAL_USERNAME_PREFIX;
	var USERNAME_SUFFIX = "0123456789abcdefghijklmnopqrstuvwxyz"+SPECIAL_USERNAME_SUFFIX;
	var MAX_USERNAME_LENGTH = "40";
	//str = com.linkage.util.trim(str);
	if (str == "") {
		alert("客户/用户名不能为空.");
		return false;
	}
	if (str.length > MAX_USERNAME_LENGTH) {
		alert("输入的客户/用户名长度太大.");
		return false;
	}
	if ( USERNAME_PREFIX.indexOf( str.charAt(0) ) == -1) {
		alert("客户/用户名不能以非法字符("+str.charAt(0)+")开头.");
		return false;
	}
	if(str.length > 11 && (/^[0-9]+$/g).test(str) == true){
        alert("客户/用户名不能是11位以上的全数字");
        return false;
    }
	for(var i=1;i<str.length;i++){
		if ( USERNAME_SUFFIX.indexOf( str.charAt(i) ) == -1) {
			alert("输入的客户/用户名含有非法字符("+str.charAt(i)+").");
			return false;
		}
	}
	/*
	if ( (/^[A-Za-z0-9~!#$%^&_-|]+$/g).test(str) == false ) {
		return false;
	}
	*/
	return true;
}

com.linkage.util.isValidUserName = function isValidUserName(str) {
	/**
	**		@func		是否为合法用户名
	**		@param  String str
	**/
	var SPECIAL_USERNAME_PREFIX = "~!#@$^&_-.|";//同BD_SYS_CONFIG定义的USERNAME_PREFIX保持一致
	var SPECIAL_USERNAME_SUFFIX = "~!#@$^&_-.|";//同BD_SYS_CONFIG定义的USERNAME_SUFFIX保持一致
	var USERNAME_PREFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_PREFIX;
	var USERNAME_SUFFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_SUFFIX;
	var MAX_USERNAME_LENGTH = "40";
	//str = com.linkage.util.trim(str);
	if (str == "") {
		alert("客户/用户名不能为空.");
		return false;
	}
	if (str.length > MAX_USERNAME_LENGTH) {
		alert("输入的客户/用户名长度太大.");
		return false;
	}
	if ( USERNAME_PREFIX.indexOf( str.charAt(0) ) == -1) {
		alert("客户/用户名不能以非法字符("+str.charAt(0)+")开头.");
		return false;
	}
	for(var i=1;i<str.length;i++){
		if ( USERNAME_SUFFIX.indexOf( str.charAt(i) ) == -1) {
			alert("输入的客户/用户名含有非法字符("+str.charAt(i)+").");
			return false;
		}
	}
	/*
	if ( (/^[A-Za-z0-9~!#$%^&_-|]+$/g).test(str) == false ) {
		return false;
	}
	*/
	return true;
}

com.linkage.util.isValidQueryUserName = function isValidUserName(str) {
	/**
	**		@func		是否为合法用户名
	**		@param  String str
	**/
	var SPECIAL_USERNAME_PREFIX = "~!#@$%^&_-.|";//同BD_SYS_CONFIG定义的USERNAME_PREFIX保持一致
	var SPECIAL_USERNAME_SUFFIX = "~!#@$%^&_-.|";//同BD_SYS_CONFIG定义的USERNAME_SUFFIX保持一致
	var USERNAME_PREFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_PREFIX;
	var USERNAME_SUFFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_SUFFIX;
	var MAX_USERNAME_LENGTH = "40";
	//str = com.linkage.util.trim(str);
	if (str == "") {
		alert("客户/用户名不能为空.");
		return false;
	}
	if (str.length > MAX_USERNAME_LENGTH) {
		alert("输入的客户/用户名长度太大.");
		return false;
	}
	if ( USERNAME_PREFIX.indexOf( str.charAt(0) ) == -1) {
		alert("客户/用户名不能以非法字符("+str.charAt(0)+")开头.");
		return false;
	}
	for(var i=1;i<str.length;i++){
		if ( USERNAME_SUFFIX.indexOf( str.charAt(i) ) == -1) {
			alert("输入的客户/用户名含有非法字符("+str.charAt(i)+").");
		return false;
		}
	}

	var temp = str;
	var i = temp.indexOf('%');
	if (i != -1) {
		var cnt = 0;
		do {
			temp = temp.substring(i+1);
			cnt++;
			i = temp.indexOf('%');
		} while (i != -1);
		if (str.length - cnt <2) {
			alert("查询客户/用户名请至少输入两位非通配符字符！");
			return false;
		}
	}
	/*
	if ( (/^[A-Za-z0-9~!#$%^&_-|]+$/g).test(str) == false ) {
		return false;
	}
	*/
	return true;
}

com.linkage.util.isValidPassword = function isValidPassword(str) {
	/**
	**		@func		是否为合法密码
	**		@param  String str
	**/
	if (str == null || str == "") {
		alert("密码不可以为空！");
		return false;
	}
	if (!(/^[\x00-\xff]+$/.test(str))) {
		alert("密码含有非法字符！");
		return false;
	}
	if (str.length < 4) {
		alert("请输入4位以上密码！");
		return false;
	}
	if (str.length > 15) {
		alert("请输入15位以下密码！");
		return false;
	}
	if (str.indexOf(" ") >= 0) {
		alert("密码不能含有空格！");
		return false;
	}
	var i = 0;
	var equ_cnt  = 1;
	var decr_cnt = 1;
	var incr_cnt = 1;
	var temp  = str.charAt(0);//相等
	var decr_str = str.charAt(0);//递减
	var incr_str = str.charAt(0);//递增
	var length = str.length;
	for (i = 1; i < length; i++) {
		if (temp == str.charAt(i)) {
			equ_cnt++;
		} else {break;}
	}
	if (equ_cnt == length || decr_cnt == length || incr_cnt == length) {
		alert("输入的密码太简单，请重新输入！");
		return false;
	}
	return true;
}

com.linkage.util.isValidAdminPassword = function isValidAdminPassword(str) {
	/**
	**		@func		是否为有效的管理员密码
	**		@param  String str
	**/
	//至少８位，不长于30位，不与帐号同名，至少有一位是数字至少有一个特殊字符。
    if(str.length<8){
        alert("请输入8位以上密码");
        return false;
    }
	if (str.length > 15) {
		alert("请输入15位以下密码！");
		return false;
	}
   var  nochar=0;
    for(i=0;i<15;i++){

        if(com.linkage.util.isNotChar(str.charAt(i))){
            nochar++;
        }
    }
    if(nochar==0){
        alert("你的管理员密码至少应有一个特殊字符");
        return false;
    }
    return true;
}

com.linkage.util.isValidUserPassword = function isValidUserPassword(password, username){
	/**
	**		@func		是否为有效的密码
	**    需要判断是否和用户名相同
	**    或者是用户名的倒叙
	**		@param  String password密码; username用户名
	**/

	if (!com.linkage.util.isValidPassword(password)) {
	        return false;
	}

	if (username == null) {
	        username = "";
	} else {
	        username = com.linkage.util.trim(username);
	}
	var pwd_length = password.length;
	var name_length = username.length;

	var reversal_cnt = 0;
	if (pwd_length == name_length) {
	        if (password.toLowerCase() == username.toLowerCase()) {
	                alert("密码不能和名字相同！");
	                return false;
	        }
	        for (var i = 0; i < pwd_length; i++) {
	                if (password.charAt(i).toLowerCase() == username.charAt(name_length-1-i).toLowerCase()) {
	                        reversal_cnt++;
	                } else {
	                        break;
	                }
	        }
	}
	if (reversal_cnt == pwd_length) {
	        alert("密码不能是名字的倒序，请重新输入！");
	        return false;
	}
	return true;
}

com.linkage.util.isValidEmail = function isValidEmail(str) {
	/**
	**		@func		是否为合法Email
	**		@param  String str
	**/
	str = com.linkage.util.trim(str);
	len = str.length;
	//没有@或者@在首尾
	if((str.indexOf('@') == -1)||(str.indexOf('@') == 0)||(str.indexOf('@') == len-1))
  	return false;
	if(str.indexOf('@') != str.lastIndexOf('@'))
  	return false;
	if(str.indexOf('.') == -1)
  	return false;
  if (str.lastIndexOf('.') == (len-1) )//'.'在最后一位
  	return false;
  for(var j=0;j<len-1;j++){//判断是否有".."或者"@."
  	if( (str.charAt(j) == '.' && str.charAt(j+1) == '.') ||( str.charAt(j) == '@' && str.charAt(j+1) == '.' ) )
    	return false;
  	}
	validstr = "1234567890abcdefghijklmnopqrstuvwxyz_-.~@$#";
  lowerstr = str.toLowerCase();
  for(i=0;i<len;i++){
  	if(validstr.indexOf(lowerstr.charAt(i)) == -1){
    	return false;
    	}
 	}
 	return true;
}

com.linkage.util.isValidDate = function isValidDate(str) {
	/**
	**		@func		是否为合法日期
	**		@param  String str
	**/
	var dateArr = str.split("-");
	if (dateArr.length != 3 ) return false;
	for (i=0;i<3;i++){
		if (!com.linkage.util.isInteger(dateArr[i]))
			return false;
	}
	return true;
}

com.linkage.util.isValidData = function isValidData(strData,strInfo) {
	/**
	**		@func		是否为合法数据
	**		@param  String str
	**/
	if (strInfo == null) strInfo="";
	else strInfo = "["+strInfo+"]";
	if (strData == null || strData == ""){
		alert("输入数据"+strInfo+"不能为空！");
		return false;
	}
	if (strData.indexOf("'") >= 0){
		alert("输入数据"+strInfo+"内不能含有[']！");
		return false;
	}
}

com.linkage.util.isPhoneNumber = function isPhoneNumber(str,n,strInfo){
	/**
	**		@func		是否为指定长度的电话号码
	**		@param  String str
	**						int n 电话位数
	**						strInfo 提示信息
	**/
	if (strInfo == null || strInfo == "") strInfo = "联系电话";
	if(!com.linkage.util.isInteger(str)) {
		alert("请输入正确的"+strInfo+"！");
		return false;
	}
	if (n > 0) {
		if (str.length != n) {
			alert(strInfo+"长度不正确！");
			return false;
		}
	}else { //n=0
		n = str.length;
		if (n != 7 && n != 8 && n != 11) {
			alert(strInfo+"长度不正确！");
			return false;
		}
	}

	if (n == 7 || n == 8 ) {
		if (str.indexOf("0")==0  || str.indexOf("1")==0 || str.indexOf("9")==0) {
			alert("请输入正确的"+strInfo+"！");
			return false;
		}
	}
	return true;
}

com.linkage.util.isValidGsmNumber = function isValidGsmNumber(str){
	/**
	**		@func		是否为正确的手机号码
	**		@param  String str
	**/
	if(!com.linkage.util.isInteger(str)) {
		alert("请输入正确的手机号码！");
		return false;
	}
	if (str.length != 11) {
		alert("手机号码长度不正确！");
		return false;
	}
	if(str.indexOf("13") != 0) {
		alert("手机号码开始段不正确！");
		return false;
	}
	return true;
}

com.linkage.util.isGsmOrPhone = function isGsmOrPhone(str){
 /**
	**		@func		判断是否是手机号码或者电话号码
	**		@param  String str
	**/
	//alert("str的值为："+str);
	if(str!=null && str!=""){
	    if(str.length==11){//如果是手机号码
	        var isGsm = com.linkage.util.isInteger(str);
	        //alert("11位手机校验成功");
            if(isGsm==true)
               return true;
	        else
	             return false;
	    }else if(str.indexOf("-")==-1){ //如果是电话号码，不校验长度
            //if(str.length==7 || str.length==8){
                var isPhone = com.linkage.util.isInteger(str);
	         	//alert("7位固定电话校验成功");
	         	if(isPhone==true)
	         	    return true;
	         	else
	         	    return false;
            //}
        }else if(str.indexOf("-")!=-1){//如果是电话号码且有分机号码
            //alert("str的值为："+str);
            var arrayStr=new Array(2);
            arrayStr = str.split("-");
            //alert("arrayStr[0]的值为："+arrayStr[0]);
            //alert("arrayStr[1]的值为："+arrayStr[1]);
            if(arrayStr.length < 2 || arrayStr.length >2)
                return  false;
            else{
                //if((arrayStr[0].length==7 || arrayStr[0].length==8) && (arrayStr[1].length==4))
                if((arrayStr[0].length==7 || arrayStr[0].length==8)){
                    var isFirstPhone = com.linkage.util.isInteger(arrayStr[0]);
                    var isSecondPhone =  com.linkage.util.isInteger(arrayStr[1]);
                    //alert("固定电话分机校验成功");
                    if(isFirstPhone==true && isSecondPhone==true)
                        return true;
                    else
                       return false;
                }
            }
	   }
    }else{
        return false;
    }
}

com.linkage.util.isValidPhone = function isValidPhone(str){
 /**
	**		@func		判断号码是否有效
	**		@param  String str
	**/
var contactTelephone=str;
//alert("isValidPhone()中contactTelephone的值为："+contactTelephone);
if(com.linkage.util.isGsmOrPhone(contactTelephone)==true)
   return true;
else
	 return false;
}

com.linkage.util.isValidIP = function isValidIP(str) {
	/**
	**		@func		是否为合法IP地址
	**		@param  String str
	**/
	str = com.linkage.util.trim(str);
	temp = str.split('.');
   	if(temp.length != 4){
      		return false;
   	}
   	else{
      		for(i=0;i<temp.length;i++){
         		if((!com.linkage.util.isInteger(temp[i]))||(temp[i]<0)||(temp[i]>255)){
	    			return false;
	 		}
      		}
   	}
   return true;
}

com.linkage.util.isValidIDCard = function isValidIDCard(s) {
	/**
	**		@func		检查身份证的合法性
	**		@param  String str
	**/

	s = com.linkage.util.trim(s);
	if(s.length==15){
	  for(i=0;i<s.length;i++) {
	    if(!(com.linkage.util.isNumber(s.charAt(i)))){
	      return false;
	    }
	  }
	  return true;
	}	else if(s.length==18){
	  for(i=0;i<s.length-1;i++) {
	  	if(!(com.linkage.util.isNumber(s.charAt(i)))){
	   		return false;
	  	}
	  }
	  return true;
	}
	return false
}

com.linkage.util.dateBDate = function dateBDate(date1,date2) {
	/**
	**		@func		日期date1是否大于date2
	**		@param  String date1, String date2
	**/
	if (date1.length > 10 ) date1 = date1.substring(0,10);
	if (date2.length > 10 ) date2 = date2.substring(0,10);
	if (!com.linkage.util.isValidDate(date1) || !com.linkage.util.isValidDate(date2)) return false;
	var date1Arr = date1.split("-");
	var date2Arr = date2.split("-");
	var year1 = parseInt(date1Arr[0]);
	var month1 = parseInt(date1Arr[1]*1);
	var date1 = parseInt(date1Arr[2]*1);
	var year2 = parseInt(date2Arr[0]);
	var month2 = parseInt(date2Arr[1]*1);
	var date2 = parseInt(date2Arr[2]*1);

	if (year1 < year2) return false;
	if (year1 == year2){//年相等，判断月
		if(month1 < month2) return false;
		if(month1 == month2){//月相等，判断日
			if (date1 < date2) return false;
		}
	}
	return true;
}

com.linkage.util.dateBEDate = function dateBEDate(date1,date2) {
	/**
	**		@func		日期date1是否大于等于date2
	**		@param  String date1, String date2
	**/
	if (date1.length > 10 ) date1 = date1.substring(0,10);
	if (date2.length > 10 ) date2 = date2.substring(0,10);
	if (!com.linkage.util.isValidDate(date1) || !com.linkage.util.isValidDate(date2)) return false;
	var date1Arr = date1.split("-");
	var date2Arr = date2.split("-");
	var year1 = parseInt(date1Arr[0]);
	var month1 = parseInt(date1Arr[1]*1);
	var date1 = parseInt(date1Arr[2]*1);
	var year2 = parseInt(date2Arr[0]);
	var month2 = parseInt(date2Arr[1]*1);
	var date2 = parseInt(date2Arr[2]*1);

	if (year1 < year2) return false;
	if (year1 == year2){//年相等，判断月
		if(month1 < month2) return false;
		if(month1 == month2){//月相等，判断日
			if (date1 < date2) return false;
		}
	}
	return true;
}

com.linkage.util.dateEQDate = function dateEQDate(date1,date2) {
	/**
	**		@func		日期date1是否等于date2
	**		@param  String date1, String date2
	**/
	if (date1.length > 10 ) date1 = date1.substring(0,10);
	if (date2.length > 10 ) date2 = date2.substring(0,10);
	if (!com.linkage.util.isValidDate(date1) || !com.linkage.util.isValidDate(date2)) return false;
	var date1Arr = date1.split("-");
	var date2Arr = date2.split("-");
	var year1 = parseInt(date1Arr[0]);
	var month1 = parseInt(date1Arr[1]*1);
	var date1 = parseInt(date1Arr[2]*1);
	var year2 = parseInt(date2Arr[0]);
	var month2 = parseInt(date2Arr[1]*1);
	var date2 = parseInt(date2Arr[2]*1);

	if ((year1 != year2)||(month1 != month2)||(date1 != date2)) {
		 return false;
	}
	return true;
}

com.linkage.util.dateBECurrent = function dateBECurrent(date1) {
	/**
	**		@func		日期date1是否大于等于当前日期
	**		@param  String date1
	**/
	if (date1.length > 10 ) date1 = date1.substring(0,10);
	if (!com.linkage.util.isValidDate(date1)) return false;
	var currentDate = new Date();
	var cYear = currentDate.getYear();
	var cMonth = currentDate.getMonth()+1;
	var cDate = currentDate.getDate();
	var dateArr = date1.split("-");
	var year = parseInt(dateArr[0]);
	var month = parseInt(dateArr[1]*1);
	var date = parseInt(dateArr[2]*1);
	if (year < cYear) return false;
	if (year == cYear){//年相等，判断月
		if(month < cMonth) return false;
		if(month == cMonth){//月相等，判断日
			if (date < cDate) return false;
		}
	}
	return true;
}

com.linkage.util.dateBCurrent = function dateBCurrent(date1) {
	/**
	**		@func		日期date1是否大于当前日期
	**		@param  String date1
	**/
	if (date1.length > 10 ) date1 = date1.substring(0,10);
	if (!com.linkage.util.isValidDate(date1)) return false;
	var currentDate = new Date();
	var cYear = currentDate.getYear();
	var cMonth = currentDate.getMonth()+1;
	var cDate = currentDate.getDate();
	var dateArr = date1.split("-");
	var year = parseInt(dateArr[0]);
	var month = parseInt(dateArr[1]*1);
	var date = parseInt(dateArr[2]*1);
	if (year < cYear) return false;
	if (year == cYear){//年相等，判断月
		if(month < cMonth) return false;
		if(month == cMonth){//月相等，判断日
			if (date <= cDate) return false;
		}
	}
	return true;
}

com.linkage.util.trim = function trim(str) {
	/**
	**		@func		截取空格
	**		@param  String str
	**		@return String
	**/
	var i = 0;
	while ((i < str.length)&&((str.charAt(i) == " ")||(str.charAt(i) == "　"))){i++;}
	var j = str.length-1;
	while ((j >= 0)&&((str.charAt(j) == " ")||(str.charAt(j) == "　"))){j--;}
	if( i > j ) return "";
	else return str.substring(i,j+1);
}

com.linkage.util.full_trim = function full_trim(str) {
	/**
	**		@func		去所有空格（包括字符串内）
	**		@param  String str
	**		@return String
	**/
	var strTemp1 = str;
	var strTemp = "";
	strTemp1 = strTemp1.split(" ");
	for (i = 0 ; i < strTemp1.length; i++) {
		strTemp = strTemp + strTemp1[i];
	}
	//alert("%"+strTemp+"%");
	return strTemp;
}

com.linkage.util.OutPut = function OutPut(type,content,title,buttonflag) {
	/**
	**		@func		标准输出方式
	**		@param  String type 标识提醒类型
	**						String content 内容
	**						String title 标题
	**						String buttonflag 是否有返回按钮
	**/
	//未完全修改 2005/6/13
	/*分析参数个数*/
	if (arguments.length < 4){
		document.writeln("<center><h3>JavaScript方法<font color=blue>[OutPut]</font>调用错误：没有给全参数</h3></center>");
		return;
	}
	if(!((type=="error")||(type=="alert")||(type=="info")||(type=="confirm"))){
		document.writeln("<center><h3>JavaScript方法<font color=blue>[OutPut]</font>调用错误：无效的类型</h3></center>");
		return;
	}
	if(content.length==0){
		document.writeln("<center><h3>JavaScript方法<font color=blue>[OutPut]</font>调用错误：内容为空</h3></center>");
		return;
	}
	document.writeln("<center>");
	document.writeln("<table cellpadding=0 cellspacing=0 width=48% bgcolor=#777777 align=center>");
	document.writeln("<tr><td><table cellpadding=2 cellspacing=1 width=100%>");
	document.writeln("<tr><td bgcolor=\"#6699cc\" width=100% align=center valign=middle>");
	if(type=="error"){
			document.writeln("<font color=red><b><h4>");
			if(title.length==0)
				document.writeln("错误信息：");
			else
				document.writeln(title);
			document.writeln("</h4></b></font>");

	}
	if(type=="alert"){
		document.writeln("<font color=yellow><b><h4>");
		if(title.length==0)
			document.writeln("警告信息：");
		else
			document.writeln(title);
		document.writeln("</h4></b></font>");
	}
	if(type=="info"){
		document.writeln("<font color=green><b><h4>");
		if(title.length==0)
			document.writeln("提示信息：");
		else
			document.writeln(title);
		document.writeln("</h4></b></font>");
	}
	if(type=="confirm"){
		document.writeln("<font color=blue><b><h4>");
		if(title.length==0)
			document.writeln("确认信息：");
		else
			document.writeln(title);
		document.writeln("</h4></b></font>");
	}

	document.writeln("<td bgcolor=#3A6EA5 width=8% align=center>");
	/*显示相应的图标*/
	if(type=="error"){
		document.writeln("<img src=\"../../images/error.gif\" ");
	}
	if(type=="alert"){
		document.writeln("<img src=\"../../images/alert.gif\" ");
	}
	if(type=="info"){
		document.writeln("<img src=\"../../images/message.gif\" ");
	}
	if(type=="confirm"){
		document.writeln("<img src=\"../../images/ask.gif\" ");
	}

	document.writeln("border=0 width=36 height=36></td>");

	document.writeln("<tr><td colspan=2 bgcolor=#DFE7DF  align=center>");
	document.writeln("<br><font face=\"楷体_GB2312\" size=\"4\" color=\"#000000\">");
	document.writeln(content);
	document.writeln("</font><p>");
	if(buttonflag=="false"){}
	else{
		document.writeln("<input type=\"Button\" value=\"  返  回  \" onclick=\"history.back()\" class=\"s03\">");
	}
	document.writeln("</td></tr></table></td></tr></table></center>");
}

com.linkage.util.IP = function IP(obj) {
	/**
	**		@func
	**		@param  Object obj
	**/
	obj.value=obj.value.replace(/[^\d]/g,'')
	key1=event.keyCode;
	//alert(key1);
	if (key1 < 48 || key1 > 57) {
		if ( key1 == 190) { // 按. 跳到下一个地址栏
			obj.blur();
			nextip=parseInt(obj.name.substr(2,1))+1;
			if (nextip >= 5) nextip = 1;
			else if (nextip <= 0) nextip = 4
			eval("roominfo.ip"+nextip+".focus()");
			eval("roominfo.ip"+nextip+".select()");
			return;
		} else if (key1 == 37 || key1 == 39) {
			obj.blur();
			nextip=parseInt(obj.name.substr(2,1))
			nextip=(key1==37)?(nextip-1):(nextip+1);
			if (nextip >= 5) nextip = 1;
			else if (nextip <= 0) nextip = 4
			eval("roominfo.ip"+nextip+".focus()");
			eval("roominfo.ip"+nextip+".select()");
			return;
		} else if (key1 == 9) {
			obj.blur();
			nextip=parseInt(obj.name.substr(2,1));
			if (nextip >= 5) nextip = 1;
			else if (nextip <= 0) nextip = 4
			eval("roominfo.ip"+nextip+".focus()");
			eval("roominfo.ip"+nextip+".select()");
			return;
		} else return false;
	}
	if(obj.value.length>=3) {
	    if(parseInt(obj.value)>=256  ||  parseInt(obj.value)<=0) {
	        alert(parseInt(obj.value)+": IP地址错误！");
	        obj.value="";
	        obj.focus();
	        obj.select();
	        return  false;
	    }
	    else {
	        obj.blur();
	        nextip=parseInt(obj.name.substr(2,1))+1;
	        if (nextip >= 5) nextip = 1;
	        else if (nextip <= 0) nextip = 4
	        eval("roominfo.ip"+nextip+".focus()");
	        eval("roominfo.ip"+nextip+".select()");
	        return;
	    }
	}
}

com.linkage.util.checkTextLen = function checkTextLen(str){
	var len;
	var i;
	len = 0;
	for (i=0;i<str.length;i++){
		if (str.charCodeAt(i)>255) len+=2; else len++;
	}
	return len;
}

com.linkage.util.isRadioChecked = function isRadioChecked(obj){
	if(obj.length>1){
		for(var i=0;i<obj.length;i++){
			if(obj[i].checked){
				return true;
			}
		}
	}else{
		if(obj.checked)
		return true;
	}
	return false;
}

com.linkage.util.selectAll = function selectAll(sForm,sName){
     formObj = eval('document.'+sForm);
     objName = eval('document.'+sForm+'.'+sName);
     if(objName == null){
        return false;
     }
     if (objName.value != null){
        if (formObj.allline.checked == true){
            objName.checked = true;
        }
        else {
            objName.checked = false;
        }
     }
     else{
        if(formObj.allline.checked == true){
            for(var i=0; i<objName.length;i++){
                objName[i].checked = true;
            }
        }
        else{
            for(var i=0; i<objName.length;i++){
                objName[i].checked = false;
            }
        }
     }
 }

com.linkage.util.unselectAll = function unselectAll(sForm,sName){
     formObj = eval('document.'+sForm);
     objName = eval('document.'+sForm+'.'+sName);
     if(objName == null){
        return false;
     }
    if(formObj.allline != null){
    if (formObj.allline.checked == true){
        if (objName.checked == false)
            formObj.allline.checked = false;
    }    	
    }

 }
 
com.linkage.util.submitForm = function submitForm(sForm,sName,method,url){
        formObj = eval('document.'+sForm);
    checkboxObj = eval('document.'+sForm+'.'+sName);
    if(!checkBox(formObj,checkboxObj)){
        if(method=="ring") {
            alert("对不起，您没有选择要设置的铃音");
            return false;
        }else if(method=="set") {
            alert("对不起，您没有选择要设置的铃音");
            return false;
        }else if(method=="restore") {
            alert("对不起，您没有选择要恢复的记录");
            return false;
        }else if(method=="clear") {
            alert("对不起，您没有选择要清除的记录");
            return false;
        }else if(method=="unregister") {
            alert("对不起，您没有选择要注销的记录");
            return false;
        }else if(method=="del"){
            alert("对不起，您没有选择要删除的铃音");
            return false;
        }else if(method=="check"){
            alert("对不起，您没有选择要审核的铃音");
            return false;
        }else if(method=="spcommend"){
            alert("对不起，您没有选择要删除的铃音推荐排行");
            return false;
        }else if(method=="topring"){
            alert("对不起，您没有选择要删除的铃音排行");
            return false;
        }else if(method=="addRingMember"){
            alert("对不起，您没有选择要增加的铃音");
            return false;
        }else if(method=="delRingMember"){
            alert("对不起，您没有选择要删除的铃音");
            return false;
        }else if(method=="delRingLib"){
            alert("对不起，您没有选择要删除的铃音");
            return false;
        }else if(method=="delRingGroup"){
            alert("对不起，您没有选择要删除的铃音组");
            return false;
        }else if(method=="delPhoneGroup"){
            alert("对不起，您没有选择要删除的号码群组");
            return false;
        }else if(method=="delRingSet"){
            alert("对不起，您没有选择要删除的铃音设置");
            return false;
        }else if(method=="salezonering"){
            alert("对不起，您没有选择要删除的活动");
            return false;
        }else if(method=="delSaleCode"){
            alert("对不起，您没有选择要删除的短编码");
            return false;
        }else if(method=="ringcheckpass"){
            alert("对不起，您没有选择要审核的铃音");
            return false;
        }else if(method=="ringchecknopass"){
            alert("对不起，您没有选择要驳回的铃音");
            return false;
        }
          
    } else {
        if(method=="delSaleCode") {
            if (!confirm("您确定要删除选择的短编码吗？"))
            return false;
        }    	
        if(method=="delRingSet") {
            if (!confirm("您确定要删除选择的铃音设置吗？"))
            return false;
        }    	
        if(method=="delRingMember") {
            if (!confirm("您确定要删除选择的铃音吗？"))
            return false;
        }
        if(method=="delRingLib"){
            if (!confirm("要删除的铃音可能已进行铃音设置，是否确定删除？"))
            return false;        	 
        }
        if(method=="delRingGroup"){
            if (!confirm("要删除的铃音组可能已进行铃音设置，是否确定删除？"))
            return false;         	
        } 
        if(method=="delPhoneGroup"){
            if (!confirm("删除号码群组将会删除所有组员，是否确定删除？"))
            return false;        	
        } 
        if(method=="copyRing") {
            if (!confirm("您确定要复制已选择的铃音吗？"))
            return false;
        }                     
        if(method=="del") {
            if (!confirm("您确定要删除选择的记录吗？"))
            return false;
        }
       if(method=="clear") {
            if (!confirm("警告：被清除的记录将不能被恢复，您确定要删除选择的记录吗？"))
            return false;
        }
      if(method=="unregister") {
            if (!confirm("您确定要注销选择的记录吗？"))
            return false;
        }

        formObj.action=url;

        formObj.submit();
    }
}

com.linkage.util.checkBox = function checkBox(formObj ,boxName){

    if (formObj == null)
    {
         return false ;
    }
    var count = formObj.elements.length ;
    for(var i=0 ; i<count ;i++){
        var e = formObj.elements[i] ;
        if(e.checked == true && e.disabled != true) return true ;
    }
    return false ;
}

	/**
	**		@func		替换所有字符（包括字符串内）
	**		@param  String source 源字符串
	**		@param  String source 希望替换的源字符
	**		@param  String source 需要替换的目标字符		
	**		@return String
	**/
com.linkage.util.replaceAll = function replaceAll(source,beRep,rep)
{
   var start = source.indexOf(beRep);
   if(start >=0){
      var result = source.replace(beRep,rep);
      return replaceAll(result,beRep,rep);
   }
   else{
      return source;
   }
}

	/**
	**		@func		铃音试听
	**		@param  String ringid 铃音编码
	**		@param  String uploadtype 上传类型
	**		@param  String audittype  审核状态		
	**    @param  String auditiontype  试听类型
	**		@return String
	**/
com.linkage.util.showRing =  function showRing(ringid,uploadtype,audittype,auditiontype,winName,features){
	var theRingURL = '/systemportal/Listen.jsp?ringid='+ringid+"&uploadtype="+uploadtype+"&audittype="+audittype+"&auditiontype="+auditiontype;
  window.open(theRingURL,winName,features);		
}

	/**
	**		@func		校验字符串是否为大写字母
	**		@param  String str 字符串
	**		@return boolean
	**/
com.linkage.util.isValidAlpha = function isValidAlpha(str){
   var abcd = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   if(str!=null && str!="")	{
   	  for(var i=0;i<str.length;i++){
    		if(abcd.indexOf(str.charAt(i)) >= 0){
    			 return true;
    		}
    			return false;   	  	
   	  }
   }
   return false;
}

	/**
	**		@func		打开新页面
	**		@param  String url 新页面url
	**		@param  String w 新页面width
	**		@param  String h 新页面height
	**		@return void
	**/
com.linkage.util.windowOpen = function windowOpen(url,w,h){
  window.open (url,'newwindow', 'width='+w+', height='+h+', top=0, left=262, toolbar=no,menubar=no, scrollbars=no,resizable=no,location=no, status=no');	
}
/**
	**		@func   处理过程中按钮灰掉
	**		@param  Object obj 按钮对象
	**		@return true
	**/
com.linkage.util.btnDisable=function btnDisable(btnsubmit,btncancel){
		  btnsubmit.disabled=true;
		  btncancel.disabled=true;
		  return true;
		}	
		
/**
	**		@func  日期联动
	**		@param  Object selectedmonth 月份
	**      @param  Object daytomonth 日期
	**		@return true
	**/	
//初始化日期和月份	
com.linkage.util.initedMonth=function initedMonth(beginmonth,endmonth,beginday,endday){
	 for(var i=1;i<13;i++){
	    if(i<=9){
	     beginmonth.options.add(new Option( i + "月", "0"+i));
	     endmonth.options.add(new Option( i + "月", "0"+i));
	    }
	    else{
	     beginmonth.options.add(new Option( i + "月", i));
	     endmonth.options.add(new Option( i + "月", i));
	    }
	   }
	 for(i=1;i<32;i++){
	  beginday.options.add(new Option( i + "日", i));
	  endday.options.add(new Option( i + "日", i));
	  }
	}	
	
//判断是否是闰平年	
com.linkage.util.IsPinYear=function IsPinYear(year)//判断是否闰平年
    {   return(0 == year%4 && (year%100 !=0 || year%400 == 0));}

//清空当前对象列表options    
com.linkage.util.optionsClear=function optionsClear(e)
     {
      for (var i=e.options.length; i>=0; i--)
        e.remove(i);

      }

//按月份写日期列表     
com.linkage.util.writeDay=function writeDay(selectedmonth,daytomonth)  //据条件写日期的下拉框
     {   
     MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
     var now= new Date();
     var year=now.getYear();
     var montheselected=parseInt(selectedmonth.options[selectedmonth.selectedIndex].value);
     optionsClear(daytomonth);
     
     if(selectedmonth.options[selectedmonth.selectedIndex].value=="08")
       montheselected=8;
     if(selectedmonth.options[selectedmonth.selectedIndex].value=="09")
       montheselected=9; 
     
     var daycount=MonHead[montheselected - 1];
     if (montheselected ==2 && IsPinYear(year)) daycount++;
     optionsClear(daytomonth);
     for (var j=1; j<(daycount+1); j++)
       daytomonth.options.add(new Option(j + "日", j));
     } 
        
//校验开始日期是否小于结束日期 包括时分判断   
com.linkage.util.compareDate=function compareDate(date1,date2)
  {
  if(!dateBDate(date1,date2))
  return false
  //获取小时和分钟
  var date1String=date1.substring(10,15);
  var date2String=date2.substring(10,15);

  date1time=date1String.split(":");
  date2time=date2String.split(":");
  //提取小时和分钟值
  hour1=parseInt(date1time[0]);
  minutes1=parseInt(date1time[1]*1);
  hour2=parseInt(date2time[0]);
  minutes2=parseInt(date2time[1]*1);
  
  //比较小时和分钟
  if(hour1<hour2)
  return false
  if(hour1==hour2){
    if(minutes1<minutes2)
    return false;
  }
  return true;
  }  
  
  //判断开始日期是否小于结束日期
com.linkage.util.checkTimetwo = function checkTimetwo(startyear,endyear,startmonth,endmonth,startdate,enddate,starthour,endhour,startminutes,endminutes){
  
  //获取系统当前日期作为默认日期
  var now= new Date();
  var year=now.getYear();
  var month=now.getMonth()+1;
  var day=now.getDate();
 
  //如果对象为空设置值为当前日期
  if(startyear==null)
  startyear=year;
  if(endyear==null)
  endyear=year;
  if(startmonth==null)
  startmonth=month;
  if(endmonth==null)
  endmonth=month;
  if(startdate==null)
  startdate=day;
  if(enddate==null)
  enddate=day;
  
  //设置month为标准MM格式
  if(startmonth.length<2)
  startmonth="0"+startmonth;
  if(endmonth.length<2)
  endmonth="0"+endmonth;
  
  //设置date成标准DD格式
  if(startdate.length<2)
  startdate="0"+startdate;
  if(enddate.length<2)
  enddate="0"+enddate;
  
  //设置hour成标准hh格式
  if(starthour.length<2)
  starthour="0"+starthour;
  if(endhour.length<2)
  endhour="0"+endhour;
  
  //设置minutes成标准mm格式
  if(startminutes.length<2)
  startminutes="0"+startminutes;
  if(endminutes.length<2)
  endminutes="0"+endminutes;
  
  //拼接日期字符串
  datebegin=startyear+"-"+startmonth+"-"+startdate+starthour+":"+startminutes;
  dateend=endyear+"-"+endmonth+"-"+enddate+endhour+":"+endminutes;

  //如果小于则返回false
  if(!compareDate(dateend,datebegin))
  return false;
  else
  return true;
}
  
   