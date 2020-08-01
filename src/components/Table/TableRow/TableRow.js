//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './TableRow.module.css';

const TableRow = ({ account }) => {
	const {
		id,
		companyName,
		companyUsreou,
		bankName,
		bankMfi,
		accountCurrency,
		companyAccount,
	} = account;

	return (
		<tr>
			<td>{id}</td>
			<td>{companyName}</td>
			<td>{companyUsreou}</td>
			<td>{bankName}</td>
			<td>{bankMfi}</td>
			<td>{accountCurrency}</td>
			<td>{companyAccount}</td>
		</tr>
	);
};

TableRow.propTypes = {
	account: PropTypes.object.isRequired,
};

export default TableRow;
