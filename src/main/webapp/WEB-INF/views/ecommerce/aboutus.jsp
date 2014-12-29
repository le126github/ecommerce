<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - About us</title>
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

		<div id="templatemo_main">
			<h2>About Us</h2>
			<p>SymbolBox Core Team consists of twelve experienced engineers.
				Each one of us has at least nine years experience in Tier one IT
				companies. Most of us are from R&D and production departments, which
				cover board design, CAD/SI, EMC, reliablity, production engineering,
				safety and software driver.</p>
			<p>We become a team because of the same vision. SymbolBox strives
				to provide the best hardware design platform for the electronic
				design engineers around the world.We will continue to provide
				professional schematic symbols and PCB footprints for the industry
				mainstream IC chips. All IC chips are classified by function into
				easily identifiable categories, each SymbolBox selected device will
				be assigned a separate SymbolBox code (SCODE). The user can generate
				a BOM list based on SCODE to facilitate subsequent processing and
				maintenance.</p>
			<p>All Symbols are built from hardware design point of view. Pins
				allocation and group are from the perspective of functionality and
				ease of use. All Footprints are in line with industry standards, and
				some of them are optimized based on our solid experience to increase
				long time reliablity and maintainability.</p>



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