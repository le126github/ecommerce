<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Goods payment page</title>

<meta name="keywords"
	content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />

<script type="text/javascript" src="/js/ecommerce/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="/js/ecommerce/jquery.flexslider-min.js"></script>


<script type="text/javascript">
	$(document).ready(function() {
		$.get("/ecommerce/header_right.jsp", function(data) {
			$("#header_right").html(data);
		});
	});

	function sendSubmit() {
		document.forms['setexpresscheckout'].submit();

	}

	function searchSubmits() {
		var textvar = document.getElementById("typeName").value;
		if (textvar.length == 0 || /^[a-zA-Z][a-zA-Z0-9]*$/.test(textvar)) {
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
		<!-- end of ddsmoothmenu -->

		<div id="templatemo_main">
			<form name="setexpresscheckout" id="setexpresscheckout" method="post"
				action="/ec/set_express_checkout.action?orderID =<s:property value="model.orderid" />">
				<div id="request_form">
					<p>&nbsp;</p>
					<div align="center">
						<h2>
							<strong>Order information </strong>
						</h2>
					</div>
					<p align="left">
						ORDER ID:
						<s:property value="model.orderid" />
					</p>
					<div
						style="border-bottom: #000 1px solid; width: 950px; overflow: hidden"></div>
					<div align="center"></div>
					<table width="950" height="65" border="0" bordercolor="#666666"
						align="right">
						<tr>
							<td width="250"><div align="center">
									<strong>Commodity Description</strong>
								</div></td>
							<td width="250"><div align="center">
									<strong>Price($)</strong>
								</div></td>
							<td width="250"><div align="center">
									<strong>Number</strong>
								</div></td>
							<td width="223"><div align="center">
									<strong>itemTotal</strong><strong>($)</strong>
								</div></td>
						</tr>
						<s:iterator value="model.productappList" id="list" status="stat">
							<tr>
								<td><div align="center">
										<strong><s:property value="#list.name" /></strong>
									</div></td>
								<td><div align="center">
										<strong><s:property value="#list.price" /></strong>
									</div></td>
								<td><div align="center">
										<strong>1</strong>
									</div></td>
								<td><div align="center">
										<strong><s:property value="#list.price" /></strong>
									</div></td>
							</tr>
						</s:iterator>
					</table>
					<div
						style="border-bottom: #000 1px solid; width: 950px; overflow: hidden"></div>
					<table width="120" border="0" align="right">
						<tr>
							<td><div align="center">
									<strong>orderTotal($)</strong>
								</div></td>
						</tr>
						<tr>
							<td><div align="center">
									<strong><s:property value="model.totalprice" /></strong>
								</div></td>
						</tr>
					</table>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
					<p>
						<img
							src="https://www.paypalobjects.com/en_US/i/btn/x-click-but6.gif"
							alt="buy now with PayPal" width="149" height="48" border="0"
							align="right" onclick="sendSubmit()" />
					</p>
				</div>
			</form>
			<div>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
			</div>
		</div>
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