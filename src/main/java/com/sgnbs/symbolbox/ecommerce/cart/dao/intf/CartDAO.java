/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.cart.dao.intf;

import java.util.List;

import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.cart.po.Cart;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>CartDAO.java<br>
 * <b>创建时间：</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartDAO访问接口.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface CartDAO {

    /**
     * <p>
     * <b>获取所有数据库对象，按照数据库默认的排序方式.</b><br>
     * </p>
     * 
     * @return Cart列表
     * @throws DAOException
     *             数据访问层异常
     */
    List<Cart> getAll() throws DAOException;

    /**
     * <p>
     * <b>根据主键获取对应数据库对象.</b><br>
     * </p>
     * 
     * @param userid
     *            column.remarks
     * @param appid
     *            column.remarks
     * @return Cart对象
     * @throws DAOException
     *             数据访问层异常
     */
    Cart getCart(java.lang.Integer userid, java.lang.Integer appid)
            throws DAOException;

    /**
     * <p>
     * <b>新增指定对象到数据库.</b><br>
     * </p>
     * 
     * @param cart
     *            Cart对象
     * @throws DAOException
     *             数据访问层异常
     */
    void saveCart(Cart cart) throws DAOException;

    /**
     * <p>
     * <b>对指定对象进行修改.</b><br>
     * </p>
     * 
     * @param cart
     *            Cart对象
     * @throws DAOException
     *             数据访问层异常
     */
    void updateCart(Cart cart) throws DAOException;

    /**
     * <p>
     * <b>删除指定对象.</b><br>
     * </p>
     * 
     * @param cart
     *            Cart对象
     * @throws DAOException
     *             数据访问层异常
     */
    void deleteCart(Cart cart) throws DAOException;

    List<Cart> getAllByUserId(Integer userid) throws DAOException;
}
