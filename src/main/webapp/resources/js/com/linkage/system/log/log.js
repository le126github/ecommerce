com.linkage.system.log = new Object();

com.linkage.system.log.isValidAdminLogQuery = function isValidAdminLogQuery(obj1,obj2,obj3,obj4,obj5,obj6,obj7) {
    if (obj1 == null) obj1 = document.forms[0].admin;
    if (obj2 == null) obj2 = document.forms[0].username;
    if (obj3 == null) obj3 = document.forms[0].ipaddress;
    if (obj4 == null) obj4 = document.forms[0].funcid;
    if (obj5 == null) obj5 = document.forms[0].boperatetime;
    if (obj6 == null) obj6 = document.forms[0].eoperatetime;
    if (obj7 == null) obj7 = document.forms[0].currentdate;

    var admin = com.linkage.util.trim(obj1.value);
    var username = com.linkage.util.trim(obj2.value);
    var ipaddress = com.linkage.util.trim(obj3.value);
    var funcid = com.linkage.util.trim(obj4.value);
    var boperatetime = com.linkage.util.trim(obj5.value);
    var eoperatetime = com.linkage.util.trim(obj6.value);
    var currentdate = com.linkage.util.trim(obj7.value);
    var searchCount = 0;

    if(admin != ""){
	    if ( (/^[A-Za-z0-9~.!#$^&_-|]+$/g).test(admin) == false ) {
	    	alert("����Ա�˺ź��Ƿ��ַ���");
	    	obj1.focus();
	    	obj1.select();
	    	return false;
	    }
		searchCount ++;
    }

    if(username != ""){
		searchCount ++;
	}

	if (ipaddress != ""){
	    if (com.linkage.util.isValidIP(ipaddress) == false) {
            alert("��������ȷ�Ĺ���ԱIP��");
            obj3.focus();
            obj3.select();
            return false;
        }
		searchCount ++;
	}

	if (funcid != "") {
		searchCount ++;
	}

	if (searchCount == 0){
		alert("����Ա���ƣ��û����ƣ�����ԱIP��ģ��������������������һ�");
		obj1.focus();
		obj1.select();
		return false;
	}

	if(boperatetime != "" && eoperatetime == ""){
		alert("�������������ʱ�䣡");
		return false;
	}
	if(boperatetime == "" && eoperatetime != ""){
		alert("�����������ʼʱ�䣡");
		return false;
	}
	if((boperatetime != "") && (com.linkage.util.dateBDate(boperatetime, currentdate))) {
		alert("������ʼʱ��ӦС�ڵ�ǰʱ�䣡");
		obj5.focus();
		obj5.select();
		return false;
	}
	if((eoperatetime != "")&&(com.linkage.util.dateBDate(eoperatetime, currentdate))) {
		alert("��������ʱ��ӦС�ڵ�ǰʱ�䣡");
		obj6.focus();
		obj6.select();
		return false;
	}
	if(boperatetime != "" && eoperatetime != ""){
		if ( com.linkage.util.dateBDate(boperatetime,eoperatetime)){
			alert("����ʱ�������ڿ�ʼʱ�䣡");
			obj5.focus();
		    obj5.select();
			return false;
		}
	}

	obj1.value = admin;
	obj2.value = username;
	obj3.value = ipaddress;
	obj4.value = funcid;

	return true;
}