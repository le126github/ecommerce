/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.order.ui;

import java.util.List;

import org.springframework.transaction.PlatformTransactionManager;

import com.linkage.system.extend.struts2.MainBaseAction;
import com.linkage.system.utils.beanutils.CopyBeanProperty;
import com.linkage.system.utils.exception.UIException;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.po.productapp;
import com.sgnbs.symbolbox.ecommerce.cart.dao.intf.CartDAO;
import com.sgnbs.symbolbox.ecommerce.cart.po.Cart;
import com.sgnbs.symbolbox.ecommerce.customer.bo.intf.CustomerBO;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;
import com.sgnbs.symbolbox.ecommerce.order.bo.intf.OrderBO;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>OrderAction.java<br>
 * <b>创建时间：</b>2014-08-27 09:48:01<br>
 * <p>
 * <b>OrderAction.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class OrderAction extends MainBaseAction {

    /** form bean **/
    private OrderForm orderForm = null;
    private PlatformTransactionManager transactionManager;

    public PlatformTransactionManager getTransactionManager() {
        return transactionManager;
    }

    public void setTransactionManager(
            PlatformTransactionManager transactionManager) {
        this.transactionManager = transactionManager;
    }

    /** 通过spring注入的bo **/
    private OrderBO orderBO;
    private CustomerBO customerBO;
    private CartDAO cartDAO;

    public CartDAO getCartDAO() {
        return cartDAO;
    }

    public void setCartDAO(CartDAO cartDAO) {
        this.cartDAO = cartDAO;
    }

    public CustomerBO getCustomerBO() {
        return customerBO;
    }

    public void setCustomerBO(CustomerBO customerBO) {
        this.customerBO = customerBO;
    }

    /**
     * 构造方法.
     */
    public OrderAction() {
        super();
        formBeanClassName = OrderForm.class.getName();
    }

    /**
     * <p>
     * <b>获取model.</b><br>
     * </p>
     * 
     * @return model
     */
    public Object getModel() {
        this.orderForm = (OrderForm) super.getModel();
        return this.orderForm;
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

            // 新建value bean
            Order order = new Order();

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.addValid(order, adminObject)) {
                // 设置处理结果信息，用于界面展示
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, ERROR);
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

            Order order = new Order();

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            List<Customer> tempcustomers = customerBO
                    .getCustomersbyUserName(adminObject.getAdminName());
            if (tempcustomers.size() == 0) {
                return setProcessResult(orderForm, "warn",
                        orderBO.getMessage(), BACKINPUT, ERROR);
            }
            Customer customer = tempcustomers.get(0);
            order.setUserid(customer.getUserid());
            String appid[] = order.getAppids().split(",");
            String number = "1";
            for (int i = 0; i < appid.length - 1; i++) {
                number += ",1";
            }
            order.setQuantitys(number);
            if (orderBO.addSubmit(order, adminObject)) {
                // 设置处理结果信息，用于界面展示
                for (int j = 0; j < appid.length; j++) {
                    Cart cart = cartDAO.getCart(customer.getUserid(),
                            new Integer(appid[j]));
                    if (cart != null) {
                        cartDAO.deleteCart(cart);
                        Cart carts = cartDAO.getCart(customer.getUserid(),
                                new Integer(appid[j]));
                        if (carts != null) {
                            return setProcessResult(orderForm, "warn",
                                    orderBO.getMessage(), BACKINPUT, ERROR);
                        }
                    }
                }
                Order orderTmp = orderBO.getOrder(order.getOrderid());
                List<productapp> productappList = orderBO.OrderInfo(orderTmp);
                CopyBeanProperty.copyProperties(orderForm, orderTmp);
                orderForm.setProductappList(productappList);
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(orderForm, "warn",
                        orderBO.getMessage(), BACKINPUT, ERROR);
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

            // 新建value bean
            Order order = new Order();

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.modInit(order, adminObject)) {
                Order orderTmp = orderBO.getOrder(order.getOrderid());
                CopyBeanProperty.copyProperties(orderForm, orderTmp);

                // 设置处理结果信息，用于界面展示
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, ERROR);
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

            // 新建value bean
            Order order = new Order();

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.modValid(order, adminObject)) {
                // 设置处理结果信息，用于界面展示
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(orderForm, "warn",
                        orderBO.getMessage(), BACKINPUT, ERROR);
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

            // 处理用于日志记录的相关信息，设置adminObject相关属性值

            // 新建value bean
            Order order = new Order();

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.modSubmit(order, adminObject)) {

                Order orderTmp = orderBO.getOrder(order.getOrderid());
                List<productapp> productappList = orderBO.OrderInfo(orderTmp);
                CopyBeanProperty.copyProperties(orderForm, orderTmp);
                orderForm.setProductappList(productappList);

                // 设置处理结果信息，用于界面展示
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(orderForm, "warn",
                        orderBO.getMessage(), BACKINPUT, ERROR);
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

            // 新建value bean
            Order order = new Order();

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.deleteInit(order, adminObject)) {
                Order orderTmp = orderBO.getOrder(order.getOrderid());
                CopyBeanProperty.copyProperties(orderForm, orderTmp);

                // 设置处理结果信息，用于界面展示
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, ERROR);
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

            // 处理用于日志记录的相关信息，设置adminObject相关属性值

            // 新建value bean
            Order order = new Order();

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.deleteSubmit(order, adminObject)) {
                // 设置处理结果信息，用于界面展示
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINPUT, SUCCESS);
            } else {
                return setProcessResult(orderForm, "warn",
                        orderBO.getMessage(), BACKINPUT, ERROR);
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

            // 处理用于日志记录的相关信息，设置adminObject相关属性值
            // 新建value bean
            Order order = new Order();

            // 将form bean的值拷贝给value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.queryInit(order, adminObject)) {
                Order orderTmp = orderBO.getOrder(order.getOrderid());
                CopyBeanProperty.copyProperties(orderForm, orderTmp);

                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINIT, SUCCESS);
            } else {
                return setProcessResult(orderForm, "info",
                        orderBO.getMessage(), BACKINIT, ERROR);
            }
        } catch (Exception e) {
            throw new UIException(e, this.getClass());
        }
    }

    /**
     * <p>
     * <b>设置BO OrderBO.</b><br>
     * </p>
     * 
     * @param orderBO
     *            OrderBO对象
     */
    public void setOrderBO(OrderBO orderBO) {
        this.orderBO = orderBO;
    }

    /**
     * <p>
     * <b>获取BO orderBO.</b><br>
     * </p>
     * 
     * @return OrderBO对象
     */
    public OrderBO getOrderBO() {
        return orderBO;
    }
}
