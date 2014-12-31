<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
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

<script type="text/javascript">
	$(document)
			.ready(
					function() {
						$('.flexslider').flexslider({
							directionNav : true,
							pauseOnAction : false
						});
						return;

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
					});
</script>

</head>
<body>


	<div id="wrap">


		<%@include file="/WEB-INF/views/ecommerce/header.jsp"%>

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
		<%@include file="/WEB-INF/views/ecommerce/footer.jsp"%>
	</div>


</body>
</html>