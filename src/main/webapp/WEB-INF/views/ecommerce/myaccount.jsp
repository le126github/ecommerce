<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
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


<script type="text/javascript">
	var menuinitname="<%=request.getParameter("menuname")%>";
</script>
<script type="text/javascript" src="/js/ecommerce/myaccount.js"></script>

</head>

<body>


	<div id="wrap">
		<%@include file="/WEB-INF/views/ecommerce/header.jsp"%>

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
		<%@include file="/WEB-INF/views/ecommerce/footer.jsp"%>
	</div>
</body>
</html>