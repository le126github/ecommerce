com.linkage.query = new Object();


//ͨ�÷�ҳ
 com.linkage.query.ALLchangePage = function SYchangePage(){
    //document.forms[0].currentpage = obj.value;
    document.forms[0].submit();
}

com.linkage.query.ALLchageToBeforePage = function ALLchageToBeforePage(obj){
    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].currentpage.value = currentpage;
        document.forms[0].submit();
    }
}

com.linkage.query.ALLchageToNextPage = function ALLchageToNextPage(obj1,obj2){
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
        document.forms[0].currentpage.value = currentpage;
        document.forms[0].submit();
    }
}
 
 //�����Ż�
 com.linkage.query.SYchangePage = function SYchangePage(){
    //document.forms[0].currentpage = obj.value;
    document.forms[1].submit();
}

com.linkage.query.SYchageToBeforePage = function SYchageToBeforePage(obj){
    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[1].currentpage.value = currentpage;
        document.forms[1].submit();
    }
}

com.linkage.query.SYchageToNextPage = function SYchageToNextPage(obj1,obj2){
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
        document.forms[1].currentpage.value = currentpage;
        document.forms[1].submit();
    }
}
 
 
 
 //�û��Ż�
 
 //��ҳ��ѯ��Ҫ����url 
 //��ҳ
com.linkage.query.QueryFirstPage = function QueryFirstPage(actionurl){
 var currentPage=1;
   document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = actionurl+"?model.currentPage="+currentPage+"";
	document.forms[0].submit();
} 
 
//βҳ
com.linkage.query.QueryLastPage = function QueryLastPage(obj,actionurl){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[0].action = actionurl+"?model.currentPage="+totalpage+"";
	document.forms[0].submit();
} 
 
//��һҳ
com.linkage.query.QueryChageToBeforePage = function QueryChageToBeforePage(obj,actionurl){
	if(obj == null) obj = document.forms[0].currentpage;

    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].action = actionurl+"?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
} 

//��һҳ
com.linkage.query.QueryChageToNextPage = function QueryChageToNextPage(obj1,obj2,actionurl){
	if(obj1 == null) obj1 = document.forms[0].currentpage;
  if(obj2 == null) obj2 = document.forms[0].totalpage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
         document.forms[0].action = actionurl+"?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}
//תҳ
com.linkage.query.QueryChangePage = function QueryChangePage(obj,actionurl){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[0].action = actionurl+"?currentPage="+changePage+"";
	document.forms[0].submit();
}
}

 
 //SmsRingDB.jspתҳ
//��ҳ
com.linkage.query.MainchageFirstPage = function MainchageFirstPage(){
 var currentPage=1;
   document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = "/userportal/query/ring/mian_ringinfo.action?model.currentPage="+currentPage+"";
	document.forms[0].submit();
}

//βҳ
com.linkage.query.MainchageEndPage = function MainchageEndPage(obj){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[0].action = "/userportal/query/ring/mian_ringinfo.action?model.currentPage="+totalpage+"";
	document.forms[0].submit();
}

//��һҳ
com.linkage.query.MainchageToBeforePage = function MainchageToBeforePage(obj){
	if(obj == null) obj = document.forms[0].currentpage;

    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/mian_ringinfo.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//��һҳ
com.linkage.query.MainchageToNextPage = function MainchageToNextPage(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentpage;
  if(obj2 == null) obj2 = document.forms[0].totalpage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
         document.forms[0].action = "/userportal/query/ring/mian_ringinfo.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}
//תҳ
com.linkage.query.MainchangePage = function MainchangePage(obj){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[0].action = "/userportal/query/ring/mian_ringinfo.action?currentPage="+changePage+"";
	document.forms[0].submit();
}
}



//DBBySinger.jsp
//תҳ
com.linkage.query.changePage = function changePage(obj){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[0].action = "/userportal/query/ring/ring_search.action?currentPage="+changePage+"";
	document.forms[0].submit();
}
}
//��ҳ
com.linkage.query.chageFirstPage = function chageFirstPage(){
 var currentPage=1;
   document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = "/userportal/query/ring/ring_search.action?currentPage="+currentPage+"";
	document.forms[0].submit();
}

//βҳ
com.linkage.query.chageEndPage = function chageEndPage(obj){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[0].action = "/userportal/query/ring/ring_search.action?currentPage="+totalpage+"";
	document.forms[0].submit();
}

//��һҳ
com.linkage.query.chageToBeforePage = function chageToBeforePage(obj){
	if(obj == null) obj = document.forms[0].currentpage;

    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/ring_search.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//��һҳ
com.linkage.query.chageToNextPage = function chageToNextPage(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentpage;
  if(obj2 == null) obj2 = document.forms[0].totalpage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
         document.forms[0].action = "/userportal/query/ring/ring_search.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//singernamering.jspתҳ
com.linkage.query.SNchangePage = function SNchangePage(obj){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[0].action = "/userportal/query/ring/singernamering_search.action?currentPage="+changePage+"";
	document.forms[0].submit();
}
}
//��ҳ
com.linkage.query.SNchageFirstPage = function SNchageFirstPage(){
 var currentPage=1;
   document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = "/userportal/query/ring/singernamering_search.action?currentPage="+currentPage+"";
	document.forms[0].submit();
}

//βҳ
com.linkage.query.SNchageEndPage = function SNchageEndPage(obj){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[0].action = "/userportal/query/ring/singernamering_search.action?currentPage="+totalpage+"";
	document.forms[0].submit();
}

//��һҳ
com.linkage.query.SNchageToBeforePage = function SNchageToBeforePage(obj){
	if(obj == null) obj = document.forms[0].currentpage;

    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/singernamering_search.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//��һҳ
com.linkage.query.SNchageToNextPage = function SNchageToNextPage(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentpage;
  if(obj2 == null) obj2 = document.forms[0].totalpage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/singernamering_search.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//DBByName.jspתҳ
com.linkage.query.NamechangePage = function NamechangePage(obj){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?currentPage="+changePage+"";
	document.forms[0].submit();
}
}
//��ҳ
com.linkage.query.NamechageFirstPage = function NamechageFirstPage(){
 var currentPage=1;
   document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?currentPage="+currentPage+"";
	document.forms[0].submit();
}

//βҳ
com.linkage.query.NamechageEndPage = function NamechageEndPage(obj){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?currentPage="+totalpage+"";
	document.forms[0].submit();
}

//��һҳ
com.linkage.query.NamechageToBeforePage = function NamechageToBeforePage(obj){
	if(obj == null) obj = document.forms[0].currentpage;

    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//��һҳ
com.linkage.query.NamechageToNextPage = function NamechageToNextPage(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentpage;
  if(obj2 == null) obj2 = document.forms[0].totalpage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}



//LSearchResult.jspתҳ
com.linkage.query.UserchangePage = function UserchangePage(obj){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[0].action = "/userportal/query/ring/user_searchring.action?currentPage="+changePage+"";
	document.forms[0].submit();
}
}
//��ҳ
com.linkage.query.UserchageFirstPage = function UserchageFirstPage(){
 var currentPage=1;
 document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = "/userportal/query/ring/user_searchring.action?currentPage="+currentPage+"";
	document.forms[0].submit();
}

//βҳ
com.linkage.query.UserchageEndPage = function UserchageEndPage(obj){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[0].action = "/userportal/query/ring/user_searchring.action?currentPage="+totalpage+"";
	document.forms[0].submit();
}

//��һҳ
com.linkage.query.UserchageToBeforePage = function UserchageToBeforePage(obj){
	if(obj == null) obj = document.forms[0].currentpage;

    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/user_searchring.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//��һҳ
com.linkage.query.UserchageToNextPage = function UserchageToNextPage(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentpage;
  if(obj2 == null) obj2 = document.forms[0].totalpage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/user_searchring.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}




//DBByName.jspתҳ
com.linkage.query.NamechangePage = function NamechangePage(obj){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?currentPage="+changePage+"";
	document.forms[0].submit();
}
}
//��ҳ
com.linkage.query.NamechageFirstPage = function NamechageFirstPage(){
 var currentPage=1;
   document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?currentPage="+currentPage+"";
	document.forms[0].submit();
}

//βҳ
com.linkage.query.NamechageEndPage = function NamechageEndPage(obj){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?currentPage="+totalpage+"";
	document.forms[0].submit();
}

//��һҳ
com.linkage.query.NamechageToBeforePage = function NamechageToBeforePage(obj){
	if(obj == null) obj = document.forms[0].currentpage;

    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//��һҳ
com.linkage.query.NamechageToNextPage = function NamechageToNextPage(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentpage;
  if(obj2 == null) obj2 = document.forms[0].totalpage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
        document.forms[0].action = "/userportal/query/ring/ringnameletter_search.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//MyPay.jspתҳ
com.linkage.query.UDchangePage = function UDchangePage(obj){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[0].action = "/userportal/query/myexpense/userdet_query.action?currentPage="+changePage+"";
	document.forms[0].submit();
}
}
//��ҳ
com.linkage.query.UDchageFirstPage = function UDchageFirstPage(){
 var currentPage=1;
   document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = "/userportal/query/myexpense/userdet_query.action?currentPage="+currentPage+"";
	document.forms[0].submit();
}

//βҳ
com.linkage.query.UDchageEndPage = function UDchageEndPage(obj){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[0].action = "/userportal/query/myexpense/userdet_query.action?currentPage="+totalpage+"";
	document.forms[0].submit();
}

//��һҳ
com.linkage.query.UDchageToBeforePage = function UDchageToBeforePage(obj){
	if(obj == null) obj = document.forms[0].currentpage;
    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[0].action = "/userportal/query/myexpense/userdet_query.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}

//��һҳ
com.linkage.query.UDchageToNextPage = function UDchageToNextPage(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentPage1;
  if(obj2 == null) obj2 = document.forms[0].totalPage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
        document.forms[0].action = "/userportal/query/myexpense/userdet_query.action?model.currentPage="+currentpage+"";
        document.forms[0].submit();
    }
}




//DBByType.jspתҳ
com.linkage.query.RTchangePage = function RTchangePage(obj){
   if(obj == null) obj = document.forms[0].changePage;
   var changePage = obj.value;
     if(!com.linkage.util.isInteger(changePage)){
     	alert("��������ȷ��ҳ�룡");
    }       
    else{
  document.forms[1].action = "/userportal/userring/query_ringtype.action?currentPage="+changePage+"";
	document.forms[1].submit();
}
}
//��ҳ
com.linkage.query.RTchageFirstPage = function RTchageFirstPage(){
 var currentPage=1;
   document.forms[0].currentPage.value = currentPage;
  document.forms[0].action = "/userportal/userring/query_ringtype.action?currentPage="+currentPage+"";
	document.forms[0].submit();
}

//βҳ
com.linkage.query.RTchageEndPage = function RTchageEndPage(obj){
	 if(obj == null) obj = document.forms[0].totalpage;
   var totalpage = obj.value;
  document.forms[1].action = "/userportal/userring/query_ringtype.action?currentPage="+totalpage+"";
	document.forms[1].submit();
}

//��һҳ
com.linkage.query.RTchageToBeforePage = function RTchageToBeforePage(obj){
	if(obj == null) obj = document.forms[0].currentPage;
    var currentpage = parseInt(obj.value) - 1;
    if(currentpage <= 0)
        alert("�Ѿ�����ҳ��");
    else{
        document.forms[1].action = "/userportal/userring/query_ringtype.action?model.currentPage="+currentpage+"";
        document.forms[1].submit();
    }
}

//��һҳ
com.linkage.query.RTchageToNextPage = function RTchageToNextPage(obj1,obj2){
	if(obj1 == null) obj1 = document.forms[0].currentPage1;
  if(obj2 == null) obj2 = document.forms[0].totalPage;
    var currentpage = parseInt(obj1.value) + 1;
    if(currentpage > parseInt(obj2.value) )
        alert("�Ѿ������һҳ��");
    else{
        document.forms[1].action = "/userportal/userring/query_ringtype.action?model.currentPage="+currentpage+"";
        document.forms[1].submit();
    }
}


/////
com.linkage.query.isValidCommonBillQuery = function isValidCommonBillQuery(obj1,obj2,obj3) {
    if (obj1 == null) obj1 = document.forms[0].customername;
    if (obj2 == null) obj2 = document.forms[0].bbillmonth;
    if (obj3 == null) obj3 = document.forms[0].ebillmonth;

    var _customername = com.linkage.util.trim(obj1.value);
    var bbillmonth = com.linkage.util.trim(obj2.value);
    var ebillmonth = com.linkage.util.trim(obj3.value);

    if((bbillmonth == "2005-13" || ebillmonth == "2005-13") && bbillmonth != ebillmonth){
        alert("2005��13���ʵ�ֻ�ܵ�����ѯ��");
        return false;
    }

    if (com.linkage.util.isValidUserName(_customername) == false) {
        obj1.focus();
        obj1.select();
        return false;
    }

    if(ebillmonth < bbillmonth){
        alert("����ʱ�䲻�ܴ��ڿ�ʼʱ�䣡");
        return false;
    }

	obj1.value = _customername;

	return true;
}

com.linkage.query.isValidCustomerDetQuery = function isValidCustomerDetQuery(obj1,obj2,obj3,obj4) {
    if (obj1 == null) obj1 = document.forms[0].customername;
    if (obj2 == null) obj2 = document.forms[0].bstoptime;
    if (obj3 == null) obj3 = document.forms[0].estoptime;
    if (obj4 == null) obj4 = document.forms[0].currentdate;

    var _customername = com.linkage.util.trim(obj1.value);
    var bstarttime = obj2.value;
    var estarttime = obj3.value;
    var currentdate = obj4.value;

    if (com.linkage.util.isValidUserName(_customername) == false) {
        obj1.focus();
        obj1.select();
        return false;
    }

    if(bstarttime == "" || estarttime == ""){
        alert("��ѡ���ѯʱ�䣡");
        obj2.focus();
        obj2.select();
        return false;
    }else{
        if(com.linkage.util.dateBDate(bstarttime,currentdate)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        if(com.linkage.util.dateBDate(estarttime,currentdate)){
            alert("��ѯ����ʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(com.linkage.util.dateBDate(bstarttime,estarttime)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڽ���ʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        var date1Arr = bstarttime.split("-");
	    var date2Arr = estarttime.split("-");
	    var year1 = parseInt(date1Arr[0]);
	    var month1 = parseInt(date1Arr[1]*1);
	    var date1 = parseInt(date1Arr[2]*1);
	    var year2 = parseInt(date2Arr[0]);
	    var month2 = parseInt(date2Arr[1]*1);
	    var date2 = parseInt(date2Arr[2]*1);

	    if (year1 < year2){
	        if(month1 - month2 != 11){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	        if(date2 > date1){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	    }
	    if (year1 == year2){//����ȣ��ж���
	    	if(month1 < month2){//����ȣ��ж���
	    		if (date1 < date2) {
	    		    alert("��ѯ���������������һ�����ڣ�");
	                obj2.focus();
	                obj2.select();
	                return false;
	    		}
	    	}
	    }
    }

	obj1.value = _customername;

	return true;
}

com.linkage.query.isValidUserDetQuery = function isValidUserDetQuery(obj1,obj5,obj2,obj3,obj4) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj5 == null) obj5 = document.forms[0].password;
    if (obj2 == null) obj2 = document.forms[0].bstarttime;
    if (obj3 == null) obj3 = document.forms[0].estarttime;
    if (obj4 == null) obj4 = document.forms[0].currentdate;

    var _username = com.linkage.util.trim(obj1.value);
    var password = obj5.value;
    var bstarttime = obj2.value;
    var estarttime = obj3.value;
    var currentdate = obj4.value;

    if(_username == ""){
        alert("�������û�����");
        obj1.focus();
        obj1.select();
        return false;
    }else{
        if (com.linkage.util.isValidUserName(_username) == false) {
            //alert("������Ϸ����û�����");
            obj1.focus();
            obj1.select();
            return false;
        }
        var temp = _username;
		var i = temp.indexOf('%');
		if (i != -1) {
			var cnt = 0;
			do {
				temp = temp.substring(i+1);
				cnt++;
				i = temp.indexOf('%');
			} while (i != -1);
			if (_username.length - cnt <2) {
				alert("�û��ʺ�������������λ��ͨ����ַ���");
				obj1.focus();
				obj1.select();
				return false;
			}
		}
    }
    if(password == ""){
    	alert("���������룡");
	obj5.focus();
	return false;
    }
    if(bstarttime == "" || estarttime == ""){
        alert("��ѡ���ѯʱ�䣡");
        obj2.focus();
        obj2.select();
        return false;
    }else{
        if(com.linkage.util.dateBDate(bstarttime,currentdate)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        if(com.linkage.util.dateBDate(estarttime,currentdate)){
            alert("��ѯ����ʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(com.linkage.util.dateBDate(bstarttime,estarttime)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڽ���ʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        var date1Arr = bstarttime.split("-");
	    var date2Arr = estarttime.split("-");
	    var year1 = parseInt(date1Arr[0]);
	    var month1 = parseInt(date1Arr[1]*1);
	    var date1 = parseInt(date1Arr[2]*1);
	    var year2 = parseInt(date2Arr[0]);
	    var month2 = parseInt(date2Arr[1]*1);
	    var date2 = parseInt(date2Arr[2]*1);

	    if (year1 < year2){
	        if(month1 - month2 != 11){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	        if(date2 > date1){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	    }
	    if (year1 == year2){//����ȣ��ж���
	    	if(month1 < month2){//����ȣ��ж���
	    		if (date1 < date2) {
	    		    alert("��ѯ���������������һ�����ڣ�");
	                obj2.focus();
	                obj2.select();
	                return false;
	    		}
	    	}
	    }
    }

	obj1.value = _username;

	return true;
}


com.linkage.query.isValidCardDetQuery = function isValidCardDetQuery(obj1,obj5,obj2,obj3,obj4) {
    if (obj1 == null) obj1 = document.forms[0].cardno;
    if (obj5 == null) obj5 = document.forms[0].password;
    if (obj2 == null) obj2 = document.forms[0].bstarttime;
    if (obj3 == null) obj3 = document.forms[0].estarttime;
    if (obj4 == null) obj4 = document.forms[0].currentdate;

    var password = obj5.value;
    var bstarttime = obj2.value;
    var estarttime = obj3.value;
    var currentdate = obj4.value;

    if (com.linkage.card.carduser.isValidCard(obj1) == false) {
            //alert("��������ȷ�Ŀ��ţ�");
            obj1.focus();
            obj1.select();
            return false;
    }

    if(password == ""){
    	alert("���������룡");
	obj5.focus();
	return false;
    }
    if(bstarttime == "" || estarttime == ""){
        alert("��ѡ���ѯʱ�䣡");
        obj2.focus();
        obj2.select();
        return false;
    }else{
        if(com.linkage.util.dateBDate(bstarttime,currentdate)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        if(com.linkage.util.dateBDate(estarttime,currentdate)){
            alert("��ѯ����ʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(com.linkage.util.dateBDate(bstarttime,estarttime)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڽ���ʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        var date1Arr = bstarttime.split("-");
	    var date2Arr = estarttime.split("-");
	    var year1 = parseInt(date1Arr[0]);
	    var month1 = parseInt(date1Arr[1]*1);
	    var date1 = parseInt(date1Arr[2]*1);
	    var year2 = parseInt(date2Arr[0]);
	    var month2 = parseInt(date2Arr[1]*1);
	    var date2 = parseInt(date2Arr[2]*1);

	    if (year1 < year2){
	        if(month1 - month2 != 11){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	        if(date2 > date1){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	    }
	    if (year1 == year2){//����ȣ��ж���
	    	if(month1 < month2){//����ȣ��ж���
	    		if (date1 < date2) {
	    		    alert("��ѯ���������������һ�����ڣ�");
	                obj2.focus();
	                obj2.select();
	                return false;
	    		}
	    	}
	    }
    }

	return true;
}

com.linkage.query.isValidUserBillQuery = function isValidUserBillQuery(obj1,obj4,obj2,obj3) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].bbillmonth;
    if (obj3 == null) obj3 = document.forms[0].ebillmonth;
    if (obj4 == null) obj4 = document.forms[0].password;
    var _username = com.linkage.util.trim(obj1.value);
    var bbillmonth = com.linkage.util.trim(obj2.value);
    var ebillmonth = com.linkage.util.trim(obj3.value);
    var password = obj4.value;
    if(_username == ""){
        alert("�������û�����");
        obj1.focus();
        obj1.select();
        return false;
    }else{
        if (com.linkage.util.isValidUserName(_username) == false) {
            //alert("������Ϸ����û�����");
            obj1.focus();
            obj1.select();
            return false;
        }
        var temp = _username;
		var i = temp.indexOf('%');
		if (i != -1) {
			var cnt = 0;
			do {
				temp = temp.substring(i+1);
				cnt++;
				i = temp.indexOf('%');
			} while (i != -1);
			if (_username.length - cnt <2) {
				alert("�û��ʺ�������������λ��ͨ����ַ���");
				obj1.focus();
				obj1.select();
				return false;
			}
		}
    }

    if(password == ""){
    	alert("���������룡");
	obj4.focus();
	return false;
    }
    if(ebillmonth < bbillmonth){
        alert("����ʱ�䲻�ܴ��ڿ�ʼʱ�䣡");
        return false;
    }

	obj1.value = _username;

	return true;
}

com.linkage.query.isValidCardBillQuery = function isValidCardBillQuery(obj1,obj4,obj2,obj3) {
    if (obj1 == null) obj1 = document.forms[0].cardno;
    if (obj2 == null) obj2 = document.forms[0].bbillmonth;
    if (obj3 == null) obj3 = document.forms[0].ebillmonth;
    if (obj4 == null) obj4 = document.forms[0].password;

    var bbillmonth = com.linkage.util.trim(obj2.value);
    var ebillmonth = com.linkage.util.trim(obj3.value);
    var password = obj4.value;
    if (com.linkage.card.carduser.isValidCard(obj1) == false) {
            //alert("��������ȷ�Ŀ��ţ�");
            obj1.focus();
            obj1.select();
            return false;
    }

    if(password == ""){
    	alert("���������룡");
	obj4.focus();
	return false;
    }
    if(ebillmonth < bbillmonth){
        alert("����ʱ�䲻�ܴ��ڿ�ʼʱ�䣡");
        return false;
    }

	return true;
}

com.linkage.query.isValidTransDetQuery = function isValidTransDetQuery(obj1,obj2,obj3,obj4,obj5){
	if (obj1 == null) obj1 = document.forms[0].cardno;
    if (obj5 == null) obj5 = document.forms[0].outcardno;
    if (obj2 == null) obj2 = document.forms[0].bstarttime;
    if (obj3 == null) obj3 = document.forms[0].estarttime;
    if (obj4 == null) obj4 = document.forms[0].currentdate;

    //var password = obj5.value;
    var bstarttime = obj2.value;
    var estarttime = obj3.value;
    var currentdate = obj4.value;
    var outcardno = obj5.value;
    var cardno = obj1.value;

    if(outcardno == "" && cardno == ""){
        alert("������ת�뿨�Ż�ת�����ţ�");
        obj1.focus();
        return false;
    }
    if(cardno != ""){
        if (com.linkage.card.carduser.isValidCard(obj1) == false) {
                //alert("��������ȷ�Ŀ��ţ�");
                obj1.focus();
                obj1.select();
                return false;
        }
    }
    if(outcardno != ""){
        if (com.linkage.card.carduser.isValidCard(obj5) == false) {
                //alert("��������ȷ�Ŀ��ţ�");
                obj5.focus();
                obj5.select();
                return false;
        }
    }
    /*
    if(password == ""){
    	alert("���������룡");
	obj5.focus();
	return false;
    }
    */
    if(bstarttime == "" || estarttime == ""){
        alert("��ѡ���ѯʱ�䣡");
        obj2.focus();
        obj2.select();
        return false;
    }else{
        if(com.linkage.util.dateBDate(bstarttime,currentdate)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        if(com.linkage.util.dateBDate(estarttime,currentdate)){
            alert("��ѯ����ʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(com.linkage.util.dateBDate(bstarttime,estarttime)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڽ���ʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        var date1Arr = bstarttime.split("-");
	    var date2Arr = estarttime.split("-");
	    var year1 = parseInt(date1Arr[0]);
	    var month1 = parseInt(date1Arr[1]*1);
	    var date1 = parseInt(date1Arr[2]*1);
	    var year2 = parseInt(date2Arr[0]);
	    var month2 = parseInt(date2Arr[1]*1);
	    var date2 = parseInt(date2Arr[2]*1);

	    if (year1 < year2){
	        if(month1 - month2 != 11){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	        if(date2 > date1){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	    }
	    if (year1 == year2){//����ȣ��ж���
	    	if(month1 < month2){//����ȣ��ж���
	    		if (date1 < date2) {
	    		    alert("��ѯ���������������һ�����ڣ�");
	                obj2.focus();
	                obj2.select();
	                return false;
	    		}
	    	}
	    }
    }

	return true;
}


com.linkage.query.isValidSelfTransDetQuery = function isValidSelfTransDetQuery(obj1,obj5,obj2,obj3,obj4){
	if (obj1 == null) obj1 = document.forms[0].cardno;
    if (obj5 == null) obj5 = document.forms[0].password;
    if (obj2 == null) obj2 = document.forms[0].bstarttime;
    if (obj3 == null) obj3 = document.forms[0].estarttime;
    if (obj4 == null) obj4 = document.forms[0].currentdate;

    var password = obj5.value;
    var bstarttime = obj2.value;
    var estarttime = obj3.value;
    var currentdate = obj4.value;

    if (com.linkage.card.carduser.isValidCard(obj1) == false) {
            //alert("��������ȷ�Ŀ��ţ�");
            obj1.focus();
            obj1.select();
            return false;
    }

    if(password == ""){
    	alert("���������룡");
	obj5.focus();
	return false;
    }

    if(bstarttime == "" || estarttime == ""){
        alert("��ѡ���ѯʱ�䣡");
        obj2.focus();
        obj2.select();
        return false;
    }else{
        if(com.linkage.util.dateBDate(bstarttime,currentdate)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        if(com.linkage.util.dateBDate(estarttime,currentdate)){
            alert("��ѯ����ʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(com.linkage.util.dateBDate(bstarttime,estarttime)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڽ���ʱ�䣡");
            obj2.focus();
            obj2.select();
            return false;
        }
        var date1Arr = bstarttime.split("-");
	    var date2Arr = estarttime.split("-");
	    var year1 = parseInt(date1Arr[0]);
	    var month1 = parseInt(date1Arr[1]*1);
	    var date1 = parseInt(date1Arr[2]*1);
	    var year2 = parseInt(date2Arr[0]);
	    var month2 = parseInt(date2Arr[1]*1);
	    var date2 = parseInt(date2Arr[2]*1);

	    if (year1 < year2){
	        if(month1 - month2 != 11){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	        if(date2 > date1){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj2.focus();
	            obj2.select();
	            return false;
	        }
	    }
	    if (year1 == year2){//����ȣ��ж���
	    	if(month1 < month2){//����ȣ��ж���
	    		if (date1 < date2) {
	    		    alert("��ѯ���������������һ�����ڣ�");
	                obj2.focus();
	                obj2.select();
	                return false;
	    		}
	    	}
	    }
    }

	return true;
}

com.linkage.query.isValidEnterpriseBillQuery = function isValidEnterpriseBillQuery(obj1,obj2,obj3,obj4) {
    if (obj1 == null) obj1 = document.forms[0].customername;
    if (obj2 == null) obj2 = document.forms[0].realmname;
    if (obj3 == null) obj3 = document.forms[0].bbillmonth;
    if (obj4 == null) obj4 = document.forms[0].ebillmonth;

    var _customername = com.linkage.util.trim(obj1.value);
    var _realmname = com.linkage.util.trim(obj2.value);
    var bbillmonth = com.linkage.util.trim(obj3.value);
    var ebillmonth = com.linkage.util.trim(obj4.value);

    if (com.linkage.util.isValidUserName(_customername) == false) {
        obj1.focus();
        obj1.select();
        return false;
    }

    if (_realmname == "" || _realmname == "-*") {
        alert("��ѡ��������");
        obj2.focus();
        return false;
    }

    if((bbillmonth == "2005-13" || ebillmonth == "2005-13") && bbillmonth != ebillmonth){
        alert("2005��13���ʵ�ֻ�ܵ�����ѯ��");
        return false;
    }

    if(ebillmonth < bbillmonth){
        alert("����ʱ�䲻�ܴ��ڿ�ʼʱ�䣡");
        return false;
    }

	obj1.value = _customername;

	return true;
}

com.linkage.query.isValidEnterpriseDetQuery = function isValidEnterpriseDetQuery(obj1,obj2,obj3,obj4,obj5) {
    if (obj1 == null) obj1 = document.forms[0].customername;
    if (obj2 == null) obj2 = document.forms[0].realmname;
    if (obj3 == null) obj3 = document.forms[0].bstoptime;
    if (obj4 == null) obj4 = document.forms[0].estoptime;
    if (obj5 == null) obj5 = document.forms[0].currentdate;

    var _customername = com.linkage.util.trim(obj1.value);
    var _realmname = com.linkage.util.trim(obj2.value);
    var bstoptime = com.linkage.util.trim(obj3.value);
    var estoptime = com.linkage.util.trim(obj4.value);
    var currentdate = com.linkage.util.trim(obj5.value);

    if (com.linkage.util.isValidUserName(_customername) == false) {
        obj1.focus();
        obj1.select();
        return false;
    }

    if (_realmname == "" || _realmname == "-*") {
        alert("��ѡ��������");
        obj2.focus();
        return false;
    }

    if(bstoptime == "" || estoptime == ""){
        alert("��ѡ���ѯʱ�䣡");
        obj3.focus();
        obj3.select();
        return false;
    }else{
        if(com.linkage.util.dateBDate(bstoptime,currentdate)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
        if(com.linkage.util.dateBDate(estoptime,currentdate)){
            alert("��ѯ����ʱ�䲻�ܴ��ڵ�ǰʱ�䣡");
            obj4.focus();
            obj4.select();
            return false;
        }
        if(com.linkage.util.dateBDate(bstoptime,estoptime)){
            alert("��ѯ��ʼʱ�䲻�ܴ��ڽ���ʱ�䣡");
            obj3.focus();
            obj3.select();
            return false;
        }
        var date1Arr = bstoptime.split("-");
	    var date2Arr = estoptime.split("-");
	    var year1 = parseInt(date1Arr[0]);
	    var month1 = parseInt(date1Arr[1]*1);
	    var date1 = parseInt(date1Arr[2]*1);
	    var year2 = parseInt(date2Arr[0]);
	    var month2 = parseInt(date2Arr[1]*1);
	    var date2 = parseInt(date2Arr[2]*1);

	    if (year1 < year2){
	        if(month1 - month2 != 11){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj3.focus();
	            obj3.select();
	            return false;
	        }
	        if(date2 > date1){
	            alert("��ѯ���������������һ�����ڣ�");
	            obj3.focus();
	            obj3.select();
	            return false;
	        }
	    }
	    if (year1 == year2){//����ȣ��ж���
	    	if(month1 < month2){//����ȣ��ж���
	    		if (date1 < date2) {
	    		    alert("��ѯ���������������һ�����ڣ�");
	                obj3.focus();
	                obj3.select();
	                return false;
	    		}
	    	}
	    }
    }

	obj1.value = _customername;

	return true;
}

com.linkage.query.isValidDialupOnlineQuery = function isValidDialupOnlineQuery(obj1,obj2,obj3,obj4) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].callingno;
    if (obj3 == null) obj3 = document.forms[0].frameip;
    if (obj4 == null) obj4 = document.forms[0].querytype;

    var username = com.linkage.util.trim(obj1.value);
    var callingno = com.linkage.util.trim(obj2.value);
    var frameip = com.linkage.util.trim(obj3.value);

    if(obj4[0].checked){
        if (com.linkage.util.isValidUserName(username) == false) {
            obj1.focus();
            obj1.select();
            return false;
        }
        callingno = "";
        frameip = "";
    }
    else if(obj4[1].checked){
        if (com.linkage.util.isGsmOrPhone(callingno) == false) {
            alert("��������ȷ�����к��룡");
            obj2.focus();
            obj2.select();
            return false;
        }
        username = "";
        frameip = "";
    }
    else if(obj4[2].checked){
        if (com.linkage.util.isValidIP(frameip) == false) {
            alert("��������ȷ���û�IP��");
            obj3.focus();
            obj3.select();
            return false;
        }
        username = "";
        callingno = "";
    }else{
        alert("��ѡ���ѯ������");
        return false;
    }

	obj1.value = username;
	obj2.value = callingno;
	obj3.value = frameip;

	return true;
}

com.linkage.query.onChangeDialupOnlineQuery = function onChangeDialupOnlineQuery(obj1,obj2,obj3,obj4) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].callingno;
    if (obj3 == null) obj3 = document.forms[0].frameip;
    if (obj4 == null) obj4 = document.forms[0].querytype;

    if(obj4[0].checked){
        obj1.focus();
        obj1.select();
        obj2.value = "";
        obj3.value = "";
    }
    else if(obj4[1].checked){
        obj1.value = "";
        obj2.focus();
        obj2.select();
        obj3.value = "";
    }
    else if(obj4[2].checked){
        obj1.value = "";
        obj2.value = "";
        obj3.focus();
        obj3.select();
    }

	return true;
}

com.linkage.query.isValidBroadbandOnlineQuery = function isValidBroadbandOnlineQuery(obj1,obj3,obj4) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj3 == null) obj3 = document.forms[0].frameip;
    if (obj4 == null) obj4 = document.forms[0].querytype;

    var username = com.linkage.util.trim(obj1.value);
    var frameip = com.linkage.util.trim(obj3.value);

    if(obj4[0].checked){
        if (com.linkage.util.isValidUserName(username) == false) {
            obj1.focus();
            obj1.select();
            return false;
        }
        frameip = "";
    }
    else if(obj4[1].checked){
        if (com.linkage.util.isValidIP(frameip) == false) {
            alert("��������ȷ���û�IP��");
            obj3.focus();
            obj3.select();
            return false;
        }
        username = "";
    }else{
        alert("��ѡ���ѯ������");
        return false;
    }

	obj1.value = username;
	obj3.value = frameip;

	return true;
}

com.linkage.query.onChangeBroadbandOnlineQuery = function onChangeBroadbandOnlineQuery(obj1,obj3,obj4) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj3 == null) obj3 = document.forms[0].frameip;
    if (obj4 == null) obj4 = document.forms[0].querytype;

    if(obj4[0].checked){
        obj1.focus();
        obj1.select();
        obj3.value = "";
    }
    else if(obj4[1].checked){
        obj1.value = "";
        obj3.focus();
        obj3.select();
    }

	return true;
}

com.linkage.query.isValidEDialupOnlineQuery = function isValidEDialupOnlineQuery(obj1,obj2,obj3,obj4,obj5) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].callingno;
    if (obj3 == null) obj3 = document.forms[0].frameip;
    if (obj4 == null) obj4 = document.forms[0].querytype;
    if (obj5 == null) obj5 = document.forms[0].realmname;

    var username = com.linkage.util.trim(obj1.value);
    var callingno = com.linkage.util.trim(obj2.value);
    var frameip = com.linkage.util.trim(obj3.value);
    var realmname = com.linkage.util.trim(obj5.value);

    if(obj4[0].checked){
        if (com.linkage.util.isValidUserName(username) == false) {
            obj1.focus();
            obj1.select();
            return false;
        }
        if (realmname == "" || realmname == "-*") {
            alert("��ѡ��������");
            obj5.focus();
            return false;
        }
        callingno = "";
        frameip = "";
    }
    else if(obj4[1].checked){
        if (com.linkage.util.isGsmOrPhone(callingno) == false) {
            alert("��������ȷ�����к��룡");
            obj2.focus();
            obj2.select();
            return false;
        }
        username = "";
        obj5.selectedIndex = 0;
        frameip = "";
    }
    else if(obj4[2].checked){
        if (com.linkage.util.isValidIP(frameip) == false) {
            alert("��������ȷ���û�IP��");
            obj3.focus();
            obj3.select();
            return false;
        }
        username = "";
        obj5.selectedIndex = 0;
        callingno = "";
    }else{
        alert("��ѡ���ѯ������");
        return false;
    }

	obj1.value = username;
	obj2.value = callingno;
	obj3.value = frameip;

	return true;
}

com.linkage.query.onChangeEDialupOnlineQuery = function onChangeEDialupOnlineQuery(obj1,obj2,obj3,obj4,obj5) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj2 == null) obj2 = document.forms[0].callingno;
    if (obj3 == null) obj3 = document.forms[0].frameip;
    if (obj4 == null) obj4 = document.forms[0].querytype;
    if (obj5 == null) obj5 = document.forms[0].realmname;

    if(obj4[0].checked){
        obj1.focus();
        obj1.select();
        obj2.value = "";
        obj3.value = "";
    }
    else if(obj4[1].checked){
        obj1.value = "";
        obj5.selectedIndex = 0;
        obj2.focus();
        obj2.select();
        obj3.value = "";
    }
    else if(obj4[2].checked){
        obj1.value = "";
        obj5.selectedIndex = 0;
        obj2.value = "";
        obj3.focus();
        obj3.select();
    }

	return true;
}

com.linkage.query.isValidEBroadbandOnlineQuery = function isValidEBroadbandOnlineQuery(obj1,obj3,obj4,obj5) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj3 == null) obj3 = document.forms[0].frameip;
    if (obj4 == null) obj4 = document.forms[0].querytype;
    if (obj5 == null) obj5 = document.forms[0].realmname;

    var username = com.linkage.util.trim(obj1.value);
    var frameip = com.linkage.util.trim(obj3.value);
    var realmname = com.linkage.util.trim(obj5.value);

    if(obj4[0].checked){
        if (com.linkage.util.isValidUserName(username) == false) {
            obj1.focus();
            obj1.select();
            return false;
        }
        if (realmname == "" || realmname == "-*") {
            alert("��ѡ��������");
            obj5.focus();
            return false;
        }
        frameip = "";
    }
    else if(obj4[1].checked){
        if (com.linkage.util.isValidIP(frameip) == false) {
            alert("��������ȷ���û�IP��");
            obj3.focus();
            obj3.select();
            return false;
        }
        username = "";
        obj5.selectedIndex = 0;
    }else{
        alert("��ѡ���ѯ������");
        return false;
    }

	obj1.value = username;
	obj3.value = frameip;

	return true;
}

com.linkage.query.onChangeEBroadbandOnlineQuery = function onEChangeBroadbandOnlineQuery(obj1,obj3,obj4,obj5) {
    if (obj1 == null) obj1 = document.forms[0].username;
    if (obj3 == null) obj3 = document.forms[0].frameip;
    if (obj4 == null) obj4 = document.forms[0].querytype;
    if (obj5 == null) obj5 = document.forms[0].realmname;

    if(obj4[0].checked){
        obj1.focus();
        obj1.select();
        obj3.value = "";
    }
    else if(obj4[1].checked){
        obj1.value = "";
        obj5.selectedIndex = 0;
        obj3.focus();
        obj3.select();
    }

	return true;
}