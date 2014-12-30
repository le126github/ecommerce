package com.sgnbs.symbolbox.ecommerce.customer.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.sgnbs.springUtil.dao.MapAndBean;
import com.sgnbs.symbolbox.ecommerce.customer.dao.intf.CustomerDAO;
import com.sgnbs.symbolbox.ecommerce.customer.po.Customer;

@Repository
public class CustomerDAOImpl implements CustomerDAO {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@SuppressWarnings("unchecked")
	@Override
	public List<Customer> getAll() throws DataAccessException {
		String sql = "SELECT * From t_user_info";
		return (List<Customer>) MapAndBean.transMapList2BeanList(
				jdbcTemplate.queryForList(sql), Customer.class);
		// return jdbcTemplate.query(sql, CustomerRowMapper.getInstance());
	}

	@Override
	public Customer getCustomer(Integer userid) throws DataAccessException {

		String sql = "SELECT * From t_user_info where USERID=?";
		return (Customer) MapAndBean.transMap2Bean(
				jdbcTemplate.queryForMap(sql, userid), Customer.class);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Customer> getCustomersbyUserName(String username)
			throws DataAccessException {

		String sql = "SELECT * From t_user_info where USERNAME=?";
		return (List<Customer>) MapAndBean.transMapList2BeanList(
				jdbcTemplate.queryForList(sql, username), Customer.class);
	}

	@Override
	public void saveCustomer(Customer customer) throws DataAccessException {

	}

	@Override
	public void updateCustomer(Customer customer) throws DataAccessException {

	}

}
