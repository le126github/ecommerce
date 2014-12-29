/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.cart.dao.impl;

import java.util.List;

import com.linkage.system.extend.hibernate.HibernateBaseDAOImpl;
import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.cart.dao.intf.CartDAO;
import com.sgnbs.symbolbox.ecommerce.cart.po.Cart;
import com.sgnbs.symbolbox.ecommerce.cart.po.CartPK;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>CartDAOImpl.java<br>
 * <b>创建时间：</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartDAOImpl访问实现.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CartDAOImpl extends HibernateBaseDAOImpl implements CartDAO {

    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.dao.intf.CartDAO#getAll()
     */
    @Override
    @SuppressWarnings("unchecked")
    public List<Cart> getAll() throws DAOException {
        return this.getAll(Cart.class);
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.dao.intf.CartDAO#getCart(
     * java.lang.Integer, java.lang.Integer)
     */
    @Override
    public Cart getCart(java.lang.Integer userid, java.lang.Integer appid)
            throws DAOException {
        try {
            CartPK pk = new CartPK(userid, appid);
            Cart cart = (Cart) this.getByID(Cart.class, pk);
            return cart;
        } catch (Exception e) {
            throw new DAOException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.cart.cart.dao.intf.CartDAO#saveCart(Cart)
     */
    @Override
    public void saveCart(Cart cart) throws DAOException {
        this.save(cart);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.cart.cart.dao.intf.CartDAO#updateCart(Cart)
     */
    @Override
    public void updateCart(Cart cart) throws DAOException {
        this.merge(cart);
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.cart.cart.dao.intf.CartDAO#deleteCart(Cart)
     */
    @Override
    public void deleteCart(Cart cart) throws DAOException {
        this.delete(cart);
    }

    @Override
    public List<Cart> getAllByUserId(Integer userid) throws DAOException {
        String hql = "from Cart Where userid=?";

        return this.query(hql, userid);
    }
}
