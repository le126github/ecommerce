com.linkage.param.syscode = new Object();

com.linkage.param.syscode.isValidParamno = function isValidParamno(obj1){
    if(obj1 == null) obj1 = document.forms[0].paramno;
    var paramno = com.linkage.util.trim(obj1.value);
    if(paramno == ""){
        alert("�����������ʶ��");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(paramno)){
        alert("������ʶ����Ϊ���֣�");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.param.syscode.isValidParamname = function isValidParamname(obj1){
    if(obj1 == null) obj1 = document.forms[0].paramname;
    var paramname = com.linkage.util.trim(obj1.value);
    if(paramname == ""){
        alert("������������ƣ�");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}