/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.cart.bo.intf;

import java.util.List;

import com.linkage.system.components.system.ui.pagebean.AdminBean;
import com.sgnbs.symbolbox.ecommerce.cart.po.Cart;
import com.linkage.system.utils.exception.ServiceException;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>CartBO.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartBO���ʽӿ�.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public interface CartBO {

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
     * @return Cart�б�
     * @throws ServiceException
     *             ������쳣
     */
    List<Cart> getAll() throws ServiceException;

    /**
     * <p>
     * <b>����������ȡ��Ӧ���ݿ����.</b><br>
     * </p>
     * 
     * @param userid column.remarks
     * @param appid column.remarks
     * @return Cart����
     * @throws ServiceException
     *             ������쳣
     */
    Cart getCart(
        java.lang.Integer userid,
        java.lang.Integer appid
    ) throws   ServiceException;
    
    /**
     * <p>
     * <b>����У��.</b><br>
     * </p>
     * 
     * @param cart Cart����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean addValid(Cart cart, AdminBean admin)throws ServiceException;
    
    /**
     * <p>
     * <b>����ָ���������ݿ�.</b><br>
     * </p>
     * 
     * @param cart Cart����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean addSubmit(Cart cart, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>�޸�׼��.</b><br>
     * </p>
     * 
     * @param cart Cart����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean modInit(Cart cart, AdminBean admin) throws ServiceException;
    
    /**
     * <p>
     * <b>�޸�У��.</b><br>
     * </p>
     * 
     * @param cart Cart����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean modValid(Cart cart, AdminBean admin) throws ServiceException;
    
    /**
     * <p>
     * <b>��ָ����������޸�.</b><br>
     * </p>
     * 
     * @param cart Cart����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean modSubmit(Cart cart, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>��ѯָ��������ϸ��Ϣ��ʼ��.</b><br>
     * </p>
     * 
     * @param cart Cart����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean queryInit(Cart cart, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>ɾ����ʼ��.</b><br>
     * </p>
     * 
     * @param cart Cart����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean deleteInit(Cart cart, AdminBean admin) throws ServiceException;

    /**
     * <p>
     * <b>ɾ��ָ������.</b><br>
     * </p>
     * 
     * @param cart Cart����
     * @param admin
     *            AdminBean����
     * @return boolean �ɹ�/ʧ��
     * @throws ServiceException
     *             ������쳣
     */
    boolean deleteSubmit(Cart cart, AdminBean admin) throws ServiceException;
}
