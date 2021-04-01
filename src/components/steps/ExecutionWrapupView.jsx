import React from 'react';
import { useTranslation } from 'react-i18next';

import TopBarTitle from '../../common/TopBarTitle';

const ExecutionWrapupView = ({ eliminatedPlayer }) => {
	const { t } = useTranslation('execution_wrapup');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle title={t('title')} hasLogo={true} />

			<div>{t('executed_player_0', { playerName: eliminatedPlayer.name })}</div>
		</div>
	);
};

export default ExecutionWrapupView;
