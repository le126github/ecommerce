com.linkage.device.router = new Object();

com.linkage.device.router.isValidIP = function isValidIP(obj){
    if(obj == null) obj = document.forms[0].ipaddress;
    var ip = obj.value;
    if(!com.linkage.util.isValidIP(ip)){
        alert("��������ȷ��IP��ַ��");
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
        alert("������������ֵ��");
        obj.focus();
        obj.select();
        return false;
    }
    if(!com.linkage.util.isInteger(maxnum)){
        alert("������ֵ����Ϊ������");
        obj.focus();
        obj.select();
        return false;
    }
    if(maxnum.length > 12){
        alert("������ֵ���ó���12λ��");
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
        alert("������������");
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
        alert("������·����ID�ţ�");
        obj.focus();
        obj.select();
        return false;
    }
    if(!com.linkage.util.isInteger(devid)){
        alert("·����ID�ű���Ϊ������");
        obj.focus();
        obj.select();
        return false;
    }
    return true;
}