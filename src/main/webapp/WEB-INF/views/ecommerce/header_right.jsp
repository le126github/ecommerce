<%@ page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ page
	import="com.sgnbs.system.beans.AdminBean"%>

<%
	response.setHeader("Cache-Control", "no-cache"); //HTTP 1.1 
	response.setHeader("Pragma", "no-cache"); //HTTP 1.0 
	response.setDateHeader("Expires", 0); //prevents caching at the proxy server 
	AdminBean adminBean = (AdminBean) session.getAttribute("adminBean");
	StringBuffer jsp = new StringBuffer("<ul>");
	if (adminBean != null) {
		String useradmin = adminBean.getUsername();
		jsp.append("<li>");
		jsp.append("Welcome back:");
		jsp.append(useradmin);
		jsp.append("</li>");
		jsp.append("<li><a href=\"/myaccount\">My Account</a></li>");
		jsp.append("<li><a href=\"/myaccount?menuname=mycart\">My Cart</a></li>");
		jsp.append("<li><a href=\"/account/exist_submit\">Safety exit</a></li>");
	} else {
		jsp.append("<li>Welcome to SymbolBox,Please <a href=\"/login\">Login</a> or <a href=\"/register\">Register</a></li>");
	}
	jsp.append("</ul>");
	out.println(jsp.toString());
%>
