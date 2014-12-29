/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.cart.bo.impl;

import java.util.List;

import com.sgnbs.symbolbox.ecommerce.cart.bo.intf.CartBO;
import com.sgnbs.symbolbox.ecommerce.cart.dao.intf.CartDAO;
import com.sgnbs.symbolbox.ecommerce.cart.po.Cart;
import com.linkage.system.components.system.ui.pagebean.AdminBean;
import com.linkage.system.components.system.bo.intf.AdminLogBO;
import com.linkage.system.utils.exception.ServiceException;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>CartBOImpl.java<br>
 * <b>创建时间：</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartBOImpl访问实现.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CartBOImpl implements CartBO {
    
    private String message;

    private CartDAO cartDAO;

    private AdminLogBO adminLogBO;


    /**
     * @return the message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message the message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * @return the cartDAO
     */
    public CartDAO getCartDAO() {
        return cartDAO;
    }

    /**
     * @param cartDAO the cartDAO to set
     */
    public void setCartDAO(CartDAO cartDAO) {
        this.cartDAO = cartDAO;
    }

    /**
     * @return the adminLogBO
     */
    public AdminLogBO getAdminLogBO() {
        return adminLogBO;
    }

    /**
     * @param adminLogBO the adminLogBO to set
     */
    public void setAdminLogBO(AdminLogBO adminLogBO) {
        this.adminLogBO = adminLogBO;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#getAll()
     */
    @Override
    public List<Cart> getAll() throws ServiceException {
        try {
            return cartDAO.getAll();
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#getCart (
            java.lang.Integer,
            java.lang.Integer)
     */
    @Override
    public Cart getCart(
            java.lang.Integer userid,
            java.lang.Integer appid
    ) throws   ServiceException {
        try {
            return cartDAO.getCart(
            userid,
            appid
            );
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#addValid(Cart, AdminBean)
     */
    @Override
    public boolean addValid(Cart cart, AdminBean admin) throws ServiceException {
        try {
            Cart tempCart = getCart(cart.getCompID().getUserid(), cart.getCompID().getAppid());
            
            if (tempCart != null) {
                setMessage("购物车信息管理已存在。");
                return false;
            }
            //todo 添加其他校验代码
            
            this.setMessage("购物车信息管理不存在,可以新增。");
            return true;
        } catch (Exception e) {
            this.setMessage("购物车信息管理新增失败。");
            throw new ServiceException(e, this.getClass());
        }
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#addSubmit(Cart, AdminBean)
     */
    @Override
    public boolean addSubmit(Cart cart, AdminBean admin) throws ServiceException {
        try {
            Cart tempCart = getCart(cart.getCompID().getUserid(), cart.getCompID().getAppid());
            
            if (tempCart != null) {
                setMessage("购物车信息管理已存在。");
                return false;
            }
            //todo 添加其他校验代码
            
            cartDAO.saveCart(cart);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("增加成功！");
        return true;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#modInit(Cart, AdminBean)
     */
    @Override
    public boolean modInit(Cart cart, AdminBean admin) throws ServiceException {
        try {
            Cart tempCart = getCart(cart.getCompID().getUserid(), cart.getCompID().getAppid());
            
            if (tempCart == null) {
                setMessage("购物车信息管理不存在,无法修改。");
                return false;
            }
            //todo 添加其他校验代码
            
            this.setMessage("购物车信息管理存在,可以修改。");
            return true;
        } catch (Exception e) {
            this.setMessage("购物车信息管理修改失败。");
            throw new ServiceException(e, this.getClass());
        }
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#modValid(Cart, AdminBean)
     */
    @Override
    public boolean modValid(Cart cart, AdminBean admin) throws ServiceException {
        try {
            Cart tempCart = getCart(cart.getCompID().getUserid(), cart.getCompID().getAppid());
            
            if (tempCart == null) {
                setMessage("购物车信息管理不存在,无法修改。");
                return false;
            }
            //todo 添加其他校验代码
            
            this.setMessage("购物车信息管理存在,可以修改。");
            return true;
        } catch (Exception e) {
            this.setMessage("购物车信息管理修改失败。");
            throw new ServiceException(e, this.getClass());
        }
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#modSubmit(Cart, AdminBean)
     */
    @Override
    public boolean modSubmit(Cart cart, AdminBean admin) throws ServiceException {
        try {
            Cart tempCart = getCart(cart.getCompID().getUserid(), cart.getCompID().getAppid());
            
            if (tempCart == null) {
                setMessage("购物车信息管理不存在,无法修改。");
                return false;
            }
            
            //todo 添加其他校验代码
            
            cartDAO.updateCart(cart);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("购物车信息管理修改成功！");
        return true;
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#queryInit(Cart, AdminBean)
     */
    @Override
    public boolean queryInit(Cart cart, AdminBean admin) throws ServiceException {
        try {
            Cart tempCart = getCart(cart.getCompID().getUserid(), cart.getCompID().getAppid());
            
            if (tempCart == null) {
                setMessage("购物车信息管理不存在。");
                return false;
            }
            //todo 添加其他校验代码
            
            this.setMessage("购物车信息管理存在,可以查询。");
            return true;
        } catch (Exception e) {
            this.setMessage("购物车信息管理查询失败。");
            throw new ServiceException(e, this.getClass());
        }
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#deleteInit(Cart, AdminBean)
     */
    @Override
    public boolean deleteInit(Cart cart, AdminBean admin) throws ServiceException {
        try {
            Cart tempCart = getCart(cart.getCompID().getUserid(), cart.getCompID().getAppid());
            
            if (tempCart == null) {
                setMessage("购物车信息管理不存在,无法删除。");
                return false;
            }
            //todo 添加其他校验代码
            
            this.setMessage("购物车信息管理存在,可以删除。");
            return true;
        } catch (Exception e) {
            this.setMessage("购物车信息管理删除失败。");
            throw new ServiceException(e, this.getClass());
        }
    }
    
    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.cart.cart.bo.intf.CartBO#deleteSubmit(Cart, AdminBean)
     */
    @Override
    public boolean deleteSubmit(Cart cart, AdminBean admin) throws ServiceException {
        try {
            Cart tempCart = getCart(cart.getCompID().getUserid(), cart.getCompID().getAppid());
            
            if (tempCart == null) {
                setMessage("购物车信息管理不存在,无法修改。");
                return false;
            }
            
            //todo 添加其他校验代码
            
            cartDAO.deleteCart(cart);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("购物车信息管理删除成功。");
        return true;
    }
}
