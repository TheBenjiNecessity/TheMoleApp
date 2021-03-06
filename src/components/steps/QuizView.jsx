import React from 'react';
import { useTranslation } from 'react-i18next';

import TitlePanel from '../../common/TitlePanel';
import PlayerList from '../../common/PlayerList';

const QuizView = ({ finishedPlayers }) => {
	const { t } = useTranslation('quiz');

	return (
		<TitlePanel titleText={t('title')}>
			<p>{t('first_paragraph')}</p>

			<p>{t('players_done')}</p>
			<PlayerList players={finishedPlayers} inline />
		</TitlePanel>
	);
};

export default QuizView;
