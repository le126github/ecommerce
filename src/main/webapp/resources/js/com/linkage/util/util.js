com.linkage.util = new Object();


com.linkage.util.isNumber = function isNumber(str) {
	/**
	**		@func		�Ƿ�Ϊ�������ַ�(0~9)
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
	**		@func		�Ƿ�Ϊ����
	**		@param  String str
	**/
	if (/^\d+$/.test(str) == true) {
		return true;
	}
	return false;
}

com.linkage.util.isRealInteger = function isRealInteger(str){
	/**
	**		@func		�Ƿ�Ϊ������ֵ ������ֵ�͸�ֵ
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
	**		@func		�Ƿ�Ϊ�������ֵ
	**		@param  String str
	**/
	if (com.linkage.util.trim(str) == "") return false;
		if (isNaN(str)){
			alert("�����ֵ���Ϸ���");
			return false;
		}
		if ( (/^[0-9.]+$/g).test(str) == false ) {
			alert("�����ֵ��ʽ�쳣��");
			return false;
		}
		if (str<0||str>200000) {
			alert("�����ֵ�������0��200000֮�䣡");
			return false;
		}
		split=str.split(".");
		if(split.length==2){
			if(split[1].length > 2 || split[1]>99){
				alert("�����ֵС������ܶ���2λ��");
				return false;
			}
    }else if (split.length > 2){
			alert("�����ֵ��ʽ�쳣��");
			return false;
		}
    return true;
}

com.linkage.util.isRealMoney = function isRealMoney(str){
	/**
	**		@func		�Ƿ�Ϊ�������ֵ ������ֵ�͸�ֵ
	**		@param  String str
	**/
	if (com.linkage.util.trim(str) == "") return false;
		if (isNaN(str)){
			return false;
		}
		if ( (/^[0-9.-]+$/g).test(str) == false ) {
			alert("�����ֵ��ʽ�쳣��");
			return false;
		}
		if (str<-200000||str>200000) {
			alert("�����ֵ������С��");
			return false;
		}
		split=str.split(".");
		if(split.length==2){
			if(split[1].length > 2 || split[1]>99){
				alert("�����ֵС������ܶ���2λ��");
				return false;
			}
    }else {
			alert("�����ֵ��ʽ�쳣��");
			return false;
		}
		return true;
}

com.linkage.util.isBankNO = function isBankNO(str){
	/**
	**		@func		�Ƿ�Ϊ�����˺� ����Ϊ���Ѻ���
	**		@param  String str
	**/
	var SPECIAL_STR = "- ";
	var BANKNO_STR = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_STR;
	str = com.linkage.util.trim(str);
	if (str == "") {
		alert("���Ѻ��벻��Ϊ�գ�");
		return false;
	}
	for(var i=0; i<str.length; i++){
		if ( BANKNO_STR.indexOf( str.charAt(i) ) == -1) {
			alert("��������ȷ�ĸ��Ѻ��룡");
			return false;
		}
	}
	return true;
}

com.linkage.util.isValidBankNO = function isValidBankNO(str){
	/**
	**		@func		�Ƿ�Ϊ�����˺�
	**		@param  String str
	**/
	var SPECIAL_STR = "- ";
	var BANKNO_STR = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_STR;
	str = com.linkage.util.trim(str);
	if (str == "") {
		alert("�����ʺŲ���Ϊ�գ�");
		return false;
	}
	for(var i=0; i<str.length; i++){
		if ( BANKNO_STR.indexOf( str.charAt(i) ) == -1) {
			alert("��������ȷ�������ʺţ�");
			return false;
		}
	}
	return true;
}

com.linkage.util.isNotChar = function isNotChar(str){
	/**
	**		@func		�Ƿ�Ϊ�����ַ�
	**		@param  String str
	**/
	if ((str>='0'&& str<='9')||(str>='a' &&str<='z')||(str>='A'&& str<='Z'))return false;
	else return true;
}

com.linkage.util.hasSpecialChar = function hasSpecialChar(str){
	/**
	**		@func		�Ƿ��������ַ�
	**		@param  String str
	**/
	var SPECIAL_STR = "~!@%^&*()'\"?><[]{}\\|:/=+��������";
    	for(i=0;i<str.length;i++){
    		if (SPECIAL_STR.indexOf(str.charAt(i)) >= 0)
    			return true;
    	}
    	return false;
}

com.linkage.util.isValidNewUserName = function isValidNewUserName(str) {
	/**
	**		@func		�Ƿ�Ϊ�Ϸ��û���
	**		@param  String str
	**/
	var SPECIAL_USERNAME_PREFIX = "~!#@$^&_-.|";//ͬBD_SYS_CONFIG�����USERNAME_PREFIX����һ��
	var SPECIAL_USERNAME_SUFFIX = "~!#@$^&_-.|";//ͬBD_SYS_CONFIG�����USERNAME_SUFFIX����һ��
	var USERNAME_PREFIX = "0123456789abcdefghijklmnopqrstuvwxyz"+SPECIAL_USERNAME_PREFIX;
	var USERNAME_SUFFIX = "0123456789abcdefghijklmnopqrstuvwxyz"+SPECIAL_USERNAME_SUFFIX;
	var MAX_USERNAME_LENGTH = "40";
	//str = com.linkage.util.trim(str);
	if (str == "") {
		alert("�ͻ�/�û�������Ϊ��.");
		return false;
	}
	if (str.length > MAX_USERNAME_LENGTH) {
		alert("����Ŀͻ�/�û�������̫��.");
		return false;
	}
	if ( USERNAME_PREFIX.indexOf( str.charAt(0) ) == -1) {
		alert("�ͻ�/�û��������ԷǷ��ַ�("+str.charAt(0)+")��ͷ.");
		return false;
	}
	if(str.length > 11 && (/^[0-9]+$/g).test(str) == true){
        alert("�ͻ�/�û���������11λ���ϵ�ȫ����");
        return false;
    }
	for(var i=1;i<str.length;i++){
		if ( USERNAME_SUFFIX.indexOf( str.charAt(i) ) == -1) {
			alert("����Ŀͻ�/�û������зǷ��ַ�("+str.charAt(i)+").");
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
	**		@func		�Ƿ�Ϊ�Ϸ��û���
	**		@param  String str
	**/
	var SPECIAL_USERNAME_PREFIX = "~!#@$^&_-.|";//ͬBD_SYS_CONFIG�����USERNAME_PREFIX����һ��
	var SPECIAL_USERNAME_SUFFIX = "~!#@$^&_-.|";//ͬBD_SYS_CONFIG�����USERNAME_SUFFIX����һ��
	var USERNAME_PREFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_PREFIX;
	var USERNAME_SUFFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_SUFFIX;
	var MAX_USERNAME_LENGTH = "40";
	//str = com.linkage.util.trim(str);
	if (str == "") {
		alert("�ͻ�/�û�������Ϊ��.");
		return false;
	}
	if (str.length > MAX_USERNAME_LENGTH) {
		alert("����Ŀͻ�/�û�������̫��.");
		return false;
	}
	if ( USERNAME_PREFIX.indexOf( str.charAt(0) ) == -1) {
		alert("�ͻ�/�û��������ԷǷ��ַ�("+str.charAt(0)+")��ͷ.");
		return false;
	}
	for(var i=1;i<str.length;i++){
		if ( USERNAME_SUFFIX.indexOf( str.charAt(i) ) == -1) {
			alert("����Ŀͻ�/�û������зǷ��ַ�("+str.charAt(i)+").");
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
	**		@func		�Ƿ�Ϊ�Ϸ��û���
	**		@param  String str
	**/
	var SPECIAL_USERNAME_PREFIX = "~!#@$%^&_-.|";//ͬBD_SYS_CONFIG�����USERNAME_PREFIX����һ��
	var SPECIAL_USERNAME_SUFFIX = "~!#@$%^&_-.|";//ͬBD_SYS_CONFIG�����USERNAME_SUFFIX����һ��
	var USERNAME_PREFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_PREFIX;
	var USERNAME_SUFFIX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+SPECIAL_USERNAME_SUFFIX;
	var MAX_USERNAME_LENGTH = "40";
	//str = com.linkage.util.trim(str);
	if (str == "") {
		alert("�ͻ�/�û�������Ϊ��.");
		return false;
	}
	if (str.length > MAX_USERNAME_LENGTH) {
		alert("����Ŀͻ�/�û�������̫��.");
		return false;
	}
	if ( USERNAME_PREFIX.indexOf( str.charAt(0) ) == -1) {
		alert("�ͻ�/�û��������ԷǷ��ַ�("+str.charAt(0)+")��ͷ.");
		return false;
	}
	for(var i=1;i<str.length;i++){
		if ( USERNAME_SUFFIX.indexOf( str.charAt(i) ) == -1) {
			alert("����Ŀͻ�/�û������зǷ��ַ�("+str.charAt(i)+").");
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
			alert("��ѯ�ͻ�/�û���������������λ��ͨ����ַ���");
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
	**		@func		�Ƿ�Ϊ�Ϸ�����
	**		@param  String str
	**/
	if (str == null || str == "") {
		alert("���벻����Ϊ�գ�");
		return false;
	}
	if (!(/^[\x00-\xff]+$/.test(str))) {
		alert("���뺬�зǷ��ַ���");
		return false;
	}
	if (str.length < 4) {
		alert("������4λ�������룡");
		return false;
	}
	if (str.length > 15) {
		alert("������15λ�������룡");
		return false;
	}
	if (str.indexOf(" ") >= 0) {
		alert("���벻�ܺ��пո�");
		return false;
	}
	var i = 0;
	var equ_cnt  = 1;
	var decr_cnt = 1;
	var incr_cnt = 1;
	var temp  = str.charAt(0);//���
	var decr_str = str.charAt(0);//�ݼ�
	var incr_str = str.charAt(0);//����
	var length = str.length;
	for (i = 1; i < length; i++) {
		if (temp == str.charAt(i)) {
			equ_cnt++;
		} else {break;}
	}
	if (equ_cnt == length || decr_cnt == length || incr_cnt == length) {
		alert("���������̫�򵥣����������룡");
		return false;
	}
	return true;
}

com.linkage.util.isValidAdminPassword = function isValidAdminPassword(str) {
	/**
	**		@func		�Ƿ�Ϊ��Ч�Ĺ���Ա����
	**		@param  String str
	**/
	//���٣�λ��������30λ�������ʺ�ͬ����������һλ������������һ�������ַ���
    if(str.length<8){
        alert("������8λ��������");
        return false;
    }
	if (str.length > 15) {
		alert("������15λ�������룡");
		return false;
	}
   var  nochar=0;
    for(i=0;i<15;i++){

        if(com.linkage.util.isNotChar(str.charAt(i))){
            nochar++;
        }
    }
    if(nochar==0){
        alert("��Ĺ���Ա��������Ӧ��һ�������ַ�");
        return false;
    }
    return true;
}

com.linkage.util.isValidUserPassword = function isValidUserPassword(password, username){
	/**
	**		@func		�Ƿ�Ϊ��Ч������
	**    ��Ҫ�ж��Ƿ���û�����ͬ
	**    �������û����ĵ���
	**		@param  String password����; username�û���
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
	                alert("���벻�ܺ�������ͬ��");
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
	        alert("���벻�������ֵĵ������������룡");
	        return false;
	}
	return true;
}

com.linkage.util.isValidEmail = function isValidEmail(str) {
	/**
	**		@func		�Ƿ�Ϊ�Ϸ�Email
	**		@param  String str
	**/
	str = com.linkage.util.trim(str);
	len = str.length;
	//û��@����@����β
	if((str.indexOf('@') == -1)||(str.indexOf('@') == 0)||(str.indexOf('@') == len-1))
  	return false;
	if(str.indexOf('@') != str.lastIndexOf('@'))
  	return false;
	if(str.indexOf('.') == -1)
  	return false;
  if (str.lastIndexOf('.') == (len-1) )//'.'�����һλ
  	return false;
  for(var j=0;j<len-1;j++){//�ж��Ƿ���".."����"@."
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
	**		@func		�Ƿ�Ϊ�Ϸ�����
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
	**		@func		�Ƿ�Ϊ�Ϸ�����
	**		@param  String str
	**/
	if (strInfo == null) strInfo="";
	else strInfo = "["+strInfo+"]";
	if (strData == null || strData == ""){
		alert("��������"+strInfo+"����Ϊ�գ�");
		return false;
	}
	if (strData.indexOf("'") >= 0){
		alert("��������"+strInfo+"�ڲ��ܺ���[']��");
		return false;
	}
}

com.linkage.util.isPhoneNumber = function isPhoneNumber(str,n,strInfo){
	/**
	**		@func		�Ƿ�Ϊָ�����ȵĵ绰����
	**		@param  String str
	**						int n �绰λ��
	**						strInfo ��ʾ��Ϣ
	**/
	if (strInfo == null || strInfo == "") strInfo = "��ϵ�绰";
	if(!com.linkage.util.isInteger(str)) {
		alert("��������ȷ��"+strInfo+"��");
		return false;
	}
	if (n > 0) {
		if (str.length != n) {
			alert(strInfo+"���Ȳ���ȷ��");
			return false;
		}
	}else { //n=0
		n = str.length;
		if (n != 7 && n != 8 && n != 11) {
			alert(strInfo+"���Ȳ���ȷ��");
			return false;
		}
	}

	if (n == 7 || n == 8 ) {
		if (str.indexOf("0")==0  || str.indexOf("1")==0 || str.indexOf("9")==0) {
			alert("��������ȷ��"+strInfo+"��");
			return false;
		}
	}
	return true;
}

com.linkage.util.isValidGsmNumber = function isValidGsmNumber(str){
	/**
	**		@func		�Ƿ�Ϊ��ȷ���ֻ�����
	**		@param  String str
	**/
	if(!com.linkage.util.isInteger(str)) {
		alert("��������ȷ���ֻ����룡");
		return false;
	}
	if (str.length != 11) {
		alert("�ֻ����볤�Ȳ���ȷ��");
		return false;
	}
	if(str.indexOf("13") != 0) {
		alert("�ֻ����뿪ʼ�β���ȷ��");
		return false;
	}
	return true;
}

com.linkage.util.isGsmOrPhone = function isGsmOrPhone(str){
 /**
	**		@func		�ж��Ƿ����ֻ�������ߵ绰����
	**		@param  String str
	**/
	//alert("str��ֵΪ��"+str);
	if(str!=null && str!=""){
	    if(str.length==11){//������ֻ�����
	        var isGsm = com.linkage.util.isInteger(str);
	        //alert("11λ�ֻ�У��ɹ�");
            if(isGsm==true)
               return true;
	        else
	             return false;
	    }else if(str.indexOf("-")==-1){ //����ǵ绰���룬��У�鳤��
            //if(str.length==7 || str.length==8){
                var isPhone = com.linkage.util.isInteger(str);
	         	//alert("7λ�̶��绰У��ɹ�");
	         	if(isPhone==true)
	         	    return true;
	         	else
	         	    return false;
            //}
        }else if(str.indexOf("-")!=-1){//����ǵ绰�������зֻ�����
            //alert("str��ֵΪ��"+str);
            var arrayStr=new Array(2);
            arrayStr = str.split("-");
            //alert("arrayStr[0]��ֵΪ��"+arrayStr[0]);
            //alert("arrayStr[1]��ֵΪ��"+arrayStr[1]);
            if(arrayStr.length < 2 || arrayStr.length >2)
                return  false;
            else{
                //if((arrayStr[0].length==7 || arrayStr[0].length==8) && (arrayStr[1].length==4))
                if((arrayStr[0].length==7 || arrayStr[0].length==8)){
                    var isFirstPhone = com.linkage.util.isInteger(arrayStr[0]);
                    var isSecondPhone =  com.linkage.util.isInteger(arrayStr[1]);
                    //alert("�̶��绰�ֻ�У��ɹ�");
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
	**		@func		�жϺ����Ƿ���Ч
	**		@param  String str
	**/
var contactTelephone=str;
//alert("isValidPhone()��contactTelephone��ֵΪ��"+contactTelephone);
if(com.linkage.util.isGsmOrPhone(contactTelephone)==true)
   return true;
else
	 return false;
}

com.linkage.util.isValidIP = function isValidIP(str) {
	/**
	**		@func		�Ƿ�Ϊ�Ϸ�IP��ַ
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
	**		@func		������֤�ĺϷ���
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
	**		@func		����date1�Ƿ����date2
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
	if (year1 == year2){//����ȣ��ж���
		if(month1 < month2) return false;
		if(month1 == month2){//����ȣ��ж���
			if (date1 < date2) return false;
		}
	}
	return true;
}

com.linkage.util.dateBEDate = function dateBEDate(date1,date2) {
	/**
	**		@func		����date1�Ƿ���ڵ���date2
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
	if (year1 == year2){//����ȣ��ж���
		if(month1 < month2) return false;
		if(month1 == month2){//����ȣ��ж���
			if (date1 < date2) return false;
		}
	}
	return true;
}

com.linkage.util.dateEQDate = function dateEQDate(date1,date2) {
	/**
	**		@func		����date1�Ƿ����date2
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
	**		@func		����date1�Ƿ���ڵ��ڵ�ǰ����
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
	if (year == cYear){//����ȣ��ж���
		if(month < cMonth) return false;
		if(month == cMonth){//����ȣ��ж���
			if (date < cDate) return false;
		}
	}
	return true;
}

com.linkage.util.dateBCurrent = function dateBCurrent(date1) {
	/**
	**		@func		����date1�Ƿ���ڵ�ǰ����
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
	if (year == cYear){//����ȣ��ж���
		if(month < cMonth) return false;
		if(month == cMonth){//����ȣ��ж���
			if (date <= cDate) return false;
		}
	}
	return true;
}

com.linkage.util.trim = function trim(str) {
	/**
	**		@func		��ȡ�ո�
	**		@param  String str
	**		@return String
	**/
	var i = 0;
	while ((i < str.length)&&((str.charAt(i) == " ")||(str.charAt(i) == "��"))){i++;}
	var j = str.length-1;
	while ((j >= 0)&&((str.charAt(j) == " ")||(str.charAt(j) == "��"))){j--;}
	if( i > j ) return "";
	else return str.substring(i,j+1);
}

com.linkage.util.full_trim = function full_trim(str) {
	/**
	**		@func		ȥ���пո񣨰����ַ����ڣ�
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
	**		@func		��׼�����ʽ
	**		@param  String type ��ʶ��������
	**						String content ����
	**						String title ����
	**						String buttonflag �Ƿ��з��ذ�ť
	**/
	//δ��ȫ�޸� 2005/6/13
	/*������������*/
	if (arguments.length < 4){
		document.writeln("<center><h3>JavaScript����<font color=blue>[OutPut]</font>���ô���û�и�ȫ����</h3></center>");
		return;
	}
	if(!((type=="error")||(type=="alert")||(type=="info")||(type=="confirm"))){
		document.writeln("<center><h3>JavaScript����<font color=blue>[OutPut]</font>���ô�����Ч������</h3></center>");
		return;
	}
	if(content.length==0){
		document.writeln("<center><h3>JavaScript����<font color=blue>[OutPut]</font>���ô�������Ϊ��</h3></center>");
		return;
	}
	document.writeln("<center>");
	document.writeln("<table cellpadding=0 cellspacing=0 width=48% bgcolor=#777777 align=center>");
	document.writeln("<tr><td><table cellpadding=2 cellspacing=1 width=100%>");
	document.writeln("<tr><td bgcolor=\"#6699cc\" width=100% align=center valign=middle>");
	if(type=="error"){
			document.writeln("<font color=red><b><h4>");
			if(title.length==0)
				document.writeln("������Ϣ��");
			else
				document.writeln(title);
			document.writeln("</h4></b></font>");

	}
	if(type=="alert"){
		document.writeln("<font color=yellow><b><h4>");
		if(title.length==0)
			document.writeln("������Ϣ��");
		else
			document.writeln(title);
		document.writeln("</h4></b></font>");
	}
	if(type=="info"){
		document.writeln("<font color=green><b><h4>");
		if(title.length==0)
			document.writeln("��ʾ��Ϣ��");
		else
			document.writeln(title);
		document.writeln("</h4></b></font>");
	}
	if(type=="confirm"){
		document.writeln("<font color=blue><b><h4>");
		if(title.length==0)
			document.writeln("ȷ����Ϣ��");
		else
			document.writeln(title);
		document.writeln("</h4></b></font>");
	}

	document.writeln("<td bgcolor=#3A6EA5 width=8% align=center>");
	/*��ʾ��Ӧ��ͼ��*/
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
	document.writeln("<br><font face=\"����_GB2312\" size=\"4\" color=\"#000000\">");
	document.writeln(content);
	document.writeln("</font><p>");
	if(buttonflag=="false"){}
	else{
		document.writeln("<input type=\"Button\" value=\"  ��  ��  \" onclick=\"history.back()\" class=\"s03\">");
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
		if ( key1 == 190) { // ��. ������һ����ַ��
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
	        alert(parseInt(obj.value)+": IP��ַ����");
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
            alert("�Բ�����û��ѡ��Ҫ���õ�����");
            return false;
        }else if(method=="set") {
            alert("�Բ�����û��ѡ��Ҫ���õ�����");
            return false;
        }else if(method=="restore") {
            alert("�Բ�����û��ѡ��Ҫ�ָ��ļ�¼");
            return false;
        }else if(method=="clear") {
            alert("�Բ�����û��ѡ��Ҫ����ļ�¼");
            return false;
        }else if(method=="unregister") {
            alert("�Բ�����û��ѡ��Ҫע���ļ�¼");
            return false;
        }else if(method=="del"){
            alert("�Բ�����û��ѡ��Ҫɾ��������");
            return false;
        }else if(method=="check"){
            alert("�Բ�����û��ѡ��Ҫ��˵�����");
            return false;
        }else if(method=="spcommend"){
            alert("�Բ�����û��ѡ��Ҫɾ���������Ƽ�����");
            return false;
        }else if(method=="topring"){
            alert("�Բ�����û��ѡ��Ҫɾ������������");
            return false;
        }else if(method=="addRingMember"){
            alert("�Բ�����û��ѡ��Ҫ���ӵ�����");
            return false;
        }else if(method=="delRingMember"){
            alert("�Բ�����û��ѡ��Ҫɾ��������");
            return false;
        }else if(method=="delRingLib"){
            alert("�Բ�����û��ѡ��Ҫɾ��������");
            return false;
        }else if(method=="delRingGroup"){
            alert("�Բ�����û��ѡ��Ҫɾ����������");
            return false;
        }else if(method=="delPhoneGroup"){
            alert("�Բ�����û��ѡ��Ҫɾ���ĺ���Ⱥ��");
            return false;
        }else if(method=="delRingSet"){
            alert("�Բ�����û��ѡ��Ҫɾ������������");
            return false;
        }else if(method=="salezonering"){
            alert("�Բ�����û��ѡ��Ҫɾ���Ļ");
            return false;
        }else if(method=="delSaleCode"){
            alert("�Բ�����û��ѡ��Ҫɾ���Ķ̱���");
            return false;
        }else if(method=="ringcheckpass"){
            alert("�Բ�����û��ѡ��Ҫ��˵�����");
            return false;
        }else if(method=="ringchecknopass"){
            alert("�Բ�����û��ѡ��Ҫ���ص�����");
            return false;
        }
          
    } else {
        if(method=="delSaleCode") {
            if (!confirm("��ȷ��Ҫɾ��ѡ��Ķ̱�����"))
            return false;
        }    	
        if(method=="delRingSet") {
            if (!confirm("��ȷ��Ҫɾ��ѡ�������������"))
            return false;
        }    	
        if(method=="delRingMember") {
            if (!confirm("��ȷ��Ҫɾ��ѡ���������"))
            return false;
        }
        if(method=="delRingLib"){
            if (!confirm("Ҫɾ�������������ѽ����������ã��Ƿ�ȷ��ɾ����"))
            return false;        	 
        }
        if(method=="delRingGroup"){
            if (!confirm("Ҫɾ��������������ѽ����������ã��Ƿ�ȷ��ɾ����"))
            return false;         	
        } 
        if(method=="delPhoneGroup"){
            if (!confirm("ɾ������Ⱥ�齫��ɾ��������Ա���Ƿ�ȷ��ɾ����"))
            return false;        	
        } 
        if(method=="copyRing") {
            if (!confirm("��ȷ��Ҫ������ѡ���������"))
            return false;
        }                     
        if(method=="del") {
            if (!confirm("��ȷ��Ҫɾ��ѡ��ļ�¼��"))
            return false;
        }
       if(method=="clear") {
            if (!confirm("���棺������ļ�¼�����ܱ��ָ�����ȷ��Ҫɾ��ѡ��ļ�¼��"))
            return false;
        }
      if(method=="unregister") {
            if (!confirm("��ȷ��Ҫע��ѡ��ļ�¼��"))
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
	**		@func		�滻�����ַ��������ַ����ڣ�
	**		@param  String source Դ�ַ���
	**		@param  String source ϣ���滻��Դ�ַ�
	**		@param  String source ��Ҫ�滻��Ŀ���ַ�		
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
	**		@func		��������
	**		@param  String ringid ��������
	**		@param  String uploadtype �ϴ�����
	**		@param  String audittype  ���״̬		
	**    @param  String auditiontype  ��������
	**		@return String
	**/
com.linkage.util.showRing =  function showRing(ringid,uploadtype,audittype,auditiontype,winName,features){
	var theRingURL = '/systemportal/Listen.jsp?ringid='+ringid+"&uploadtype="+uploadtype+"&audittype="+audittype+"&auditiontype="+auditiontype;
  window.open(theRingURL,winName,features);		
}

	/**
	**		@func		У���ַ����Ƿ�Ϊ��д��ĸ
	**		@param  String str �ַ���
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
	**		@func		����ҳ��
	**		@param  String url ��ҳ��url
	**		@param  String w ��ҳ��width
	**		@param  String h ��ҳ��height
	**		@return void
	**/
com.linkage.util.windowOpen = function windowOpen(url,w,h){
  window.open (url,'newwindow', 'width='+w+', height='+h+', top=0, left=262, toolbar=no,menubar=no, scrollbars=no,resizable=no,location=no, status=no');	
}
/**
	**		@func   ��������а�ť�ҵ�
	**		@param  Object obj ��ť����
	**		@return true
	**/
com.linkage.util.btnDisable=function btnDisable(btnsubmit,btncancel){
		  btnsubmit.disabled=true;
		  btncancel.disabled=true;
		  return true;
		}	
		
/**
	**		@func  ��������
	**		@param  Object selectedmonth �·�
	**      @param  Object daytomonth ����
	**		@return true
	**/	
//��ʼ�����ں��·�	
com.linkage.util.initedMonth=function initedMonth(beginmonth,endmonth,beginday,endday){
	 for(var i=1;i<13;i++){
	    if(i<=9){
	     beginmonth.options.add(new Option( i + "��", "0"+i));
	     endmonth.options.add(new Option( i + "��", "0"+i));
	    }
	    else{
	     beginmonth.options.add(new Option( i + "��", i));
	     endmonth.options.add(new Option( i + "��", i));
	    }
	   }
	 for(i=1;i<32;i++){
	  beginday.options.add(new Option( i + "��", i));
	  endday.options.add(new Option( i + "��", i));
	  }
	}	
	
//�ж��Ƿ�����ƽ��	
com.linkage.util.IsPinYear=function IsPinYear(year)//�ж��Ƿ���ƽ��
    {   return(0 == year%4 && (year%100 !=0 || year%400 == 0));}

//��յ�ǰ�����б�options    
com.linkage.util.optionsClear=function optionsClear(e)
     {
      for (var i=e.options.length; i>=0; i--)
        e.remove(i);

      }

//���·�д�����б�     
com.linkage.util.writeDay=function writeDay(selectedmonth,daytomonth)  //������д���ڵ�������
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
       daytomonth.options.add(new Option(j + "��", j));
     } 
        
//У�鿪ʼ�����Ƿ�С�ڽ������� ����ʱ���ж�   
com.linkage.util.compareDate=function compareDate(date1,date2)
  {
  if(!dateBDate(date1,date2))
  return false
  //��ȡСʱ�ͷ���
  var date1String=date1.substring(10,15);
  var date2String=date2.substring(10,15);

  date1time=date1String.split(":");
  date2time=date2String.split(":");
  //��ȡСʱ�ͷ���ֵ
  hour1=parseInt(date1time[0]);
  minutes1=parseInt(date1time[1]*1);
  hour2=parseInt(date2time[0]);
  minutes2=parseInt(date2time[1]*1);
  
  //�Ƚ�Сʱ�ͷ���
  if(hour1<hour2)
  return false
  if(hour1==hour2){
    if(minutes1<minutes2)
    return false;
  }
  return true;
  }  
  
  //�жϿ�ʼ�����Ƿ�С�ڽ�������
com.linkage.util.checkTimetwo = function checkTimetwo(startyear,endyear,startmonth,endmonth,startdate,enddate,starthour,endhour,startminutes,endminutes){
  
  //��ȡϵͳ��ǰ������ΪĬ������
  var now= new Date();
  var year=now.getYear();
  var month=now.getMonth()+1;
  var day=now.getDate();
 
  //�������Ϊ������ֵΪ��ǰ����
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
  
  //����monthΪ��׼MM��ʽ
  if(startmonth.length<2)
  startmonth="0"+startmonth;
  if(endmonth.length<2)
  endmonth="0"+endmonth;
  
  //����date�ɱ�׼DD��ʽ
  if(startdate.length<2)
  startdate="0"+startdate;
  if(enddate.length<2)
  enddate="0"+enddate;
  
  //����hour�ɱ�׼hh��ʽ
  if(starthour.length<2)
  starthour="0"+starthour;
  if(endhour.length<2)
  endhour="0"+endhour;
  
  //����minutes�ɱ�׼mm��ʽ
  if(startminutes.length<2)
  startminutes="0"+startminutes;
  if(endminutes.length<2)
  endminutes="0"+endminutes;
  
  //ƴ�������ַ���
  datebegin=startyear+"-"+startmonth+"-"+startdate+starthour+":"+startminutes;
  dateend=endyear+"-"+endmonth+"-"+enddate+endhour+":"+endminutes;

  //���С���򷵻�false
  if(!compareDate(dateend,datebegin))
  return false;
  else
  return true;
}
  
   