import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import PlayerList from '../PlayerList';

const AgreePanel = ({ room, inline, xl, lg, md, sm, xs }) => {
	const { t } = useTranslation('common');

	if (!room) {
		return null;
	}

	return (
		<Fragment>
			<p>{t('ready_players')}</p>
			<PlayerList players={room.agreedPlayers} inline={inline} xl={xl} lg={lg} md={md} sm={sm} xs={xs} />
		</Fragment>
	);
};

export default AgreePanel;
