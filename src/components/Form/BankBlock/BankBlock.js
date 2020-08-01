//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './BankBlock.module.css';

const BankBlock = ({ onBankName, onBankMFI, handleChangeInput }) => (
	<div className={styles.bank}>
		<h2>Пошук по ідентифікаторам банку:</h2>

		<label>
			Найменування банку
			<input
				type="text"
				name="bankName"
				value={onBankName}
				onChange={handleChangeInput}
				autoComplete="off"
				className={styles.bankName}
			/>
		</label>

		<label>
			Код МФО банку
			<input
				type="text"
				name="bankMFI"
				value={onBankMFI}
				onChange={handleChangeInput}
				autoComplete="off"
				className={styles.bankMFI}
			/>
		</label>
	</div>
);

BankBlock.propTypes = {
	onBankMFI: PropTypes.string.isRequired,
	onBankName: PropTypes.string.isRequired,
	handleChangeInput: PropTypes.func.isRequired,
};

export default BankBlock;
