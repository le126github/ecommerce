package com.sgnbs.symbolbox.ecommerce.publicJsp.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PublicJspAction {
	@RequestMapping(value = "/login")
	public String login() {
		return "ecommerce/login";
	}
}
