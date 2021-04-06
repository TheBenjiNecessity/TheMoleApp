import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Logo from '../Logo';

import styles from './top-bar-title.module.scss';

const TopBarTitle = ({ title, hasLogo }) => {
	const [ containerEl ] = useState(document.createElement('div'));

	useEffect(
		() => {
			const topbar = document.getElementById('topbar');

			if (topbar) {
				topbar.prepend(containerEl);
			}

			return () => {
				topbar.removeChild(containerEl);
			};
		},
		[ containerEl ]
	);

	return ReactDOM.createPortal(
		<div className={styles.title}>
			<span className={styles['title-text']} data-testid="title-text">
				{title}
			</span>
			{hasLogo && <Logo size={200} textSize={45} />}
		</div>,
		containerEl
	);
};

export default TopBarTitle;
