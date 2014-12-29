<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ taglib prefix="s" uri="/struts-tags"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Software Store - Shopping Cart</title>
<meta name="keywords"
	content="symbol box,software store, Shopping Cart, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, Shopping Cart, ecommerce, online shop " />
<link href="/css/templatemo_style.css" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css" href="/css/ddsmoothmenu.css" />

<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/ddsmoothmenu.js">
	
</script>

<script type="text/javascript">
	$(document).ready(
			function() {
				$.get("/ecommerce/header_right.jsp", function(data) {
					$("#header_right").html(data);
				});

				var c = {};

				$.post("/account/cartlist_query.action", c, getCartAjaxSuccess,
						"json");

			});

	<s:bean name="com.linkage.system.components.system.ui.pagebean.ColumndesBean" id="column">
    var appTypeArray=<s:property value="#column.getArrayString('T_PRODUCT_APP_INFO','APPTYPE')" escape="false"/>
    </s:bean>
	
	function getCartAjaxSuccess(data) {
		var totalprice = 0;
		var member = eval("(" + data + ")");
		
		if (member.error == "out_time") {
	        alert("please login");
	        window.location.href = "/ecommerce/login.jsp";
	    }else if (member.error == "no_customer") {
            alert("please login");
            window.location.href = "/ecommerce/login.jsp";
        }
		
		for ( var key in member.success) {
			if(member.success[key]==null){
				continue;
			}
			$("#tablehead")
					.after(
							"<tr align=\"center\" id=\"appid"
							        + member.success[key].appid
							        + "\"><td>"
									+ member.success[key].name
									+ "</td><td>"
									+ appTypeArray[member.success[key].apptype]
									+ "</td><td>"
									+ member.success[key].price
									+ "</td><td><a href=\"javascript:empty()\" onclick=\"removeone(this)\""
	                                + "name=\""
	                                + member.success[key].appid
	                                + "\""
	                                + "><img src=\"/images/remove_x.gif\"alt=\"remove\"/><br />Remove</a></td></tr>");
			totalprice += member.success[key].price;

		}
		
		if(member.success.length==0){
			$("#tablehead").after("<tr align=\"center\" ><td colspan=\"4\">Cart is empty</td></tr>");
		}
		$("#totalprice").text(totalprice);
	}

	function empty() {
	}

	function removeone(theObject) {
		var theRemoveAppid = theObject.name;
		var c = {
			removefromcartappid : theRemoveAppid,
		};

		$.post("/account/removecart_submit.action", c, function(data) {
			var member = eval("(" + data + ")");

			if (member.success == "success") {
				$("#appid" + theRemoveAppid).empty();
			} else if (member.error == "notexist") {
				alert("Already deleted");
			}

		}, "json");

	}

	function submitCart() {

		var appidsStr = "";

		var trObjectPoint = $("#tablehead").next();

		while (trObjectPoint.attr("id") != "lasttr") {
			var appid = trObjectPoint.attr("id");
			appidsStr += "," + appid.substr(5, appid.length - 5);
			trObjectPoint = trObjectPoint.next();
		}

		appidsStr = appidsStr.substr(1, appidsStr.length);

		$("#appids").attr("value", appidsStr);

		document.makeorder.submit();
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

<body>

	<div id="templatemo_body_wrapper">
		<div id="templatemo_wrapper">

			<div id="templatemo_header">
				<div id="site_title">
					<h1>
						<a href="/ecommerce/index.jsp">Online Software Store</a>
					</h1>
				</div>
				<div id="header_right"></div>
				<div class="cleaner"></div>
			</div>
			<!-- END of templatemo_header -->

			<div id="templatemo_menubar">
				<div id="top_nav" class="ddsmoothmenu">
					<ul>
						<li><a href="/ecommerce/index.jsp">Home</a></li>
						<li><a href="/product/product/query_detail.action">Products</a></li>
						<li><a href="/ecommerce/ordersymbol.jsp">Order Symbol</a></li>
						<li><a href="/ecommerce/designhouse.jsp">Design House</a></li>
						<li><a href="/ecommerce/support.jsp">Support</a></li>
						<li><a href="/ecommerce/aboutus.jsp">About Us</a></li>
					</ul>
					<br style="clear: left" />
				</div>
				<!-- end of ddsmoothmenu -->
				<div id="templatemo_search">
					<form action="#" method="get">
						<input type="text" value=" " name="keyword" id="keyword"
							title="keyword" onfocus="clearText(this)"
							onblur="clearText(this)" class="txt_field" /> <input
							type="submit" name="Search" value=" " alt="Search"
							id="searchbutton" title="Search" class="sub_btn" />
					</form>
				</div>
			</div>
			<!-- END of templatemo_menubar -->

			<div id="templatemo_main">

				<div id="content" class="float_l" style="width: 890px;">
					<h1>Shopping Cart</h1>
					<table width="880px" cellspacing="0" cellpadding="5">
						<tr bgcolor="#ddd" align="center" id="tablehead">
							<th width="220">AppName</th>
							<th width="180">AppType</th>
							<th width="180">Price</th>
							<th width="90"></th>
						</tr>
						<tr align="center" id="lasttr">
							<td colspan="2" height="30px">&nbsp;</td>
							<td style="background: #ddd; font-weight: bold">Total</td>
							<td style="background: #ddd; font-weight: bold" id="totalprice">240</td>
						</tr>
					</table>
					<div style="float: right; width: 215px; margin-top: 20px;">
						<p>
							Click here to <a href="/ecommerce/shoppingcart.jsp"><strong>Update</strong></a>&nbsp;&nbsp;
						</p>
						<form action="/account/order_make.action" method="post"
							name="makeorder">
							<p>
								<input type="text" name="model.appids" id="appids"
									style="display: none;" /> <a href="javascript:empty()"
									onclick="submitCart()">Generate order</a>
							</p>
						</form>
						<p>
							<a href="/ecommerce/index.jsp">Continue shopping</a>
						</p>

					</div>
				</div>
				<div class="cleaner"></div>
			</div>
			<!-- END of templatemo_main -->

			<div id="templatemo_footer">
				<p>
					<a href="/ecommerce/index.jsp">Home</a> | <a
						href="/product/product/query_detail.action">Products</a> |<a
						href="/ecommerce/ordersymbol.jsp">Order Symbol</a>| <a
						href="/ecommerce/designhouse.jsp">Design House</a>|<a
						href="/ecommerce/support.jsp">Support</a>|<a
						href="/ecommerce/aboutus.jsp">About Us</a>
				</p>

				Copyright &copy; 2072 <a href="#">Your Company Name</a> | Collect
				from <a href="#" target="_parent">sgnbs</a>

			</div>
			<!-- END of templatemo_footer -->

		</div>
		<!-- END of templatemo_wrapper -->
	</div>
	<!-- END of templatemo_body_wrapper -->

</body>
</html>