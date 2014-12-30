package com.sgnbs.symbolbox.ecommerce.publicJsp.ui;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PublicJspAction {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(Model model) {
		return "ecommerce/index";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(Model model) {
		return "ecommerce/login";
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String other(Model model) {
		return "test";
	}
}
