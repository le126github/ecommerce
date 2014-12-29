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
 * <b>��Ȩ��</b>Copyright (c) 2014 �ɹ��Ƽ�.<br>
 * <b>���̣�</b>OnlineShop<br>
 * <b>�ļ���</b>CustomerForm.java<br>
 * <b>����ʱ�䣺</b>2014-08-14 17:34:42<br>
 * <p>
 * <b>CustomerForm.</b><br>
 * </p>
 * 
 * @author lezp
 * @since 1.0.0
 */
public class CustomerForm extends Struts2BaseFormBean {

    /**
     * Ĭ�ϵĹ��췽��.
     */
    public CustomerForm() {
        super();
    }

    /**
     * �û�ID
     */
    private java.lang.Integer userid;
    /**
     * �û���
     */
    private java.lang.String username;
    /**
     * ����
     */
    private java.lang.String password;

    private java.lang.String newpassword;
    /**
     * ��������
     */
    private java.lang.Integer passwordtype;
    /**
     * ����
     */
    private java.lang.String fullname;
    /**
     * ״̬
     */
    private java.lang.Integer status;
    /**
     * ����
     */
    private java.lang.String country;
    /**
     * ����
     */
    private java.lang.String city;
    /**
     * �绰
     */
    private java.lang.String phone;
    /**
     * �ֻ�����
     */
    private java.lang.String mobile;
    /**
     * ����
     */
    private java.lang.String email;
    /**
     * ��ַ
     */
    private java.lang.String address;
    /**
     * ����
     */
    private java.lang.String fax;
    /**
     * ��ע
     */
    private java.lang.String remark;
    /**
     * ��������
     */
    private java.util.Date createtime;
    /**
     * �޸�����
     */
    private java.util.Date updatetime;
    /**
     * �޸���������
     */
    private java.util.Date modpwdtime;
    /**
     * �����ֶ�1
     */
    private java.lang.String rsv1;
    /**
     * �����ֶ�2
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
     * <b>�����û���.</b><br>
     * </p>
     * 
     * @param username
     *            �û���
     */
    public void setUsername(java.lang.String username) {
        this.username = username;
    }

    /**
     * <p>
     * <b>��ȡ�û���.</b><br>
     * </p>
     * 
     * @return �û���
     */
    public java.lang.String getUsername() {
        return this.username;
    }

    /**
     * <p>
     * <b>��������.</b><br>
     * </p>
     * 
     * @param password
     *            ����
     */
    public void setPassword(java.lang.String password) {
        this.password = password;
    }

    /**
     * <p>
     * <b>��ȡ����.</b><br>
     * </p>
     * 
     * @return ����
     */
    public java.lang.String getPassword() {
        return this.password;
    }

    /**
     * <p>
     * <b>������������.</b><br>
     * </p>
     * 
     * @param passwordtype
     *            ��������
     */
    public void setPasswordtype(java.lang.Integer passwordtype) {
        this.passwordtype = passwordtype;
    }

    /**
     * <p>
     * <b>��ȡ��������.</b><br>
     * </p>
     * 
     * @return ��������
     */
    public java.lang.Integer getPasswordtype() {
        return this.passwordtype;
    }

    /**
     * <p>
     * <b>��������.</b><br>
     * </p>
     * 
     * @param fullname
     *            ����
     */
    public void setFullname(java.lang.String fullname) {
        this.fullname = fullname;
    }

    /**
     * <p>
     * <b>��ȡ����.</b><br>
     * </p>
     * 
     * @return ����
     */
    public java.lang.String getFullname() {
        return this.fullname;
    }

    /**
     * <p>
     * <b>����״̬.</b><br>
     * </p>
     * 
     * @param status
     *            ״̬
     */
    public void setStatus(java.lang.Integer status) {
        this.status = status;
    }

    /**
     * <p>
     * <b>��ȡ״̬.</b><br>
     * </p>
     * 
     * @return ״̬
     */
    public java.lang.Integer getStatus() {
        return this.status;
    }

    /**
     * <p>
     * <b>���ù���.</b><br>
     * </p>
     * 
     * @param country
     *            ����
     */
    public void setCountry(java.lang.String country) {
        this.country = country;
    }

    /**
     * <p>
     * <b>��ȡ����.</b><br>
     * </p>
     * 
     * @return ����
     */
    public java.lang.String getCountry() {
        return this.country;
    }

    /**
     * <p>
     * <b>���õ���.</b><br>
     * </p>
     * 
     * @param city
     *            ����
     */
    public void setCity(java.lang.String city) {
        this.city = city;
    }

    /**
     * <p>
     * <b>��ȡ����.</b><br>
     * </p>
     * 
     * @return ����
     */
    public java.lang.String getCity() {
        return this.city;
    }

    /**
     * <p>
     * <b>���õ绰.</b><br>
     * </p>
     * 
     * @param phone
     *            �绰
     */
    public void setPhone(java.lang.String phone) {
        this.phone = phone;
    }

    /**
     * <p>
     * <b>��ȡ�绰.</b><br>
     * </p>
     * 
     * @return �绰
     */
    public java.lang.String getPhone() {
        return this.phone;
    }

    /**
     * <p>
     * <b>�����ֻ�����.</b><br>
     * </p>
     * 
     * @param mobile
     *            �ֻ�����
     */
    public void setMobile(java.lang.String mobile) {
        this.mobile = mobile;
    }

    /**
     * <p>
     * <b>��ȡ�ֻ�����.</b><br>
     * </p>
     * 
     * @return �ֻ�����
     */
    public java.lang.String getMobile() {
        return this.mobile;
    }

    /**
     * <p>
     * <b>��������.</b><br>
     * </p>
     * 
     * @param email
     *            ����
     */
    public void setEmail(java.lang.String email) {
        this.email = email;
    }

    /**
     * <p>
     * <b>��ȡ����.</b><br>
     * </p>
     * 
     * @return ����
     */
    public java.lang.String getEmail() {
        return this.email;
    }

    /**
     * <p>
     * <b>���õ�ַ.</b><br>
     * </p>
     * 
     * @param address
     *            ��ַ
     */
    public void setAddress(java.lang.String address) {
        this.address = address;
    }

    /**
     * <p>
     * <b>��ȡ��ַ.</b><br>
     * </p>
     * 
     * @return ��ַ
     */
    public java.lang.String getAddress() {
        return this.address;
    }

    /**
     * <p>
     * <b>���ô���.</b><br>
     * </p>
     * 
     * @param fax
     *            ����
     */
    public void setFax(java.lang.String fax) {
        this.fax = fax;
    }

    /**
     * <p>
     * <b>��ȡ����.</b><br>
     * </p>
     * 
     * @return ����
     */
    public java.lang.String getFax() {
        return this.fax;
    }

    /**
     * <p>
     * <b>���ñ�ע.</b><br>
     * </p>
     * 
     * @param remark
     *            ��ע
     */
    public void setRemark(java.lang.String remark) {
        this.remark = remark;
    }

    /**
     * <p>
     * <b>��ȡ��ע.</b><br>
     * </p>
     * 
     * @return ��ע
     */
    public java.lang.String getRemark() {
        return this.remark;
    }

    /**
     * <p>
     * <b>���ô�������.</b><br>
     * </p>
     * 
     * @param createtime
     *            ��������
     */
    public void setCreatetime(java.util.Date createtime) {
        this.createtime = createtime;
    }

    /**
     * <p>
     * <b>��ȡ��������.</b><br>
     * </p>
     * 
     * @return ��������
     */
    public java.util.Date getCreatetime() {
        return this.createtime;
    }

    /**
     * <p>
     * <b>�����޸�����.</b><br>
     * </p>
     * 
     * @param updatetime
     *            �޸�����
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
     * <b>�����޸���������.</b><br>
     * </p>
     * 
     * @param modpwdtime
     *            �޸���������
     */
    public void setModpwdtime(java.util.Date modpwdtime) {
        this.modpwdtime = modpwdtime;
    }

    /**
     * <p>
     * <b>��ȡ�޸���������.</b><br>
     * </p>
     * 
     * @return �޸���������
     */
    public java.util.Date getModpwdtime() {
        return this.modpwdtime;
    }

    /**
     * <p>
     * <b>���ñ����ֶ�1.</b><br>
     * </p>
     * 
     * @param rsv1
     *            �����ֶ�1
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
