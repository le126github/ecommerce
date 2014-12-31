var ajaxData = null;

var menuSelected = null;

var apps = null;

var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

var ordertable = null;
var ordertableelement = null;
var ordertablenotpaid = null;
var ordertablepaid = null;

$(document).ready(function() {
	if (menuinitname == "mycart") {
		$("#my_cart_href").click();
	} else if (menuinitname == "changepassword") {
		$("#change_password_href").click();
	} else {
		$("#account_infomation_href").click();
	}
});

function onclickmenu(theObject) {
	var option = theObject.innerHTML;
	var c = null;
	if (option == "Account&nbsp;Infomation") {
		menuSelected = "Account_Infomation";
		c = {
			menutype : "Account_Infomation",
		};
		$.get("/ecommerce/account_infomation.html", function(data) {
			$("#content").html(data);
		});
		$
				.post("/account/menu_query.action", c, menuselectedAjaxSuccess,
						"json");
	} else if (option == "Change&nbsp;Password") {
		menuSelected = "Change_Password";
		c = {
			menutype : "Change_Password",
		};
		$.get("/ecommerce/change_password.html", function(data) {
			$("#content").html(data);

		});
		$
				.post("/account/menu_query.action", c, menuselectedAjaxSuccess,
						"json");
	} else if (option == "My&nbsp;Cart") {
		// window.location.href = "/ecommerce/shoppingcart.jsp";
		menuSelected = "My_Cart";
		$.get("/ecommerce/my_account_cart.html", function(data) {
			$("#content").html(data);

		});
		$.post("/account/cartlist_query.action", c, menuselectedAjaxSuccess,
				"json");
	} else if (option == "My&nbsp;Order") {
		menuSelected = "My_Order";
		c = {
			menutype : "My_Order",
		};
		$.get("/ecommerce/my_order.html", function(data) {
			$("#content").html(data);
		});
		$
				.post("/account/menu_query.action", c, menuselectedAjaxSuccess,
						"json");
	} else if (option == "My&nbsp;Order&nbsp;Symbol") {
		menuSelected = "My_Order_Symbol";
		c = {
			menutype : "My_Order_Symbol",
		};
	}

}

function menuselectedAjaxSuccess(data) {
	ajaxData = data;
	if (menuSelected == "Account_Infomation") {
		accountInformationInit();
	} else if (menuSelected == "Change_Password") {
		passwordchangeInit();
	} else if (menuSelected == "My_Cart") {
		myCartInit();
	} else if (menuSelected == "My_Order") {
		orderInformationInit();
	}
}

function emptyclick() {
}
function empty() {
}

function accountInformationInit() {
	var ajaxDataContext = eval("(" + ajaxData + ")");

	if (ajaxDataContext.error == "out_time") {
		alert("please login");
		window.location.href = "/ecommerce/login.jsp";
	}

	for ( var key in ajaxDataContext) {
		$("#" + key).attr("value", ajaxDataContext[key]);
	}
}

function accountInformationSubmit() {

	if (!accountInformationValueCheck()) {
		return false;
	}

	var c = {
		fullname : $("#fullnametxt").attr("value"),
		email : $("#emailtxt").attr("value"),
		mobile : $("#mobiletxt").attr("value"),
		fax : $("#faxtxt").attr("value"),
		country : $("#countrytxt").attr("value"),
		city : $("#citytxt").attr("value"),
		address : $("#adresstxt").attr("value"),
	};
	$.post("/account/mod_submit.action", c,
			accountInformationSubmitAjaxSuccess, "json");
}

function accountInformationSubmitAjaxSuccess(data) {
	var member = eval("(" + data + ")");

	if (member.error == "out_time") {
		alert("please login");
		window.location.href = "/ecommerce/login.jsp";
	} else if (member.success == "success") {
		alert("sucess");
		location.reload(true);
	}
}

function accountInformationValueCheck() {
	var fullnamestr = $("#fullnametxt").attr("value");
	if (fullnamestr != null) {
		if (fullnamestr.length > 50) {
			alert("full name is too long");
			return false;
		}
	}

	var emailstr = $("#emailtxt").attr("value");

	if (!reg.test(emailstr)) {
		alert("wrong email");
		return false;
	}
}

function passwordchangeInit() {
	var ajaxDataContext = eval("(" + ajaxData + ")");

	if (ajaxDataContext.error == "out_time") {
		alert("please login");
		window.location.href = "/ecommerce/login.jsp";
	}
}

function passwordChangeSubmit() {
	if ($("#newpasswordtxt").attr("value") != $("#confirmnewpasswordtxt").attr(
			"value")) {
		alert("two passwords are different");
		return false;
	}

	if ($("#newpasswordtxt").attr("value").length < 8) {
		alert("new password is too short");
		return false;
	}
	var c = {
		password : $("#passwordtxt").attr("value"),
		newpassword : $("#newpasswordtxt").attr("value"),

	};
	$.post("/account/passwordmod_submit.action", c,
			passwordChangeSubmitAjaxSuccess, "json");
}

function passwordChangeSubmitAjaxSuccess(data) {
	var member = eval("(" + data + ")");

	if (member.error == "out_time") {
		alert("Now ,please login");
		window.location.href = "/ecommerce/login.jsp";
	} else if (member.error == "oldpasswordwrong") {
		alert("old password is wrong");
		window.location.href = "/ecommerce/myaccount.jsp?menuname=changepassword";
	} else if (member.success == "success") {
		alert("password change sucess");
		window.location.href = "/ecommerce/myaccount.jsp?menuname=changepassword";
	} else {
		alert(member.error);
		window.location.href = "/ecommerce/myaccount.jsp?menuname=changepassword";
	}
}

function myCartInit() {
	var totalprice = 0;
	var member = eval("(" + ajaxData + ")");

	if (member.error == "out_time") {
		alert("please login");
		window.location.href = "/ecommerce/login.jsp";
	} else if (member.error == "no_customer") {
		alert("please login");
		window.location.href = "/ecommerce/login.jsp";
	}

	for ( var key in member.success) {
		if (member.success[key] == null) {
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

	if (member.success.length == 0) {
		$("#tablehead")
				.after(
						"<tr align=\"center\" ><td colspan=\"4\">Cart is empty</td></tr>");
	}
	$("#totalprice").text(changeTwoDecimal_f(totalprice));

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

function removeone(theObject) {
	var theRemoveAppid = theObject.name;

	var c = {
		removefromcartappid : parseInt(theRemoveAppid),
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

function orderInformationInit() {
	var ajaxDataContext = eval("(" + ajaxData + ")");

	if (ajaxDataContext.error == "out_time") {
		alert("please login");
		window.location.href = "/ecommerce/login.jsp";
	}

	$.get("/ecommerce/order_table.html", function(data) {

		ordertable = data;

		$.get("/ecommerce/order_table_element.html", function(data) {

			ordertableelement = data;

			$.get("/ecommerce/order_table_notpaid.html", function(data) {

				ordertablenotpaid = data;

				$.get("/ecommerce/order_table_paid.html", function(data) {

					ordertablepaid = data;

					orderInformationInitSuccess();

				});
			});
		});

	});

}

function orderInformationInitSuccess() {
	var ajaxDataContext = eval("(" + ajaxData + ")");

	if (ajaxDataContext.error == "out_time") {
		alert("please login");
		window.location.href = "/ecommerce/login.jsp";
	}

	for ( var keyi in ajaxDataContext.orderlist) {
		var thisorderid = ajaxDataContext.orderlist[keyi].orderid;

		$("#myordortablelist").append(ordertable);

		// rename id

		$("#tableorder").attr("id", "tableorder" + thisorderid);

		$("#oderdatab").attr("id", "oderdatab" + thisorderid);

		$("#orderidem").attr("id", "orderidem" + thisorderid);

		// add data

		$("#oderdatab" + thisorderid).text(
				toDate(ajaxDataContext.orderlist[keyi].confirmtime,
						"yyyy-MM-dd,hh:mm:ss"));

		$("#orderidem" + thisorderid).text(thisorderid);

		// apps

		apps = ajaxDataContext.orderlist[keyi].appids.split(",");

		$("#tableorder" + thisorderid).append(ordertableelement);

		// rename id

		$("#orderid-appidtr").attr("id",
				"orderid" + thisorderid + "appid" + apps[0] + "tr");

		$("#appnamea").attr("id",
				"orderid" + thisorderid + "appnamea" + apps[0]).attr("class",
				"appnamea" + apps[0]);

		$("#apptype").attr("id", "orderid" + thisorderid + "apptype" + apps[0])
				.attr("class", "apptype" + apps[0]);

		$("#appprice").attr("id",
				"orderid" + thisorderid + "appprice" + apps[0]).attr("class",
				"appprice" + apps[0]);

		$("#appoperation").attr("id",
				"orderid" + thisorderid + "appoperation" + apps[0]).attr(
				"class", "appoperation" + apps[0]);

		// add data
		if (ajaxDataContext.orderlist[keyi].orderstatus == 1) {
			$("#orderid" + thisorderid + "appid" + apps[0] + "tr").append(
					ordertablenotpaid);

			// rename id

			$("#orderstatus").attr("id", "orderstatus" + thisorderid).attr(
					"rowspan", apps.length);

			$("#ordertotalprice").attr("id", "ordertotalprice" + thisorderid)
					.attr("rowspan", apps.length);

			$("#orderpaytd").attr("id", "orderpaytd" + thisorderid).attr(
					"rowspan", apps.length);

			$("#orderpaya").attr("id", "orderpaya" + thisorderid);

			// add data

			$("#ordertotalprice" + thisorderid).text(
					ajaxDataContext.orderlist[keyi].totalprice);

			$("#orderpaya" + thisorderid).attr("href",
					"/ec/set_express_checkout.action?orderID=" + thisorderid);

		} else if (ajaxDataContext.orderlist[keyi].orderstatus == 2) {
			$("#orderid" + thisorderid + "appoperation" + apps[0]).html(
					"<a href=\"/productappinfo/productapp/query_power.action?appid="
							+ apps[0] + "\">Download Link</a>");

			$("#orderid" + thisorderid + "appid" + apps[0] + "tr").append(
					ordertablepaid);

			// rename id

			$("#orderstatus").attr("id", "orderstatus" + thisorderid).attr(
					"rowspan", apps.length);

			$("#ordertotalprice").attr("id", "ordertotalprice" + thisorderid)
					.attr("rowspan", apps.length);

			$("#orderpaytd").attr("id", "orderpaytd" + thisorderid).attr(
					"rowspan", apps.length);

			// add data

			$("#ordertotalprice" + thisorderid).text(
					ajaxDataContext.orderlist[keyi].totalprice);
		}

		var nameandprice = ajaxDataContext.applist[thisorderid + "apps"][apps[0]];
		if (nameandprice == null) {
			$("#orderid" + thisorderid + "appnamea" + apps[0]).html(
					"<font color=\"red\">app doesn't exsit</font>");

			$("#orderid" + thisorderid + "appnamea" + apps[0]).attr("href",
					"/ecommerce/index.jsp");
		} else {
			var nameandpriceArray = nameandprice.split(",");

			$("#orderid" + thisorderid + "appnamea" + apps[0]).text(
					nameandpriceArray[0]);
			$("#orderid" + thisorderid + "apptype" + apps[0]).text(
					appTypeArray[nameandpriceArray[3]]);

			$("#orderid" + thisorderid + "appprice" + apps[0]).text(
					nameandpriceArray[1]);
			$("#orderid" + thisorderid + "appnamea" + apps[0]).attr(
					"href",
					"/productappinfo/productapp/query_detail.action?scode="
							+ nameandpriceArray[2]);
		}
		for (var i = 1; i < apps.length; i++) {
			$("#tableorder" + thisorderid).append(ordertableelement);

			// rename id

			$("#orderid-appidtr").attr("id",
					"orderid" + thisorderid + "appid" + apps[i] + "tr");

			$("#appnamea").attr("id",
					"orderid" + thisorderid + "appnamea" + apps[i]).attr(
					"class", "appnamea" + apps[i]);

			$("#apptype").attr("id",
					"orderid" + thisorderid + "apptype" + apps[i]).attr(
					"class", "apptype" + apps[i]);

			$("#appprice").attr("id",
					"orderid" + thisorderid + "appprice" + apps[i]).attr(
					"class", "appprice" + apps[i]);

			$("#appoperation").attr("id",
					"orderid" + thisorderid + "appoperation" + apps[i]).attr(
					"class", "appoperation" + apps[i]);

			// add data
			if (ajaxDataContext.orderlist[keyi].orderstatus == 1) {

			} else if (ajaxDataContext.orderlist[keyi].orderstatus == 2) {
				$("#orderid" + thisorderid + "appoperation" + apps[i]).html(
						"<a href=\"/productappinfo/productapp/query_power.action?appid="
								+ apps[i] + "\">Download Link</a>");
			}
			var nameandprice = ajaxDataContext.applist[thisorderid + "apps"][apps[i]];
			if (nameandprice == null) {
				$("#orderid" + thisorderid + "appnamea" + apps[i]).html(
						"<font color=\"red\">app doesn't exsit</font>");
				$("#orderid" + thisorderid + "appnamea" + apps[0]).attr("href",
						"/ecommerce/index.jsp");
			} else {
				var nameandpriceArray = nameandprice.split(",");

				$("#orderid" + thisorderid + "appnamea" + apps[i]).text(
						nameandpriceArray[0]);
				$("#orderid" + thisorderid + "apptype" + apps[i]).text(
						appTypeArray[nameandpriceArray[3]]);
				$("#orderid" + thisorderid + "appprice" + apps[i]).text(
						nameandpriceArray[1]);
				$("#orderid" + thisorderid + "appnamea" + apps[i]).attr(
						"href",
						"/productappinfo/productapp/query_detail.action?scode="
								+ nameandpriceArray[2]);
			}

		}

	}
}

Date.prototype.format = function(format) {

	/*
	 * format="yyyy-MM-dd hh:mm:ss";
	 */
	var o = {
		"M+" : this.getMonth() + 1,
		"d+" : this.getDate(),
		"h+" : this.getHours(),
		"m+" : this.getMinutes(),
		"s+" : this.getSeconds(),
		"q+" : Math.floor((this.getMonth() + 3) / 3),
		"S" : this.getMilliseconds()
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;

};

function toDate(objDate, format) {
	var date = new Date();
	date.setTime(objDate.time);
	date.setHours(objDate.hours);
	date.setMinutes(objDate.minutes);
	date.setSeconds(objDate.seconds);
	return date.format(format);
}

function changeTwoDecimal_f(floatvar) {
	var f_x = parseFloat(floatvar);
	if (isNaN(f_x)) {
		alert('function:changeTwoDecimal->parameter error');
		return false;
	}
	f_x = Math.round(f_x * 100) / 100;
	var s_x = f_x.toString();
	var pos_decimal = s_x.indexOf('.');
	if (pos_decimal < 0) {
		pos_decimal = s_x.length;
		s_x += '.';
	}
	while (s_x.length <= pos_decimal + 2) {
		s_x += '0';
	}
	return s_x;
}