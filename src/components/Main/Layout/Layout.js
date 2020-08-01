//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Layout.module.css';

const Layout = ({ title, children }) => (
	<section className={styles.section}>
		<h2>{title}</h2>
		{children}
	</section>
);

Layout.defaultProps = {
	title: '',
};

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Layout;
