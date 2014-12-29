/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.order.bo.intf;

import java.util.List;

import com.linkage.system.components.system.ui.pagebean.AdminBean;
import com.linkage.system.utils.exception.DAOException;
import com.linkage.system.utils.exception.ServiceException;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.po.productapp;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>OrderBO.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 09:48:00<br>
 * <p>
 * <b>OrderBO���ʽӿ�.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface OrderBO {

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
     * @return Order�б�
     * @throws ServiceException
     *             ������쳣
     */
    List<Order> getAll() throws ServiceException;

    /**
     * <p>
     * <b>����������ȡ��Ӧ���ݿ����.</b><br>
     * </p>
     * 
     * @param orderid
     *            column.remarks
     * @return Order����
     * @throws ServiceException
     *             ������쳣
     */
    Order getOrder(java.lang.Integer orderid) throws ServiceException;

    /**
     * <p>
     * <b>����У��.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean addValid(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>����ָ���������ݿ�.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean addSubmit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>�޸�׼��.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean modInit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>�޸�У��.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean modValid(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>��ָ����������޸�.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean modSubmit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>��ѯָ��������ϸ��Ϣ��ʼ��.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean queryInit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>ɾ����ʼ��.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean deleteInit(Order order, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>ɾ��ָ������.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean deleteSubmit(Order order, AdminBean admin) throws ServiceException;

    /**
     * ������Ϣ����
     * 
     * @throws DAOException
     */
    List<productapp> OrderInfo(Order order) throws DAOException;
}
