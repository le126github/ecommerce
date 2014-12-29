/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.order.dao.intf;

import java.util.List;

import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>OrderDAO.java<br>
 * <b>创建时间：</b>2014-08-27 09:48:00<br>
 * <p>
 * <b>OrderDAO访问接口.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface OrderDAO {

    /**
     * <p>
     * <b>获取所有数据库对象，按照数据库默认的排序方式.</b><br>
     * </p>
     * 
     * @return Order列表
     * @throws DAOException
     *             数据访问层异常
     */
    List<Order> getAll() throws DAOException;

    /**
     * <p>
     * <b>根据主键获取对应数据库对象.</b><br>
     * </p>
     * 
     * @param orderid
     *            column.remarks
     * @return Order对象
     * @throws DAOException
     *             数据访问层异常
     */
    Order getOrder(java.lang.Integer orderid) throws DAOException;

    /**
     * <p>
     * <b>新增指定对象到数据库.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @throws DAOException
     *             数据访问层异常
     */
    void saveOrder(Order order) throws DAOException;

    /**
     * <p>
     * <b>对指定对象进行修改.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @throws DAOException
     *             数据访问层异常
     */
    void updateOrder(Order order) throws DAOException;

    /**
     * <p>
     * <b>删除指定对象.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @throws DAOException
     *             数据访问层异常
     */
    void deleteOrder(Order order) throws DAOException;

    List<Order> getOrderByCustomerId(Integer userid) throws DAOException;

    public List query(String hql) throws DAOException;
}
