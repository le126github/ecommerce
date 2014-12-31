<link rel="stylesheet" type="text/css"
	href="/css/ecommerce/top_menu.css" />

<script type="text/javascript" src="/js/ecommerce/getsidebarlist.js"></script>
<div class="header">
	<div class="header_nav">
		<div class="left_logo float_l"></div>
		<div class="right_nav float_r">
			<div class="login-search" id="header_right"><%@include
					file="/WEB-INF/views/ecommerce/header_right.jsp"%></div>
			<div class="cleaner"></div>
			<div class="menu" id="menu">
				<ul>
					<li><a href="/index">Home</a></li>
					<li class="top_menu_list item" id="top_menu_list_products"><a
						href="/product/product/query_detail.action">Products</a></li>
					<li><a href="/ordersymbol">Order symbol</a></li>
					<li><a href="/designhouse">Design House</a></li>
					<li><a href="/support">Support</a></li>
					<li><a href="/aboutus">About us</a></li>
					<li style="width: 150px;">
						<form method="post" action="/typeparam/typeparam/mod_valid.action"
							id="nameSearch">
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
<script type="text/javascript">
	getTopList(
<%@include file="/WEB-INF/views/ecommerce/type.json" %>
	);

	function searchSubmits() {
		var textvar = document.getElementById("typeName").value;
		if (textvar.length == 0 || !/^[a-zA-Z][a-zA-Z0-9]*$/.test(textvar)) {
			alert("please type in key words!");
		} else {
			document.forms['nameSearch'].submit();
		}

	}
</script>