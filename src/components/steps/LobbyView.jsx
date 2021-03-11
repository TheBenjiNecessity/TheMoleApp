import React from 'react';
import { useTranslation } from 'react-i18next';
import AgreePanel from '../../common/AgreePanel';
import PlayerList from '../../common/PlayerList';

const LobbyView = ({ room }) => {
	const { t } = useTranslation('lobby');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label data-testid="roomcodeLabel">{t('roomcode')}</label>
				<div className="room-code" data-testid="roomcode">
					{room ? room.roomcode : 'No Code'}
				</div>
			</div>
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label data-testid="playerListLabel">{t('player_plural')}</label>
				<PlayerList players={room.players} xs={12} data-testid="playerList" />
			</div>
			<AgreePanel room={room} inline data-testid="agreePanel" />
		</div>
	);
};

export default LobbyView;
