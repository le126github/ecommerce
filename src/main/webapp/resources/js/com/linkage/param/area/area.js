com.linkage.param.area = new Object();

com.linkage.param.area.isValidAreano = function isValidAreano(obj1,obj2){
    if(obj1 == null) obj1 = document.forms[0].areano;
    if(obj2 == null) obj2 = document.forms[0].superarea;
    if(obj2.options.length == 0){
        alert("无可用的上级属地 ！");
        return false;
    }
    var areano = com.linkage.util.trim(obj1.value);
    var superarea = obj2.value;
    
    if(areano == ""){
        alert("请输入属地编码！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(areano)){
        alert("属地编码必须为数字！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(areano.length - superarea.length != 2){
        alert("属地编码只能比上级属地多两位！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(areano.substring(0,superarea.length) != superarea){
        alert("属地编码前几位必须匹配上级属地编码！");
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
        alert("请输入属地名称！");
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
        alert("请输入电话区号！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(areacode)){
        alert("电话区号必须为数字！");
        obj1.focus();
        obj1.select();
        return false;
    }
    var tmp1 = areacode.substring(0,1);
    var tmp2 = areacode.substring(1,2);
    if(tmp1 != 0 || tmp2 == 0){
        alert("电话区号输入不正确！");
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
        alert("请输入号码长度！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isInteger(telcount)){
        alert("号码长度必须为数字！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!(telcount > 0 && telcount < 100)){
        alert("号码长度只能为两位以内的非零数字！");
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
        alert("请输入帐期！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!com.linkage.util.isNaturalNum(billcycle)){
        alert("帐期必须是非零整数！");
        obj1.focus();
        obj1.select();
        return false;
    }
    if(!(billcycle > 0 && billcycle < 32)){
        alert("帐期必须为1-31之间！");
        obj1.focus();
        obj1.select();
        return false;
    }
    return true;
}

com.linkage.param.area.isValidAreanoSelect = function isValidAreanoSelect(obj1){
    if(obj1 == null) obj1 = document.forms[0].areano;
    if(obj1.options.length == 0){
        alert("无可用的上级属地 ！");
        return false;
    }
    return true;
}