/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.cart.ui;

import com.linkage.system.extend.struts2.Struts2BaseFormBean;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>CartForm.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartForm.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CartForm extends Struts2BaseFormBean {

    /**
     * Ĭ�ϵĹ��췽��.
     */
    public CartForm() {
        super();
    }

    /**
     * �û�ID
     */
    private java.lang.Integer userid;
    /**
     * ��������
     */
    private java.lang.String scode;
    /**
     * ���ID
     */
    private java.lang.Integer appid;
    /**
     * ����
     */
    private java.lang.Integer quantity;
    /**
     * �ύʱ��
     */
    private java.util.Date confirmtime;
    /**
     * �޸�����
     */
    private java.util.Date updatetime;
    /**
     * �����ֶ�1
     */
    private java.lang.String rsv1;
    /**
     * �����ֶ�2
     */
    private java.lang.String rsv2;
    

    /**
	 * <p>
	 * <b>�����û�ID.</b><br>
	 * </p>
	 * 
     * @param userid �û�ID
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
	 * <b>������������.</b><br>
	 * </p>
	 * 
     * @param scode ��������
	 */
    public void setScode(java.lang.String scode) {
        this.scode = scode;
    }
    
	/**
	 * <p>
	 * <b>��ȡ��������.</b><br>
	 * </p>
	 * 
     * @return ��������
	 */
    public java.lang.String getScode() {
        return this.scode;
    }

    /**
	 * <p>
	 * <b>�������ID.</b><br>
	 * </p>
	 * 
     * @param appid ���ID
	 */
    public void setAppid(java.lang.Integer appid) {
        this.appid = appid;
    }
    
	/**
	 * <p>
	 * <b>��ȡ���ID.</b><br>
	 * </p>
	 * 
     * @return ���ID
	 */
    public java.lang.Integer getAppid() {
        return this.appid;
    }

    /**
	 * <p>
	 * <b>���ø���.</b><br>
	 * </p>
	 * 
     * @param quantity ����
	 */
    public void setQuantity(java.lang.Integer quantity) {
        this.quantity = quantity;
    }
    
	/**
	 * <p>
	 * <b>��ȡ����.</b><br>
	 * </p>
	 * 
     * @return ����
	 */
    public java.lang.Integer getQuantity() {
        return this.quantity;
    }

    /**
	 * <p>
	 * <b>�����ύʱ��.</b><br>
	 * </p>
	 * 
     * @param confirmtime �ύʱ��
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
	 * <b>�����޸�����.</b><br>
	 * </p>
	 * 
     * @param updatetime �޸�����
	 */
    public void setUpdatetime(java.util.Date updatetime) {
        this.updatetime = updatetime;
    }
    
	/**
	 * <p>
	 * <b>��ȡ�޸�����.</b><br>
	 * </p>
	 * 
     * @return �޸�����
	 */
    public java.util.Date getUpdatetime() {
        return this.updatetime;
    }

    /**
	 * <p>
	 * <b>���ñ����ֶ�1.</b><br>
	 * </p>
	 * 
     * @param rsv1 �����ֶ�1
	 */
    public void setRsv1(java.lang.String rsv1) {
        this.rsv1 = rsv1;
    }
    
	/**
	 * <p>
	 * <b>��ȡ�����ֶ�1.</b><br>
	 * </p>
	 * 
     * @return �����ֶ�1
	 */
    public java.lang.String getRsv1() {
        return this.rsv1;
    }

    /**
	 * <p>
	 * <b>���ñ����ֶ�2.</b><br>
	 * </p>
	 * 
     * @param rsv2 �����ֶ�2
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
