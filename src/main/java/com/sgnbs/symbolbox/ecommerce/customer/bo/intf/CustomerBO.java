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
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>OnlineShop<br>
 * <b>�ļ���</b>CustomerBO.java<br>
 * <b>����ʱ�䣺</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerBO���ʽӿ�.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface CustomerBO {

    /**
     * ���ش���Ľ����Ϣ�������ǳɹ���Ϣ��ʧ��������Ϣ��.
     * 
     * @return message
     */
    String getMessage();

    /**
     * <p>
     * <b>��ȡ�������ݿ���󣬰������ݿ�Ĭ�ϵ�����ʽ.</b><br>
     * </p>
     * 
     * @return Customer�б�
     * @throws ServiceException
     *             ������쳣
     */
    List<Customer> getAll() throws ServiceException;

    /**
     * <p>
     * <b>����������ȡ��Ӧ���ݿ����.</b><br>
     * </p>
     * 
     * @param userid
     *            column.remarks
     * @return Customer����
     * @throws ServiceException
     *             ������쳣
     */
    Customer getCustomer(java.lang.Integer userid) throws ServiceException;

    List<Customer> getCustomersbyUserName(java.lang.String username)
            throws ServiceException;

    /**
     * <p>
     * <b>����ָ���������ݿ�.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean addSubmit(Customer customer, AdminBean adminObject)
            throws ServiceException;

    /**
     * <p>
     * <b>��ָ����������޸�.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
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
