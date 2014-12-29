/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.order.ui;

import java.util.List;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

import com.linkage.system.extend.struts2.Struts2BaseFormBean;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.po.productapp;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>OrderForm.java<br>
 * <b>创建时间：</b>2014-08-27 09:48:01<br>
 * <p>
 * <b>OrderForm.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class OrderForm extends Struts2BaseFormBean {

    /**
     * 默认的构造方法.
     */
    public OrderForm() {
        super();
    }

    /**
     * 订单ID
     */
    private java.lang.Integer orderid;
    /**
     * 用户ID
     */
    private java.lang.Integer userid;
    /**
     * 软件ID列表
     */
    private java.lang.String appids;
    /**
     * 个数列表
     */
    private java.lang.String quantitys;
    /**
     * 提交时间
     */
    private java.util.Date confirmtime;
    /**
     * 付款时间
     */
    private java.util.Date paytime;
    /**
     * 订单状态
     */
    private java.lang.Integer orderstatus;
    /**
     * 保留字段2
     */
    private java.lang.String rsv2;
    /**
     * 总价
     */
    private java.lang.Double totalprice;

    /**
     * 软件信息集合
     */
    private List<productapp> productappList;

    public List<productapp> getProductappList() {
        return productappList;
    }

    public void setProductappList(List<productapp> productappList) {
        this.productappList = productappList;
    }

    public java.lang.Double getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(java.lang.Double totalprice) {
        this.totalprice = totalprice;
    }

    /**
     * <p>
     * <b>设置订单ID.</b><br>
     * </p>
     * 
     * @param orderid
     *            订单ID
     */
    public void setOrderid(java.lang.Integer orderid) {
        this.orderid = orderid;
    }

    /**
     * <p>
     * <b>获取订单ID.</b><br>
     * </p>
     * 
     * @return 订单ID
     */
    public java.lang.Integer getOrderid() {
        return this.orderid;
    }

    /**
     * <p>
     * <b>设置用户ID.</b><br>
     * </p>
     * 
     * @param userid
     *            用户ID
     */
    public void setUserid(java.lang.Integer userid) {
        this.userid = userid;
    }

    /**
     * <p>
     * <b>获取用户ID.</b><br>
     * </p>
     * 
     * @return 用户ID
     */
    public java.lang.Integer getUserid() {
        return this.userid;
    }

    /**
     * <p>
     * <b>设置软件ID列表.</b><br>
     * </p>
     * 
     * @param appids
     *            软件ID列表
     */
    public void setAppids(java.lang.String appids) {
        this.appids = appids;
    }

    /**
     * <p>
     * <b>获取软件ID列表.</b><br>
     * </p>
     * 
     * @return 软件ID列表
     */
    public java.lang.String getAppids() {
        return this.appids;
    }

    /**
     * <p>
     * <b>设置个数列表.</b><br>
     * </p>
     * 
     * @param quantitys
     *            个数列表
     */
    public void setQuantitys(java.lang.String quantitys) {
        this.quantitys = quantitys;
    }

    /**
     * <p>
     * <b>获取个数列表.</b><br>
     * </p>
     * 
     * @return 个数列表
     */
    public java.lang.String getQuantitys() {
        return this.quantitys;
    }

    /**
     * <p>
     * <b>设置提交时间.</b><br>
     * </p>
     * 
     * @param confirmtime
     *            提交时间
     */
    public void setConfirmtime(java.util.Date confirmtime) {
        this.confirmtime = confirmtime;
    }

    /**
     * <p>
     * <b>获取提交时间.</b><br>
     * </p>
     * 
     * @return 提交时间
     */
    public java.util.Date getConfirmtime() {
        return this.confirmtime;
    }

    /**
     * <p>
     * <b>设置付款时间.</b><br>
     * </p>
     * 
     * @param paytime
     *            付款时间
     */
    public void setPaytime(java.util.Date paytime) {
        this.paytime = paytime;
    }

    /**
     * <p>
     * <b>获取付款时间.</b><br>
     * </p>
     * 
     * @return 付款时间
     */
    public java.util.Date getPaytime() {
        return this.paytime;
    }

    /**
     * <p>
     * <b>设置订单状态.</b><br>
     * </p>
     * 
     * @param orderstatus
     *            订单状态
     */
    public void setOrderstatus(java.lang.Integer orderstatus) {
        this.orderstatus = orderstatus;
    }

    /**
     * <p>
     * <b>获取订单状态.</b><br>
     * </p>
     * 
     * @return 订单状态
     */
    public java.lang.Integer getOrderstatus() {
        return this.orderstatus;
    }

    /**
     * <p>
     * <b>设置保留字段2.</b><br>
     * </p>
     * 
     * @param rsv2
     *            保留字段2
     */
    public void setRsv2(java.lang.String rsv2) {
        this.rsv2 = rsv2;
    }

    /**
     * <p>
     * <b>获取保留字段2.</b><br>
     * </p>
     * 
     * @return 保留字段2
     */
    public java.lang.String getRsv2() {
        return this.rsv2;
    }

    /**
     * <p>
     * <b>toString.</b><br>
     * </p>
     * 
     * @return string
     */
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    /**
     * <p>
     * <b>hashCode.</b><br>
     * </p>
     * 
     * @return hashcode
     */
    public int hashCode() {
        return HashCodeBuilder.reflectionHashCode(this);
    }

    /**
     * <p>
     * <b>equals.</b><br>
     * </p>
     * 
     * @param obj
     *            Object
     * @return boolean
     */
    public boolean equals(Object other) {
        return EqualsBuilder.reflectionEquals(this, other);
    }
}
