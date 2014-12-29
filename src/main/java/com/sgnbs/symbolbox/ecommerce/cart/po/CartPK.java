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
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>CartPK.java<br>
 * <b>创建时间：</b>2014-08-27 17:01:39<br>
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
     * 用户ID
     */
    private java.lang.Integer userid;
    /**
     * 软件ID
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
     * @param userid 用户ID
     * @param appid 软件ID
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
	 * <b>设置用户ID.</b><br>
	 * </p>
	 * 
     * @param userid 用户ID
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
	 * <b>设置软件ID.</b><br>
	 * </p>
	 * 
     * @param appid 软件ID
	 */
    public void setAppid(java.lang.Integer appid) {
        this.appid = appid;
    }
    
	/**
	 * <p>
	 * <b>获取软件ID.</b><br>
	 * </p>
	 * 
     * @return 软件ID
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
