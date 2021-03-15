import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './locales/i18n';

import Home from './pages/Home';
import Game from './pages/Game';
import Test from './pages/Test';

import './App.scss';

export class Routes extends Component {
	render() {
		return (
			<HashRouter>
				<Route path="/Game" component={Game} />
				<Route path="/Test" component={Test} />
				<Route exact path="/" component={Home} />
			</HashRouter>
		);
	}
}
