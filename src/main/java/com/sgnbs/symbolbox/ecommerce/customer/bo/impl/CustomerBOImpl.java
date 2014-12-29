/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.customer.bo.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import com.linkage.system.components.system.ui.pagebean.AdminBean;
import com.linkage.system.utils.exception.DAOException;
import com.linkage.system.utils.exception.ServiceException;
import com.linkage.system.utils.password.Password;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.dao.intf.productappDAO;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.po.productapp;
import com.sgnbs.symbolbox.ecommerce.cart.dao.intf.CartDAO;
import com.sgnbs.symbolbox.ecommerce.cart.po.Cart;
import com.sgnbs.symbolbox.ecommerce.cart.po.CartPK;
import com.sgnbs.symbolbox.ecommerce.customer.bo.intf.CustomerBO;
import com.sgnbs.symbolbox.ecommerce.customer.dao.intf.CustomerDAO;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;
import com.sgnbs.symbolbox.ecommerce.order.dao.intf.OrderDAO;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;
import com.sgnbs.symbolbox.util.RandomUtil;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>OnlineShop<br>
 * <b>文件：</b>CustomerBOImpl.java<br>
 * <b>创建时间：</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerBOImpl访问实现.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CustomerBOImpl implements CustomerBO {

    private String message;

    private CustomerDAO customerDAO;

    private OrderDAO orderDAO;

    private CartDAO cartDAO;

    private productappDAO productappDAO;

    /**
     * @return the message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message
     *            the message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * @return the customerDAO
     */
    public CustomerDAO getCustomerDAO() {
        return customerDAO;
    }

    /**
     * @param customerDAO
     *            the customerDAO to set
     */
    public void setCustomerDAO(CustomerDAO customerDAO) {
        this.customerDAO = customerDAO;
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.onlineshop.customer.customer.bo.intf.CustomerBO#getAll
     * ()
     */
    @Override
    public List<Customer> getAll() throws ServiceException {
        try {
            return customerDAO.getAll();
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.onlineshop.customer.customer.bo.intf.CustomerBO#
     * getCustomer(java.lang.Integer)
     */
    @Override
    public Customer getCustomer(java.lang.Integer userid)
            throws ServiceException {
        try {
            return customerDAO.getCustomer(userid);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.onlineshop.customer.customer.bo.intf.CustomerBO#addSubmit
     * (Customer, AdminBean)
     */
    @Override
    public boolean addSubmit(Customer customer, AdminBean adminObject)
            throws ServiceException {
        try {
            List<Customer> tempCustomers = getCustomersbyUserName(customer
                    .getUsername());

            if (tempCustomers.size() != 0) {
                setMessage("username");
                return false;
            }

            String randomID = null;

            Customer tempCustomer = null;

            do {
                randomID = RandomUtil.getRandomNumber(8);

                tempCustomer = getCustomer(new Integer(randomID));

            } while (tempCustomer != null);

            customer.setUserid(new Integer(randomID));

            customer.setStatus(1);

            customer.setPasswordtype(1);

            customer.setCreatetime(new Date());

            customerDAO.saveCustomer(customer);

        } catch (Exception e) {
            this.setMessage("error");
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("success");
        return true;
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.onlineshop.customer.customer.bo.intf.CustomerBO#modSubmit
     * (Customer, AdminBean)
     */
    @Override
    public boolean modSubmit(Customer customer, AdminBean adminObject)
            throws ServiceException {
        try {
            Customer tempCustomer = getCustomer(customer.getUserid());

            if (tempCustomer == null) {
                setMessage("nocustomer");
                return false;
            }

            // todo 添加其他校验代码

            customerDAO.updateCustomer(customer);

        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("success");
        return true;
    }

    @Override
    public List<Customer> getCustomersbyUserName(String username)
            throws ServiceException {
        try {
            return customerDAO.getCustomersbyUserName(username);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    @Override
    public boolean loginValid(Customer customer) throws ServiceException {
        // TODO Auto-generated method stub
        try {
            String strPassword = customer.getPassword();
            List<Customer> tempCustomers = this.getCustomersbyUserName(customer
                    .getUsername());
            if (tempCustomers.size() == 0) {
                this.setMessage("nocustomer");
                return false;
            }
            if (tempCustomers.get(0).getStatus().intValue() != 1) {
                this.setMessage("notnormalstatus");
                return false;
            }
            if (Password.checkPassword(strPassword, tempCustomers.get(0)
                    .getPassword(), 0)) {
                this.setMessage("success");
                return true;
            } else {
                this.setMessage("wrongpassword");
                return false;
            }
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    @Override
    public List<Order> getOrdersByCustomerId(Integer userid)
            throws ServiceException {
        try {
            return orderDAO.getOrderByCustomerId(userid);
        } catch (DAOException e) {
            throw new ServiceException(e, this.getClass());
        }

    }

    public OrderDAO getOrderDAO() {
        return orderDAO;
    }

    public void setOrderDAO(OrderDAO orderDAO) {
        this.orderDAO = orderDAO;
    }

    public CartDAO getCartDAO() {
        return cartDAO;
    }

    public void setCartDAO(CartDAO cartDAO) {
        this.cartDAO = cartDAO;
    }

    @Override
    public boolean addAppToCart(Integer userid, Integer tempappid)
            throws ServiceException {
        try {
            Cart tempCart = null;
            CartPK tempCartPK = new CartPK();

            tempCartPK.setAppid(tempappid);
            tempCartPK.setUserid(userid);

            tempCart = cartDAO.getCart(userid, tempappid);

            if (tempCart != null) {
                this.setMessage("alreadyincart");
                return false;
            }

            tempCart = new Cart();
            tempCart.setCompID(tempCartPK);
            tempCart.setConfirmtime(new Date());
            tempCart.setQuantity(1);
            tempCart.setScode("0");

            cartDAO.saveCart(tempCart);
            this.setMessage("success");
            return true;
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }

    }

    @Override
    public boolean removeAppFromCart(Integer userid, Integer tempappid)
            throws ServiceException {
        try {
            Cart tempCart = null;
            CartPK tempCartPK = new CartPK();

            tempCartPK.setAppid(tempappid);
            tempCartPK.setUserid(userid);

            tempCart = cartDAO.getCart(userid, tempappid);

            if (tempCart == null) {
                this.setMessage("notexist");
                return false;
            }

            cartDAO.deleteCart(tempCart);
            this.setMessage("success");
            return true;
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    @Override
    public List<productapp> getAppsFromCartByCustomerID(Integer userid)
            throws ServiceException {
        try {
            List<Cart> tempCartList = cartDAO.getAllByUserId(userid);

            Iterator<Cart> iterator = tempCartList.iterator();

            List<productapp> tempProductapp = new ArrayList<productapp>();

            Cart tempCart = null;
            while (iterator.hasNext()) {
                tempCart = iterator.next();
                tempProductapp.add(productappDAO.getproductapp(tempCart
                        .getCompID().getAppid()));
            }
            return tempProductapp;
        } catch (DAOException e) {
            throw new ServiceException(e, this.getClass());
        }

    }

    @Override
    public List<productapp> getAppListByAppidsStr(String tempAppids)
            throws ServiceException {
        try {
            String[] apps = tempAppids.split(",");

            List<productapp> tempList = new ArrayList<productapp>();

            for (String i : apps) {
                tempList.add(productappDAO.getproductapp(new Integer(i)));
            }
            return tempList;

        } catch (DAOException e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    public productappDAO getProductappDAO() {
        return productappDAO;
    }

    public void setProductappDAO(productappDAO productappDAO) {
        this.productappDAO = productappDAO;
    }

}
