import React, { Fragment } from 'react';
import Room from '../../models/room.model';
import PlayerListView from '../PlayerListView';

import { useTranslation } from 'react-i18next';

import './agree-panel.scss';

const AgreePanel = ({ room }) => {
	const { t } = useTranslation('common');

	if (!room) {
		return null;
	}

	const agreedPlayers = room.agreedPlayers.concat(new Array(Room.MAX_PLAYERS - room.agreedPlayers.length).fill(null));

	return (
		<Fragment>
			<p>{t('ready_players')}</p>
			{agreedPlayers.map((player, i) => {
				let className = 'col-sm-6 pl-sm-0 pr-sm-0';

				if (i % 2 === 0) {
					className += ' pl-md-0 pl-lg-0 pl-xl-0';
				} else {
					className += ' pr-md-0 pr-lg-0 pr-xl-0';
				}

				return <PlayerListView animate key={i} player={player} className={className} />;
			})}
		</Fragment>
	);
};

export default AgreePanel;
