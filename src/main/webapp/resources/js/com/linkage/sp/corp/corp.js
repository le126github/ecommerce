com.linkage.sp.corp = new Object();

com.linkage.sp.corp.getFileExt = function getFileExt(str){
	if(str=="") return "";
	var idx = str.lastIndexOf(".");
	if(idx<=0) return "";
	return str.substring(idx+1,str.length);
}
com.linkage.sp.corp.isValidCorpId = function isValidCorpId(obj){
	if(obj==null) obj=document.forms[0].corpId;
	var corpId = obj.value;
	if(corpId == "-*" || corpId == null || corpId == "" ){
		alert("请选择企业名称！");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidCorpName = function isValidCorpName(obj){
	if(obj==null) obj=document.forms[0].corpName;
	var corpName = obj.value;
	if(corpName == ""){
		alert("请输入企业名称！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidCorpNameEn = function isValidCorpNameEn(obj){
	if(obj==null) obj=document.forms[0].corpNameEn;
	var corpNameEn = obj.value;
	if(corpNameEn == ""){
		alert("请输入英文名称！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidCorpAdmin = function isValidCorpAdmin(obj){
	if(obj==null) obj=document.forms[0].corpAdmin;
	var corpAdmin = obj.value;
	if(!com.linkage.util.isValidEmail(corpAdmin)){
		alert("请输入正确的合作商负责人email！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidAdmin = function isValidAdmin(obj){
	if(obj==null) obj=document.forms[0].admin;
	var admin = obj.value;
	if(!com.linkage.util.isValidEmail(admin)){
		alert("请输入正确的合作商负责人email！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidCorpCode = function isValidCorpCode(obj){
	if(obj==null) obj=document.forms[0].corpCode;
	var corpCode = obj.value;
	if(corpCode == ""){
		alert("请输入企业代码！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidQuality = function isValidQuality(obj){
	if(obj==null) obj=document.forms[0].quality;
	var quality = obj.value;
	if(quality == "-*" || quality == null || quality == "" ){
		alert("请选择公司性质！");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidLocation = function isValidLocation(obj){
	if(obj==null) obj=document.forms[0].location;
	var location = obj.value;
	if(location == ""){
		alert("请输入公司地址！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidJuristicPerson = function isValidJuristicPerson(obj){
	if(obj==null) obj=document.forms[0].juristicPerson;
	var juristicPerson = obj.value;
	if(juristicPerson == ""){
		alert("请输入法定代表人！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidPartner = function isValidPartner(obj){
	if(obj==null) obj=document.forms[0].partner;
	var partner = obj.value;
	if(partner == ""){
		alert("请输入股东和高管！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidDepositBank = function isValidDepositBank(obj){
	if(obj==null) obj=document.forms[0].depositBank;
	var depositBank = obj.value;
	if(depositBank == ""){
		alert("请输入开户银行！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidBankAccount = function isValidBankAccount(obj){
	if(obj==null) obj=document.forms[0].bankAccount;
	var bankAccount = obj.value;
	if(bankAccount == ""){
		alert("请输入银行帐号！");
		obj.select();
		obj.focus();
		return false;
	}
	if(!com.linkage.util.isValidBankNO(bankAccount)){
	  return false;
	}
	return true;
}

com.linkage.sp.corp.isValidIcpissuert = function isValidIcpissuert(obj){
	if(obj==null) obj=document.forms[0].icpissuer;
	var icpissuer = obj.value;
	if(icpissuer == ""){
		alert("请输入ICP证颁发地！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidIcpid = function isValidIcpid(obj){
	if(obj==null) obj=document.forms[0].icpid;
	var icpid = obj.value;
	if(icpid == ""){
		alert("请输入ICP证号！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidSettleNote = function isValidSettleNote(obj){
	if(obj==null) obj=document.forms[0].settleNote;
	var settleNote = obj.value;
	if(settleNote == ""){
		alert("请输入结算说明！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidSettleStyle = function isValidSettleStyle(){
	var count = 0;
	for(i=0;i<document.forms[0].settleStyle.length;i++){
		if(document.forms[0].settleStyle[i].checked){
			count ++;
			break;
		}
	}
	if(count == 0){
		alert("请至少选择一种计算方式！");
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidPlatformType = function isValidPlatformType(){
	var count = 0;
	for(i=0;i<document.forms[0].platformType.length;i++){
		if(document.forms[0].platformType[i].checked){
			count ++;
			break;
		}
	}
	if(count == 0){
		alert("请至少选择一种业务平台类型！");
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidWebSite = function isValidWebSite(obj){
	if(obj==null) obj=document.forms[0].webSite;
	var webSite = obj.value;
	if(webSite == ""){
		alert("请输入公司网址！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidCreditCount = function isValidCreditCount(obj){
	if(obj==null) obj=document.forms[0].creditCount;
	var creditCount = obj.value;
	if(creditCount == ""){
		alert("请输入信用积分！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidCreditLevel = function isValidCreditLevel(obj){
	if(obj==null) obj=document.forms[0].creditLevel;
	var creditLevel = obj.value;
	if(creditLevel == ""){
		alert("请输入信用级别！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidEmployeeNum = function isValidEmployeeNum(obj){
	if(obj==null) obj=document.forms[0].employeeNum;
	var employeeNum = obj.value;
	if(employeeNum == ""){
		alert("请输入员工总数！");
		obj.select();
		obj.focus();
		return false;
	}
	  if(!isPosInt(employeeNum)){
	  alert("员工总数只能为数字！");
	  obj.select();
	  obj.focus();
	  return false;	
	}
	return true;
}

com.linkage.sp.corp.isValidGraduateNum = function isValidGraduateNum(obj){
  if(obj==null) obj=document.forms[0].graduateNum;
	var graduateNum = obj.value;
	if(graduateNum != ""){
	  if(!isPosInt(graduateNum)){
	    alert("研究生以上员工人数只能为数字！");
	    obj.select();
	    obj.focus();
	    return false;	
	  }
	}
	return true; 	
}

com.linkage.sp.corp.isValidOtherNum = function isValidOtherNum(obj){
  if(obj==null) obj=document.forms[0].otherNum;
	var otherNum = obj.value;
	if(otherNum != ""){
	  if(!isPosInt(otherNum)){
	    alert("其他学历人数只能为数字！");
	    obj.select();
	    obj.focus();
	    return false;	
	  }
	}
	return true; 	
}

com.linkage.sp.corp.isValidUnderGraduateNum = function isValidUnderGraduateNum(obj){
  if(obj==null) obj=document.forms[0].underGraduateNum;
	var underGraduateNum = obj.value;
	if(underGraduateNum != ""){
	  if(!isPosInt(underGraduateNum)){
	    alert("本科人数只能为数字！");
	    obj.select();
	    obj.focus();
	    return false;	
	  }
	}
	return true; 	
}

com.linkage.sp.corp.isValidJuniorNum = function isValidJuniorNum(obj){
  if(obj==null) obj=document.forms[0].juniorNum;
	var juniorNum = obj.value;
	if(juniorNum != ""){
	  if(!isPosInt(juniorNum)){
	    alert("专科人数只能为数字！");
	    obj.select();
	    obj.focus();
	    return false;	
	  }
	}
	return true; 	
}

com.linkage.sp.corp.isValidHighSchoolNum = function isValidHighSchoolNum(obj){
  if(obj==null) obj=document.forms[0].highSchoolNum;
	var highSchoolNum = obj.value;
	if(highSchoolNum != ""){
	  if(!isPosInt(highSchoolNum)){
	    alert("高中人数只能为数字！");
	    obj.select();
	    obj.focus();
	    return false;	
	  }
	}
	return true; 	
}

com.linkage.sp.corp.isValidCorpIntro = function isValidCorpIntro(obj){
	if(obj==null) obj=document.forms[0].corpIntro;
	var corpIntro = obj.value;
	if(corpIntro == ""){
		alert("请输入企业说明！");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(corpIntro);
	if(len >255){
		alert("企业说明长度不能大于255个字符，当前长度为"+len+"个字符！");
		obj.select();
		obj.focus();
		return false;		
	}
	return true;
}

com.linkage.sp.corp.isValidHotLine = function isValidHotLine(obj){
	if(obj==null) obj=document.forms[0].hotLine;
	var hotLine = obj.value;
	if(hotLine == ""){
		alert("请输入客服热线！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidEmail = function isValidEmail(obj){
	if(obj==null) obj=document.forms[0].support_email;
	var email = obj.value;
	if(email == ""){
		alert("请输入客服邮件！");
		obj.select();
		obj.focus();
		return false;
	}
	if(!com.linkage.util.isValidEmail(email)){
		alert("请输入正确的客服邮件！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidSupportCount = function isValidSupportCount(obj){
	if(obj==null) obj=document.forms[0].supportCount;
	var supportCount = obj.value;
	if(supportCount == ""){
		alert("请输入客服人员数量！");
		obj.select();
		obj.focus();
		return false;
	}
  if(!isPosInt(supportCount)){
	  alert("客服人员数量只能为数字！");
	  obj.select();
	  obj.focus();
	  return false;	
	}	
	return true;
}

com.linkage.sp.corp.isValidContactMan = function isValidContactMan(obj){
	if(obj==null) obj=document.forms[0].contactMan;
	var contactMan = obj.value;
	if(contactMan == ""){
		alert("请输入联系人姓名！");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidMobile = function isValidMobile(obj){
	if(obj==null) obj=document.forms[0].support_mobile;
	var mobile = obj.value;
	if(mobile == ""){
		alert("请输入联系人手机！");
		obj.select();
		obj.focus();
		return false;
	}
	if(!com.linkage.util.isValidGsmNumber(mobile)){
	  return false;
	}
	return true;
}

com.linkage.sp.corp.isValidRegFunds = function isValidRegFunds(obj){
	if(obj==null) obj=document.forms[0].regFunds;
	var regFunds = obj.value;
	if(regFunds == ""){
		alert("请输入注册资金！");
		obj.select();
		obj.focus();
		return false;
	}
  if(!isPosInt(regFunds)){
	  alert("注册资金只能为数字！");
	  obj.select();
	  obj.focus();
	  return false;	
	}
  if(!com.linkage.util.isMoney(regFunds)){
    return false;
  }
	return true;
}

com.linkage.sp.corp.isValidCorpBasicInfoAdd = function isValidCorpBasicInfoAdd(){
	if(!com.linkage.sp.corp.isValidCorpName(document.forms[0].corpName))
		return false;
	if(!com.linkage.sp.corp.isValidCorpAdmin(document.forms[0].corpAdmin))
		return false;
	if(!com.linkage.sp.corp.isValidCorpNameEn(document.forms[0].corpNameEn))
		return false;
	if(!com.linkage.sp.corp.isValidCorpCode(document.forms[0].corpCode))
		return false;		
	if(!com.linkage.sp.corp.isValidQuality(document.forms[0].quality))
		return false;	
	if(!com.linkage.sp.corp.isValidLocation(document.forms[0].location))
		return false;
	if(!com.linkage.sp.corp.isValidJuristicPerson(document.forms[0].juristicPerson))
		return false;
	if(!com.linkage.sp.corp.isValidPartner(document.forms[0].partner))
		return false;
	if(!com.linkage.sp.corp.isValidDepositBank(document.forms[0].depositBank))
		return false;	
	if(!com.linkage.sp.corp.isValidBankAccount(document.forms[0].bankAccount))
		return false;
	if(!com.linkage.sp.corp.isValidRegFunds(document.forms[0].regFunds))
		return false;
	if(!com.linkage.sp.corp.isValidIcpissuert(document.forms[0].icpissuer))
		return false;
	if(!com.linkage.sp.corp.isValidIcpid(document.forms[0].icpid))
		return false;	
	if(!com.linkage.sp.corp.isValidSettleStyle(document.forms[0].settleStyle))
		return false;
	if(!com.linkage.sp.corp.isValidSettleNote(document.forms[0].settleNote))
		return false;
	if(!com.linkage.sp.corp.isValidWebSite(document.forms[0].webSite))
		return false;
	if(!com.linkage.sp.corp.isValidCreditCount(document.forms[0].creditCount))
		return false;												
	if(!com.linkage.sp.corp.isValidCreditLevel(document.forms[0].creditLevel))
		return false;
	if(!com.linkage.sp.corp.isValidEmployeeNum(document.forms[0].employeeNum))
		return false;
	if(!com.linkage.sp.corp.isValidGraduateNum(document.forms[0].graduateNum))
		return false;	
	if(!com.linkage.sp.corp.isValidUnderGraduateNum(document.forms[0].underGraduateNum))
		return false;	
	if(!com.linkage.sp.corp.isValidJuniorNum(document.forms[0].juniorNum))
		return false;	
	if(!com.linkage.sp.corp.isValidHighSchoolNum(document.forms[0].highSchoolNum))
		return false;				
	if(!com.linkage.sp.corp.isValidOtherNum(document.forms[0].otherNum))
		return false;		
	if(!com.linkage.sp.corp.isValidCorpIntro(document.forms[0].corpIntro))
		return false;
	if(!com.linkage.sp.corp.isValidHotLine(document.forms[0].hotLine))
		return false;	
	if(!com.linkage.sp.corp.isValidEmail(document.forms[0].support_email))
		return false;
	if(!com.linkage.sp.corp.isValidSupportCount(document.forms[0].supportCount))
		return false;
	if(!com.linkage.sp.corp.isValidContactMan(document.forms[0].contactMan))
		return false;
	if(!com.linkage.sp.corp.isValidMobile(document.forms[0].support_mobile))
		return false;
	if(!com.linkage.sp.corp.isValidFiles())
		return false;
																
}

com.linkage.sp.corp.isValidCorpBasicFlowInfoAdd = function isValidCorpBasicInfoAdd(){
	if(!com.linkage.sp.corp.isValidCorpName(document.forms[0].corpName))
		return false;
	if(!com.linkage.sp.corp.isValidCorpAdmin(document.forms[0].corpAdmin))
		return false;
	if(!com.linkage.sp.corp.isValidCorpNameEn(document.forms[0].corpNameEn))
		return false;
	if(!com.linkage.sp.corp.isValidCorpCode(document.forms[0].corpCode))
		return false;			
	if(!com.linkage.sp.corp.isValidCorpCode(document.forms[0].corpCode))
		return false;			
	if(!com.linkage.sp.corp.isValidQuality(document.forms[0].quality))
		return false;	
	if(!com.linkage.sp.corp.isValidLocation(document.forms[0].location))
		return false;
	if(!com.linkage.sp.corp.isValidJuristicPerson(document.forms[0].juristicPerson))
		return false;
	if(!com.linkage.sp.corp.isValidPartner(document.forms[0].partner))
		return false;
	if(!com.linkage.sp.corp.isValidDepositBank(document.forms[0].depositBank))
		return false;	
	if(!com.linkage.sp.corp.isValidBankAccount(document.forms[0].bankAccount))
		return false;
	if(!com.linkage.sp.corp.isValidRegFunds(document.forms[0].regFunds))
		return false;
	if(!com.linkage.sp.corp.isValidIcpissuert(document.forms[0].icpissuer))
		return false;
	if(!com.linkage.sp.corp.isValidIcpid(document.forms[0].icpid))
		return false;	
	if(!com.linkage.sp.corp.isValidSettleStyle(document.forms[0].settleStyle))
		return false;
	if(!com.linkage.sp.corp.isValidSettleNote(document.forms[0].settleNote))
		return false;
	if(!com.linkage.sp.corp.isValidWebSite(document.forms[0].webSite))
		return false;
	if(!com.linkage.sp.corp.isValidCreditCount(document.forms[0].creditCount))
		return false;												
	if(!com.linkage.sp.corp.isValidCreditLevel(document.forms[0].creditLevel))
		return false;
	if(!com.linkage.sp.corp.isValidEmployeeNum(document.forms[0].employeeNum))
		return false;
	if(!com.linkage.sp.corp.isValidGraduateNum(document.forms[0].graduateNum))
		return false;	
	if(!com.linkage.sp.corp.isValidUnderGraduateNum(document.forms[0].underGraduateNum))
		return false;	
	if(!com.linkage.sp.corp.isValidJuniorNum(document.forms[0].juniorNum))
		return false;	
	if(!com.linkage.sp.corp.isValidHighSchoolNum(document.forms[0].highSchoolNum))
		return false;				
	if(!com.linkage.sp.corp.isValidOtherNum(document.forms[0].otherNum))
		return false;		
	if(!com.linkage.sp.corp.isValidCorpIntro(document.forms[0].corpIntro))
		return false;
	if(!com.linkage.sp.corp.isValidHotLine(document.forms[0].hotLine))
		return false;	
	if(!com.linkage.sp.corp.isValidEmail(document.forms[0].support_email))
		return false;
	if(!com.linkage.sp.corp.isValidSupportCount(document.forms[0].supportCount))
		return false;
	if(!com.linkage.sp.corp.isValidContactMan(document.forms[0].contactMan))
		return false;
	if(!com.linkage.sp.corp.isValidMobile(document.forms[0].support_mobile))
		return false;
	if(document.forms[0].fileIsNull.value=='null'){
			if(!com.linkage.sp.corp.isValidFiles())
		    return false;	  
	}																
}

com.linkage.sp.corp.isValidCorpBasicInfoMod = function isValidCorpBasicInfoMod(){
	if(!com.linkage.sp.corp.isValidCorpName(document.forms[0].corpName))
		return false;
	if(!com.linkage.sp.corp.isValidCorpAdmin(document.forms[0].corpAdmin))
		return false;
	if(!com.linkage.sp.corp.isValidCorpNameEn(document.forms[0].corpNameEn))
		return false;
	if(!com.linkage.sp.corp.isValidCorpCode(document.forms[0].corpCode))
		return false;			
	if(!com.linkage.sp.corp.isValidQuality(document.forms[0].quality))
		return false;	
	if(!com.linkage.sp.corp.isValidLocation(document.forms[0].location))
		return false;
	if(!com.linkage.sp.corp.isValidJuristicPerson(document.forms[0].juristicPerson))
		return false;
	if(!com.linkage.sp.corp.isValidPartner(document.forms[0].partner))
		return false;
	if(!com.linkage.sp.corp.isValidDepositBank(document.forms[0].depositBank))
		return false;	
	if(!com.linkage.sp.corp.isValidBankAccount(document.forms[0].bankAccount))
		return false;
	if(!com.linkage.sp.corp.isValidRegFunds(document.forms[0].regFunds))
		return false;
	if(!com.linkage.sp.corp.isValidIcpissuert(document.forms[0].icpissuer))
		return false;
	if(!com.linkage.sp.corp.isValidIcpid(document.forms[0].icpid))
		return false;	
	if(!com.linkage.sp.corp.isValidSettleStyle(document.forms[0].settleStyle))
		return false;
	if(!com.linkage.sp.corp.isValidSettleNote(document.forms[0].settleNote))
		return false;
	if(!com.linkage.sp.corp.isValidWebSite(document.forms[0].webSite))
		return false;
	if(!com.linkage.sp.corp.isValidCreditCount(document.forms[0].creditCount))
		return false;												
	if(!com.linkage.sp.corp.isValidCreditLevel(document.forms[0].creditLevel))
		return false;
	if(!com.linkage.sp.corp.isValidEmployeeNum(document.forms[0].employeeNum))
		return false;
	if(!com.linkage.sp.corp.isValidGraduateNum(document.forms[0].graduateNum))
		return false;	
	if(!com.linkage.sp.corp.isValidUnderGraduateNum(document.forms[0].underGraduateNum))
		return false;	
	if(!com.linkage.sp.corp.isValidJuniorNum(document.forms[0].juniorNum))
		return false;	
	if(!com.linkage.sp.corp.isValidHighSchoolNum(document.forms[0].highSchoolNum))
		return false;				
	if(!com.linkage.sp.corp.isValidOtherNum(document.forms[0].otherNum))
		return false;		
	if(!com.linkage.sp.corp.isValidCorpIntro(document.forms[0].corpIntro))
		return false;
	if(!com.linkage.sp.corp.isValidHotLine(document.forms[0].hotLine))
		return false;	
	if(!com.linkage.sp.corp.isValidEmail(document.forms[0].support_email))
		return false;
	if(!com.linkage.sp.corp.isValidSupportCount(document.forms[0].supportCount))
		return false;
	if(!com.linkage.sp.corp.isValidContactMan(document.forms[0].contactMan))
		return false;
	if(!com.linkage.sp.corp.isValidMobile(document.forms[0].support_mobile))
		return false;		
									
	if(document.forms[0].fileIsNull.value=='null'){
			if(!com.linkage.sp.corp.isValidFiles())
		    return false;	  
	}										
}

com.linkage.sp.corp.isModCorpAdmin =  function isModCorpAdmin(){
	if(document.forms[0].modCorpAdmin.checked==true){
    if(!com.linkage.sp.corp.isValidAdmin(document.forms[0].admin)){
      return false;	
    }
    if(!com.linkage.sp.corp.isValidAdminPassword(document.forms[0].password,document.forms[0].password_sure)){
      return false;
    }
    if(!com.linkage.sp.corp.isValidFullName(document.forms[0].fullname)){
      return false;
    }   
	}	
}

com.linkage.sp.corp.isValidFiles = function isValidFiles(){
  if(document.forms[0].file1.value==""){
    alert("请上传企业法人营业执照！");
	  return false;
  }
  if(document.forms[0].file2.value==""){
    alert("请上传银行开户许可证！");
	  return false;
  }
  if(document.forms[0].file3.value==""){
    alert("请上传税务登记证！");
	  return false;
  }
    if(document.forms[0].file5.value==""){
    alert("请上传商业计划书！");
	  return false;
  }
  if(document.forms[0].file11.value==""){
    alert("请上传增值业务经营许可证！");
	  return false;
  }
  return true;        											
}
	
com.linkage.sp.corp.isValidFile1 = function isValidFile1(obj){
	if(obj==null) obj=document.forms[0].file1;
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="gif"&&fileExt!="jpg"&&fileExt!="jpeg"&&fileExt!="bmp"&&fileExt!="png"){
			alert("企业法人营业执照文件名必须以.gif,.jpg,.jpeg,.bmp,.png作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.isValidFile2 = function isValidFile2(obj){
	if(obj==null) obj=document.forms[0].file2;
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="gif"&&fileExt!="jpg"&&fileExt!="jpeg"&&fileExt!="bmp"&&fileExt!="png"){
			alert("银行开户许可证文件名必须以.gif,.jpg,.jpeg,.bmp,.png作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.isValidFile3 = function isValidFile3(obj){
	if(obj==null) obj=document.forms[0].file3;		
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="gif"&&fileExt!="jpg"&&fileExt!="jpeg"&&fileExt!="bmp"&&fileExt!="png"){
			alert("税务登记证文件名必须以.gif,.jpg,.jpeg,.bmp,.png作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.isValidFile4 = function isValidFile4(obj){
	if(obj==null) obj=document.forms[0].file4;
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="gif"&&fileExt!="jpg"&&fileExt!="jpeg"&&fileExt!="bmp"&&fileExt!="png"){
			alert("信息服务业务经营许可证文件名必须以.gif,.jpg,.jpeg,.bmp,.png作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.isValidFile5 = function isValidFile5(obj){
	if(obj==null) obj=document.forms[0].file5;
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="doc"&&fileExt!="pdf"&&fileExt!="txt"&&fileExt!="xls"&&fileExt!="ppt"){
			alert("商业计划书文件名必须以.doc,.pdf,.txt,.xls,.ppt作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.isValidFile6 = function isValidFile6(obj){
	if(obj==null) obj=document.forms[0].file6;	
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="gif"&&fileExt!="jpg"&&fileExt!="jpeg"&&fileExt!="bmp"&&fileExt!="png"){
			alert("信息资讯来源许可证书文件名必须以.gif,.jpg,.jpeg,.bmp,.png作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.isValidFile9 = function isValidFile9(obj){
	if(obj==null) obj=document.forms[0].file9;
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="doc"&&fileExt!="pdf"&&fileExt!="txt"&&fileExt!="xls"&&fileExt!="ppt"){
			alert("业务申报表文件名必须以.doc,.pdf,.txt,.xls,.ppt作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.isValidFile10 = function isValidFile10(obj){
	if(obj==null) obj=document.forms[0].file10;
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="doc"&&fileExt!="pdf"&&fileExt!="txt"&&fileExt!="xls"&&fileExt!="ppt"){
			alert("客户服务方案文件名必须以.doc,.pdf,.txt,.xls,.ppt作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.isValidFile11 = function isValidFile11(obj){
	if(obj==null) obj=document.forms[0].file11;		
	if(obj.value!=""){
		var fileExt = getFileExt(obj.value);
		fileExt = fileExt.toLowerCase();
		if(fileExt!="gif"&&fileExt!="jpg"&&fileExt!="jpeg"&&fileExt!="bmp"&&fileExt!="png"){
			alert("增值业务经营许可证书文件名必须以.gif,.jpg,.jpeg,.bmp,.png作为后缀！");
			return false;
		}
	}
	return true;
}

com.linkage.sp.corp.sel_status = function sel_status(obj){
	if(obj == null) obj = document.forms[0].oldstatus;
	var status = obj.value;
	if(status == "0"){
        	
        	document.all("div_normal_pause").style.display = "";
        	document.all("div_pause_normal").style.display = "none";
        	
    	}
    	else if(status == "1"){
        	
        	document.all("div_normal_pause").style.display = "none";
        	document.all("div_pause_normal").style.display = "";
        	
    	}
}

com.linkage.sp.corp.processStatus = function processStatus(obj,value){
	if(obj == null) obj = document.forms[0].status;
    	obj.value = value;
}

com.linkage.sp.corp.isValidOperation = function isValidOperation(obj){
	if(obj==null) obj=document.forms[0].operation;
	var operation = obj.value;
	if(operation==null || operation == ""){
		alert("请选择受理结果！");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.isValidRemark = function isValidRemark(obj){
	if(obj==null) obj=document.forms[0].remark;
	var remark = obj.value;
	if(remark == ""){
		alert("请输入受理意见！");
		obj.select();
		obj.focus();
		return false;
	}
	var len = com.linkage.util.checkTextLen(remark);
	if(len >255){
		alert("受理意见长度不能大于255个字符，当前长度为"+len+"个字符！");
		obj.select();
		obj.focus();
		return false;		
	}		
	return true;
}

com.linkage.sp.corp.sel_cancel = function sel_cancel(obj){
	if(obj == null) obj = document.forms[0].oldstatus;
	var status = obj.value;
	if(status == "0"){        	
      document.all("div_normal_cancel").style.display = "";
      document.all("div_pause_cancel").style.display = "none";
      document.all("div_cancel_normal").style.display = "none"; 	
  }else if(status == "1"){        	
      document.all("div_normal_cancel").style.display = "none";
      document.all("div_pause_cancel").style.display = "";
      document.all("div_cancel_normal").style.display = "none";     	
  }else if(status == "2"){        	
      document.all("div_normal_cancel").style.display = "none";
      document.all("div_pause_cancel").style.display = "none";
      document.all("div_cancel_normal").style.display = "";   	
  }
}

com.linkage.sp.corp.processCancel = function processCancel(obj,value){
	 var flag = confirm("注销合作商的同时将会注销相关业务，是否继续？")
   if(flag){
    if(obj == null) obj = document.forms[0].status;
    	obj.value = value;
   }else{
   	 return false;
   }
	return true;
}

//--------------------------------------------------------------------------
//    description:      判断字符串是正整数
//    name:       isPosInt
//    parameters: obj   - 源字符串
//    return:           true  - 是
//                false - 否
//
com.linkage.sp.corp.isPosInt = function isPosInt(obj){
	if (obj.length==0)
            return false;
      obj = trim(obj);
      for (i=0;i<obj.length;i++){
            var a = obj.substr(i,1);
            strModel = "0123456789";
            if (i==0){
                  strModel=strModel+"+";
            }
            if (strModel.indexOf(a,0)==-1){
                  return false;
            }
      }
      return true;
}

com.linkage.sp.corp.filterByCorpName = function filterByCorpName(obj){

	/*
	var s = document.forms[0].corpId;
	
	var corpIdList ="";
	var aa = new Array();
	var ind = 0;
  for(i=0;i<document.forms[0].corpId.options.length;i++){
	  if(document.forms[0].corpId.options[i].text.indexOf(corpName)>=0){
	  	 corpIdList = corpIdList + document.forms[0].corpId.options[i].value +",";
	  	 var t = new Array(2);
	  	 t[0] = document.forms[0].corpId.options[i].value;
	  	 t[1] = document.forms[0].corpId.options[i].text;
	  	 aa[ind]=t;
	  	 ind++;
	  }	
	}
	
	 document.forms[0].corpId.options.length=aa.length;
	 for(var i=0;i<aa.length;i++){
	 	document.forms[0].corpId.options[i].value=aa[i][0];
	 	document.forms[0].corpId.options[i].text=aa[i][1];
	 }
   */

  var handelflag = document.forms[0].handelFlag.value;
  if(handelflag == 'mod'){
		document.forms[0].action="/main/corp/mod_prepare.action";
  }else if(handelflag == 'status'){
  	document.forms[0].action="/main/corp/status_prepare.action";
  }else if(handelflag == 'cancel'){
    document.forms[0].action="/main/corp/cancel_prepare.action";	
  }
  document.forms[0].submit();
 
}

com.linkage.sp.corp.modCorpAdminInfo = function modCorpAdminInfo(obj){
   if(obj == null) obj=document.all("corpAdminInfo_div");
   if(document.forms[0].modCorpAdmin.checked){
   	 obj.style.display = "";
   	 document.forms[0].modAdminFlag.value="mod";
   }else{
     obj.style.display = "none";
     document.forms[0].modAdminFlag.value="unmod";
   }
   return true;
}

com.linkage.sp.corp.isValidFullName = function isValidFullName(obj){
   if(obj == null) obj=document.forms[0].fullName;
   var fullName = obj.value;
   if(fullName == null || fullName == ""){
	    alert("请输入联系人姓名！");
	    obj.select();
	    obj.focus();
	    return false;   	
   }
   return true;
}

com.linkage.sp.corp.isValidRoleid = function isValidRoleid(obj) {
	/**
	**		@func		角色
	**		@param  Object obj
	**/
	if (obj == null) obj = document.forms[0].roleId;
	var roleId = obj.value;
	if (roleId == null || roleId == "" || roleId == "-*") {
		alert("请选择管理员所属角色！");
		obj.focus();
		return false;
	}
	if (com.linkage.util.isInteger(roleId) == false ) {
		alert("角色异常！");
		obj.focus();
		return false;
	}
	return true;
}

com.linkage.sp.corp.initField = function initField(obj1,obj2){
	if(obj1==null) obj1=document.forms[0].modAdminFlag;
	if(obj2 == null) obj2=document.all("corpAdminInfo_div");
	
	var modAdminFlag = obj1.value;
	if(modAdminFlag !=null && modAdminFlag == "mod"){
	   document.forms[0].modCorpAdmin.checked=true;	
	}else{
		 document.forms[0].modCorpAdmin.checked=false;	
	}
	
  if(document.forms[0].modCorpAdmin.checked){
  	 obj2.style.display = "";
   	 document.forms[0].modAdminFlag.value="mod";
  }else{
     obj2.style.display = "none";
     document.forms[0].modAdminFlag.value="unmod";
  }	

  return true;
}

com.linkage.sp.corp.isValidAdminPassword = function isValidAdminPassword(obj1,obj2) {
	/**
	**		@func		管理员密码校验 包括密码是否符合,密码和密码确认是否一致等
	**		@param  Object obj	密码
	**						Object obj1	密码确认
	**/
	if (obj2 == null) obj2 = document.forms[0].password_sure;
	if (obj1 == null) obj1 = document.forms[0].password;

	var passwd = obj1.value;
	var passwd_sure = obj2.value;
	if (passwd != passwd_sure){
		alert("密码与密码确认不一致！");
		obj1.focus();
		obj1.select();
		return false;
	}

	if (com.linkage.util.isValidAdminPassword(passwd) == false) {
		obj1.focus();
		obj1.select();
		return false;
	}
	return true;
}
