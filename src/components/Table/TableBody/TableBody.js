//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TableRow from '../TableRow';
//Styles
import styles from './TableBody.module.css';

const TableBody = ({ accounts }) => {
	return (
		<tbody>
			{accounts.length > 0 &&
				accounts.map(account => <TableRow key={account.id} account={account} />)}
		</tbody>
	);
};

TableBody.propTypes = {
	accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableBody;
