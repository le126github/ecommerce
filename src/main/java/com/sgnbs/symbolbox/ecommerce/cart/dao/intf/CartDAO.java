/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.cart.dao.intf;

import java.util.List;

import com.linkage.system.utils.exception.DAOException;
import com.sgnbs.symbolbox.ecommerce.cart.po.Cart;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>CartDAO.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartDAO���ʽӿ�.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface CartDAO {

    /**
     * <p>
     * <b>��ȡ�������ݿ���󣬰������ݿ�Ĭ�ϵ�����ʽ.</b><br>
     * </p>
     * 
     * @return Cart�б�
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    List<Cart> getAll() throws DAOException;

    /**
     * <p>
     * <b>����������ȡ��Ӧ���ݿ����.</b><br>
     * </p>
     * 
     * @param userid
     *            column.remarks
     * @param appid
     *            column.remarks
     * @return Cart����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    Cart getCart(java.lang.Integer userid, java.lang.Integer appid)
            throws DAOException;

    /**
     * <p>
     * <b>����ָ���������ݿ�.</b><br>
     * </p>
     * 
     * @param cart
     *            Cart����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void saveCart(Cart cart) throws DAOException;

    /**
     * <p>
     * <b>��ָ����������޸�.</b><br>
     * </p>
     * 
     * @param cart
     *            Cart����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void updateCart(Cart cart) throws DAOException;

    /**
     * <p>
     * <b>ɾ��ָ������.</b><br>
     * </p>
     * 
     * @param cart
     *            Cart����
     * @throws DAOException
     *             ���ݷ��ʲ��쳣
     */
    void deleteCart(Cart cart) throws DAOException;

    List<Cart> getAllByUserId(Integer userid) throws DAOException;
}
