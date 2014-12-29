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
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>OrderForm.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 09:48:01<br>
 * <p>
 * <b>OrderForm.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class OrderForm extends Struts2BaseFormBean {

    /**
     * Ĭ�ϵĹ��췽��.
     */
    public OrderForm() {
        super();
    }

    /**
     * ����ID
     */
    private java.lang.Integer orderid;
    /**
     * �û�ID
     */
    private java.lang.Integer userid;
    /**
     * ���ID�б�
     */
    private java.lang.String appids;
    /**
     * �����б�
     */
    private java.lang.String quantitys;
    /**
     * �ύʱ��
     */
    private java.util.Date confirmtime;
    /**
     * ����ʱ��
     */
    private java.util.Date paytime;
    /**
     * ����״̬
     */
    private java.lang.Integer orderstatus;
    /**
     * �����ֶ�2
     */
    private java.lang.String rsv2;
    /**
     * �ܼ�
     */
    private java.lang.Double totalprice;

    /**
     * �����Ϣ����
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
     * <b>���ö���ID.</b><br>
     * </p>
     * 
     * @param orderid
     *            ����ID
     */
    public void setOrderid(java.lang.Integer orderid) {
        this.orderid = orderid;
    }

    /**
     * <p>
     * <b>��ȡ����ID.</b><br>
     * </p>
     * 
     * @return ����ID
     */
    public java.lang.Integer getOrderid() {
        return this.orderid;
    }

    /**
     * <p>
     * <b>�����û�ID.</b><br>
     * </p>
     * 
     * @param userid
     *            �û�ID
     */
    public void setUserid(java.lang.Integer userid) {
        this.userid = userid;
    }

    /**
     * <p>
     * <b>��ȡ�û�ID.</b><br>
     * </p>
     * 
     * @return �û�ID
     */
    public java.lang.Integer getUserid() {
        return this.userid;
    }

    /**
     * <p>
     * <b>�������ID�б�.</b><br>
     * </p>
     * 
     * @param appids
     *            ���ID�б�
     */
    public void setAppids(java.lang.String appids) {
        this.appids = appids;
    }

    /**
     * <p>
     * <b>��ȡ���ID�б�.</b><br>
     * </p>
     * 
     * @return ���ID�б�
     */
    public java.lang.String getAppids() {
        return this.appids;
    }

    /**
     * <p>
     * <b>���ø����б�.</b><br>
     * </p>
     * 
     * @param quantitys
     *            �����б�
     */
    public void setQuantitys(java.lang.String quantitys) {
        this.quantitys = quantitys;
    }

    /**
     * <p>
     * <b>��ȡ�����б�.</b><br>
     * </p>
     * 
     * @return �����б�
     */
    public java.lang.String getQuantitys() {
        return this.quantitys;
    }

    /**
     * <p>
     * <b>�����ύʱ��.</b><br>
     * </p>
     * 
     * @param confirmtime
     *            �ύʱ��
     */
    public void setConfirmtime(java.util.Date confirmtime) {
        this.confirmtime = confirmtime;
    }

    /**
     * <p>
     * <b>��ȡ�ύʱ��.</b><br>
     * </p>
     * 
     * @return �ύʱ��
     */
    public java.util.Date getConfirmtime() {
        return this.confirmtime;
    }

    /**
     * <p>
     * <b>���ø���ʱ��.</b><br>
     * </p>
     * 
     * @param paytime
     *            ����ʱ��
     */
    public void setPaytime(java.util.Date paytime) {
        this.paytime = paytime;
    }

    /**
     * <p>
     * <b>��ȡ����ʱ��.</b><br>
     * </p>
     * 
     * @return ����ʱ��
     */
    public java.util.Date getPaytime() {
        return this.paytime;
    }

    /**
     * <p>
     * <b>���ö���״̬.</b><br>
     * </p>
     * 
     * @param orderstatus
     *            ����״̬
     */
    public void setOrderstatus(java.lang.Integer orderstatus) {
        this.orderstatus = orderstatus;
    }

    /**
     * <p>
     * <b>��ȡ����״̬.</b><br>
     * </p>
     * 
     * @return ����״̬
     */
    public java.lang.Integer getOrderstatus() {
        return this.orderstatus;
    }

    /**
     * <p>
     * <b>���ñ����ֶ�2.</b><br>
     * </p>
     * 
     * @param rsv2
     *            �����ֶ�2
     */
    public void setRsv2(java.lang.String rsv2) {
        this.rsv2 = rsv2;
    }

    /**
     * <p>
     * <b>��ȡ�����ֶ�2.</b><br>
     * </p>
     * 
     * @return �����ֶ�2
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
