import React from 'react';

import { useTranslation } from 'react-i18next';
import TopBarTitle from '../../common/TopBarTitle';

const ChallengeIntermissionView = ({ intermissionText }) => {
	const { t } = useTranslation('challenge_intermission');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle title={t('title')} hasLogo={true} />

			{intermissionText ? <p>{intermissionText}</p> : <p>{t('generic_text')}</p>}
		</div>
	);
};

export default ChallengeIntermissionView;
