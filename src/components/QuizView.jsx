import React from 'react';
import TitlePanel from '../common/TitlePanel';

import { useTranslation } from 'react-i18next';

const QuizView = (props) => {
	const { t } = useTranslation('quiz');

	return (
		<TitlePanel titleText={t('title')}>
			<p>{t('first_paragraph')}</p>
			Show number of players who have completed their quizes
		</TitlePanel>
	);
};

export default QuizView;
