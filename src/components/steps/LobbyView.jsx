import React from 'react';
import { useTranslation } from 'react-i18next';
import AgreePanel from '../../common/AgreePanel';
import PlayerList from '../../common/PlayerList';
import TopBarTitle from '../../common/TopBarTitle';

const LobbyView = ({ room }) => {
	const { t } = useTranslation('lobby');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle title={t('title')} hasLogo={true} />
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label data-testid="roomcode-label">{t('roomcode')}</label>
				<div className="room-code" data-testid="roomcode">
					{room && room.roomcode ? room.roomcode : t('common:no-code')}
				</div>
			</div>
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label data-testid="player-list-label">{t('player_plural')}</label>
				<PlayerList players={room.players} xs={12} data-testid="player-list" />
			</div>
			<AgreePanel room={room} inline data-testid="agree-panel" />
		</div>
	);
};

export default LobbyView;
