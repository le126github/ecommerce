com.linkage.param.nastype = new Object();

com.linkage.param.nastype.isValidNastype = function isValidNastype(obj1){
    if(obj1 == null) obj1 = document.forms[0].nastype;
    var nastype = com.linkage.util.trim(obj1.value);
    if(nastype == ""){
        alert("��������������ͣ�");
        obj1.focus();
        obj1.select();
        return false;
    }
    obj1.value = nastype;
    return true;
}

com.linkage.param.nastype.isValidVendor = function isValidVendor(obj1){
    if(obj1 == null) obj1 = document.forms[0].vendor;
    var vendor = com.linkage.util.trim(obj1.value);
    if(vendor == ""){
        alert("�����빩Ӧ�̣�");
        obj1.focus();
        obj1.select();
        return false;
    }
    obj1.value = vendor;
    return true;
}