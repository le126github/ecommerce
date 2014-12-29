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
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>OrderAction.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 09:48:01<br>
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

    /** ͨ��springע���bo **/
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
     * ���췽��.
     */
    public OrderAction() {
        super();
        formBeanClassName = OrderForm.class.getName();
    }

    /**
     * <p>
     * <b>��ȡmodel.</b><br>
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

            // �½�value bean
            Order order = new Order();

            // ��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.addValid(order, adminObject)) {
                // ���ô�������Ϣ�����ڽ���չʾ
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

            Order order = new Order();

            // ��form bean��ֵ������value bean
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
                // ���ô�������Ϣ�����ڽ���չʾ
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

            // �½�value bean
            Order order = new Order();

            // ��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.modInit(order, adminObject)) {
                Order orderTmp = orderBO.getOrder(order.getOrderid());
                CopyBeanProperty.copyProperties(orderForm, orderTmp);

                // ���ô�������Ϣ�����ڽ���չʾ
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

            // �½�value bean
            Order order = new Order();

            // ��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.modValid(order, adminObject)) {
                // ���ô�������Ϣ�����ڽ���չʾ
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

            // ����������־��¼�������Ϣ������adminObject�������ֵ

            // �½�value bean
            Order order = new Order();

            // ��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.modSubmit(order, adminObject)) {

                Order orderTmp = orderBO.getOrder(order.getOrderid());
                List<productapp> productappList = orderBO.OrderInfo(orderTmp);
                CopyBeanProperty.copyProperties(orderForm, orderTmp);
                orderForm.setProductappList(productappList);

                // ���ô�������Ϣ�����ڽ���չʾ
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

            // �½�value bean
            Order order = new Order();

            // ��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.deleteInit(order, adminObject)) {
                Order orderTmp = orderBO.getOrder(order.getOrderid());
                CopyBeanProperty.copyProperties(orderForm, orderTmp);

                // ���ô�������Ϣ�����ڽ���չʾ
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

            // ����������־��¼�������Ϣ������adminObject�������ֵ

            // �½�value bean
            Order order = new Order();

            // ��form bean��ֵ������value bean
            CopyBeanProperty.copyProperties(order, orderForm);

            if (orderBO.deleteSubmit(order, adminObject)) {
                // ���ô�������Ϣ�����ڽ���չʾ
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

            // ����������־��¼�������Ϣ������adminObject�������ֵ
            // �½�value bean
            Order order = new Order();

            // ��form bean��ֵ������value bean
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
     * <b>����BO OrderBO.</b><br>
     * </p>
     * 
     * @param orderBO
     *            OrderBO����
     */
    public void setOrderBO(OrderBO orderBO) {
        this.orderBO = orderBO;
    }

    /**
     * <p>
     * <b>��ȡBO orderBO.</b><br>
     * </p>
     * 
     * @return OrderBO����
     */
    public OrderBO getOrderBO() {
        return orderBO;
    }
}
