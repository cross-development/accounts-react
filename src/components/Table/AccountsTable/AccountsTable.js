//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TableHead from '../TableHead';
import TableBody from '../TableBody';
//Data
import tableHeading from '../../../data/tableHeading.json';
import accounts from '../../../data/accounts.json';
//Styles
import styles from './AccountsTable.module.css';

const AccountsTable = props => {
	return (
		<table className={styles.accountTable}>
			<TableHead headings={tableHeading} />
			<TableBody accounts={accounts} />
		</table>
	);
};

AccountsTable.propTypes = {};

export default AccountsTable;
