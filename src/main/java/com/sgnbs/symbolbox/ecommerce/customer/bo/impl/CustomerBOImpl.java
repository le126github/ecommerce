package com.sgnbs.symbolbox.ecommerce.customer.bo.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sgnbs.symbolbox.ecommerce.customer.bo.intf.CustomerBO;
import com.sgnbs.symbolbox.ecommerce.customer.dao.intf.CustomerDAO;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;

@Service
@Transactional
public class CustomerBOImpl implements CustomerBO {

	private String message;

	@Autowired
	private CustomerDAO customerDAO;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public CustomerDAO getCustomerDAO() {
		return customerDAO;
	}

	public void setCustomerDAO(CustomerDAO customerDAO) {
		this.customerDAO = customerDAO;
	}

	@Override
	public List<Customer> getAll() throws Exception {
		try {
			return customerDAO.getAll();
		} catch (Exception e) {
			throw e;
		}
	}

	@Override
	public Customer getCustomer(java.lang.Integer userid) throws Exception {
		try {
			return customerDAO.getCustomer(userid);
		} catch (Exception e) {
			throw e;
		}
	}

	@Override
	public boolean addSubmit(Customer customer) throws Exception {
		try {
			List<Customer> tempCustomers = getCustomersbyUserName(customer
					.getUsername());

			if (tempCustomers.size() != 0) {
				setMessage("username");
				return false;
			}

			customer.setUserid(0);

			customer.setStatus(1);

			customer.setPasswordtype(1);

			customer.setCreatetime(new Date());

			customerDAO.saveCustomer(customer);

		} catch (Exception e) {
			this.setMessage("error");
			throw e;
		}
		this.setMessage("success");
		return true;
	}

	@Override
	public boolean modSubmit(Customer customer) throws Exception {
		try {
			Customer tempCustomer = getCustomer(customer.getUserid());

			if (tempCustomer == null) {
				setMessage("nocustomer");
				return false;
			}


			customerDAO.updateCustomer(customer);

		} catch (Exception e) {
			throw e;
		}
		this.setMessage("success");
		return true;
	}

	@Override
	public List<Customer> getCustomersbyUserName(String username)
			throws Exception {
		try {
			return customerDAO.getCustomersbyUserName(username);
		} catch (Exception e) {
			throw e;
		}
	}

	@Override
	public boolean loginValid(Customer customer) throws Exception {
		try {
			String strPassword = customer.getPassword();
			List<Customer> tempCustomers = this.getCustomersbyUserName(customer
					.getUsername());
			if (tempCustomers.size() == 0) {
				this.setMessage("nocustomer");
				return false;
			}
			if (tempCustomers.get(0).getStatus().intValue() != 1) {
				this.setMessage("notnormalstatus");
				return false;
			}
			if (strPassword.equals(tempCustomers.get(0).getPassword())) {
				this.setMessage("success");
				return true;
			} else {
				this.setMessage("wrongpassword");
				return false;
			}
		} catch (Exception e) {
			throw e;
		}
	}

	// @Override
	// public List<Order> getOrdersByCustomerId(Integer userid) throws Exception
	// {
	// try {
	// return orderDAO.getOrderByCustomerId(userid);
	// } catch (DataAccessException e) {
	// throw e;
	// }
	//
	// }
	//
	// @Override
	// public boolean addAppToCart(Integer userid, Integer tempappid)
	// throws Exception {
	// try {
	// Cart tempCart = null;
	// CartPK tempCartPK = new CartPK();
	//
	// tempCartPK.setAppid(tempappid);
	// tempCartPK.setUserid(userid);
	//
	// tempCart = cartDAO.getCart(userid, tempappid);
	//
	// if (tempCart != null) {
	// this.setMessage("alreadyincart");
	// return false;
	// }
	//
	// tempCart = new Cart();
	// tempCart.setCompID(tempCartPK);
	// tempCart.setConfirmtime(new Date());
	// tempCart.setQuantity(1);
	// tempCart.setScode("0");
	//
	// cartDAO.saveCart(tempCart);
	// this.setMessage("success");
	// return true;
	// } catch (Exception e) {
	// throw e;
	// }
	//
	// }
	//
	// @Override
	// public boolean removeAppFromCart(Integer userid, Integer tempappid)
	// throws Exception {
	// try {
	// Cart tempCart = null;
	// CartPK tempCartPK = new CartPK();
	//
	// tempCartPK.setAppid(tempappid);
	// tempCartPK.setUserid(userid);
	//
	// tempCart = cartDAO.getCart(userid, tempappid);
	//
	// if (tempCart == null) {
	// this.setMessage("notexist");
	// return false;
	// }
	//
	// cartDAO.deleteCart(tempCart);
	// this.setMessage("success");
	// return true;
	// } catch (Exception e) {
	// throw e;
	// }
	// }
	//
	// @Override
	// public List<productapp> getAppsFromCartByCustomerID(Integer userid)
	// throws Exception {
	// try {
	// List<Cart> tempCartList = cartDAO.getAllByUserId(userid);
	//
	// Iterator<Cart> iterator = tempCartList.iterator();
	//
	// List<productapp> tempProductapp = new ArrayList<productapp>();
	//
	// Cart tempCart = null;
	// while (iterator.hasNext()) {
	// tempCart = iterator.next();
	// tempProductapp.add(productappDAO.getproductapp(tempCart
	// .getCompID().getAppid()));
	// }
	// return tempProductapp;
	// } catch (DataAccessException e) {
	// throw e;
	// }
	//
	// }
	//
	// @Override
	// public List<productapp> getAppListByAppidsStr(String tempAppids)
	// throws Exception {
	// try {
	// String[] apps = tempAppids.split(",");
	//
	// List<productapp> tempList = new ArrayList<productapp>();
	//
	// for (String i : apps) {
	// tempList.add(productappDAO.getproductapp(new Integer(i)));
	// }
	// return tempList;
	//
	// } catch (DataAccessException e) {
	// throw e;
	// }
	// }

}
