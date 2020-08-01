//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './CompanyBlock.module.css';

const CompanyBlock = ({ onCompanyName, onCompanyUSREOU, handleChangeInput }) => (
	<div className={styles.company}>
		<h2>Пошук по ідентифікаторам підприємства:</h2>

		<label>
			Назва підприємства
			<input
				autoFocus
				type="text"
				name="companyName"
				value={onCompanyName}
				onChange={handleChangeInput}
				autoComplete="off"
				className={styles.companyName}
			/>
		</label>

		<label>
			Код ЄДРПОУ підприємства
			<input
				type="text"
				name="companyUSREOU"
				value={onCompanyUSREOU}
				onChange={handleChangeInput}
				autoComplete="off"
				className={styles.companyUSREOU}
			/>
		</label>
	</div>
);

CompanyBlock.propTypes = {
	onCompanyName: PropTypes.string.isRequired,
	onCompanyUSREOU: PropTypes.string.isRequired,
	handleChangeInput: PropTypes.func.isRequired,
};

export default CompanyBlock;
