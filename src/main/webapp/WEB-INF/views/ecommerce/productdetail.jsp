<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Product Detail</title>
<meta name="keywords"
	content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />

<script type="text/javascript" src="/js/ecommerce/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="/js/ecommerce/jquery.flexslider-min.js"></script>




<script type="text/javascript" src="/js/getsidebarlist.js"></script>


<script type="text/javascript">
<s:bean name="com.linkage.system.components.system.ui.pagebean.ColumndesBean" id="column">
var appTypeArray=<s:property value="#column.getArrayString('T_PRODUCT_APP_INFO','APPTYPE')" escape="false"/>
</s:bean>

$(document).ready(
        function() {
        	getsidebarlist();
            $.get("/ecommerce/header_right.jsp", function(data) {
                $("#header_right").html(data);
            });
            
            
            <s:iterator value="model.producta" id="apps">
            $("#apptype<s:property value="#apps.appid" />").text(appTypeArray[$("#apptype<s:property value="#apps.appid" />").text()]);
            </s:iterator>
    });
function addcart(value){
    var appid =value;
    $.post("/account/addcart_submit.action", {
        addtocartappid: appid,
    },
          addsuccess, "json");
}
function addsuccess(data){
    var member = data;
    if(member.error=="out_time"){
        alert("please login");
        window.location.href="/ecommerce/login.jsp"; 
    }else if(member.success=="success"){
        alert("sucess");
    }else if(member.error=="no_customer"){
        alert("please login");
        window.location.href="/ecommerce/login.jsp";
    }else if(member.error=="noappid"){
        alert("no this product");
        location.reload(true);
    }else if(member.error=="alreadyincart"){
        alert("already in cart!");
        location.reload(true);
    }

}
function empty(){}
function searchSubmits() {
    var textvar = document.getElementById("typeName").value;

    if (textvar.length == 0||textvar=="") {
        alert("please type in key words!");
    } else {
        document.forms['nameSearch'].submit();
    }

}
</script>



</head>

<body>


	<div id="wrap">
		<div class="header">
			<div class="header_nav">
				<div class="left_logo float_l"></div>
				<div class="right_nav float_r">
					<div class="login-search" id="header_right"></div>
					<div class="cleaner"></div>
					<div class="menu">
						<ul>
							<li><a href="/ecommerce/index.jsp">Home</a></li>
							<li><a href="/product/product/query_detail.action">Products</a></li>
							<li><a href="/ecommerce/ordersymbol.jsp">Order symbol</a></li>
							<li><a href="/ecommerce/designhouse.jsp">Design House</a></li>
							<li><a href="/ecommerce/support.jsp">Support</a></li>
							<li><a href="/ecommerce/aboutus.jsp">About us</a></li>
							<li style="width: 150px;">
								<form method="post"
									action="/typeparam/typeparam/mod_valid.action" id="nameSearch">
									<a href="javascript:searchSubmits()"
										style="float: right; margin-top: 12px;"><img
										src="/images/ecommerce/icon_search.png"></img></a> <input
										type="text" value="" name="model.namelike" id="typeName"
										style="width: 120px; float: right; margin-top: 16px;" />
								</form>
							</li>
						</ul>
					</div>
				</div>
				<div class="cleaner"></div>
			</div>
		</div>

		<!-- END of templatemo_menubar -->

		<div id="templatemo_main">
			<div id="sidebar" class="float_l">
				<div class="sidebar_box">
					<span class="bottom"></span>
					<h3>Categories</h3>
					<div class="content">
						<ul class="sidebar_list" id="sidebar_list">
						</ul>
					</div>
				</div>
			</div>
			<div id="content" class="float_r">
				<h1>Product Detail</h1>
				<div id="outerdiv"
					style="position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.7); z-index: 2; width: 100%; height: 100%; display: none;">
					<div id="innerdiv" style="position: absolute;">
						<img id="bigimg" style="border: 5px solid #fff;" src="" />
					</div>
				</div>
				<div class="content_half float_l">
					<img class="pimg"
						src="<s:property value="model.productaa.picture" />" alt="image"
						width="200" height="150" />
					<s:hidden id="typeid" name="model.productaa.typeEng" />
				</div>

				<div class="content_half float_r">
					<table >
						<tr height="40px">
							<td width="100">SymbolBox Code:</td>
							<td><s:property value="model.productaa.scode" /></td>
						</tr>
						<tr height="40px">
							<td>Part Number:</td>
							<td><s:property value="model.productaa.partNumber" /></td>
						</tr>
						<tr height="40px">
							<td>Vendor:</td>
							<td><s:property value="model.productaa.vendor" /></td>
						</tr>
						<tr height="40px">
							<td >RoHS:</td>
							<td><s:property value="model.productaa.isRoHs" /></td>
						</tr>
						<tr height="40px">
							<td >Pb-free:</td>
							<td><s:property value="model.productaa.isPbFree" /></td>
						</tr>
						<tr height="40px">
							<td>Pn explanation:</td>
							<td><img alt="Pn explanation"
								src="<s:property value="model.productaa.pnExplanation" />"
								width="60" height="50" align="middle"/></td>
						</tr>
					</table>
					<div class="cleaner h20"></div>
				</div>
				<div class="cleaner h30"></div>
				<h5>Product Description:</h5>
				<p>
					<s:property value="model.productaa.description" />
					&nbsp;
					<s:if test="model.productaa.datasheet!=null">
						<a href="<s:property value="model.productaa.datasheet" />"
							rel="nofollow" target="_blank"> <img src="/images/pdf.png"
							alt="Datasheet" width="24" height="12" align="middle" /></a>.
                            
					</s:if>
				</p>
				<h5>Footprint:</h5>
				<p>
					<img src="<s:property value="model.productaa.pnExplanation" />"
						width="680px" height="500px" />
				</p>
				<div class="cleaner h50"></div>


				<h2>Software</h2>
				<s:if test="model.producta.size==0">
					<p>this Software non-existent</p>
				</s:if>
				<s:elseif test="model.producta.size!=0">
					<table>
						<tr>
							<td align="left" width="200" height="40">Software Name</td>
							<td align="left" width="200" height="40">App Type</td>
							<td align="left" width="200" height="40">Price</td>
							<td align="left" width="200" height="40">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Operation</td>
						</tr>
						<s:iterator value="model.producta" id="list" status="stat">
							<tr>
								<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;<s:property
										value="#list.name" /></td>
								<td id="apptype<s:property value="#list.appid"/>"><s:property
										value="#list.apptype" /></td>
								<td align="left">$<s:property value="#list.price" /></td>
								<td align="left"><a href="javascript:empty()"
									onclick="addcart(<s:property value="#list.appid" />)"
									class="addtocart"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a
									href="/account/order_make.action?appids=<s:property value="#list.appid"/>"
									class="buybutton"></a></td>
							</tr>
						</s:iterator>
					</table>
				</s:elseif>
			</div>
			<div class="cleaner"></div>

		</div>
		<!-- END of templatemo_main -->
		<div class="cleaner"></div>
		<div class="footer">
			<div class="footernav">
				<p class="flcontent float_l">
					Copyright&copy; SymbolBox 2014.<br />All Service &copy; SymbolBox
				</p>
				<p class="frcontent float_r">
					<a href="/ecommerce/index.jsp">Home</a> / <a href="#">Support</a> /
					<a href="#">Terms and Conditions</a> / <a href="#">Faqs</a> /<a
						href="#"> Contact us</a>
				</p>
			</div>
		</div>
	</div>
</body>
</html>