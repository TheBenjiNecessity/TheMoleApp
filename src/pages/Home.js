import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import roomService from '../services/room.service';
import storageService from '../services/storage.service';

import FullScreenLoader from '../common/FullScreenLoader';

const Home = () => {
	let [ loading, setLoading ] = useState(false);
	let [ toGame, setToGame ] = useState(false);

	const { t } = useTranslation('common');

	useEffect(() => {
		storageService.clearValues();
	}, []);

	function onHost() {
		setLoading(true);
		roomService
			.createRoom()
			.then(() => {
				setToGame(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	if (toGame) {
		return <Redirect to="/Game" />;
	}

	return (
		<div className="main">
			<div className="panel abs-centered-panel hv-centered-panel">
				<button type="button" className="button button-primary" onClick={onHost}>
					{t('start')}
				</button>
			</div>
			<FullScreenLoader loading={loading}>{t('loading')}</FullScreenLoader>
		</div>
	);
};

export default Home;
