/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.customer.bo.intf;

import java.util.List;

import com.linkage.system.components.system.ui.pagebean.AdminBean;
import com.linkage.system.utils.exception.ServiceException;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.po.productapp;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>OnlineShop<br>
 * <b>文件：</b>CustomerBO.java<br>
 * <b>创建时间：</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerBO访问接口.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface CustomerBO {

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
     * @return Customer列表
     * @throws ServiceException
     *             服务层异常
     */
    List<Customer> getAll() throws ServiceException;

    /**
     * <p>
     * <b>根据主键获取对应数据库对象.</b><br>
     * </p>
     * 
     * @param userid
     *            column.remarks
     * @return Customer对象
     * @throws ServiceException
     *             服务层异常
     */
    Customer getCustomer(java.lang.Integer userid) throws ServiceException;

    List<Customer> getCustomersbyUserName(java.lang.String username)
            throws ServiceException;

    /**
     * <p>
     * <b>新增指定对象到数据库.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean addSubmit(Customer customer, AdminBean adminObject)
            throws ServiceException;

    /**
     * <p>
     * <b>对指定对象进行修改.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer对象
     * @param admin
     *            AdminBean对象
     * @return boolean 成功/失败
     * @throws ServiceException
     *             服务层异常
     */
    boolean modSubmit(Customer customer, AdminBean adminObject)
            throws ServiceException;

    boolean loginValid(Customer customer) throws ServiceException;

    List<Order> getOrdersByCustomerId(Integer userid) throws ServiceException;

    boolean addAppToCart(Integer userid, Integer tempappid)
            throws ServiceException;

    boolean removeAppFromCart(Integer userid, Integer tempappid)
            throws ServiceException;

    List<productapp> getAppsFromCartByCustomerID(Integer userid)
            throws ServiceException;

    List<productapp> getAppListByAppidsStr(String tempAppids)
            throws ServiceException;

}
