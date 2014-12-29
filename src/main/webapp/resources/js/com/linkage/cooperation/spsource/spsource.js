com.linkage.cooperation.spsource = new Object();

com.linkage.cooperation.spsource.isVaildSourceType = function isVaildSourceType(obj){
	if(obj==null) obj=document.forms[0].sourceType;
	var sourceType = obj.value;
	if(sourceType == ""){
		alert("��������Դ���ͣ�");
		obj.select();
		obj.focus();
		return false;
	}else{
		if(!isPosInt(sourceType)){
		   alert("��Դ����ֻ��Ϊ���֣�");
		   obj.select();
		   obj.focus();
		   return false;	
		}
	}
}

com.linkage.cooperation.spsource.isValidSourceId = function isValidSourceId(obj){
	if(obj==null) obj=document.forms[0].sourceId;
	var sourceId = obj.value;
	if(sourceId == ""){
		alert("��������Դ��ʶ��");
		obj.select();
		obj.focus();
		return false;
	}
	return true;
}


//--------------------------------------------------------------------------
//    description:      �ж��ַ����Ƿ���������������
//    name:       isCharNumLine
//    parameters: obj   - Դ�ַ���
//    return:           true  - ��
//                false - ��
//
com.linkage.cooperation.spsource.isNum = function isValidNum(obj){
	return  isList(obj,"0123456789");
}

//--------------------------------------------------------------------------
//    description:      �ж��ַ����Ƿ��������ָ�����ַ������е��ַ����
//    name:       isList
//    parameters: str   - Դ�ַ���
//                sModel      - ָ�����ַ�����
//    return:           true  - ��
//                false - ��
//
com.linkage.cooperation.spsource.isList = function isList(str,strModel){
	if (str.length==0)
            return false;
      for (i=0;i<str.length;i++){
            var a = str.substr(i,1);
            if (strModel.indexOf(a,0)==-1)
                  return false;
      }
      return true;
}

//--------------------------------------------------------------------------
//    description:      �ж��ַ�����������
//    name:       isPosInt
//    parameters: obj   - Դ�ַ���
//    return:           true  - ��
//                false - ��
//
com.linkage.cooperation.spsource.isPosInt = function isPosInt(obj){
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

//--------------------------------------------------------------------------
//    description:      ȥ���ַ�����β�Ŀո�
//    name:       trim
//    parameters: obj     - source string
//    return:           ȥ���ַ�����β�Ŀո����ַ���
//
com.linkage.cooperation.spsource.trim = function trim(obj){
	if (obj == null)
            return null;
      obj = obj.replace(/ *$/, "");
      obj = obj.replace(/^ */, "");
      return obj;
}