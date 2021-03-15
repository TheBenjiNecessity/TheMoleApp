import React from 'react';
import { Routes } from './Routes';

import './locales/i18n';
import './App.scss';
import Logo from './common/Logo';

const App = () => {
	return (
		<div className="main">
			<div className="top-bar">
				<div id="topbar" className="title" />
				<Logo size={200} textSize={45} />
			</div>

			<Routes />
		</div>
	);
};

export default App;
