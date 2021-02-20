import React from 'react';
//import { useTranslation } from 'react-i18next';
import AgreePanel from '../common/AgreePanel';
import TitlePanel from '../common/TitlePanel';

import PlayerListView from '../common/PlayerListView';

import { useTranslation } from 'react-i18next';

const LobbyView = ({ room }) => {
	const { t } = useTranslation('lobby');

	return (
		<TitlePanel titleText="Lobby">
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label>{t('roomcode')}</label>
				<div className="room-code">{room ? room.roomcode : 'No Code'}</div>
			</div>
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label>{t('player_plural')}</label>
				<div className="player-list">
					{room && room.players && room.players.length ? (
						room.players.map((player) => <PlayerListView key={player.name} player={player} />)
					) : (
						<div />
					)}
				</div>
			</div>
			<AgreePanel room={room} inline />
		</TitlePanel>
	);
};

export default LobbyView;
