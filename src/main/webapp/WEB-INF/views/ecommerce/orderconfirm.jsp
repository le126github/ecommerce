<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Order confirm</title>
<meta name="keywords"
	content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />

<script type="text/javascript" src="/js/ecommerce/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="/js/ecommerce/jquery.flexslider-min.js"></script>

<script type="text/javascript">
	$(document).ready(
			function() {
				var totalprice = 0
				<s:iterator value="model.appList" id="apps">
						+ <s:property value="#apps.price" /></s:iterator>;
				$("#totalpriceshow").text(totalprice);
				$("#totalpricetxt").attr("value", totalprice);
				
				<s:iterator value="model.appList" id="apps">
			    $("#apptype<s:property value="#apps.appid" />").text(appTypeArray[$("#apptype<s:property value="#apps.appid" />").text()]);
			    </s:iterator>



				$.get("/ecommerce/header_right.jsp", function(data) {
					$("#header_right").html(data);
				});
			});
	
	<s:bean name="com.linkage.system.components.system.ui.pagebean.ColumndesBean" id="column">
    var appTypeArray=<s:property value="#column.getArrayString('T_PRODUCT_APP_INFO','APPTYPE')" escape="false"/>
    </s:bean>
    
	function submitOrder() {
		document.forms['ordersubmit'].submit();
	}
	
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

		<div id="templatemo_main">


			<div id="content" class="float_l">
				<h1>Order Confirm</h1>
				<table width="900px" cellspacing="0" cellpadding="5">
					<tr bgcolor="#ddd" align="center">
						<th width="220">AppName</th>
						<th width="180">AppType</th>
						<th width="180">Price</th>
						<th width="90"></th>
					</tr>

					<s:iterator value="model.appList" id="apps">
						<tr align="center">

							<td><s:property value="#apps.name" /></td>
							<td id="apptype<s:property value="#apps.appid" />"><s:property
									value="#apps.apptype" /></td>
							<td><s:property value="#apps.price" /></td>
						</tr>
					</s:iterator>

					<tr align="center">
						<td colspan="2" rowspan="2" height="60px"></td>
						<td style="background: #ddd; font-weight: bold">Total</td>
						<td style="background: #ddd; font-weight: bold"
							id="totalpriceshow"></td>
					</tr>
					<tr align="center">
						<td style="background: #ddd; font-weight: bold">Confirm
							Order:</td>
						<td style="background: #ddd; font-weight: bold">
							<button onclick="submitOrder()">Submit</button>
						</td>
					</tr>
				</table>
			</div>
			<form action="/order/add_submit.action" method="post"
				id="ordersubmit">
				<s:textfield type="text" name="model.appids" style="display: none" />
				<input name="model.totalprice" id="totalpricetxt"
					style="display: none" />
			</form>
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