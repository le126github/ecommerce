<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Register</title>
<meta name="keywords"
	content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />

<script type="text/javascript" src="/js/ecommerce/jquery-1.7.2.min.js"></script>
<script type="text/javascript"
	src="/js/ecommerce/jquery.flexslider-min.js"></script>


<script type="text/javascript">
	var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

	var usernameflag = false;
	var passwordflag = false;
	var emailflag = false;
	var confirmpasswordflag = false;

	$(document).ready(function() {
		$.get("/ecommerce/header_right.jsp", function(data) {
			$("#header_right").html(data);
		});
	});

	function registerSubmit() {

		if (!checkValue()) {
			return false;
		}
		var c = {
			username : $("#usernametxt").attr("value"),
			password : $("#passwordtxt").attr("value"),
			email : $("#emailtxt").attr("value"),
			verifyCode : $("#verifycodetxt").attr("value")
		};

		$.post("/account/register_submit.action", c, registerAjaxSuccess,
				"json");
	}

	function registerAjaxSuccess(data) {

		var member = eval("(" + data + ")");

		if (member.error == "verifyCode") {

			alert("wrong verify code");
		} else {

			if (member.error == "username") {

				alert("username exsit");
			} else {

				if (member.success == "success") {
					alert("congratulation!welcome to symbolbox");
					window.location.href = "/ecommerce/login.jsp";
				} else {
					alert("unknow");
				}
			}
		}

		$("#verifycodeimage").click();

	}

	function checkValue() {
		if (!usernameflag) {
			return false;
		}
		if (!passwordflag) {
			return false;
		}
		if (!confirmpasswordflag) {
			return false;
		}
		if (!emailflag) {
			return false;
		}
		return true;
	}

	function onFocusTip(theObject) {
		if (theObject.id == "usernametxt") {
			$("#usernametip").empty().append("<a>At least 4 characters</a>");
		} else if (theObject.id == "passwordtxt") {
			$("#passwordtip").empty().append("<a>At least 8 characters</a>");
		} else if (theObject.id == "confirmpasswordtxt") {
			$("#confirmpasswordtip").empty().append(
					"<a>input password again</a>");
		} else if (theObject.id == "emailtxt") {
			$("#emailtip").empty().append("<a>It's useful !</a>");
		}
	}

	function loseFocusTip(theObject) {
		if (theObject.id == "usernametxt") {
			if (theObject.value == "") {
				usernameflag = false;
				$("#usernametip")
						.empty()
						.append(
								"<a><font color=\"red\">please put in username</font></a>");
			} else if (theObject.value.length < 4) {
				usernameflag = false;
				$("#usernametip")
						.empty()
						.append(
								"<a><font color=\"red\">username is too short</font></a>");
			} else {
				usernameflag = true;
				$("#usernametip").empty();
			}

		} else if (theObject.id == "passwordtxt") {
			if (theObject.value == "") {
				passwordflag = false;
				$("#passwordtip")
						.empty()
						.append(
								"<a><font color=\"red\">please put in password</font></a>");
			} else if (theObject.value.length < 8) {
				passwordflag = false;
				$("#passwordtip")
						.empty()
						.append(
								"<a><font color=\"red\">password is too short</font></a>");
			} else {
				passwordflag = true;
				$("#passwordtip").empty();
			}

		} else if (theObject.id == "confirmpasswordtxt") {
			if (theObject.value != $("#passwordtxt").attr("value")) {
				confirmpasswordflag = false;
				$("#confirmpasswordtip")
						.empty()
						.append(
								"<a><font color=\"red\">two password is different</font></a>");
			} else {
				confirmpasswordflag = true;
				$("#confirmpasswordtip").empty();
			}
		} else if (theObject.id == "emailtxt") {
			if (!reg.test(theObject.value)) {
				emailflag = false;
				$("#emailtip").empty().append(
						"<a><font color=\"red\">wrong email!!!</font></a>");
			} else {
				emailflag = true;
				$("#emailtip").empty();
			}
		}
	}

	function keyRegister() {
		if (event.keyCode == 13) {
			registerSubmit();
		}

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

<body onkeydown="keyRegister();">


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
			<h2>Register</h2>

			<table>
				<tr>
					<td style="background-color: #ECECEC;" width="60%">
						<div id="registerform"
							style="margin-top: 50px; margin-bottom: 150px;">

							<table style="margin-left: 50px;">
								<tr>
									<td width="63">Username:</td>
									<td><input type="text" id="usernametxt"
										onclick="onFocusTip(this)" onblur="loseFocusTip(this)"
										style="padding-bottom: 5px; padding-top: 5px; margin-bottom: 5px; margin-top: 5px; width: 150px;" /></td>
									<td id="usernametip" width="300px"></td>
								</tr>

								<tr>
									<td width="63">Password:</td>
									<td><input type="password" id="passwordtxt"
										onclick="onFocusTip(this)" onblur="loseFocusTip(this)"
										style="padding-bottom: 5px; padding-top: 5px; margin-bottom: 5px; margin-top: 5px; width: 150px;" /></td>
									<td id="passwordtip"></td>
								</tr>

								<tr>
									<td width="63">Confirm&nbsp;Password:</td>
									<td><input type="password" id="confirmpasswordtxt"
										onclick="onFocusTip(this)" onblur="loseFocusTip(this)"
										style="padding-bottom: 5px; padding-top: 5px; margin-bottom: 5px; margin-top: 5px; width: 150px;" /></td>
									<td id="confirmpasswordtip"></td>
								</tr>

								<tr>
									<td width="63">Email:</td>
									<td><input type="text" id="emailtxt"
										onclick="onFocusTip(this)" onblur="loseFocusTip(this)"
										style="padding-bottom: 5px; padding-top: 5px; margin-bottom: 5px; margin-top: 5px; width: 150px;" /></td>
									<td id="emailtip"></td>
								</tr>

								<tr>
									<td>Verify&nbsp;Code:</td>
									<td>
										<div style="height: 42px; width: 50px; float: left;">
											<input type="text" id="verifycodetxt" onclick=""
												style="width: 42px; height: 36px;" />
										</div>
										<div style="width: 100px; float: left;">
											<img id="verifycodeimage"
												onclick="javascript:this.src='/verifycode/verifycode_create.action?srand='+Math.random();"
												width="100" height="42" style="cursor: hand;"
												src="/verifycode/verifycode_create.action" />
										</div>
									</td>

								</tr>

								<tr>
									<td colspan="3">
										<div>
											<!-- shows old term of use with no option for marketing checkbox -->
											<div class="agsp rcl">
												<b>By clicking "Submit" I agree that:</b>
												<ul>
													<li>I have read and accepted the <a
														title="link opens in new window" href="#" target="_blank">User
															Agreement</a>
													</li>
												</ul>
											</div>
										</div>
									</td>
								</tr>


								<tr>
									<td width="63"><input type="button" name=""
										onclick="registerSubmit()" value="Submit" /></td>
									<td width="350"></td>
									<td></td>
								</tr>

							</table>
						</div>
					</td>
					<td width="40%">

						<div id="loginlabel" style="padding-left: 50px;">

							<div class="si-sp si-fl g-hlp si-fn">
								<b>Already have an account?</b>
							</div>
							<form action="" method="post" id="signinForm" name="signinForm">
								<span> <input type="button"
									onclick="window.location.href='login.jsp'" value="Sign in" />
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