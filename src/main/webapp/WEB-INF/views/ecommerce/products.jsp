<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Products</title>
<meta name="keywords"
	content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />
<link rel="stylesheet" type="text/css" href="/css/ecommerce/style.css" />

<script type="text/javascript" src="/js/ecommerce/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="/js/ecommerce/jquery.paginate.js"></script>
<script type="text/javascript"
	src="/js/ecommerce/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="/js/ecommerce/getsidebarlist.js"></script>

<script type="text/javascript">
	$(document).ready(function() {
		$.get("/ecommerce/header_right.jsp", function(data) {
			$("#header_right").html(data);
		});
		getsidebarlist();
	});

	function empty() {
	}

	function forwardpage() {
		var newpages = document.getElementById("newPage").value;

		if (newpages == 1) {
			alert("this is first page");
			return false;
		}
		window.location.href = "<s:property value="model.url" />newPage=<s:property value="model.newPage-1"/>";
	}
	function backwardpage() {
		var newpages = document.getElementById("newPage").value;
		var Total = document.getElementById("total").value;

		if (Total == newpages) {
			alert("this is last page");
			return false;
		}
		window.location.href = "_$tag___________________________newPage=_$tag________________________________";
	}
	function searchSubmits() {
		var textvar = document.getElementById("typeName").value;

		if (textvar.length == 0 || textvar == "") {
			alert("please type in key words!");
		} else {
			document.forms['nameSearch'].submit();
		}

	}
	function forword() {
		alert("ss");
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
				<h1>Products</h1>
				<s:if test="model.product==null||model.product.size==0">
					<p>Products do not exist</p>
				</s:if>
				<s:else>
					<table rules="rows" width="950">
						<tr height="40px">
							<td width="15%">Scode</td>
							<td width="15.5%">Picture</td>
							<td width="14%">Datasheet</td>
							<td width="14.5%">Pn explanation</td>
							<td width="12.5%">Part Number</td>
							<td width="8%">Vendor</td>
							<td width="8%">Type</td>
							<td width="12.5%">Description</td>
						</tr>
						<s:iterator value="model.product" id="list" status="stat">
							<tr>
								<td valign="top"><a
									href="/productappinfo/productapp/query_detail.action?scode=<s:property value="#list.scode" />">
										<s:property value="#list.scode" />
								</a></td>
								<td valign="top"><img
									src=<s:property value="#list.picture" /> alt="Picture"
									width="90" height="70" /></td>
								<td valign="top"><img src="/images/pdf.png" alt="Datasheet"
									width="24" height="24" /></td>
								<td valign="top"><img
									src=<s:property value="#list.pnExplanation" />
									alt="PnExplanation" width="90" height="70" /></td>
								<td width="100" height="70" valign="top"><s:property
										value="#list.partNumber" /></td>
								<td width="80" height="70" valign="top"><s:property
										value="#list.vendor" /></td>
								<td width="80" height="70" valign="top"><s:property
										value="#list.typeChn" /></td>
								<s:if test="#list.description.length()>=50">
									<td valign="top"><a
										href="/productappinfo/productapp/query_detail.action?scode=<s:property value="#list.scode" />">
											<s:property value="#list.description.substring(0,50)" />...
									</a></td>
								</s:if>
								<s:else>
									<td valign="top"><a
										href="/productappinfo/productapp/query_detail.action?scode=<s:property value="#list.scode" />">
											<s:property value="#list.description" />
									</a></td>
								</s:else>
							</tr>
						</s:iterator>
					</table>
				</s:else>
				<div class="cleaner"></div>
				<div class="jPaginate" style="padding-left: 75px;" id="demo2">
					<div class="jPag-control-back">
						<a
							style="color: rgb(136, 136, 136); background-color: fgb(238, 238, 238);"
							href="<s:property value="model.url" />newPage=1"> First </a> <span
							class="jPag-sprevious-img"></span>
					</div>
					<div style="overflow: hidden; width: 252px">

						<s:bean name="org.apache.struts2.util.Counter" id="counter">
							<ul class="jPag-pages" style="height: 30px">
								<s:param name="first" value="1" />
								<s:param name="last" value="model.pages" />
								<s:iterator>
									<s:if test="model.newPage==current-1">
										<li><a style="background-color: rgb(238, 238, 238);"
											href="<s:property value="model.url" />
												newPage=<s:property value="model.newPage"/>"><font
												color="red"><s:property value="model.newPage" /></font></a></li>
									</s:if>
									<s:else>
										<li><a
											style="color: rgb(136, 136, 136); background-color: rgb(238, 238, 238);"
											href="<s:property value="model.url" />
												newPage=<s:property value="current-1"/>"><s:property
													value="current-1" /></a></li>
									</s:else>
								</s:iterator>
							</ul>
						</s:bean>



					</div>
					<div class="jPag-control-front" style="left: 331px">
						<span class="jPag-snext-img"></span> <a
							style="color: rgb(136, 136, 136); background-color: fgb(238, 238, 238);"
							href="<s:property value="model.url" />newPage=<s:property value="model.pages" />">
							Last </a>
					</div>
				</div>
			</div>
			<div class="cleaner"></div>

			<s:hidden id="typeid" name="model.tid" />
			<s:hidden id="pages" name="model.pages" />
			<s:hidden id="newPage" name="model.newPage" />
			<s:hidden id="url" name="model.url" />
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

	<script type="text/javascript">
		$(function() {
			$("#demo2").paginate(
					{
						count : "<s:property value="model.pages" />",
						start : "<s:property value="model.newPage" />",
						display : 10,
						border : false,
						text_color : '#888',
						background_color : '#EEE',
						text_hover_color : 'black',
						background_hover_color : '#CFCFCF',
						onChange : function(page) {
							window.location.href = "<s:property value="model.url" />newPage="+page;
							
						}
					});
		});
	</script>
</body>
</html>
