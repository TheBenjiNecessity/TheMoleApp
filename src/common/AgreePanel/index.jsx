import React, { Fragment } from 'react';
import PlayerListView from '../PlayerListView';

import { useTranslation } from 'react-i18next';

import './agree-panel.scss';

const AgreePanel = ({ room, inline }) => {
	const { t } = useTranslation('common');

	if (!room) {
		return null;
	}

	return (
		<Fragment>
			<p>{t('ready_players')}</p>
			{room.agreedPlayers.map((player, i) => {
				if (inline) {
					return <PlayerListView animate key={i} player={player} inline />;
				}

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
