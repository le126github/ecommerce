<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store-Successs</title>
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
</script>
<script LANGUAGE="JavaScript">
	var time = 20; //时间,秒
	var timelong = 0;
	function diplaytime() { //时间递减
		document.all.his.innerHTML = time - timelong;
		timelong++;
	}
	function redirect() { //跳转页
		//history.back();
		window.location.href = "/ecommerce/index.jsp";//指定要跳转到的目标页面
	}
	timer = setInterval('diplaytime()', 1000);//显示时间
	timer = setTimeout('redirect()', time * 1000); //跳转
	
	function searchSubmits() {
        var textvar = document.getElementById("typeName").value;
        if (textvar.length == 0 || !/^[a-zA-Z][a-zA-Z0-9]*$/.test(textvar)) {
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

			<div id="request_form">
				<p>&nbsp;</p>
				<div align="center">
					<h2>
						<strong>Payment Infomation</strong>
					</h2>
				</div>
				&nbsp;&nbsp;&nbsp;&nbsp;orderTotal:
				<s:property value="orderID" />
				orderTotal($):&nbsp;
				<s:property value="model.Total" />
				<div style="font-size: 15; color: threeddarkshadow;">
					<p align="center">Payment is successful,10 seconds after the
						return home !</p>
				</div>

				<div
					style="border-bottom: #000 1px solid; width: 950px; overflow: hidden"></div>
			</div>

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