com.linkage.param.paytype = new Object();

com.linkage.param.paytype.isValidPaytype = function isValidPaytype(obj1){
    if(obj1 == null) obj1 = document.forms[0].paytype;
    var paytype = com.linkage.util.trim(obj1.value);
    if(paytype == ""){
        alert("�����븶�ѷ�ʽ��ʶ��");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(paytype)){
        alert("���ѷ�ʽ��ʶ����Ϊ���֣�");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.param.paytype.isValidDescription = function isValidDescription(obj1){
    if(obj1 == null) obj1 = document.forms[0].description;
    var description = com.linkage.util.trim(obj1.value);
    if(description == ""){
        alert("�����븶�ѷ�ʽ���ƣ�");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}