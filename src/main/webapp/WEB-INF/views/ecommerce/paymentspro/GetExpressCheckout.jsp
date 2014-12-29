<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>GetExpressCheckout</title>
</head>
<body>
	<img src="https://devtools-paypal.com/image/bdg_payments_by_pp_2line.png" alt="PAYMENTS BY PayPal" />
	<div id="wrapper">
		<div id="header">
			<h3>GetExpressCheckout<s:property value="model.token"/>sssss<s:property value="model.orderID"/></h3>
		</div>
		<form method="POST" action="/ec/do_express_checkout.action">
			<div id="request_form">
				<div class="params">
					<div class="param_name">
					<input type="hidden"" name="model.tokens" id="model.tokens" value="<s:property   value="model.token" />">
					<input type="hidden"" name="model.orderID" id="model.orderID" value="<s:property   value="model.orderID" />">
						Token*(Get Token via <a href="SetExpressCheckout">SetExpressCheckout</a>)
					</div>
					<div class="param_value">
						<input type="text" name="token" value="" size="50" maxlength="260" />
					</div>
				</div>

				<div class="submit">
					<input type="submit" name="GetExpressCheckoutBtn"
						value="GetExpressCheckout" /> <br />
				</div>
				<a href="../index.html">Home</a>
			</div>
		</form>
	</div>
</body>
</html>