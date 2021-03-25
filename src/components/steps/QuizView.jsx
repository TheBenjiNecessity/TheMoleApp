import React from 'react';
import { useTranslation } from 'react-i18next';

import PlayerList from '../../common/PlayerList';
import TopBarTitle from '../../common/TopBarTitle';

const QuizView = ({ finishedPlayers }) => {
	const { t } = useTranslation('quiz');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle>{t('title')}</TopBarTitle>

			<p>{t('first_paragraph')}</p>

			<p>{t('players_done')}</p>
			<PlayerList players={finishedPlayers} inline />
		</div>
	);
};

export default QuizView;
