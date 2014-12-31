<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Get back password</title>
<meta name="keywords"
	content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />

<script type="text/javascript" src="/js/ecommerce/jquery-1.7.2.min.js"></script>


<script type="text/javascript">

	function getbackpasswordsubmit() {
		var c = {
			username : $("#usernametxt").attr("value"),
			email : $("#emailtxt").attr("value"),
			verifyCode : $("#verifycodetxt").attr("value"),
		};
		$.post("/account/getbackpassword", c,
				getbackpasswordSubmitAjaxSuccess, "json");
	}
	function getbackpasswordSubmitAjaxSuccess(data) {

	}
</script>
</head>
<body>


	<div id="wrap">
		<%@include file="/WEB-INF/views/ecommerce/header.jsp"%>

		<div id="templatemo_main">
			<h2>Get Back Password</h2>

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
									<td width="63">Email:</td>
									<td width="350"><input type="text" id="emailtxt"
										style="padding-bottom: 5px; padding-top: 5px; margin-bottom: 5px; margin-top: 5px; width: 150px;" /></td>
								</tr>

								<tr>
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td>Verify&nbsp;Code:</td>
									<td>
										<div style="height: 42px; width: 50px; float: left;">
											<input type="text" id="verifycodetxt"
												style="width: 42px; height: 36px;" />
										</div>
										<div style="width: 100px; float: left;">
											<img
												onclick="javascript:this.src='/account/verifyCode';"
												width="100" height="42" style="cursor: hand;"
												src="/account/verifyCode" />
										</div>
									</td>

								</tr>

								<tr>
									<td width="63"><input type="button" name=""
										onclick="getbackpasswordsubmit()" value="Continue" /></td>
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
									onclick="window.location.href='/register'" value="Register" />
								</span>
							</form>

						</div>
					</td>
				</tr>
			</table>
		</div>
		<!-- END of templatemo_main -->

		<div class="cleaner"></div>
		<%@include file="/WEB-INF/views/ecommerce/footer.jsp"%>

	</div>
</body>
</html>