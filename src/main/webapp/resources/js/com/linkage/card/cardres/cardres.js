com.linkage.card.cardres = new Object();

com.linkage.card.cardres.isValidEffectDate = function isValidEffectDate(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentdate;
	if(obj2 == null) obj2 = document.forms[0].effectdate;
	var currentdate = obj1.value;
	var effectdate = obj2.value;
	if(com.linkage.util.dateBDate(currentdate,effectdate) ){
		alert("����Ч��������ڵ��ڵ�ǰ���ڣ�");
		return false;
	}
	return true;
}

com.linkage.card.cardres.isValidExpireDate = function isValidExpireDate(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].effectdate;
	if(obj2 == null) obj2 = document.forms[0].expiredate;
	var effectdate = obj1.value;
	var expiredate = obj2.value;
	if(!com.linkage.util.dateBDate(expiredate,effectdate) ){
		alert("��ʧЧ�����������Ч���ڣ�");
		return false;
	}
	return true;
}

com.linkage.card.cardres.isValidEffectDays = function isValidEffectDays(obj1,obj2,obj3){
	if(obj1 == null) obj1 = document.forms[0].effecttype;
	
	if(obj1 == null) obj3 = document.forms[0].effectdays;
	var effecttype = obj1.value;
	var tempeffectdays;
	var effectdays = obj3.value;
	
	if (effecttype == "1") {
		if(obj2 == null) obj2 = document.forms[0].tempeffectdays;
		tempeffectdays = obj2.value;
		if (tempeffectdays=="" || !com.linkage.util.isInteger(tempeffectdays)) {
			alert("��������ȷ����Ч������");
			obj2.focus();
			obj2.select();
			return false;
		}
	} else {
		tempeffectdays = 0;
	}
	document.forms[0].effectdays.value = tempeffectdays;
	return true;

}

com.linkage.card.cardres.isValidGroupId = function isValidGroupId(){
	
	var serviceCount = parseInt(document.forms[0].servicecount.value);
	var groupiddes = "";
	var arrService = document.forms[0].servicelist.value.split(",");
	for(var i=0;i<serviceCount;i++){
		var str_obj_tmp = "document.forms[0].groupid"+i;
		var str_value_tmp = str_obj_tmp+".value";
		var obj_tmp = eval(str_obj_tmp);
		
		var groupid = eval(str_value_tmp);
		if (groupid == "-*"||groupid == ""){
			alert("��ѡ�����");
			obj_tmp.focus();
			return false;
		}
		
		groupiddes += ","+arrService[i]+"="+groupid;
	}
	
	if(groupiddes!="") document.forms[0].groupiddes.value = groupiddes.substring(1);
	//alert(document.forms[0].groupiddes.value);
	return true;
}

com.linkage.card.cardres.isValidCardRes = function isValidCardRes(){
	//�ύ��Ϣ ::= ��������
	//�������� ::= <���� ',' ��� ',' ����> | <���� ',' ��� ',' ����> ':' ��������
        
	var i,j,cnArea=0;
	var NotEmpty = false;
	var sTemp = "";
	//sAreaInfo = document.userinfo.temp.value;
	
	var serviceCount = parseInt(document.forms[0].servicecount.value);
	
	//arrAreaNo = sAreaInfo.split(',');
        cnArea = parseInt(document.userinfo.areacount.value);//��������
        //var PRE_ELEMENTS_COUNT = 6;//�����ؽ��ǰ��ı�����
        var PRE_ELEMENTS_COUNT = (document.userinfo.preelements.value)*1;//�����ؽ��ǰ��ı�����
        if (document.userinfo.useservflag.value == 2) {
    		serviceCount = serviceCount*2;
    	}
	for(i=0;i<cnArea;i++) {
            if (document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+7*i].checked == false) continue;
            var sumList = "";//�˱���ֻ�����жϽ�����Ƿ��ظ�
            var k = 0;
            for(j=0;j<3;j++) {
          	
                sum = document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+1+7*i+2*j].value;
                amount = document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+1+7*i+2*j+1].value;
                
                if (amount==''&&sum=='') continue;
                if (!(amount!=''&&sum!='')) {
                    alert("�����������Ľ�����.");
                    return false;
                }
                if (isInteger(sum) == false || sum == 0) {
                    alert("��Ч�Ľ����!["+sum+"]");
                    document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+1+7*i+2*j].focus();
                    document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+1+7*i+2*j].select();
                    return false;
                }
                if ((sumList + ",").indexOf(","+sum+",") >= 0) {//�Ѿ��д˽��
                    alert("������ظ���");
                    document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+1+7*i+2*j].focus();
                    document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+1+7*i+2*j].select();
                    return false;
                }
                if (isInteger(amount) == false || amount == 0) {
                    alert("��Ч������!["+amount+"]");
                    document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+1+7*i+2*j+1].focus();
                    document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+1+7*i+2*j+1].select();
                    return false;                
                }
                k++;
                sumList += "," +sum;
                sTemp += ':' + document.userinfo.elements[PRE_ELEMENTS_COUNT+serviceCount+7*i].value + ',' + sum + ',' + amount;
                NotEmpty = true;
            }
            if(k==0){
            	alert("��Ϊ��ѡ������д����������");
            	return false;
            }                          
        }

	if (NotEmpty == false) {
            alert("�����뽨����Ϣ��ѡ�����ؼ���д�����������");
            return false;
        }
        
        sTemp = sTemp.substring(1);
        //alert(sTemp);
        document.userinfo.batinfo.value = sTemp;
        return true;
}

com.linkage.card.cardres.isValidDescription = function isValidDescription(obj){
	if(obj == null) obj = document.forms[0].description;
	var temp = obj.value;
        if (temp != "") {
		if (temp.length > 50) {
			alert("�������������̫����0-50�������������룡");
			obj.select();
			obj.focus();
			return false;
		}
	}
	obj.value = temp;
	return true;
}	

com.linkage.card.cardres.selectDesc = function selectDesc(){
	for(i=0;i<document.userinfo.cardbat.options.length;i++) {
            if(document.userinfo.cardbat.options[i].selected) {
            	
                document.userinfo.desc.value=document.userinfo.elements[i+1].value;
                return;
            }

        }
}

com.linkage.card.cardres.isValidEffectDateMod = function isValidEffectDateMod(obj1,obj2,obj3){
	if(obj1 == null) obj1 = document.forms[0].currentdate;
	if(obj2 == null) obj2 = document.forms[0].effectdate;
	if(obj3 == null) obj3 = document.forms[0].old_effectdate;
	if( !com.linkage.util.dateEQDate(obj2.value,obj3.value) ){//��Ч���ڸı�
		if (com.linkage.util.dateBDate(obj1.value, obj2.value)){
		//if(!dateBECurrent(document.userinfo.okdate.value)){
			alert("��Ч���ڲ���С�ڵ�ǰ���ڣ�");
			return false;
		}
	}
	return true;

}

com.linkage.card.cardres.isValidCardResMod = function isValidCardResMod(){
	var i,j,cnArea = document.forms[0].count.value;//�˿����ε�������
	var servicecount = parseInt(document.userinfo.servicecount.value);
        var sTemp = "";
        if (document.userinfo.useservflag.value == 2) {
    		servicecount = servicecount*2;
    	}	
        var PRE_ELEMENT_COUNT = (document.userinfo.preelements.value)*1;//�����ؽ��ǰ��ı�����
	for(i=0;i<cnArea;i++) {
		
                sum = document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i+1].value;
                amount = document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i+1+1].value;
                var tempArea = document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i].value;//�˱���ֻ�����ж�ͬ�����½���Ƿ��ظ�
                if (!(amount!=''&&sum!='')) {
                    alert("�����������Ľ�����.��");
                    return false;
                }
                if (isInteger(sum) == false || sum == 0) {
                    alert("��Ч�Ľ����!["+sum+"]");
                    document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i+1].focus();
                    document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i+1].select();
                    return false;
                }
                if (sTemp.indexOf(":"+tempArea+","+sum+",") >= 0) {
                    alert("������ظ���");
                    document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i+1].focus();
                    document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i+1].select();
                    return false;
                }
                if (isInteger(amount) == false || amount == 0) {
                    alert("��Ч������!["+amount+"]");
                    document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i+1+1].focus();
                    document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i+1+1].select();
                    return false;                
                }
                
                sTemp += ':' + document.userinfo.elements[PRE_ELEMENT_COUNT+servicecount+3*i].value + ',' + sum + ',' + amount;
                       
        }

	
        sTemp = sTemp.substring(1);
        //alert("cardinfo:"+sTemp);
   	document.userinfo.batinfo.value = sTemp;
   	return true;
}

com.linkage.card.cardres.writeGroupList = function(servicetype, order){
	var url = "get_grouplist.action?servicetype="+servicetype+"&order="+order;
	
	var obj_tmp = eval("document.userinfo.groupid"+order);
	if (obj_tmp != null) {
		url = url+"&grouplist="+obj_tmp.value;
	}
	
	window.open(url, "�趨�����ֵ���","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizeble=no,width=600,height=300");
}

com.linkage.card.cardres.setGroupList = function setGroupList(grouplist, order){
	var obj_tmp = eval("document.userinfo.groupid"+order);
	if (obj_tmp != null) {
		obj_tmp.value = grouplist;
	} else {
		alert("�趨�����ֵ������б�ʱ�������󣬶���Ϊ��");
	}
}

com.linkage.card.cardres.setSelectedGroupList = function setSelectedGroupList(){
	var groupList = "";
	var eleSelected = document.groupinfo.selectedgrouplist;
	for (var j=0;j<eleSelected.options.length;j++){
		if (trim(eleSelected.options[j].value)!=null) {
			groupList += "|"+eleSelected.options[j].value;
		}
	}
	if( groupList != "" ) {
		groupList = groupList.substring(1);
	}
	opener.setGroupList(groupList,document.groupinfo.order.value);
	self.close();
}

com.linkage.card.cardres.cancel = function cancel() {
	self.close();
}
com.linkage.card.cardres.processAdd = function processAdd() {
	var selectedIndex = document.groupinfo.selectgrouplist.selectedIndex;
	if (selectedIndex == null || selectedIndex==-1) {
		alert("��Ӵ�ѡ�������б���ѡ����Ҫ��ӵ����");
		return;
	}
	var eleSelect = document.groupinfo.selectgrouplist;
	var eleSelected = document.groupinfo.selectedgrouplist;
	var index = 0;
	for (var j=0;j<eleSelected.options.length;j++){
		if (eleSelected.options[j].value == eleSelect.options[selectedIndex].value) {
			alert("������Ѿ���������ѡ�е�����б���");
			return;
		}
	}
	index = eleSelected.options.length+1;
	eleSelected.options.length = index;
	eleSelected.options[index-1].value = eleSelect.options[selectedIndex].value;
	eleSelected.options[index-1].text = eleSelect.options[selectedIndex].text;
}
com.linkage.card.cardres.processDelete = function processDelete() {
	var selectedIndex = document.groupinfo.selectedgrouplist.selectedIndex;
	var eleSelected = document.groupinfo.selectedgrouplist;
	if (selectedIndex == null || selectedIndex==-1) {
		alert("�����ѡ�������б���ѡ��Ҫɾ�������");
		return;
	}
	var index = 0;
	var flag = false;
	for (var j=0;j<eleSelected.options.length;j++){
		if (j==selectedIndex) {
			flag = true;
		}
		if (flag && (selectedIndex!=(eleSelected.options.length-1)) && (j!=(eleSelected.options.length-1))) {
			eleSelected.options[j].value = eleSelected.options[j+1].value;
			eleSelected.options[j].text = eleSelected.options[j+1].text;
		}
	}
	if (flag) {
		index = eleSelected.length-1;
		eleSelected.length = index;
	}
}