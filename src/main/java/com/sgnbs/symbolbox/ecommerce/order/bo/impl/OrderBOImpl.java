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
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>OrderBOImpl.java<br>
 * <b>创建时间：</b>2014-08-27 09:48:00<br>
 * <p>
 * <b>OrderBOImpl访问实现.</b><br>
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
                setMessage("订单信息管理已存在。");
                return false;
            }
            // todo 添加其他校验代码

            this.setMessage("订单信息管理不存在,可以新增。");
            return true;
        } catch (Exception e) {
            this.setMessage("订单信息管理新增失败。");
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
                    "yyyy/MM/dd HH:mm:ss");// 可以方便地修改日期格式
            String hehe = dateFormat.format(now);
            Date time = dateFormat.parse(hehe);
            order.setConfirmtime(time);
            orderDAO.saveOrder(order);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("增加成功！");
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
                setMessage("订单信息管理不存在,无法修改。");
                return false;
            }
            // todo 添加其他校验代码

            this.setMessage("订单信息管理存在,可以修改。");
            return true;
        } catch (Exception e) {
            this.setMessage("订单信息管理修改失败。");
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
                setMessage("订单信息管理不存在,无法修改。");
                return false;
            }
            // todo 添加其他校验代码

            this.setMessage("订单信息管理存在,可以修改。");
            return true;
        } catch (Exception e) {
            this.setMessage("订单信息管理修改失败。");
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
                setMessage("订单信息管理不存在,无法修改。");
                return false;
            }

            // todo 添加其他校验代码

            orderDAO.updateOrder(order);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("订单信息管理修改成功！");
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
                setMessage("订单信息管理不存在。");
                return false;
            }
            // todo 添加其他校验代码

            this.setMessage("订单信息管理存在,可以查询。");
            return true;
        } catch (Exception e) {
            this.setMessage("订单信息管理查询失败。");
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
                setMessage("订单信息管理不存在,无法删除。");
                return false;
            }
            // todo 添加其他校验代码

            this.setMessage("订单信息管理存在,可以删除。");
            return true;
        } catch (Exception e) {
            this.setMessage("订单信息管理删除失败。");
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
                setMessage("订单信息管理不存在,无法修改。");
                return false;
            }

            // todo 添加其他校验代码

            orderDAO.deleteOrder(order);
            adminLogBO.addAdminLog(admin);
        } catch (Exception e) {
            throw new ServiceException(e, this.getClass());
        }
        this.setMessage("订单信息管理删除成功。");
        return true;
    }

    /**
     * 订单信息处理
     * 
     * @throws DAOException
     */
    public List<productapp> OrderInfo(Order order) throws DAOException {
        // 得到APPIDS 根据","拆分 得打appid数组
        String appids = order.getAppids();
        String appid[] = appids.split(",");
        List<productapp> productappList = new ArrayList<productapp>();
        // 循环得到订单里面所有的软件信息
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
