/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.cart.ui;

import com.sgnbs.symbolbox.ecommerce.cart.bo.intf.CartBO;
import com.sgnbs.symbolbox.ecommerce.cart.po.Cart;
import com.sgnbs.symbolbox.ecommerce.cart.po.CartPK;
import com.linkage.system.extend.struts2.MainBaseAction;
import com.linkage.system.utils.beanutils.CopyBeanProperty;
import com.linkage.system.utils.exception.UIException;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>CartAction.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartAction.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CartAction extends MainBaseAction {
    
    /**form bean**/
    private CartForm cartForm = null;
    
    /**ͨ��springע���bo**/
    private CartBO cartBO;
    
    /**
     * ���췽��.
     */
    public CartAction() {
        super();
        formBeanClassName = CartForm.class.getName();
    }
    
    /**
     * <p>
     * <b>��ȡmodel.</b><br>
     * </p>
     * 
     * @return model
     */
    public Object getModel() {
        this.cartForm = (CartForm) super.getModel();
        return this.cartForm;
    }

    /**
     * <p>
     * <b>ʹ���ύ�������ķ�ʽ�����Ա�����Ĭ�Ϸ��سɹ�.</b><br>
     * </p>
     * 
     * @return SUCCESS
     * @throws UIException
     *             UI���쳣
     */
    public String execute() throws UIException {
        return SUCCESS;
    }
    
    /**
     * <p>
     * <b>����У��.</b><br>
     * </p>
     * 
     * @return String ����У��Ľ��
     * @throws UIException
     *             UI���쳣
     */
	public String addValid() throws UIException {
		try {
			this.getSession();
            if (!isSessionFlag()) {
                return TIMEOUT;
            }
            if (!isAccessFlag()) {
                return FORBIDDEN;
            }
			
            //�½�value bean
            Cart cart = new Cart();
            
            //��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //���ø�������ֵ
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            
            if (cartBO.addValid(cart, adminObject)) {
                //���ô�������Ϣ�����ڽ���չʾ
                return setProcessResult(cartForm, "info",
                        cartBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(cartForm, "info", cartBO
                        .getMessage(), BACKINPUT, ERROR);
            }
		} catch (Exception e) {
			throw new UIException(e, this.getClass());
		}
	}
	 
    /**
     * <p>
     * <b>�����ύ.</b><br>
     * </p>
     * 
     * @return String �����ύ�Ľ��
     * @throws UIException
     *             UI���쳣
     */
    public String addSubmit() throws UIException {
        try {
            this.getSession();
            if (!isSessionFlag()) {
                return TIMEOUT;
            }
            if (!isAccessFlag()) {
                return FORBIDDEN;
            }
            
            //����������־��¼�������Ϣ������adminObject�������ֵ
            
            //�½�value bean
            Cart cart = new Cart();
            
            //��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //���ø�������ֵ
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            if (cartBO.addSubmit(cart, adminObject)) {
                //���ô�������Ϣ�����ڽ���չʾ
                return setProcessResult(cartForm, "info",
                        cartBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(cartForm, "warn", cartBO
                        .getMessage(), BACKINPUT, ERROR);
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }
  
    /**
     * <p>
     * <b>��������.</b><br>
     * </p>
     * 
     * @return String �������˵Ľ��
     * @throws UIException
     *             UI���쳣
     */
    public String addRollback() throws UIException {
        try {
            return rollback();
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    /**
     * <p>
     * <b>�޸ĳ�ʼ��.</b><br>
     * </p>
     * 
     * @return String �޸ĳ�ʼ���Ľ��
     * @throws UIException
     *             UI���쳣
     */
	public String modInit() throws UIException {
		try {
			this.getSession();
            if (!isSessionFlag()) {
                return TIMEOUT;
            }
            if (!isAccessFlag()) {
                return FORBIDDEN;
            }
			
            //�½�value bean
            Cart cart = new Cart();
            
            //��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //���ø�������ֵ
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            if (cartBO.modInit(cart, adminObject)) {
                   Cart  cartTmp =  cartBO.getCart(
                           compID.getUserid(),
                           compID.getAppid()
                   );
                   CopyBeanProperty.copyProperties(cartForm, cartTmp);
                   CopyBeanProperty.copyProperties(cartForm, compID);

                //���ô�������Ϣ�����ڽ���չʾ
                return setProcessResult(cartForm, "info",
                        cartBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(cartForm, "info", cartBO
                        .getMessage(), BACKINPUT, ERROR);
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
	}
  
    /**
     * <p>
     * <b>�޸�У��.</b><br>
     * </p>
     * 
     * @return String �޸�У��Ľ��
     * @throws UIException
     *             UI���쳣
     */
	public String modValid() throws UIException {
		try {
			this.getSession();
            if (!isSessionFlag()) {
                return TIMEOUT;
            }
            if (!isAccessFlag()) {
                return FORBIDDEN;
            }
			
            //�½�value bean
            Cart cart = new Cart();
            
            //��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //���ø�������ֵ
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            
            if (cartBO.modValid(cart, adminObject)) {
                //���ô�������Ϣ�����ڽ���չʾ
                return setProcessResult(cartForm, "info",
                        cartBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(cartForm, "warn", cartBO
                        .getMessage(), BACKINPUT, ERROR);
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
	}
	 
    /**
     * <p>
     * <b>�޸��ύ.</b><br>
     * </p>
     * 
     * @return String �޸��ύ�Ľ��
     * @throws UIException
     *             UI���쳣
     */
    public String modSubmit() throws UIException {
        try {
            this.getSession();
            if (!isSessionFlag()) {
                return TIMEOUT;
            }
            if (!isAccessFlag()) {
                return FORBIDDEN;
            }
            
            //����������־��¼�������Ϣ������adminObject�������ֵ
            
            //�½�value bean
            Cart cart = new Cart();
            
            //��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //���ø�������ֵ
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            if (cartBO.modSubmit(cart, adminObject)) {
                   Cart  cartTmp =  cartBO.getCart(
                           compID.getUserid(),
                           compID.getAppid()
                   );
                   CopyBeanProperty.copyProperties(cartForm, cartTmp);
                   CopyBeanProperty.copyProperties(cartForm, compID);

                //���ô�������Ϣ�����ڽ���չʾ
                return setProcessResult(cartForm, "info",
                        cartBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(cartForm, "warn", cartBO
                        .getMessage(), BACKINPUT, ERROR);
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }
   
    /**
     * <p>
     * <b>�޸Ļ���.</b><br>
     * </p>
     * 
     * @return String �޸Ļ��˵Ľ��
     * @throws UIException
     *             UI���쳣
     */
    public String modRollback() throws UIException {
        try {
            return rollback();
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }
  
    /**
     * <p>
     * <b>ɾ����ʼ��.</b><br>
     * </p>
     * 
     * @return String ɾ����ʼ���Ľ��
     * @throws UIException
     *             UI���쳣
     */
	public String deleteInit() throws UIException {
		try {
			this.getSession();
            if (!isSessionFlag()) {
                return TIMEOUT;
            }
            if (!isAccessFlag()) {
                return FORBIDDEN;
            }
			
            //�½�value bean
            Cart cart = new Cart();
            
            //��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //���ø�������ֵ
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            
            if (cartBO.deleteInit(cart, adminObject)) {
                   Cart  cartTmp =  cartBO.getCart(
                           compID.getUserid(),
                           compID.getAppid()
                   );
                   CopyBeanProperty.copyProperties(cartForm, cartTmp);
                   CopyBeanProperty.copyProperties(cartForm, compID);

                //���ô�������Ϣ�����ڽ���չʾ
                return setProcessResult(cartForm, "info",
                        cartBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(cartForm, "info", cartBO
                        .getMessage(), BACKINPUT, ERROR);
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
	}
	  
    /**
     * <p>
     * <b>ɾ���ύ.</b><br>
     * </p>
     * 
     * @return String ɾ���ύ�Ľ��
     * @throws UIException
     *             UI���쳣
     */
    public String deleteSubmit() throws UIException {
        try {
            this.getSession();
            if (!isSessionFlag()) {
                return TIMEOUT;
            }
            if (!isAccessFlag()) {
                return FORBIDDEN;
            }
            
            //����������־��¼�������Ϣ������adminObject�������ֵ
            
            //�½�value bean
            Cart cart = new Cart();
            
            //��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //���ø�������ֵ
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            if (cartBO.deleteSubmit(cart, adminObject)) {
                //���ô�������Ϣ�����ڽ���չʾ
                return setProcessResult(cartForm, "info",
                        cartBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(cartForm, "warn", cartBO
                        .getMessage(), BACKINPUT, ERROR);
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }
  
    /**
     * <p>
     * <b>ɾ������.</b><br>
     * </p>
     * 
     * @return String ɾ�����˵Ľ��
     * @throws UIException
     *             UI���쳣
     */
    public String deleteRollback() throws UIException {
        try {
            return rollback();
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }
  
    /**
     * <p>
     * <b>��ѯ��ϸ��Ϣ.</b><br>
     * </p>
     * 
     * @return String ��ѯ��ϸ��Ϣ�Ľ��
     * @throws UIException
     *             UI���쳣
     */
    public String queryDetail() throws UIException {
        try {            
            this.getSession();
            if (!isSessionFlag()) {
                return TIMEOUT;
            }
            if (!isAccessFlag()) {
                return FORBIDDEN;
            }
            
            //����������־��¼�������Ϣ������adminObject�������ֵ
            //�½�value bean
            Cart cart = new Cart();
            
            //��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //���ø�������ֵ
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            if (cartBO.queryInit(cart, adminObject)) {
                Cart  cartTmp =  cartBO.getCart(
                        compID.getUserid(),
                        compID.getAppid()
                );
                CopyBeanProperty.copyProperties(cartForm, cartTmp);
                CopyBeanProperty.copyProperties(cartForm, compID);

                return setProcessResult(cartForm, "info", cartBO.getMessage(),
                        BACKINIT, SUCCESS);
            } else {
                return setProcessResult(cartForm, "info", cartBO
                        .getMessage(), BACKINIT, ERROR);
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    /**
     * <p>
     * <b>����BO CartBO.</b><br>
     * </p>
     * 
     * @param cartBO CartBO����
     */
    public void setCartBO(CartBO cartBO) {
        this.cartBO = cartBO;
    }
    
    /**
     * <p>
     * <b>��ȡBO cartBO.</b><br>
     * </p>
     * 
     * @return CartBO����
     */
    public CartBO getCartBO() {
        return cartBO;
    }
}
