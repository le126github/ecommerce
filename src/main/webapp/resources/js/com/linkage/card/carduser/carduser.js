com.linkage.card.carduser = new Object();

var MIN_CARDLENGTH = 2;//��С�Ŀ�����

com.linkage.card.carduser.isValidCard = function isValidCard(obj){
	if(obj == null) obj = document.forms[0].cardno;
	var cardno = com.linkage.util.trim(obj.value);
	if (com.linkage.util.hasSpecialChar(cardno)) {
		alert("��������ȷ�Ŀ��ţ�");
		obj.select();
		obj.focus();
		return false;
	}
	if (cardno == "") {
		alert("��������ȷ�Ŀ��ţ�");
		obj.select();
		obj.focus();
		return false;
	}
	if (cardno.length < MIN_CARDLENGTH){
		alert("��������ȷ�Ŀ��ţ�");
		obj.select();
		obj.focus();
		return false;
	}
	obj.value = cardno;
	return true;
}

com.linkage.card.carduser.isValidBalance = function isValidBalance(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].fbalance;
	if(obj2 == null) obj2 = document.forms[0].old_balance;
	var _balance = com.linkage.util.trim(obj1.value);
	if (!com.linkage.util.isMoney(_balance)){
		//alert("��������ȷ����");
		obj1.select();
		obj1.focus();
		return false;
	}
	if(obj2 != null){
	    if(_balance*100 != obj2.value){//modify balance
	    	if (_balance*100>document.userinfo.cardvalue.value){
	    		alert("���ܴ��ڿ���");
	    		obj1.select();
	    		obj1.focus();
	    		return false;
	    	}
	    }
    }
	obj1.value = _balance;
	return true;
}

com.linkage.card.carduser.isValidExpiredate = function isValidExpiredate(){
	if (document.userinfo.status.value == 0)
		if (!com.linkage.util.dateBDate(document.userinfo.expiredate.value,document.forms[0].currentdate.value)){
			alert("ʧЧ���ڱ�����ڵ�ǰ���ڣ�");
			return false;
		}

	return true;
}

com.linkage.card.carduser.isValidPassword = function isValidPassword(obj){
	if(obj == null) obj = document.forms[0].password;
	if(!com.linkage.util.isValidPassword(obj.value)){
		obj.focus();
		obj.select();
		return false;
	}
	return true;
}

com.linkage.card.carduser.isValidPasswordSure = function isValidPasswordSure(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].password_sure;
	if(obj2 == null) obj2 = document.forms[0].password;
	var password_sure = obj1.value;
	var password = obj2.value;
	if(password_sure != password){
		alert("���벻һ�£�");
		obj1.focus();
		obj1.select();
		return false;
	}
	return true;
}

com.linkage.card.carduser.isValidInput = function isValidInput(obj1,obj2){
	var NUMBER_LENGTH = 6;//��˳��ų���
	if(obj1 == null) obj1 = document.forms[0].reserved1;
	if(obj2 == null) obj2 = document.forms[0].reserved2;
	if(!com.linkage.card.carduser.isValidCard(obj1)){
		return false;
	}
	if(!com.linkage.card.carduser.isValidCard(obj2)){
		return false;
	}
	var _startNum = com.linkage.util.trim(obj1.value);
	var _endNum = com.linkage.util.trim(obj2.value);
	var prefix_startNum = _startNum.substring(0,_startNum.length-NUMBER_LENGTH);
	var prefix_endNum = _endNum.substring(0,_startNum.length-NUMBER_LENGTH);

	var numberBegin = _startNum.substring(_startNum.length-NUMBER_LENGTH);
	var numberEnd = _endNum.substring(_endNum.length-NUMBER_LENGTH);

	if(prefix_startNum != prefix_endNum){
		alert("��ʼ������ֹ���ű���Ϊͬһ�࿨��");
		return false;
	}

	var count = numberEnd*1 - numberBegin*1;
	if ( count < 0 ){
		alert("��ʼ���Ų��ô��ڽ�������!");
		return false;
	}

	if ( count > (100 - 1) ){
		alert("ÿ�����������������ܳ���100 !");
		return false;
	}

	obj1.value = _startNum;
	obj2.value = _endNum;

	return true;
}