com.linkage.param.area = new Object();

com.linkage.param.area.isValidAreano = function isValidAreano(obj1,obj2){
    if(obj1 == null) obj1 = document.forms[0].areano;
    if(obj2 == null) obj2 = document.forms[0].superarea;
    if(obj2.options.length == 0){
        alert("�޿��õ��ϼ����� ��");
        return false;
    }
    var areano = com.linkage.util.trim(obj1.value);
    var superarea = obj2.value;
    
    if(areano == ""){
        alert("���������ر��룡");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(areano)){
        alert("���ر������Ϊ���֣�");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(areano.length - superarea.length != 2){
        alert("���ر���ֻ�ܱ��ϼ����ض���λ��");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(areano.substring(0,superarea.length) != superarea){
        alert("���ر���ǰ��λ����ƥ���ϼ����ر��룡");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.param.area.isValidAreaname = function isValidAreaname(obj1){
    if(obj1 == null) obj1 = document.forms[0].name;
    var areaname = com.linkage.util.trim(obj1.value);
    if(areaname == ""){
        alert("�������������ƣ�");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.param.area.isValidAreacode = function isValidAreacode(obj1){
    if(obj1 == null) obj1 = document.forms[0].areacode;
    var areacode = com.linkage.util.trim(obj1.value);
    if(areacode == ""){
        alert("������绰���ţ�");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(areacode)){
        alert("�绰���ű���Ϊ���֣�");
        obj1.focus();
        obj1.select();
        return false;
    }
    var tmp1 = areacode.substring(0,1);
    var tmp2 = areacode.substring(1,2);
    if(tmp1 != 0 || tmp2 == 0){
        alert("�绰�������벻��ȷ��");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.param.area.isValidTelcount = function isValidTelcount(obj1){
    if(obj1 == null) obj1 = document.forms[0].telcount;
    var telcount = com.linkage.util.trim(obj1.value);
    if(telcount == ""){
        alert("��������볤�ȣ�");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(telcount)){
        alert("���볤�ȱ���Ϊ���֣�");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!(telcount > 0 && telcount < 100)){
        alert("���볤��ֻ��Ϊ��λ���ڵķ������֣�");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.param.area.isValidBillcycle = function isValidBillcycle(obj1){
    if(obj1 == null) obj1 = document.forms[0].billcycle;
    var billcycle = com.linkage.util.trim(obj1.value);
    if(billcycle == ""){
        alert("���������ڣ�");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isNaturalNum(billcycle)){
        alert("���ڱ����Ƿ���������");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!(billcycle > 0 && billcycle < 32)){
        alert("���ڱ���Ϊ1-31֮�䣡");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.param.area.isValidAreanoSelect = function isValidAreanoSelect(obj1){
    if(obj1 == null) obj1 = document.forms[0].areano;
    if(obj1.options.length == 0){
        alert("�޿��õ��ϼ����� ��");
        return false;
    }
    return true;
}