var typeidnum = null;

function getsidebarlist() {
	$
			.post(
					"/ecommerce/type.json",
					null,
					function(data) {
						typeidnum = $("#typeid").attr("value");

						// var code =
						// escape(escape(data,"iso-8859-1"),"iso-8859-1");
						// code=unescape(unescape(code,"gbk"),"gbk");

						var typeList = eval("(" + data + ")");

						for ( var key in typeList) {
							$("#sidebar_list")
									.append(
											"<li><a href=\"javascript:empty()\" id=\"firstli"
													+ key
													+ "\" class=\"alilist\">"
													+ key + "</a></li>")
									.append(
											"<ul id=\"firstul"
													+ key
													+ "\" style=\"display: none;margin-left: 10px;padding-left: 0px;\"></ul>");

							for ( var key1 in typeList[key]) {
								$("#firstul" + key)
										.append(
												"<li><a href=\"javascript:empty()\" id=\"secondli"
														+ key1
														+ "\" class=\"alilist\">"
														+ key1 + "</a></li>")
										.append(
												"<ul id=\"secondul"
														+ key
														+ key1
														+ "\" style=\"display: none;margin-left: 15px;padding-left: 0px;\"></ul>");

								for ( var key2 in typeList[key][key1]) {
									$("#secondul" + key + key1)
											.append(
													"<li id=\"thirdli"
															+ typeList[key][key1][key2]
															+ "\"><a href=\""
															+ "/typeparam/typeparam/query_detail.action?newPage=1&typeId="
															+ typeList[key][key1][key2]
															+ "\">" + key2
															+ "</a></li>");
									if (typeidnum != "" && typeidnum != null) {

										if (typeList[key][key1][key2] == typeidnum) {
											$("#thirdli" + typeidnum).parent()
													.css("display", "block");
											$("#thirdli" + typeidnum).parent()
													.parent().css("display",
															"block");
										}
									}

								}

								$("#secondul" + key1 + " > li:first").attr(
										"class", "first");
								$("#secondul" + key1 + " > li:last").attr(
										"class", "last");

							}

							$("#firstul" + key + " > li:first").attr("class",
									"first");
							$("#firstul" + key + " > li:last").attr("class",
									"last");

						}

						$("#sidebar_list > li:first").attr("class", "first");
						$("#sidebar_list > li:last").attr("class", "last");

						$(".alilist").click(function() {
							$(this).parent().next().slideToggle();
						});

					}, "text");

}

function getTopList(data) {
	var ulHtml = "";

	var typeList = data;

	$("#top_menu_list_products").bind({
		"mouseenter" : function(e) {
			$(e.currentTarget).addClass("hover");
		},
		"mouseleave" : function(e) {
			$(e.currentTarget).removeClass("hover");
			$(".top_product_element").removeClass("top_product_click");
		}
	});

	ulHtml += "<div class=\"top_menu_display\">";

	ulHtml += "<h3>Product list:</h3>";

	ulHtml += putInJdStyle(typeList);

	ulHtml += "</div>";

	$("#top_menu_list_products").append(ulHtml);

	$(".top_product_element_a").click(function(e) {

		var thisElement = $(e.currentTarget).parent();
		if (thisElement.hasClass("top_product_click")) {
			thisElement.removeClass("top_product_click");
		} else {
			$(".top_product_element").removeClass("top_product_click");
			thisElement.addClass("top_product_click");
		}
	});

	$(".close_second_menu")
			.bind(
					{
						"click" : function(e) {
							var top_product_click_element = $(e.currentTarget)
									.parent().parent();
							if (top_product_click_element
									.hasClass("top_product_click")) {
								top_product_click_element
										.removeClass("top_product_click");
							} else {
								top_product_click_element
										.addClass("top_product_click");
							}

							// $(".top_product_element").removeClass("top_product_click");
						}
					});

}

function putInJdStyle(typeList) {
	var ulHtml = "";
	for ( var key in typeList) {
		ulHtml += "<div class=\"top_product_element\">";
		ulHtml += "<a href=\"javascript:void(null)\" class=\"top_product_element_a\">";
		ulHtml += key;
		ulHtml += "</a>";
		ulHtml += "<div class=\"second_menu_display\">";
		ulHtml += "<a href=\"javascript:void(null)\" "
				+ "class=\"close_second_menu\">"
				+ "<img src=\"/images/fancy_close.png\"/>" + "</a>";
		for ( var keyi in typeList[key]) {
			ulHtml += "<li class=\"second_menu_title\">";
			ulHtml += keyi;
			ulHtml += "<ul>";
			for ( var keyj in typeList[key][keyi]) {
				ulHtml += "<li>";
				ulHtml += "<a href=\""
						+ "/typeparam/typeparam/query_detail.action?newPage=1&typeId="
						+ typeList[key][keyi][keyj] + "\">";
				ulHtml += keyj;
				ulHtml += "</a>";
				ulHtml += "</li>";
			}
			ulHtml += "</ul>";
			ulHtml += "</li>";
		}
		ulHtml += "</div>";
		ulHtml += "</div>";

	}
	return ulHtml;
}

function closeSecondMenu(element) {
	$(".top_product_element").removeClass("top_product_click");
}