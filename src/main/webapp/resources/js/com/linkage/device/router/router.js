com.linkage.device.router = new Object();

com.linkage.device.router.isValidIP = function isValidIP(obj){
    if(obj == null) obj = document.forms[0].ipaddress;
    var ip = obj.value;
    if(!com.linkage.util.isValidIP(ip)){
        alert("请输入正确的IP地址！");
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}

com.linkage.device.router.isValidMaxnum = function isValidMaxnum(obj) {
    if(obj == null) obj = document.forms[0].maxnum;
    var maxnum = obj.value;
    if(maxnum == ''){
        alert("请输入最大溢出值！");
        obj.focus();
        obj.select();
        return false;
    }
    if(!com.linkage.util.isInteger(maxnum)){
        alert("最大溢出值必须为整数！");
        obj.focus();
        obj.select();
        return false;
    }
    if(maxnum.length > 12){
        alert("最大溢出值不得超过12位！");
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}

com.linkage.device.router.isValidGroupname = function isValidGroupname(obj) {
    if(obj == null) obj = document.forms[0].groupname;
    var groupname = obj.value;
    if(groupname == ''){
        alert("请输入组名！");
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}

com.linkage.device.router.isValidDevid = function isValidDevid(obj) {
    if(obj == null) obj = document.forms[0].devid;
    var devid = obj.value;
    if(devid == ''){
        alert("请输入路由器ID号！");
        obj.focus();
        obj.select();
        return false;
    }
    if(!com.linkage.util.isInteger(devid)){
        alert("路由器ID号必须为整数！");
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}