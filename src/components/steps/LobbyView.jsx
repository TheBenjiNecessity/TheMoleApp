import React from 'react';
import { useTranslation } from 'react-i18next';
import AgreePanel from '../../common/AgreePanel';
import TitlePanel from '../../common/TitlePanel';
import PlayerList from '../../common/PlayerList';

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
				<PlayerList players={room.players} xs={12} />
			</div>
			<AgreePanel room={room} inline />
		</TitlePanel>
	);
};

export default LobbyView;
