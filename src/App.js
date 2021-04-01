import React from 'react';
import { Routes } from './Routes';

import './locales/i18n';
import './App.scss';

const App = () => {
	return (
		<div className="main">
			<div id="topbar" className="top-bar" />

			<Routes />
		</div>
	);
};

export default App;
