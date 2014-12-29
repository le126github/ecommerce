/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.order.dao.intf;

import java.util.List;

import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>OrderDAO.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 09:48:00<br>
 * <p>
 * <b>OrderDAO���ʽӿ�.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface OrderDAO {

    /**
     * <p>
     * <b>��ȡ�������ݿ���󣬰������ݿ�Ĭ�ϵ�����ʽ.</b><br>
     * </p>
     * 
     * @return Order�б�
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    List<Order> getAll() throws DAOException;

    /**
     * <p>
     * <b>����������ȡ��Ӧ���ݿ����.</b><br>
     * </p>
     * 
     * @param orderid
     *            column.remarks
     * @return Order����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    Order getOrder(java.lang.Integer orderid) throws DAOException;

    /**
     * <p>
     * <b>����ָ���������ݿ�.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void saveOrder(Order order) throws DAOException;

    /**
     * <p>
     * <b>��ָ����������޸�.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void updateOrder(Order order) throws DAOException;

    /**
     * <p>
     * <b>ɾ��ָ������.</b><br>
     * </p>
     * 
     * @param order
     *            Order����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void deleteOrder(Order order) throws DAOException;

    List<Order> getOrderByCustomerId(Integer userid) throws DAOException;

    public List query(String hql) throws DAOException;
}
