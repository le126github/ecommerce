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
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>CartAction.java<br>
 * <b>创建时间：</b>2014-08-27 17:01:39<br>
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
    
    /**通过spring注入的bo**/
    private CartBO cartBO;
    
    /**
     * 构造方法.
     */
    public CartAction() {
        super();
        formBeanClassName = CartForm.class.getName();
    }
    
    /**
     * <p>
     * <b>获取model.</b><br>
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
     * <b>使用提交到方法的方式，所以本方法默认返回成功.</b><br>
     * </p>
     * 
     * @return SUCCESS
     * @throws UIException
     *             UI层异常
     */
    public String execute() throws UIException {
        return SUCCESS;
    }
    
    /**
     * <p>
     * <b>新增校验.</b><br>
     * </p>
     * 
     * @return String 新增校验的结果
     * @throws UIException
     *             UI层异常
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
			
            //新建value bean
            Cart cart = new Cart();
            
            //将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //设置复合主键值
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            
            if (cartBO.addValid(cart, adminObject)) {
                //设置处理结果信息，用于界面展示
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
     * <b>新增提交.</b><br>
     * </p>
     * 
     * @return String 新增提交的结果
     * @throws UIException
     *             UI层异常
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
            
            //处理用于日志记录的相关信息，设置adminObject相关属性值
            
            //新建value bean
            Cart cart = new Cart();
            
            //将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //设置复合主键值
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            if (cartBO.addSubmit(cart, adminObject)) {
                //设置处理结果信息，用于界面展示
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
     * <b>新增回退.</b><br>
     * </p>
     * 
     * @return String 新增回退的结果
     * @throws UIException
     *             UI层异常
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
     * <b>修改初始化.</b><br>
     * </p>
     * 
     * @return String 修改初始化的结果
     * @throws UIException
     *             UI层异常
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
			
            //新建value bean
            Cart cart = new Cart();
            
            //将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //设置复合主键值
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

                //设置处理结果信息，用于界面展示
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
     * <b>修改校验.</b><br>
     * </p>
     * 
     * @return String 修改校验的结果
     * @throws UIException
     *             UI层异常
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
			
            //新建value bean
            Cart cart = new Cart();
            
            //将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //设置复合主键值
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            
            if (cartBO.modValid(cart, adminObject)) {
                //设置处理结果信息，用于界面展示
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
     * <b>修改提交.</b><br>
     * </p>
     * 
     * @return String 修改提交的结果
     * @throws UIException
     *             UI层异常
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
            
            //处理用于日志记录的相关信息，设置adminObject相关属性值
            
            //新建value bean
            Cart cart = new Cart();
            
            //将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //设置复合主键值
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

                //设置处理结果信息，用于界面展示
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
     * <b>修改回退.</b><br>
     * </p>
     * 
     * @return String 修改回退的结果
     * @throws UIException
     *             UI层异常
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
     * <b>删除初始化.</b><br>
     * </p>
     * 
     * @return String 删除初始化的结果
     * @throws UIException
     *             UI层异常
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
			
            //新建value bean
            Cart cart = new Cart();
            
            //将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //设置复合主键值
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

                //设置处理结果信息，用于界面展示
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
     * <b>删除提交.</b><br>
     * </p>
     * 
     * @return String 删除提交的结果
     * @throws UIException
     *             UI层异常
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
            
            //处理用于日志记录的相关信息，设置adminObject相关属性值
            
            //新建value bean
            Cart cart = new Cart();
            
            //将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //设置复合主键值
            CartPK compID = new CartPK();
            CopyBeanProperty.copyProperties(compID, cartForm);
            cart.setCompID(compID);
            
            if (cartBO.deleteSubmit(cart, adminObject)) {
                //设置处理结果信息，用于界面展示
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
     * <b>删除回退.</b><br>
     * </p>
     * 
     * @return String 删除回退的结果
     * @throws UIException
     *             UI层异常
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
     * <b>查询详细信息.</b><br>
     * </p>
     * 
     * @return String 查询详细信息的结果
     * @throws UIException
     *             UI层异常
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
            
            //处理用于日志记录的相关信息，设置adminObject相关属性值
            //新建value bean
            Cart cart = new Cart();
            
            //将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(cart, cartForm);
            //设置复合主键值
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
     * <b>设置BO CartBO.</b><br>
     * </p>
     * 
     * @param cartBO CartBO对象
     */
    public void setCartBO(CartBO cartBO) {
        this.cartBO = cartBO;
    }
    
    /**
     * <p>
     * <b>获取BO cartBO.</b><br>
     * </p>
     * 
     * @return CartBO对象
     */
    public CartBO getCartBO() {
        return cartBO;
    }
}
