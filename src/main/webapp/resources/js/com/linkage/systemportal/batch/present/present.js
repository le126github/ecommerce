com.linkage.systemportal.batch.present = new Object();

com.linkage.systemportal.batch.present.isValidUpload = function isValidUpload(obj){
	 if(obj == null) obj = document.forms[0].ringfile;
	 var ringfile = obj.value;
	 if(ringfile == null || ringfile ==""){
	 	 alert("���ϴ�����������Ϣ�ļ���");
	 	 return false;
	 }else{
			var fileExt = getFileExt(ringfile);
			fileExt = fileExt.toLowerCase();
			if(fileExt!="txt"){
				alert("����������Ϣ�ļ���������.txt��Ϊ��׺��");
				return false;
			}   	
	 }	 
}