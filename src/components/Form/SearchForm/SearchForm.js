//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import CompanyBlock from '../CompanyBlock';
import BankBlock from '../BankBlock';
import AccountBlock from '../AccountBlock';
import ButtonBlock from '../ButtonBlock';
//Styles
import styles from './SearchForm.module.css';

//TODO: проверить и попробовать группировать блоки (companyName + companyUSREOU  и т.п.) в массив

export default class SearchForm extends Component {
	static propTypes = {
		onAddAccountInfo: PropTypes.func.isRequired,
	};

	state = {
		companyName: '',
		companyUSREOU: '',
		bankName: '',
		bankMFI: '',
		accountNumber: '',
	};

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();

		const { companyName, companyUSREOU, bankName, bankMFI, accountNumber } = this.state;

		const accountInfo = {
			companyName,
			companyUSREOU,
			bankName,
			bankMFI,
			accountNumber,
		};

		this.props.onAddAccountInfo(accountInfo);
		this.setState({
			companyName: '',
			companyUSREOU: '',
			bankName: '',
			bankMFI: '',
			accountNumber: '',
		});
	};

	render() {
		const { companyName, companyUSREOU, bankName, bankMFI, accountNumber } = this.state;

		return (
			<form onSubmit={this.handleSubmit} className={styles.form}>
				<CompanyBlock
					onCompanyName={companyName}
					onCompanyUSREOU={companyUSREOU}
					handleChangeInput={this.handleChange}
				/>

				<BankBlock
					onBankName={bankName}
					onBankMFI={bankMFI}
					handleChangeInput={this.handleChange}
				/>

				<AccountBlock onAccountNumber={accountNumber} handleChangeInput={this.handleChange} />

				<ButtonBlock title="Пошук" />
			</form>
		);
	}
}
