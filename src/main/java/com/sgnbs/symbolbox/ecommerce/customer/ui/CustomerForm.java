/*
 * Copyright (c) 2012, Asiainfo-Linkage. All rights reserved.<br>
 * Asiainfo-Linkage PROPRIETARY/CONFIDENTIAL. Use is subject to license terms. 
 */
package com.sgnbs.symbolbox.ecommerce.customer.ui;

import java.util.List;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

import com.linkage.system.extend.struts2.Struts2BaseFormBean;
import com.sgnbs.symbolbox.customer.productapp.productappinfo.po.productapp;

/**
 * <p>
 * <b>版权：</b>Copyright (c) 2014 松果科技.<br>
 * <b>工程：</b>OnlineShop<br>
 * <b>文件：</b>CustomerForm.java<br>
 * <b>创建时间：</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerForm.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CustomerForm extends Struts2BaseFormBean {

    /**
     * 默认的构造方法.
     */
    public CustomerForm() {
        super();
    }

    /**
     * 用户ID
     */
    private java.lang.Integer userid;
    /**
     * 用户名
     */
    private java.lang.String username;
    /**
     * 密码
     */
    private java.lang.String password;

    private java.lang.String newpassword;
    /**
     * 密码类型
     */
    private java.lang.Integer passwordtype;
    /**
     * 姓名
     */
    private java.lang.String fullname;
    /**
     * 状态
     */
    private java.lang.Integer status;
    /**
     * 国家
     */
    private java.lang.String country;
    /**
     * 地市
     */
    private java.lang.String city;
    /**
     * 电话
     */
    private java.lang.String phone;
    /**
     * 手机号码
     */
    private java.lang.String mobile;
    /**
     * 邮箱
     */
    private java.lang.String email;
    /**
     * 地址
     */
    private java.lang.String address;
    /**
     * 传真
     */
    private java.lang.String fax;
    /**
     * 备注
     */
    private java.lang.String remark;
    /**
     * 创建日期
     */
    private java.util.Date createtime;
    /**
     * 修改日期
     */
    private java.util.Date updatetime;
    /**
     * 修改密码日期
     */
    private java.util.Date modpwdtime;
    /**
     * 保留字段1
     */
    private java.lang.String rsv1;
    /**
     * 保留字段2
     */
    private java.lang.String rsv2;

    private java.lang.String verifyCode;

    private java.lang.String result;

    private java.lang.String menutype;

    private java.lang.Integer addtocartappid;

    private java.lang.Integer removefromcartappid;

    private java.lang.String appids;

    private List<productapp> appList;

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
     * <b>设置用户名.</b><br>
     * </p>
     * 
     * @param username
     *            用户名
     */
    public void setUsername(java.lang.String username) {
        this.username = username;
    }

    /**
     * <p>
     * <b>获取用户名.</b><br>
     * </p>
     * 
     * @return 用户名
     */
    public java.lang.String getUsername() {
        return this.username;
    }

    /**
     * <p>
     * <b>设置密码.</b><br>
     * </p>
     * 
     * @param password
     *            密码
     */
    public void setPassword(java.lang.String password) {
        this.password = password;
    }

    /**
     * <p>
     * <b>获取密码.</b><br>
     * </p>
     * 
     * @return 密码
     */
    public java.lang.String getPassword() {
        return this.password;
    }

    /**
     * <p>
     * <b>设置密码类型.</b><br>
     * </p>
     * 
     * @param passwordtype
     *            密码类型
     */
    public void setPasswordtype(java.lang.Integer passwordtype) {
        this.passwordtype = passwordtype;
    }

    /**
     * <p>
     * <b>获取密码类型.</b><br>
     * </p>
     * 
     * @return 密码类型
     */
    public java.lang.Integer getPasswordtype() {
        return this.passwordtype;
    }

    /**
     * <p>
     * <b>设置姓名.</b><br>
     * </p>
     * 
     * @param fullname
     *            姓名
     */
    public void setFullname(java.lang.String fullname) {
        this.fullname = fullname;
    }

    /**
     * <p>
     * <b>获取姓名.</b><br>
     * </p>
     * 
     * @return 姓名
     */
    public java.lang.String getFullname() {
        return this.fullname;
    }

    /**
     * <p>
     * <b>设置状态.</b><br>
     * </p>
     * 
     * @param status
     *            状态
     */
    public void setStatus(java.lang.Integer status) {
        this.status = status;
    }

    /**
     * <p>
     * <b>获取状态.</b><br>
     * </p>
     * 
     * @return 状态
     */
    public java.lang.Integer getStatus() {
        return this.status;
    }

    /**
     * <p>
     * <b>设置国家.</b><br>
     * </p>
     * 
     * @param country
     *            国家
     */
    public void setCountry(java.lang.String country) {
        this.country = country;
    }

    /**
     * <p>
     * <b>获取国家.</b><br>
     * </p>
     * 
     * @return 国家
     */
    public java.lang.String getCountry() {
        return this.country;
    }

    /**
     * <p>
     * <b>设置地市.</b><br>
     * </p>
     * 
     * @param city
     *            地市
     */
    public void setCity(java.lang.String city) {
        this.city = city;
    }

    /**
     * <p>
     * <b>获取地市.</b><br>
     * </p>
     * 
     * @return 地市
     */
    public java.lang.String getCity() {
        return this.city;
    }

    /**
     * <p>
     * <b>设置电话.</b><br>
     * </p>
     * 
     * @param phone
     *            电话
     */
    public void setPhone(java.lang.String phone) {
        this.phone = phone;
    }

    /**
     * <p>
     * <b>获取电话.</b><br>
     * </p>
     * 
     * @return 电话
     */
    public java.lang.String getPhone() {
        return this.phone;
    }

    /**
     * <p>
     * <b>设置手机号码.</b><br>
     * </p>
     * 
     * @param mobile
     *            手机号码
     */
    public void setMobile(java.lang.String mobile) {
        this.mobile = mobile;
    }

    /**
     * <p>
     * <b>获取手机号码.</b><br>
     * </p>
     * 
     * @return 手机号码
     */
    public java.lang.String getMobile() {
        return this.mobile;
    }

    /**
     * <p>
     * <b>设置邮箱.</b><br>
     * </p>
     * 
     * @param email
     *            邮箱
     */
    public void setEmail(java.lang.String email) {
        this.email = email;
    }

    /**
     * <p>
     * <b>获取邮箱.</b><br>
     * </p>
     * 
     * @return 邮箱
     */
    public java.lang.String getEmail() {
        return this.email;
    }

    /**
     * <p>
     * <b>设置地址.</b><br>
     * </p>
     * 
     * @param address
     *            地址
     */
    public void setAddress(java.lang.String address) {
        this.address = address;
    }

    /**
     * <p>
     * <b>获取地址.</b><br>
     * </p>
     * 
     * @return 地址
     */
    public java.lang.String getAddress() {
        return this.address;
    }

    /**
     * <p>
     * <b>设置传真.</b><br>
     * </p>
     * 
     * @param fax
     *            传真
     */
    public void setFax(java.lang.String fax) {
        this.fax = fax;
    }

    /**
     * <p>
     * <b>获取传真.</b><br>
     * </p>
     * 
     * @return 传真
     */
    public java.lang.String getFax() {
        return this.fax;
    }

    /**
     * <p>
     * <b>设置备注.</b><br>
     * </p>
     * 
     * @param remark
     *            备注
     */
    public void setRemark(java.lang.String remark) {
        this.remark = remark;
    }

    /**
     * <p>
     * <b>获取备注.</b><br>
     * </p>
     * 
     * @return 备注
     */
    public java.lang.String getRemark() {
        return this.remark;
    }

    /**
     * <p>
     * <b>设置创建日期.</b><br>
     * </p>
     * 
     * @param createtime
     *            创建日期
     */
    public void setCreatetime(java.util.Date createtime) {
        this.createtime = createtime;
    }

    /**
     * <p>
     * <b>获取创建日期.</b><br>
     * </p>
     * 
     * @return 创建日期
     */
    public java.util.Date getCreatetime() {
        return this.createtime;
    }

    /**
     * <p>
     * <b>设置修改日期.</b><br>
     * </p>
     * 
     * @param updatetime
     *            修改日期
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
     * <b>设置修改密码日期.</b><br>
     * </p>
     * 
     * @param modpwdtime
     *            修改密码日期
     */
    public void setModpwdtime(java.util.Date modpwdtime) {
        this.modpwdtime = modpwdtime;
    }

    /**
     * <p>
     * <b>获取修改密码日期.</b><br>
     * </p>
     * 
     * @return 修改密码日期
     */
    public java.util.Date getModpwdtime() {
        return this.modpwdtime;
    }

    /**
     * <p>
     * <b>设置保留字段1.</b><br>
     * </p>
     * 
     * @param rsv1
     *            保留字段1
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

    public java.lang.String getVerifyCode() {
        return verifyCode;
    }

    public void setVerifyCode(java.lang.String verifyCode) {
        this.verifyCode = verifyCode;
    }

    public java.lang.String getResult() {
        return result;
    }

    public void setResult(java.lang.String result) {
        this.result = result;
    }

    public java.lang.String getMenutype() {
        return menutype;
    }

    public void setMenutype(java.lang.String menutype) {
        this.menutype = menutype;
    }

    public java.lang.String getNewpassword() {
        return newpassword;
    }

    public void setNewpassword(java.lang.String newpassword) {
        this.newpassword = newpassword;
    }

    public java.lang.Integer getAddtocartappid() {
        return addtocartappid;
    }

    public void setAddtocartappid(java.lang.Integer addtocartappid) {
        this.addtocartappid = addtocartappid;
    }

    public java.lang.Integer getRemovefromcartappid() {
        return removefromcartappid;
    }

    public void setRemovefromcartappid(java.lang.Integer removefromcartappid) {
        this.removefromcartappid = removefromcartappid;
    }

    public java.lang.String getAppids() {
        return appids;
    }

    public void setAppids(java.lang.String appids) {
        this.appids = appids;
    }

    public List<productapp> getAppList() {
        return appList;
    }

    public void setAppList(List<productapp> appList) {
        this.appList = appList;
    }
}
