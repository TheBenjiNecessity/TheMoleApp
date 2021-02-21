import React from 'react';
import clsx from 'clsx';

import styles from './BlockLabel.module.scss';

const BlockLabel = ({ children, className, inline, animate }) => {
	const style = animate ? { animation: `fadeIn 1s` } : null;

	return (
		<label className={clsx(className, styles['block-label'], inline && 'inline')} style={style}>
			{children}
		</label>
	);
};

export default BlockLabel;
