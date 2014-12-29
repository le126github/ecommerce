/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.order.bo.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.linkage.system.components.system.bo.intf.AdminLogBO;
import com.linkage.system.components.system.ui.pagebean.AdminBean;
import com.linkage.system.utils.exception.DAOException;
import com.linkage.system.utils.exception.ServiceException;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.dao.intf.productappDAO;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.po.productapp;
import com.sgnbs.symbolbox.ecommerce.order.bo.intf.OrderBO;
import com.sgnbs.symbolbox.ecommerce.order.dao.intf.OrderDAO;
import com.sgnbs.symbolbox.ecommerce.order.po.Order;
import com.sgnbs.symbolbox.util.RandomUtil;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>OrderBOImpl.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 09:48:00<br>
 * <p>
 * <b>OrderBOImpl����ʵ��.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class OrderBOImpl implements OrderBO {

    private String message;

    private OrderDAO orderDAO;

    private AdminLogBO adminLogBO;

    private productappDAO productappDAO;

    public productappDAO getProductappDAO() {
        return productappDAO;
    }

    public void setProductappDAO(productappDAO productappDAO) {
        this.productappDAO = productappDAO;
    }

    /**
     * @return the message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message
     *            the message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * @return the orderDAO
     */
    public OrderDAO getOrderDAO() {
        return orderDAO;
    }

    /**
     * @param orderDAO
     *            the orderDAO to set
     */
    public void setOrderDAO(OrderDAO orderDAO) {
        this.orderDAO = orderDAO;
    }

    /**
     * @return the adminLogBO
     */
    public AdminLogBO getAdminLogBO() {
        return adminLogBO;
    }

    /**
     * @param adminLogBO
     *            the adminLogBO to set
     */
    public void setAdminLogBO(AdminLogBO adminLogBO) {
        this.adminLogBO = adminLogBO;
    }

    /*
     * (non-Javadoc)
     * 
     * @see com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#getAll()
     */
    @Override
    public List<Order> getAll() throws ServiceException {
        try {
            return orderDAO.getAll();
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#getOrder(java
     * .lang.Integer)
     */
    @Override
    public Order getOrder(java.lang.Integer orderid) throws ServiceException {
        try {
            return orderDAO.getOrder(orderid);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#addValid(Order,
     * AdminBean)
     */
    @Override
    public boolean addValid(Order order, AdminBean admin)
            throws ServiceException {
        try {
            Order tempOrder = getOrder(order.getOrderid());

            if (tempOrder != null) {
                setMessage("������Ϣ�����Ѵ��ڡ�");
                return false;
            }
            // todo �������У�����

            this.setMessage("������Ϣ��������,����������");
            return true;
        } catch (Exception e) {
            this.setMessage("������Ϣ��������ʧ�ܡ�");
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#addSubmit(Order
     * , AdminBean)
     */
    @Override
    public boolean addSubmit(Order order, AdminBean admin)
            throws ServiceException {
        try {
            Order tempOrder = null;

            String randomID = null;
            do {
                randomID = RandomUtil.getRandomNumber(8);

                tempOrder = getOrder(new Integer(randomID));

            } while (tempOrder != null);
            order.setOrderid(new Integer(randomID));
            order.setOrderstatus(1);
            Date now = new Date();
            SimpleDateFormat dateFormat = new SimpleDateFormat(
                    "yyyy/MM/dd HH:mm:ss");// ���Է�����޸����ڸ�ʽ
            String hehe = dateFormat.format(now);
            Date time = dateFormat.parse(hehe);
            order.setConfirmtime(time);
            orderDAO.saveOrder(order);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("���ӳɹ���");
        return true;
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#modInit(Order,
     * AdminBean)
     */
    @Override
    public boolean modInit(Order order, AdminBean admin)
            throws ServiceException {
        try {
            Order tempOrder = getOrder(order.getOrderid());

            if (tempOrder == null) {
                setMessage("������Ϣ��������,�޷��޸ġ�");
                return false;
            }
            // todo �������У�����

            this.setMessage("������Ϣ�������,�����޸ġ�");
            return true;
        } catch (Exception e) {
            this.setMessage("������Ϣ�����޸�ʧ�ܡ�");
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#modValid(Order,
     * AdminBean)
     */
    @Override
    public boolean modValid(Order order, AdminBean admin)
            throws ServiceException {
        try {
            Order tempOrder = getOrder(order.getOrderid());

            if (tempOrder == null) {
                setMessage("������Ϣ��������,�޷��޸ġ�");
                return false;
            }
            // todo �������У�����

            this.setMessage("������Ϣ�������,�����޸ġ�");
            return true;
        } catch (Exception e) {
            this.setMessage("������Ϣ�����޸�ʧ�ܡ�");
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#modSubmit(Order
     * , AdminBean)
     */
    @Override
    public boolean modSubmit(Order order, AdminBean admin)
            throws ServiceException {
        try {
            Order tempOrder = getOrder(order.getOrderid());

            if (tempOrder == null) {
                setMessage("������Ϣ��������,�޷��޸ġ�");
                return false;
            }

            // todo �������У�����

            orderDAO.updateOrder(order);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("������Ϣ�����޸ĳɹ���");
        return true;
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#queryInit(Order
     * , AdminBean)
     */
    @Override
    public boolean queryInit(Order order, AdminBean admin)
            throws ServiceException {
        try {
            Order tempOrder = getOrder(order.getOrderid());

            if (tempOrder == null) {
                setMessage("������Ϣ�������ڡ�");
                return false;
            }
            // todo �������У�����

            this.setMessage("������Ϣ�������,���Բ�ѯ��");
            return true;
        } catch (Exception e) {
            this.setMessage("������Ϣ�����ѯʧ�ܡ�");
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#deleteInit(
     * Order, AdminBean)
     */
    @Override
    public boolean deleteInit(Order order, AdminBean admin)
            throws ServiceException {
        try {
            Order tempOrder = getOrder(order.getOrderid());

            if (tempOrder == null) {
                setMessage("������Ϣ��������,�޷�ɾ����");
                return false;
            }
            // todo �������У�����

            this.setMessage("������Ϣ�������,����ɾ����");
            return true;
        } catch (Exception e) {
            this.setMessage("������Ϣ����ɾ��ʧ�ܡ�");
            throw new ServiceException(e, this.getClass());
        }
    }

    /*
     * (non-Javadoc)
     * 
     * @see
     * com.sgnbs.symbolbox.ecommerce.order.order.bo.intf.OrderBO#deleteSubmit
     * (Order, AdminBean)
     */
    @Override
    public boolean deleteSubmit(Order order, AdminBean admin)
            throws ServiceException {
        try {
            Order tempOrder = getOrder(order.getOrderid());

            if (tempOrder == null) {
                setMessage("������Ϣ��������,�޷��޸ġ�");
                return false;
            }

            // todo �������У�����

            orderDAO.deleteOrder(order);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("������Ϣ����ɾ���ɹ���");
        return true;
    }

    /**
     * ������Ϣ����
     * 
     * @throws DAOException
     */
    public List<productapp> OrderInfo(Order order) throws DAOException {
        // �õ�APPIDS ����","��� �ô�appid����
        String appids = order.getAppids();
        String appid[] = appids.split(",");
        List<productapp> productappList = new ArrayList<productapp>();
        // ѭ���õ������������е������Ϣ
        for (int i = 0; i < appid.length; i++) {
            Integer Appid = new Integer(appid[i]);
            productapp productapp = productappDAO.getproductapp(Appid);
            if (productapp != null) {
                productappList.add(productapp);
            }
        }
        return productappList;
    }
}
