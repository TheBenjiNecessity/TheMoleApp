import React from 'react';
import TitlePanel from '../common/TitlePanel';

import { useTranslation } from 'react-i18next';

const PreQuizIntermissionView = (props) => {
	const { t } = useTranslation('pre_quiz_intermission');

	return (
		<TitlePanel titleText={t('title')}>
			<div>
				<p>{t('first_paragraph')}</p>
				<p>{t('second_paragraph')}</p>
			</div>
		</TitlePanel>
	);
};

export default PreQuizIntermissionView;
