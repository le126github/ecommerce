/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.customer.dao.intf;

import java.util.List;

import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>OnlineShop<br>
 * <b>文件：</b>CustomerDAO.java<br>
 * <b>创建时间：</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerDAO访问接口.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface CustomerDAO {

    /**
     * <p>
     * <b>获取所有数据库对象，按照数据库默认的排序方式.</b><br>
     * </p>
     * 
     * @return Customer列表
     * @throws DAOException
     *             数据访问层异常
     */
    List<Customer> getAll() throws DAOException;

    /**
     * <p>
     * <b>根据主键获取对应数据库对象.</b><br>
     * </p>
     * 
     * @param userid
     *            column.remarks
     * @return Customer对象
     * @throws DAOException
     *             数据访问层异常
     */
    Customer getCustomer(java.lang.Integer userid) throws DAOException;

    /**
     * <p>
     * <b>新增指定对象到数据库.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer对象
     * @throws DAOException
     *             数据访问层异常
     */
    void saveCustomer(Customer customer) throws DAOException;

    /**
     * <p>
     * <b>对指定对象进行修改.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer对象
     * @throws DAOException
     *             数据访问层异常
     */
    void updateCustomer(Customer customer) throws DAOException;

    /**
     * <p>
     * <b>删除指定对象.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer对象
     * @throws DAOException
     *             数据访问层异常
     */
    void deleteCustomer(Customer customer) throws DAOException;

    List<Customer> getCustomersbyUserName(String username) throws DAOException;
}
