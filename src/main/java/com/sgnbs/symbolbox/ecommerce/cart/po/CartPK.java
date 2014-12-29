/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.cart.po;

import java.io.Serializable;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

/**
 * <p>
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>Ecommerce<br>
 * <b>�ļ���</b>CartPK.java<br>
 * <b>����ʱ�䣺</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartPK.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CartPK implements Serializable {

    private static final long serialVersionUID = 1L;
    
    /**
     * �û�ID
     */
    private java.lang.Integer userid;
    /**
     * ���ID
     */
    private java.lang.Integer appid;

    
    /**
	 * <p>
	 * <b>default constructor.</b><br>
	 * </p>
	 */
    public CartPK() {
    }

    /**
	 * <p>
	 * <b>default constructor.</b><br>
	 * </p>
     * @param userid �û�ID
     * @param appid ���ID
	 */
    public CartPK(
        java.lang.Integer userid,
        java.lang.Integer appid
    ) {
        this.userid = userid;
        this.appid = appid;
    }

    
    
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
    public boolean equals(Object obj) {
        return EqualsBuilder.reflectionEquals(this, obj);
    }
}
