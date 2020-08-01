//Core
import React, { Component } from 'react';
//Components
import Layout from '../Layout';
import SearchForm from '../../Form/SearchForm';
import AccountsTable from '../../Table/AccountsTable';
//TODO: исправить!!! В АПП должна быть логика поиска по указанному инпуту

export default class App extends Component {
	state = {
		accountInfos: [],
	};

	addAccountInfo = accountInfo => {
		this.setState(prevState => ({ accountInfos: [...prevState.accountInfos, accountInfo] }));
	};

	render() {
		return (
			<>
				<Layout title="Виберіть один із критеріїв пошуку">
					<SearchForm onAddAccountInfo={this.addAccountInfo} />
				</Layout>

				<Layout title="Інформація про наявність поточних рахунків підприємства">
					<AccountsTable />
				</Layout>
			</>
		);
	}
}
