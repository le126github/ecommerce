<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Software Store - Order Symbol</title>
<meta name="keywords"
	content="symbol box,software store, free template, ecommerce, online shop" />
<meta name="description"
	content="symbol box,software store, free template, ecommerce, online shop " />

<link rel="stylesheet" type="text/css" href="/css/ecommerce/default.css" />

<script type="text/javascript" src="/js/ecommerce/jquery-1.7.2.min.js"></script>

<script type="text/javascript">
	$(document).ready(function() {
		$.get("/ecommerce/header_right.jsp", function(data) {
			$("#header_right").html(data);
		});
	});
	function sendSubmit() {
		if (checkValue()) {
			document.forms['ordersymbol_add'].submit();
		}
	}
	function checkValue() {

		return ispartnumber() && isdatasheetlink();
	}
	function onFocusTip(theObject) {
		if (theObject.id == "partnumber") {
			$("#partnumbertip").empty().append("<a>within ten characters</a>");
		} else if (theObject.id == "datasheetlink") {
			$("#datasheetlinktip").empty().append("");
		} else if (theObject.id == "fileurl") {
			$("#fileurltip").empty().append("");
		}
	}

	function loseFocusTip(theObject) {
		if (theObject.id == "partnumber") {
			if (theObject.value == "") {
				partnumberflag = false;
				$("#partnumbertip")
						.empty()
						.append(
								"<a><font color=\"red\">please put in partnumber</font></a>");
			} else if (theObject.value.length > 10) {
				partnumberflag = false;
				$("#partnumbertip")
						.empty()
						.append(
								"<a><font color=\"red\">partnumber is too long</font></a>");
			} else {
				partnumberflag = true;
				$("#partnumbertip").empty();
			}

		} else if (theObject.id == "datasheetlink" || theObject.id == "fileurl") {
			if (theObject.value == "") {
				datasheetlinkflag = false;
				fileurlflag = false;
				$("#datasheetlinktip")
						.empty()
						.append(
								"<a>please put in datasheetlink or uploaddatasheet</a>");
			} else {
				datasheetlinkflag = true;
				$("#datasheetlinktip").empty();

			}

		}
	}
	function ispartnumber() {
		var ret = $("#partnumber").val();
		if (ret == "") {
			return false;
		}
		return true;
	}
	function isdatasheetlink() {
		var ret = $("#datasheetlink").val();
		var ret1 = $("#fileurl").val();
		if ((ret == "") && (ret1 == "")) {
			return false;
		}
		return true;
	}
	function submits() {
		var textvar = document.getElementById("typeName").value;
		if (textvar.length == 1) {
			alert("请输入要搜索的物品名称!");
		} else {
			document.forms['nameSearch'].submit();
		}

	}
</script>
</head>
<body>

	<div id="wrap">
		<%@include file="/WEB-INF/views/ecommerce/header.jsp"%>

		<!-- END of templatemo_menubar -->

		<div id="templatemo_main">
			<!--  
        <div id="sidebar" class="float_l">
            <div class="sidebar_box"><span class="bottom"></span>
                <h3>Categories</h3>   
                <div class="content"> 
                    <ul class="sidebar_list" id="sidebar_list">
                       
                    </ul>
                </div>
            </div>
        </div>
        -->
			<form enctype="multipart/form-data" name="ordersymbol_add"
				id="ordersymboladd" method="post"
				action="/ordersymbol/ordersymbol/add_submit.action">
				<div id="content" class="float_l">
					<h2 style="margin-left: 10px;">Order Symbol</h2>
					<table style="margin-left: 50px;">
						<tr>
							<td colspan="2"><input type="text" name="model.orderid"
								style="display: none"> <input type="checkbox"
								name="model.ordertypes" value="1" checked="checked">Symbol
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<input type="checkbox" name="model.ordertypes" value="2">FootPrint
							</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
						</tr>

						<tr>
							<td>Part&nbsp;&nbsp;&nbsp;&nbsp;Number</td>
							<td width="350"><input type="text" name="model.partnumber"
								id="partnumber" onclick="onFocusTip(this)"
								onblur="loseFocusTip(this)"></td>
							<td id="partnumbertip" width="300"></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Datasheet&nbsp;Link</td>
							<td width="350"><input type="text"
								name="model.datasheetlink" id="datasheetlink"
								onclick="onFocusTip(this)" onblur="loseFocusTip(this)">&nbsp;&nbsp;&nbsp;&nbsp;or</td>
							<td id="datasheetlinktip" width="300"></td>
						</tr>
						<tr>
							<td width="63">Upload&nbsp;datasheet</td>
							<td><input type="file" name="model.file" id="fileurl"
								onclick="onFocusTip(this)" onblur="loseFocusTip(this)" /></td>
							<td id="fileurltip" width="300"></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>EAD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tool</td>
							<td><!--<s:bean
									name="com.linkage.system.components.system.ui.pagebean.ColumndesBean"
									id="column">
									<s:param name="#column.tableName" value="'T_USER_ORDER_INFO'" />
									<s:param name="#column.columnName" value="'EDATOOL'" />
									<s:param name="#column.selectedID" value="" />
									<s:select cssClass="int-a" name="model.edatool" id="edatool"
										list="#column.paramList" listKey="id" style="width: 150px"
										listValue="value" headerKey="" headerValue="please select"
										theme="simple" />
								</s:bean>--></td>
						</tr>
						<tr>
							<td><input name="ok" type="button" class="btn" value="OK"
								onclick="sendSubmit();" /></td>
							<td></td>
						</tr>
					</table>
				</div>
			</form>
			<div class="cleaner"></div>
		</div>
		<!-- END of templatemo_main -->
		<div class="cleaner"></div>
		<%@include file="/WEB-INF/views/ecommerce/footer.jsp"%>

	</div>
</body>
</html>