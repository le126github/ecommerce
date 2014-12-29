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
 * <b>文件：</b>Cart.java<br>
 * <b>创建时间：</b>2014-08-27 17:01:39<br>
 * <p>
 * <b>Cart PO.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class Cart implements Serializable {

    private static final long serialVersionUID = 1L;
    
    private CartPK compID;
    /**
     * 器件编码
     */
    private java.lang.String scode;
    
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
	 * <b>default constructor.</b><br>
	 * </p>
	 */
    public Cart() {
    }

    
    /**
	 * <p>
	 * <b>设置复合主键compID.</b><br>
	 * </p>
	 * 
     * @param compID 复合主键
	 */
    public void setCompID(CartPK compID) {
        this.compID = compID;
    }
    
	/**
	 * <p>
	 * <b>获取复合主键compID.</b><br>
	 * </p>
	 * 
     * @return compID
	 */
    public CartPK getCompID() {
        return this.compID;
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
        return new ToStringBuilder(this)
            .append("compID", getCompID())
            .append("Scode", getScode())
            .append("Quantity", getQuantity())
            .append("Confirmtime", getConfirmtime())
            .append("Updatetime", getUpdatetime())
            .append("Rsv1", getRsv1())
            .append("Rsv2", getRsv2())
        .toString();
    }
    
	/**
	 * <p>
	 * <b>hashCode.</b><br>
	 * </p>
	 * 
	 * @return hashcode
	 */
    public int hashCode() {
        return new HashCodeBuilder()
            .append(getCompID())
            .append(getScode())
            .append(getQuantity())
            .append(getConfirmtime())
            .append(getUpdatetime())
            .append(getRsv1())
            .append(getRsv2())
            .toHashCode();
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
        if (obj instanceof Cart) {
            return false;
        } else if (this == obj) {
            return true;
        }
        Cart tmpObj = (Cart) obj;
        return new EqualsBuilder()
            .append(getCompID(),tmpObj.getCompID())
            .append(getScode(), tmpObj.getScode())
            .append(getQuantity(), tmpObj.getQuantity())
            .append(getConfirmtime(), tmpObj.getConfirmtime())
            .append(getUpdatetime(), tmpObj.getUpdatetime())
            .append(getRsv1(), tmpObj.getRsv1())
            .append(getRsv2(), tmpObj.getRsv2())
            .isEquals();
    }
}

