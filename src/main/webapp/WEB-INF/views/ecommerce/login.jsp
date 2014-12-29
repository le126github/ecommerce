<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Login</title>
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

	function loginSubmit() {

		if (!checkvalue()) {
			return false;
		}
		var c = {
			username : $("#usernametxt").attr("value"),
			password : $("#passwordtxt").attr("value"),
			verifyCode : $("#verifycodetxt").attr("value")
		};

		$.post("/account/login_submit.action", c, loginAjaxSuccess, "json");
	}

	function loginAjaxSuccess(data) {
		var member = eval("(" + data + ")");

		if (member.error == "nofulldata") {
			alert("full data please");
		} else if (member.error == "verifyCode") {
			alert("wrong verify code");
			$("#verifycodetxt").attr("value", "");
			$("#verifycodetxt").focus();
		} else if (member.error == "nocustomer") {
			alert("username doesn't exsit");
			$("#usernametxt").attr("value", "");
			$("#passwordtxt").attr("value", "");
			$("#verifycodetxt").attr("value", "");
			$("#usernametxt").focus();
		} else if (member.error == "notnormalstatus") {
			alert("customer is forbiden");
		} else if (member.error == "wrongpassword") {
			alert("password is wrong");
			$("#passwordtxt").attr("value", "");
			$("#verifycodetxt").attr("value", "");
			$("#passwordtxt").focus();
		} else if (member.success == "success") {
			alert("Welcome to symbolbox !");
			window.location.href = "/ecommerce/myaccount.jsp";
		} else {
			alert("unknow");
		}

		$("#verifycodeimage").click();

	}

	function checkvalue() {
		var username = $("#usernametxt").attr("value");
		var password = $("#passwordtxt").attr("value");
		var verifycode = $("#verifycodetxt").attr("value")
		if (username == null || username == "") {
			alert("put in username please");
			$("#usernametxt").focus();
			return false;
		} else if (password == null || password == "") {
			alert("put in password please");
			$("#passwordtxt").focus();
			return false;
		} else if (verifycode == null || verifycode == "") {
			alert("put in verifycode please");
			$("#verifycodetxt").focus();
			return false;
		}

		return true;
	}

	function keyLogin() {
		if (event.keyCode == 13) {
			loginSubmit();
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
			<h2>Login</h2>

			<table>
				<tr>
					<td style="background-color: #ECECEC;" width="40%">
						<div id="loginform"
							style="margin-top: 50px; margin-bottom: 150px;">

							<table style="margin-left: 50px;">
								<tr>
									<td width="63">Username:</td>
									<td width="350"><input type="text" id="usernametxt"
										style="padding-bottom: 5px; padding-top: 5px; margin-bottom: 5px; margin-top: 5px; width: 150px;" /></td>
								</tr>

								<tr>
									<td width="63">Password:</td>
									<td width="350"><input type="password" id="passwordtxt"
										onclick=""
										style="padding-bottom: 5px; padding-top: 5px; margin-bottom: 5px; margin-top: 5px; width: 150px;" /></td>
								</tr>
								<tr>
									<td>Verify&nbsp;Code:</td>
									<td>
										<div style="height: 42px; width: 50px; float: left;">
											<input type="text" id="verifycodetxt" onclick=""
												style="width: 42px; height: 36px;" />
										</div>
										<div style="width: 100px; float: left;">
											<img
												onclick="javascript:this.src='/verifycode/verifycode_create.action?srand='+Math.random();"
												id="verifycodeimage" width="100" height="42"
												style="cursor: hand;"
												src="/verifycode/verifycode_create.action" />
										</div>
									</td>

								</tr>

								<tr>
									<td></td>

								</tr>

								<tr>
									<td colspan="3">&nbsp;&nbsp;&nbsp;<a
										href="/ecommerce/forgotpassword.jsp">Forgot your password?</a></td>
								</tr>


								<tr>
									<td width="63"><input type="button" name=""
										onclick="loginSubmit()" value="Login" /></td>
									<td width="350"></td>
									<td></td>
								</tr>

							</table>

						</div>
					</td>
					<td width="60%">

						<div id="registerlabel" style="padding-left: 80px;">

							<div class="si-sp si-fl g-hlp si-fn">
								<b>New in SymbolBox?</b>
							</div>
							<form action="" method="post" id="signinForm" name="signinForm">
								<span> <input type="button"
									onclick="window.location.href='register.jsp'" value="Register" />
								</span>
							</form>

						</div>
					</td>
				</tr>
			</table>
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