import React from 'react';

import { useTranslation } from 'react-i18next';
import TopBarTitle from '../../common/TopBarTitle';

const PreQuizIntermissionView = (props) => {
	const { t } = useTranslation('pre_quiz_intermission');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle title={t('title')} hasLogo={true} />

			<p>{t('first_paragraph')}</p>
			<p>{t('second_paragraph')}</p>
		</div>
	);
};

export default PreQuizIntermissionView;
