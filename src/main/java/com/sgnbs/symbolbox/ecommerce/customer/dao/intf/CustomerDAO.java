/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.customer.dao.intf;

import java.util.List;

import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>OnlineShop<br>
 * <b>�ļ���</b>CustomerDAO.java<br>
 * <b>����ʱ�䣺</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerDAO���ʽӿ�.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface CustomerDAO {

    /**
     * <p>
     * <b>��ȡ�������ݿ���󣬰������ݿ�Ĭ�ϵ�����ʽ.</b><br>
     * </p>
     * 
     * @return Customer�б�
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    List<Customer> getAll() throws DAOException;

    /**
     * <p>
     * <b>����������ȡ��Ӧ���ݿ����.</b><br>
     * </p>
     * 
     * @param userid
     *            column.remarks
     * @return Customer����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    Customer getCustomer(java.lang.Integer userid) throws DAOException;

    /**
     * <p>
     * <b>����ָ���������ݿ�.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void saveCustomer(Customer customer) throws DAOException;

    /**
     * <p>
     * <b>��ָ����������޸�.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void updateCustomer(Customer customer) throws DAOException;

    /**
     * <p>
     * <b>ɾ��ָ������.</b><br>
     * </p>
     * 
     * @param customer
     *            Customer����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void deleteCustomer(Customer customer) throws DAOException;

    List<Customer> getCustomersbyUserName(String username) throws DAOException;
}
