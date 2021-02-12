import React from 'react';
import TitlePanel from '../common/TitlePanel';

import { useTranslation } from 'react-i18next';

const ExecutionWrapupView = ({ eliminatedPlayer }) => {
	const { t } = useTranslation('execution_wrapup');

	return (
		<TitlePanel titleText={t('title')}>
			<div>{t('executed_player_0', { playerName: eliminatedPlayer.name })}</div>
		</TitlePanel>
	);
};

export default ExecutionWrapupView;
