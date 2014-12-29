/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.order.bo.intf;

import java.util.List;

import com.linkage.system.components.system.ui.pagebean.AdminBean;
import com.linkage.system.utils.exception.DAOException;
import com.linkage.system.utils.exception.ServiceException;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.po.productapp;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>OrderBO.java<br>
 * <b>创建时间：</b>2014-08-27 09:48:00<br>
 * <p>
 * <b>OrderBO访问接口.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface OrderBO {

    /**
     * 返回处理的结果信息，可能是成功信息、失败描述信息等.
     * 
     * @return message
     */
    String getMessage();

    /**
     * <p>
     * <b>获取所有数据库对象，按照数据库默认的排序方式.</b><br>
     * </p>
     * 
     * @return Order列表
     * @throws ServiceException
     *             服务层异常
     */
    List<Order> getAll() throws ServiceException;

    /**
     * <p>
     * <b>根据主键获取对应数据库对象.</b><br>
     * </p>
     * 
     * @param orderid
     *            column.remarks
     * @return Order对象
     * @throws ServiceException
     *             服务层异常
     */
    Order getOrder(java.lang.Integer orderid) throws ServiceException;

    /**
     * <p>
     * <b>新增校验.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean addValid(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>新增指定对象到数据库.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean addSubmit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>修改准备.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean modInit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>修改校验.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean modValid(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>对指定对象进行修改.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean modSubmit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>查询指定对象详细信息初始化.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean queryInit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>删除初始化.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean deleteInit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>删除指定对象.</b><br>
     * </p>
     * 
     * @param order
     *            Order对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean deleteSubmit(Order order, AdminBean admin) throws ServiceException;

    /**
     * 订单信息处理
     * 
     * @throws DAOException
     */
    List<productapp> OrderInfo(Order order) throws DAOException;
}
