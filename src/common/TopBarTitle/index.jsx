import React, { useEffect, useState, Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './top-bar-title.module.scss';

const TopBarTitle = ({ children }) => {
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
		<span className="titleText" data-testid="title-text">
			{children}
		</span>,
		containerEl
	);
};

export default TopBarTitle;
