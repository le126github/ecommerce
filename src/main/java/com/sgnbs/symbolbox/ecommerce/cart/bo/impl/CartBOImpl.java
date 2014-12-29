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
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>CartBOImpl.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartBOImpl����ʵ��.</b><br>
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
                setMessage("���ﳵ��Ϣ�����Ѵ��ڡ�");
                return false;
            }
            //todo �������У�����
            
            this.setMessage("���ﳵ��Ϣ��������,����������");
            return true;
        } catch (Exception e) {
            this.setMessage("���ﳵ��Ϣ��������ʧ�ܡ�");
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
                setMessage("���ﳵ��Ϣ�����Ѵ��ڡ�");
                return false;
            }
            //todo �������У�����
            
            cartDAO.saveCart(cart);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("���ӳɹ���");
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
                setMessage("���ﳵ��Ϣ��������,�޷��޸ġ�");
                return false;
            }
            //todo �������У�����
            
            this.setMessage("���ﳵ��Ϣ�������,�����޸ġ�");
            return true;
        } catch (Exception e) {
            this.setMessage("���ﳵ��Ϣ�����޸�ʧ�ܡ�");
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
                setMessage("���ﳵ��Ϣ��������,�޷��޸ġ�");
                return false;
            }
            //todo �������У�����
            
            this.setMessage("���ﳵ��Ϣ�������,�����޸ġ�");
            return true;
        } catch (Exception e) {
            this.setMessage("���ﳵ��Ϣ�����޸�ʧ�ܡ�");
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
                setMessage("���ﳵ��Ϣ��������,�޷��޸ġ�");
                return false;
            }
            
            //todo �������У�����
            
            cartDAO.updateCart(cart);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("���ﳵ��Ϣ�����޸ĳɹ���");
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
                setMessage("���ﳵ��Ϣ�������ڡ�");
                return false;
            }
            //todo �������У�����
            
            this.setMessage("���ﳵ��Ϣ�������,���Բ�ѯ��");
            return true;
        } catch (Exception e) {
            this.setMessage("���ﳵ��Ϣ�����ѯʧ�ܡ�");
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
                setMessage("���ﳵ��Ϣ��������,�޷�ɾ����");
                return false;
            }
            //todo �������У�����
            
            this.setMessage("���ﳵ��Ϣ�������,����ɾ����");
            return true;
        } catch (Exception e) {
            this.setMessage("���ﳵ��Ϣ����ɾ��ʧ�ܡ�");
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
                setMessage("���ﳵ��Ϣ��������,�޷��޸ġ�");
                return false;
            }
            
            //todo �������У�����
            
            cartDAO.deleteCart(cart);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("���ﳵ��Ϣ����ɾ���ɹ���");
        return true;
    }
}
