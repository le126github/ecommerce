package com.sgnbs.symbolbox.ecommerce.publicJsp.ui;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PublicJspAction {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String rootIndex(Model model) {
		return "ecommerce/index";
	}
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index(Model model) {
		return "ecommerce/index";
	}
	
	@RequestMapping(value = "/ordersymbol", method = RequestMethod.GET)
	public String ordersymbol(Model model) {
		return "ecommerce/ordersymbol";
	}
	
	@RequestMapping(value = "/designhouse", method = RequestMethod.GET)
	public String designhouse(Model model) {
		return "ecommerce/designhouse";
	}
	
	@RequestMapping(value = "/support", method = RequestMethod.GET)
	public String support(Model model) {
		return "ecommerce/support";
	}
	
	@RequestMapping(value = "/aboutus", method = RequestMethod.GET)
	public String aboutus(Model model) {
		return "ecommerce/aboutus";
	}
	
	
	@RequestMapping(value = "/myaccount", method = RequestMethod.GET)
	public String myaccount(Model model) {
		return "ecommerce/myaccount";
	}
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Model model) {
		return "ecommerce/login";
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String register(Model model) {
		return "ecommerce/register";
	}
	
	@RequestMapping(value = "/error/404", method = RequestMethod.GET)
	public String error404(Model model) {
		return "ecommerce/error/error404";
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String other(Model model) {
		return "test";
	}
}
