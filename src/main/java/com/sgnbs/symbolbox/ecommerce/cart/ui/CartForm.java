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
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>Ecommerce<br>
 * <b>文件：</b>CartForm.java<br>
 * <b>创建时间：</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>CartForm.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CartForm extends Struts2BaseFormBean {

    /**
     * 默认的构造方法.
     */
    public CartForm() {
        super();
    }

    /**
     * 用户ID
     */
    private java.lang.Integer userid;
    /**
     * 器件编码
     */
    private java.lang.String scode;
    /**
     * 软件ID
     */
    private java.lang.Integer appid;
    /**
     * 个数
     */
    private java.lang.Integer quantity;
    /**
     * 提交时间
     */
    private java.util.Date confirmtime;
    /**
     * 修改日期
     */
    private java.util.Date updatetime;
    /**
     * 保留字段1
     */
    private java.lang.String rsv1;
    /**
     * 保留字段2
     */
    private java.lang.String rsv2;
    

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
	 * <b>设置器件编码.</b><br>
	 * </p>
	 * 
     * @param scode 器件编码
	 */
    public void setScode(java.lang.String scode) {
        this.scode = scode;
    }
    
	/**
	 * <p>
	 * <b>获取器件编码.</b><br>
	 * </p>
	 * 
     * @return 器件编码
	 */
    public java.lang.String getScode() {
        return this.scode;
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
	 * <b>设置个数.</b><br>
	 * </p>
	 * 
     * @param quantity 个数
	 */
    public void setQuantity(java.lang.Integer quantity) {
        this.quantity = quantity;
    }
    
	/**
	 * <p>
	 * <b>获取个数.</b><br>
	 * </p>
	 * 
     * @return 个数
	 */
    public java.lang.Integer getQuantity() {
        return this.quantity;
    }

    /**
	 * <p>
	 * <b>设置提交时间.</b><br>
	 * </p>
	 * 
     * @param confirmtime 提交时间
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
	 * <b>设置修改日期.</b><br>
	 * </p>
	 * 
     * @param updatetime 修改日期
	 */
    public void setUpdatetime(java.util.Date updatetime) {
        this.updatetime = updatetime;
    }
    
	/**
	 * <p>
	 * <b>获取修改日期.</b><br>
	 * </p>
	 * 
     * @return 修改日期
	 */
    public java.util.Date getUpdatetime() {
        return this.updatetime;
    }

    /**
	 * <p>
	 * <b>设置保留字段1.</b><br>
	 * </p>
	 * 
     * @param rsv1 保留字段1
	 */
    public void setRsv1(java.lang.String rsv1) {
        this.rsv1 = rsv1;
    }
    
	/**
	 * <p>
	 * <b>获取保留字段1.</b><br>
	 * </p>
	 * 
     * @return 保留字段1
	 */
    public java.lang.String getRsv1() {
        return this.rsv1;
    }

    /**
	 * <p>
	 * <b>设置保留字段2.</b><br>
	 * </p>
	 * 
     * @param rsv2 保留字段2
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
