com.linkage.systemportal.batch.present = new Object();

com.linkage.systemportal.batch.present.isValidUpload = function isValidUpload(obj){
	 if(obj == null) obj = document.forms[0].ringfile;
	 var ringfile = obj.value;
	 if(ringfile == null || ringfile ==""){
	 	 alert("请上传铃音赠送信息文件！");
	 	 return false;
	 }else{
			var fileExt = getFileExt(ringfile);
			fileExt = fileExt.toLowerCase();
			if(fileExt!="txt"){
				alert("铃音赠送信息文件名必须以.txt作为后缀！");
				return false;
			}   	
	 }	 
}