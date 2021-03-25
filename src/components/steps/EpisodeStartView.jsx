import React from 'react';
import { useTranslation } from 'react-i18next';

import TopBarTitle from '../../common/TopBarTitle';

const EpisodeStartView = ({ previousEpisode, episodeIndex }) => {
	const { t } = useTranslation('episode_start');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle>{`Episode ${episodeIndex}`}</TopBarTitle>

			{previousEpisode ? (
				<div>{previousEpisode.finalDescription}</div>
			) : (
				<div>{t('first_episode_description')}</div>
			)}
		</div>
	);
};

export default EpisodeStartView;
