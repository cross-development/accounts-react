//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './ButtonBlock.module.css';

const ButtonBlock = ({ title }) => (
	<button className={styles.button} type="submit">
		{title}
	</button>
);

ButtonBlock.defaultProps = {
	title: '',
};

ButtonBlock.propTypes = {
	title: PropTypes.string,
};

export default ButtonBlock;
