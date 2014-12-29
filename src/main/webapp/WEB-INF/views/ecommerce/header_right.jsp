<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ page
	import="com.linkage.system.components.system.ui.pagebean.AdminBean"%>
<%@ page import="com.sgnbs.symbolbox.util.security.CookieUtil"%>

<%
	response.setHeader("Cache-Control", "no-cache"); //HTTP 1.1 
	response.setHeader("Pragma", "no-cache"); //HTTP 1.0 
	response.setDateHeader("Expires", 0); //prevents caching at the proxy server 
	CookieUtil.cookielogin(request);
	AdminBean adminBean = (AdminBean) session.getValue("ControlBean");
	StringBuffer jsp = new StringBuffer("<ul>");
	if (adminBean != null) {
		String useradmin = adminBean.getFullName();
		jsp.append("<li>");
		jsp.append("Welcome back:");
		jsp.append(useradmin);
		jsp.append("</li>");
		jsp.append("<li><a href=\"/ecommerce/myaccount.jsp\">My Account</a></li>");
		jsp.append("<li><a href=\"/ecommerce/myaccount.jsp?menuname=mycart\">My Cart</a></li>");
		jsp.append("<li><a href=\"/account/exist_submit.action\">Safety exit</a></li>");
	} else {
		jsp.append("<li>Welcome to SymbolBox,Please <a href=\"/ecommerce/login.jsp\">Login</a> or <a href=\"/ecommerce/register.jsp\">Register</a></li>");
	}
	jsp.append("</ul>");
	out.println(jsp.toString());
%>
