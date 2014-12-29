com.linkage.param.paytype = new Object();

com.linkage.param.paytype.isValidPaytype = function isValidPaytype(obj1){
    if(obj1 == null) obj1 = document.forms[0].paytype;
    var paytype = com.linkage.util.trim(obj1.value);
    if(paytype == ""){
        alert("请输入付费方式标识！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(paytype)){
        alert("付费方式标识必须为数字！");
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
        alert("请输入付费方式名称！");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}