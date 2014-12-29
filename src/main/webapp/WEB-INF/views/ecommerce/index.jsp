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
<link rel="stylesheet" type="text/css"
	href="/css/ecommerce/top_menu.css" />

<script type="text/javascript" src="/js/ecommerce/getsidebarlist.js"></script>




<script type="text/javascript">
	function searchSubmits() {
		var textvar = document.getElementById("typeName").value;
		if (textvar.length == 0 || !/^[a-zA-Z][a-zA-Z0-9]*$/.test(textvar)) {
			alert("please type in key words!");
		} else {
			document.forms['nameSearch'].submit();
		}

	}
	$(document)
			.ready(
					function() {

						$
								.ajax({
									type : "POST",
									url : "/product/product/query_newproduct.action",
									data : {
									//picture : "picture"
									},
									dataType : "json",
									success : function(data) {
										$("#new_product_show_div").empty();
										var productList = eval("(" + data + ")");
										for ( var key in productList) {
											$("#new_product_show_div")
													.append(
															"<div class=\"problock\">"
																	+ "<div class=\"proimg\">"
																	+ "<a href='/productappinfo/productapp/query_detail.action?scode="
																	+ productList[key].scode
																	+ "&' >"
																	+ "<img src=\""+productList[key].picture+"\" />"
																	+ "</a>"
																	+ "</div>"
																	+ "<div class=\"protitle\">"
																	+ productList[key].scode
																	+ "</div>"
																	+ "<div class=\"proprice\">"
																	+ productList[key].subType1Chn
																	+ "</div>"
																	+ "</div>");
										}
									}
								});

						$
								.ajax({
									type : "POST",
									url : "/productrecommend/productrecommend/query_recommendproduct.action",
									data : {
										picture : "picture"
									},
									dataType : "json",
									success : function(data) {
										var recproductList = eval("(" + data
												+ ")");
										for ( var key in recproductList) {
											//$("#slider").attr("src",productList[key]);
											$("#recommend_product_show_div")
													.append(
															"<li style=\"background: url("
																	+ recproductList[key].picture
																	+ ") 50% 0 no-repeat;\"><a"+
                            						"href=\""+recproductList[key].producturl+"\" target=\"_blank\"></a></li>");
										}
										$('.flexslider').flexslider({
											directionNav : true,
											pauseOnAction : false
										});
									}
								});

						//$.get("/ecommerce/header_right.jsp", function(data) {
						//$("#header_right").html(data);
						//});
						getTopList();
					});
</script>

</head>
<body>


	<div id="wrap">
		<div class="header">
			<div class="header_nav">
				<div class="left_logo float_l"></div>
				<div class="right_nav float_r">
					<div class="login-search" id="header_right"><%@include
							file="/ecommerce/header_right.jsp"%></div>
					<div class="cleaner"></div>
					<div class="menu" id="menu">
						<ul>
							<li><a href="/ecommerce/index.jsp">Home</a></li>
							<li class="top_menu_list item" id="top_menu_list_products"><a
								href="/product/product/query_detail.action">Products</a></li>
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

		<div class="adarea">
			<div class="flexslider">
				<ul class="slides" id="recommend_product_show_div">
					<li
						style="background: url(/images/ecommerce/img1.png) 50% 0 no-repeat;"><a
						href="#" target="_blank"></a></li>
					<li
						style="background: url(/images/ecommerce/img2.png) 50% 0 no-repeat;"><a
						href="#" target="_blank"></a></li>
					<li
						style="background: url(/images/ecommerce/img3.png) 50% 0 no-repeat;"><a
						href="#" target="_blank"></a></li>
				</ul>
			</div>

		</div>
		<div class="proarea">
			<div class="pronav">
				<div class="pronavtitle">
					<h1>New arrival</h1>
				</div>
				<div class="pronavcontent" id="new_product_show_div"></div>
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