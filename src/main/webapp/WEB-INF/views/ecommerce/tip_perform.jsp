<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store</title>
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
		if (textvar.length == 1) {
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
			<div class="thickbox-out">
				<div class="add-contain" style="width: 400px">

					<s:if test="%{model.process_result == 'info'}">
						<div class="th2">
							<h5 style="color: #00a833;">tip:</h5>
						</div>
					</s:if>
					<s:elseif test="model.process_result == 'error'">
						<div class="th2">
							<h5 style="color: #ff0000">error information:</h5>
						</div>
					</s:elseif>
					<s:elseif test="model.process_result == 'warn'">
						<div class="th2">
							<h5 style="color: #ff0000">warming:</h5>
						</div>
					</s:elseif>
					<s:else>
						<div class="th2">
							<h5 style="color: #ff0000">unknown error</h5>
						</div>
					</s:else>
					<div class="tabc-contain" style="height: 80px">
						<p>
							<s:property value="process_result_message" />
						</p>
					</div>
					<div class="tabc-inputbar" style="padding-bottom: 10px">
						<hr />
						<s:if test="%{model.process_result == 'info'}">
							<input name="" type="button" class="btn" value="ok"
								onclick="window.location.href='/ecommerce/ordersymbol.jsp'" />
						</s:if>
						<s:else>

							<form name="f" method="post"
								action="/ordersymbol/ordersymbol/add_rollback.action">
								<input name="Submit" type="submit" class="btn" value="return" />
							</form>

						</s:else>
					</div>
				</div>
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