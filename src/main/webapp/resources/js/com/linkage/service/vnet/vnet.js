com.linkage.service.vnet = new Object();

com.linkage.service.vnet.isValidPassword = function isValidPassword(obj1,obj2,obj3){
    if(obj1 == null) obj1 = document.forms[0].username;
    if(obj2 == null) obj2 = document.forms[0].password;
    if(obj3 == null) obj3 = document.forms[0].password_sure;
    var username = obj1.value;
    var Password = trim(obj2.value);
    var password_sure = trim(obj3.value);
    if(!com.linkage.util.isValidUserPassword(Password,username))
        return false;
    if (Password != password_sure){
        alert("密码和确认密码不相同！");
        return false;
    }
    document.forms[0].password.value = Password;
    document.forms[0].password_sure.value = password_sure;
    return true;
}

com.linkage.service.vnet.sel_checkonline = function sel_checkonline(obj){
    if(obj == null) obj = document.forms[0].isCheckOnline;
    var isCheckOnline = obj.value;
    if(isCheckOnline == null){
        document.all("bindingIP").style.display = "block";
    }else if(isCheckOnline == 0){
        document.all("bindingIP").style.display = "block";
    }else if(isCheckOnline == 1){
        document.all("bindingIP").style.display = "none";
    }
}

com.linkage.service.vnet.goldenuserchange = function goldenuserchange(obj) {

  if(obj==null) obj = document.forms[0].goldenUser;
  
  var goldenUser = obj.value;

  if(goldenUser == 0){
    if(document.all("isCheckOnline").value == "0") {
        document.all("bindingIP").style.display = "block";
     }
     else {
      document.all("bindingIP").style.display = "none";
    }
  }else if(goldenUser == 1){
      document.all("isCheckOnline").value = "0";
      document.all("bindingIP").style.display = "block";
      document.all("bindingIP").value="";
  }
}

com.linkage.service.vnet.checkonlinechange = function checkonlinechange(obj) {
  if(obj == null) obj = document.forms[0].isCheckOnline;
  var isCheckOnline = obj.value;
  if(document.all("goldenUser")!=null) {
    if(document.all("goldenUser").value == "1") {
      document.all("isCheckOnline").value = "0";
      document.all("bindingIP").value="";
      return;
    }
  }
  
  if(isCheckOnline == null){
      document.all("bindingIP").style.display = "block";
  }else if(isCheckOnline == 0){
      document.all("bindingIP").style.display = "block";
  }else if(isCheckOnline == 1){
      document.all("bindingIP").style.display = "none";
      document.all("bindingIP").value="";
  }
}

com.linkage.service.vnet.checkLimitedFee = function checkLimitedFee(obj) {
  if(com.linkage.util.isRealInteger(obj.value) == false) {
    alert("请输入有效的消费限额");
    obj.focus();
    return false;
  }
  
  if(obj.value < -1) {
    alert("不能输入小于等于-2的值!");
    obj.focus();
    return false;
  }
  return true;
}

com.linkage.service.vnet.checkDate = function checkDate(date1,date2) {
  if(!com.linkage.util.dateBEDate(new Date().getYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate(),date1.value)) {
    alert("生效日期必须大于等于当前日期");
    return false;
  }
  
  if(com.linkage.util.dateBDate(date1.value,date2.value)) {
    alert("实效日期必须大于生效日期")
    return false;
  }
  
  return true;
}

com.linkage.service.vnet.checkBindingIP = function checkBindingIP(isCheck,bindingIP) {
  if(isCheck=="0") {
    if(bindingIP=="") {
      alert("请输入绑定IP!");   
      return false;
    }
  }
  
  // 校验IP地址是否合法
  
  return true;
}
  