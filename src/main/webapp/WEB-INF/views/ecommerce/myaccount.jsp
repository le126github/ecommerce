<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - My account</title>
<meta name="keywords"
	content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />

<script type="text/javascript" src="/js/ecommerce/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="/js/ecommerce/jquery.flexslider-min.js"></script>



<script type="text/javascript" src="/js/myaccount.js"></script>

<script type="text/javascript">
var menuinitname="<%=request.getParameter("menuname")%>";
    <s:bean name="com.linkage.system.components.system.ui.pagebean.ColumndesBean" id="column">
    var appTypeArray=<s:property value="#column.getArrayString('T_PRODUCT_APP_INFO','APPTYPE')" escape="false"/>;
    </s:bean>

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

		<div id="templatemo_main" style="min-height: 400px;">
			<h2>My Account</h2>

			<div id="sidebar" class="float_l">
				<div class="sidebar_box">
					<span class="bottom"></span>
					<h3>Categories</h3>
					<div class="content">
						<ul class="sidebar_list">
							<li class="first"><a href="javascript:emptyclick()"
								id="account_infomation_href" onclick="onclickmenu(this)">Account&nbsp;Infomation</a></li>
							<li><a href="javascript:emptyclick()"
								id="change_password_href" onclick="onclickmenu(this)">Change&nbsp;Password</a></li>
							<li><a href="javascript:emptyclick()" id="my_cart_href"
								onclick="onclickmenu(this)">My&nbsp;Cart</a></li>
							<li><a href="javascript:emptyclick()"
								onclick="onclickmenu(this)">My&nbsp;Order</a></li>
							<li class="last"><a href="javascript:emptyclick()"
								onclick="onclickmenu(this)">My&nbsp;Order&nbsp;Symbol</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div id="content" class="float_r"></div>
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