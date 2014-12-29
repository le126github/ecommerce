/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.customer.dao.impl;

import java.util.List;

import com.linkage.system.extend.hibernate.HibernateBaseDAOImpl;
import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.customer.dao.intf.CustomerDAO;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>OnlineShop<br>
 * <b>文件：</b>CustomerDAOImpl.java<br>
 * <b>创建时间：</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerDAOImpl访问实现.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CustomerDAOImpl extends HibernateBaseDAOImpl implements
        CustomerDAO {

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.onlineshop.customer.customer.dao.intf.CustomerDAO
     * #getAll()
     */
    @Override
    @SuppressWarnings("unchecked")
    public List<Customer> getAll() throws DAOException {
        return this.getAll(Customer.class);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.onlineshop.customer.customer.dao.intf.CustomerDAO
     * #getCustomer(java.lang.Integer)
     */
    @Override
    public Customer getCustomer(java.lang.Integer userid) throws DAOException {
        return (Customer) this.getByID(Customer.class, userid);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.onlineshop.customer.customer.dao.intf.CustomerDAO
     * #saveCustomer(Customer)
     */
    @Override
    public void saveCustomer(Customer customer) throws DAOException {
        this.save(customer);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.onlineshop.customer.customer.dao.intf.CustomerDAO
     * #updateCustomer(Customer)
     */
    @Override
    public void updateCustomer(Customer customer) throws DAOException {
        this.merge(customer);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.onlineshop.customer.customer.dao.intf.CustomerDAO
     * #deleteCustomer(Customer)
     */
    @Override
    public void deleteCustomer(Customer customer) throws DAOException {
        this.delete(customer);
    }

    @Override
    public List<Customer> getCustomersbyUserName(String username)
            throws DAOException {
        String hql = "from Customer Where username=?";

        return this.query(hql, username);
    }
}
