<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Support</title>
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
	function searchSubmits() {
		var textvar = document.getElementById("typeName").value;

		if (textvar.length == 0 || textvar == "") {
			alert("please type in key words!");
		} else {
			document.forms['nameSearch'].submit();
		}

	}
</script>

</head>
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
			<div id="content" class="float_l faqs">
				<h1>Support</h1>
				<h5>1. What we are selling</h5>
				<p>SymbolBox strives to provide schematic symbols and PCB
					footprints of all mainstream IC components.All the IC components
					are logically classified for your seaching.</p>
				<p>The EDA tools that we are supporting are Cadence OrCAD,
					Mentor Graphics PADS ,CADSTAR Eagle and Altium designer.But we plan
					to expand to all mainsteam tools. If you want</p>
				<h5>2. How to pay</h5>
				<p>Symbols or Footprints can be purchased by using the 'add to
					cart' button which automatically takes you to your shopping cart
					with that symbol or footprint, and you can buy multiple symbols by
					clicking on 'continue shopping' or continue on to checkout by
					accepting terms and conditions and clicking on 'checkout'. You can
					view what symbols are in your shopping cart at any time by clicking
					on the 'view cart' tab.</p>
				<p>SymbolHome uses PayPal because the complete transaction is
					handled by the PayPal secure server system and accepts many credit
					cards. PayPal also handles conversion from any currency PayPal
					accepts. PayPal is responsible for handling the credit card and
					other payment details. Registration with PayPal is required if you
					don't already have a PayPal account.</p>
				<h5>3. How to download</h5>
				<p>After your paying for the symbols or Footprints, you will
					have the ability to download purchased materials with your user
					name and password. The purchased materials will be in your account
					for two months, you can download them at any time within ONE
					months.</p>

				<h5>4. Advices and questions</h5>
				<p>Prompt a window to enable user to edit the advice and
					questions.</p>

				<h5>5. Contact us</h5>
				<p>Publish support@symbolbox.com</p>

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