<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Design House</title>
<meta name="keywords"
    content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
    content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />


<link rel="stylesheet" href="/css/793132-f27779.css">

<script type="text/javascript" src="/js/jquery-1.11.0.js"></script>

<script type="text/javascript" src="/js/ddsmoothmenu.js"></script>
<!--  <script type="text/javascript" src="/js/jquery.min.js"></script>-->


<script type="text/javascript" src="/js/jBox.min.js"></script>
<script type="text/javascript" src="/js/script.js"></script>

<script type="text/javascript">
	$(document).ready(function() {
		$.get("/ecommerce/header_right.jsp", function(data) {
			$("#header_right").html(data);
		});
	});
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
			<!-- END of templatemo_menubar -->

			<div id="templatemo_main">
				<div id="content" class="float_l">
					<h2>Design House</h2>
					<div>
						<table cellspacing="10px" cellpadding="10px"
							style="margin-left: 10px;">
							<tr>
								<td><img src="../images/1.png"
									style="display: block; width: 100%;" id="demoT1" /></td>
								<td><img src="../images/2.png"
									style="display: block; width: 100%;" id="demoT2" /></td>
								<td><img src="../images/3.png"
									style="display: block; width: 100%;" id="demoT3" /></td>
							</tr>
							<tr>
								<td><img src="../images/4.png"
									style="display: block; width: 100%;" id="demoT4" /></td>
								<td><img src="../images/5.png"
									style="display: block; width: 100%;" id="demoT5" /></td>
								<td></td>
							</tr>

						</table>
					</div>


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