/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.customer.ui;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sgnbs.symbolbox.ecommerce.customer.bo.intf.CustomerBO;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>OnlineShop<br>
 * <b>文件：</b>CustomerAction.java<br>
 * <b>创建时间：</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerAction.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
@Controller
public class CustomerAction{

    private CustomerForm customerForm = null;

    @Autowired
    private CustomerBO customerBO;


    @RequestMapping(value="/account/login_submit")
    public String loginSubmit() throws Exception {

        Map<String, String> map = new HashMap<String, String>();

        JSONObject jo = null;

        String strAdmin = customerForm.getUsername();
        String strPassword = customerForm.getPassword();
        String strVerifyCode = customerForm.getVerifyCode();

        if (strAdmin == null || strAdmin.equals("") || strPassword == null
                || strPassword.equals("") || strVerifyCode == null
                || strVerifyCode.equals("")) {
            map.put("error", "nofulldata");
            jo = JSONObject.fromObject(map);
            customerForm.setResult(jo.toString());
            return ERROR;
        }

        if (sessionBean.getVerifyCode() == null
                || customerForm.getVerifyCode() == null
                || !sessionBean.getVerifyCode().trim()
                        .equals(customerForm.getVerifyCode())) {
            map.put("error", "verifyCode");
            jo = JSONObject.fromObject(map);
            customerForm.setResult(jo.toString());
            return ERROR;
        }

        Customer tempCustomer = new Customer();
        tempCustomer.setUsername(customerForm.getUsername());
        tempCustomer.setPassword(customerForm.getPassword());

        try {
            if (customerBO.loginValid(tempCustomer) == true) {
                Customer customer = customerBO.getCustomersbyUserName(
                        tempCustomer.getUsername()).get(0);

                this.adminObject = new AdminBean();

                this.adminObject.setAdminName(customer.getUsername());

                this.adminObject.setFullName(customer.getFullname());

                sessionBean.setAdminObject(adminObject);
                sessionBean.setControlBean(adminObject);

                String nameandpassword = PasswordDES.encode(tempCustomer
                        .getUsername() + "," + tempCustomer.getPassword());

                CookieUtil.writeCookie(ServletActionContext.getResponse(),
                        nameandpassword);

                map.put("success", "success");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return SUCCESS;

            } else {

                map.put("error", customerBO.getMessage());
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;

            }
        } catch (ServiceException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return ERROR;
    }

    public String existsubmit() throws UIException {
        try {
            this.getSession();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (!isSessionFlag()) {
                map.put("error", "out_time");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());

            if (tempcustomers.size() == 0) {
                map.put("error", "nocustomer");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            CookieUtil.deleteCookie(ServletActionContext.getRequest(),
                    ServletActionContext.getResponse());

            sessionBean.setAdminObject(null);
            sessionBean.setControlBean(null);

            return SUCCESS;

        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    public String registerSubmit() throws UIException {
        try {
            this.getSession();

            // 处理用于日志记录的相关信息，设置adminObject相关属性值

            // 新建value bean
            Customer customer = new Customer();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (isSessionFlag()) {
                map.put("error", "alreadylogin");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(customer, customerForm);

            if (!sessionBean.getVerifyCode().equals(
                    customerForm.getVerifyCode())) {
                map.put("error", "verifyCode");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return SUCCESS;
            }

            if (customerBO.addSubmit(customer, adminObject)) {
                // 设置处理结果信息，用于界面展示
                map.put("success", customerBO.getMessage());
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return SUCCESS;
            } else {
                map.put("error", customerBO.getMessage());
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return SUCCESS;
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    public String modSubmit() throws UIException {
        try {
            this.getSession();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (!isSessionFlag()) {
                map.put("error", "out_time");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());

            if (tempcustomers.size() == 0) {
                map.put("error", "nocustomer");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            Customer customer = tempcustomers.get(0);

            customer.setFullname(customerForm.getFullname());
            customerForm.setFullname(null);

            customer.setEmail(customerForm.getEmail());
            customerForm.setEmail(null);

            customer.setMobile(customerForm.getMobile());
            customerForm.setMobile(null);

            customer.setFax(customerForm.getFax());
            customerForm.setFax(null);

            customer.setCountry(customerForm.getCountry());
            customerForm.setCountry(null);

            customer.setCity(customerForm.getCity());
            customerForm.setCity(null);

            customer.setAddress(customerForm.getAddress());
            customerForm.setAddress(null);

            customer.setUpdatetime(new Date());

            if (customerBO.modSubmit(customer, adminObject)) {
                map.put("succes", "success");

                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return SUCCESS;
            } else {
                map.put("error", customerBO.getMessage());

                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    public String passwordmodSubmit() throws UIException {
        try {
            this.getSession();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (!isSessionFlag()) {
                map.put("error", "out_time");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());

            if (tempcustomers.size() == 0) {
                map.put("error", "nocustomer");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            Customer customer = tempcustomers.get(0);

            if (!customer.getPassword().equals(customerForm.getPassword())) {
                map.put("error", "oldpasswordwrong");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            customer.setPassword(customerForm.getNewpassword());
            customerForm.setPassword(null);
            customerForm.setNewpassword(null);

            customer.setModpwdtime(new Date());

            if (customerBO.modSubmit(customer, adminObject)) {
                map.put("success", "success");

                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                sessionBean.setAdminObject(null);
                sessionBean.setControlBean(null);
                return SUCCESS;
            } else {
                map.put("error", customerBO.getMessage());

                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    public String menuQuery() throws UIException {
        try {
            this.getSession();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (!isSessionFlag()) {
                map.put("error", "out_time");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());

            if (tempcustomers.size() == 0) {
                map.put("error", "no_customer");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            Customer customer = tempcustomers.get(0);

            if (customerForm.getMenutype().equals("Account_Infomation")) {

                map.put("fullnametxt", customer.getFullname());
                map.put("emailtxt", customer.getEmail());
                map.put("mobiletxt", customer.getMobile());
                map.put("faxtxt", customer.getFax());
                map.put("countrytxt", customer.getCountry());
                map.put("citytxt", customer.getCity());
                map.put("adresstxt", customer.getAddress());

                customerForm.setMenutype(null);
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return SUCCESS;

            } else if (customerForm.getMenutype().equals("My_Order")) {

                List<Order> orderList = customerBO
                        .getOrdersByCustomerId(customer.getUserid());
                Map<String, Object> listMap = new HashMap<String, Object>();
                Map<String, Object> applistMap = new HashMap<String, Object>();

                listMap.put("orderlist", orderList);

                for (Order i : orderList) {
                    List<productapp> tempproductapplist = customerBO
                            .getAppListByAppidsStr(i.getAppids());
                    Map<String, Object> applistListMap = new HashMap<String, Object>();

                    for (productapp j : tempproductapplist) {
                        if (j != null) {
                            applistListMap.put(j.getAppid().toString(),
                                    j.getName() + "," + j.getPrice().toString()
                                            + "," + j.getScode() + ","
                                            + j.getApptype().toString());
                        }
                    }

                    applistMap.put(i.getOrderid().toString() + "apps",
                            applistListMap);
                }

                listMap.put("applist", applistMap);

                customerForm.setMenutype(null);
                jo = JSONObject.fromObject(listMap);
                customerForm.setResult(jo.toString());
                return SUCCESS;

            }

        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
        return ERROR;
    }

    public String getbackpasswordSubmit() throws UIException {
        try {
            this.getSession();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (isSessionFlag()) {
                map.put("error", "alreadylogin");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(customerForm.getUsername());

            if (tempcustomers.size() == 0) {
                map.put("error", "no_customer");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }
            Customer customer = tempcustomers.get(0);

            if (!customer.getEmail().equals(customerForm.getEmail())) {
                map.put("error", "notmatch");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }
            try {
                MailSenderInfo mailInfo = new MailSenderInfo();
                mailInfo.setMailServerHost("192.168.11.107");
                mailInfo.setMailServerPort("25");
                mailInfo.setValidate(true);
                mailInfo.setUserName("123");
                mailInfo.setPassword("111111a");
                mailInfo.setFromAddress("123@127.0.0.1");
                mailInfo.setToAddress("ledaer@126.com");
                mailInfo.setSubject("SymbolBox get back pw");
                mailInfo.setContent("the url,no reply");

                SimpleMailSender sms = new SimpleMailSender();
                sms.sendTextMail(mailInfo);
            } catch (Exception e) {
                e.printStackTrace();
            }

            map.put("success", "success");
            jo = JSONObject.fromObject(map);
            customerForm.setResult(jo.toString());
            return SUCCESS;
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    public String addcartSubmit() throws UIException {
        try {
            this.getSession();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (!isSessionFlag()) {
                map.put("error", "out_time");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());

            if (tempcustomers.size() == 0) {
                map.put("error", "no_customer");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            Customer customer = tempcustomers.get(0);

            Integer tempappid = customerForm.getAddtocartappid();

            if (tempappid == null) {
                map.put("error", "noappid");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            if (!customerBO.addAppToCart(customer.getUserid(), tempappid)) {
                map.put("error", customerBO.getMessage());
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            map.put("success", "success");
            jo = JSONObject.fromObject(map);
            customerForm.setResult(jo.toString());
            return SUCCESS;
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    public String removecartSubmit() throws UIException {
        try {
            this.getSession();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (!isSessionFlag()) {
                map.put("error", "out_time");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());

            if (tempcustomers.size() == 0) {
                map.put("error", "no_customer");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            Customer customer = tempcustomers.get(0);

            Integer tempappid = customerForm.getRemovefromcartappid();

            if (tempappid == null) {
                map.put("error", "noappid");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            if (!customerBO.removeAppFromCart(customer.getUserid(), tempappid)) {
                map.put("error", customerBO.getMessage());
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            map.put("success", "success");
            jo = JSONObject.fromObject(map);
            customerForm.setResult(jo.toString());
            return SUCCESS;
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    public String cartlistQuery() throws UIException {
        try {
            this.getSession();

            Map<String, String> map = new HashMap<String, String>();

            JSONObject jo = null;

            if (!isSessionFlag()) {
                map.put("error", "out_time");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());

            if (tempcustomers.size() == 0) {
                map.put("error", "no_customer");
                jo = JSONObject.fromObject(map);
                customerForm.setResult(jo.toString());
                return ERROR;
            }

            Customer customer = tempcustomers.get(0);

            List<productapp> tempAppList = customerBO
                    .getAppsFromCartByCustomerID(customer.getUserid());

            Map<String, List<productapp>> mapList = new HashMap<String, List<productapp>>();

            mapList.put("success", tempAppList);
            jo = JSONObject.fromObject(mapList);
            customerForm.setResult(jo.toString());
            return SUCCESS;
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    public String orderMake() throws UIException {
        try {
            this.getSession();

            if (!isSessionFlag()) {
                return TIMEOUT;
            }

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());

            if (tempcustomers.size() == 0) {
                return TIMEOUT;
            }

            String tempAppids = customerForm.getAppids();

            if (tempAppids == null || tempAppids.equals("")) {
                return ERROR;
            }

            List<productapp> tempAppList = customerBO
                    .getAppListByAppidsStr(tempAppids);

            if (tempAppList.size() == 0) {
                return ERROR;
            }

            customerForm.setAppList(tempAppList);

            return setProcessResult(customerForm, "info",
                    customerBO.getMessage(), BACKINPUT, SUCCESS);
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

}
