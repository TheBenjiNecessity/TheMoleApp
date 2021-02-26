import React from 'react';

import styles from './styles.module.scss';

const TextInput = ({ value, ...otherProps }) => {
	return <input type="text" className={styles.input} value={value} otherProps />;
};

export default TextInput;
