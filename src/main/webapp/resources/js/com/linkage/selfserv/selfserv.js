com.linkage.selfserv = new Object();

com.linkage.selfserv.selectUserType = function selectUserType(){
	if(document.forms[0].usertype[0].checked){
		document.all("div_servicetype").style.display = "";
		document.all("div_username").style.display = "";
		document.all("div_cardno").style.display = "none";
		document.forms[0].username.focus();
	}
	if(document.forms[0].usertype[1].checked){//���û�
		document.all("div_servicetype").style.display = "none";
		document.all("div_username").style.display = "none";
		document.all("div_cardno").style.display = "";
		document.all("div_corpmail").style.display = "none";
		document.all("div_view").style.display = "none";
		document.all("div_email").style.display = "none";
		document.forms[0].cardno.focus();
	}
}
com.linkage.selfserv.selectServiceType = function selectServiceType(){
	var serviceType = document.forms[0].servicetype.value;
	if(serviceType == "501"||serviceType=="502"||serviceType=="500"){
		document.all("div_username").style.display = "none";
		document.all("div_corpmail").style.display = "none";
		document.all("div_view").style.display = "none";
		document.all("div_email").style.display = "";
	}else if(serviceType == "503"){
		document.all("div_username").style.display = "none";
		document.all("div_corpmail").style.display = "";
		document.all("div_view").style.display = "none";
		document.all("div_email").style.display = "none";
	}else if(serviceType == "901"){
		document.all("div_username").style.display = "";
		document.all("div_corpmail").style.display = "none";
		document.all("div_view").style.display = "";
		document.all("div_email").style.display = "none";
	}else {
		document.all("div_username").style.display = "";
		document.all("div_corpmail").style.display = "none";
		document.all("div_view").style.display = "none";
		document.all("div_email").style.display = "none";
	}
}

com.linkage.selfserv.isValidInput = function isValidInput(){
	var serviceType = "";
	if(eval(document.forms[0].servicetype)!=null)
	serviceType = document.forms[0].servicetype.value;
	if(document.forms[0].usertype.value=="1"){//ע���û�
		if(serviceType=="101"||serviceType=="201"||serviceType=="200"||serviceType=="301"||serviceType=="302"){
			if(!com.linkage.service.customer.isValidCustomerName(document.forms[0].username) ){
				return false;
			}	
		}
		if(serviceType=="501"||serviceType=="502"){
			if(!com.linkage.util.isValidEmail(document.forms[0].email.value+"@"+document.forms[0].realm.value)){
				alert("��������ȷ��email��");
				document.forms[0].email.focus();
				return false;
			}
		}
		if(serviceType=="503"){
			if(document.forms[0].name.value==""){
				alert("��������ҵ��������");
				document.forms[0].name.focus();
				return false;
			}
			if(document.forms[0].domain.value==""){
				alert("��������ҵ������");
				document.forms[0].domain.focus();
				return false;
			}
		}
		if(serviceType=="901"){
			if(!com.linkage.service.customer.isValidCustomerName(document.forms[0].username) ){
				return false;
			}
			if(document.forms[0].useraccount.value==""){
				alert("����������ͨ�ʺţ�");
				document.forms[0].useraccount.focus();
				return false;
			}
		}
	}
	
	if(document.forms[0].usertype.value=="2"){//���û�
		if(!com.linkage.card.carduser.isValidCard(document.forms[0].cardno) ){
			return false;
		}
	}
	if(document.forms[0].usertype.value=="7"){//VPDN�û�
		if(!com.linkage.service.customer.isValidCustomerName(document.forms[0].username) ){
				return false;
		}
		if(document.forms[0].realm.value == ""){
			alert("����������");
			document.forms[0].realm.focus();
			return false;
		}
	}
	if(document.forms[0].password.value == ""){
		alert("���������룡");
		document.forms[0].password.focus();
		return false;
	}
	return true;
}


com.linkage.selfserv.isValidInputPassword = function isValidInputPassword(obj1,obj2,obj3){
	if(obj1==null) obj1 = document.forms[0].oldpassword;
	if(obj2==null) obj2 = document.forms[0].newpassword;
	if(obj3==null) obj3 = document.forms[0].passwordsure;
	if(obj1.value == ""){
		alert("������ԭ���룡");
		obj1.focus();
		return false;
	}
	if(obj2.value == ""){
		alert("�����������룡");
		obj2.focus();
		return false;
	}
	if (!com.linkage.util.isValidPassword(obj2.value)){
		obj2.focus();
		obj2.select();
		return false;
	}
	if(obj3.value == ""){
		alert("������������ȷ�ϣ�");
		obj3.focus();
		return false;
	}
	if (!com.linkage.util.isValidPassword(obj3.value)){
		obj3.focus();
		ojb3.select();
		return false;
	}
	if(obj2.value != obj3.value){
		alert("�����뼰����ȷ�ϲ�һ�£�");
		obj2.focus();
		obj2.select();
		return false;
	}
	return true;
}

com.linkage.selfserv.checkInputPassword = function checkInputPassword(obj){
	if(obj==null) obj=document.forms[0].password;
	if(obj.value==""){
		alert("���������룡");
		obj.focus();
		return false;
	}
	return true;
}