//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './AccountBlock.module.css';

const AccountBlock = ({ onAccountNumber, handleChangeInput }) => (
	<div className={styles.account}>
		<h2>Пошук по номеру рахунка (IBAN):</h2>

		<label>
			Номер банківського рахунку
			<input
				type="text"
				name="accountNumber"
				value={onAccountNumber}
				onChange={handleChangeInput}
				autoComplete="off"
				className={styles.accountNumber}
			/>
		</label>
	</div>
);

AccountBlock.propTypes = {
	onAccountNumber: PropTypes.string.isRequired,
	handleChangeInput: PropTypes.func.isRequired,
};

export default AccountBlock;
