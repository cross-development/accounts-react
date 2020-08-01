//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './TableHead.module.css';

const TableHead = ({ headings }) => (
	<thead>
		<tr className={styles.heading}>
			{headings.map(({ id, title }) => (
				<th key={id}>{title}</th>
			))}
		</tr>
	</thead>
);

TableHead.propTypes = {
	headings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableHead;
