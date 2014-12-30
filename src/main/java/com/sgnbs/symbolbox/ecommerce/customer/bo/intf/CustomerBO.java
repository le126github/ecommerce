/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.customer.bo.intf;

import java.util.List;

import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;

public interface CustomerBO {

    String getMessage();

    List<Customer> getAll() throws Exception;

    Customer getCustomer(java.lang.Integer userid) throws Exception;

    List<Customer> getCustomersbyUserName(java.lang.String username)
            throws Exception;

    boolean addSubmit(Customer customer)
            throws Exception;

    boolean modSubmit(Customer customer)
            throws Exception;

    boolean loginValid(Customer customer) throws Exception;
//
//    List<Order> getOrdersByCustomerId(Integer userid) throws Exception;
//
//    boolean addAppToCart(Integer userid, Integer tempappid)
//            throws Exception;
//
//    boolean removeAppFromCart(Integer userid, Integer tempappid)
//            throws Exception;
//
//    List<productapp> getAppsFromCartByCustomerID(Integer userid)
//            throws Exception;
//
//    List<productapp> getAppListByAppidsStr(String tempAppids)
//            throws Exception;

}
