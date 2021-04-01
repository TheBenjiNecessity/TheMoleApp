import React from 'react';
import { useTranslation } from 'react-i18next';
import AgreePanel from '../../common/AgreePanel';
import TopBarTitle from '../../common/TopBarTitle';

const WelcomeView = ({ room }) => {
	const { t } = useTranslation('welcome');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle title={t('title')} hasLogo={true} />

			<AgreePanel room={room} xl={6} lg={6} md={6} sm={12} xs={12} data-testid="agree-panel" />
		</div>
	);
};

export default WelcomeView;
