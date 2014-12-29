/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.order.dao.impl;

import java.util.List;

import com.linkage.system.extend.hibernate.HibernateBaseDAOImpl;
import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.order.dao.intf.OrderDAO;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>OrderDAOImpl.java<br>
 * <b>创建时间：</b>2014-08-27 09:48:00<br>
 * <p>
 * <b>OrderDAOImpl访问实现.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class OrderDAOImpl extends HibernateBaseDAOImpl implements OrderDAO {

    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.order.order.dao.intf.OrderDAO#getAll()
     */
    @Override
    @SuppressWarnings("unchecked")
    public List<Order> getAll() throws DAOException {
        return this.getAll(Order.class);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.dao.intf.OrderDAO#getOrder(
     * java.lang.Integer)
     */
    @Override
    public Order getOrder(java.lang.Integer orderid) throws DAOException {
        return (Order) this.getByID(Order.class, orderid);
    }

    public List query(String hql) throws DAOException {
        return super.query(hql);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.dao.intf.OrderDAO#saveOrder
     * (Order)
     */
    @Override
    public void saveOrder(Order order) throws DAOException {
        this.save(order);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.dao.intf.OrderDAO#updateOrder
     * (Order)
     */
    @Override
    public void updateOrder(Order order) throws DAOException {
        this.merge(order);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.dao.intf.OrderDAO#deleteOrder
     * (Order)
     */
    @Override
    public void deleteOrder(Order order) throws DAOException {
        this.delete(order);
    }

    @Override
    public List<Order> getOrderByCustomerId(Integer userid) throws DAOException {
        String hql = "from Order where userid = ?";
        return this.query(hql, userid);
    }
}
