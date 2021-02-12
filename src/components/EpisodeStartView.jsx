import React from 'react';
import TitlePanel from '../common/TitlePanel';

import { useTranslation } from 'react-i18next';

const EpisodeStartView = ({ previousEpisode, episodeIndex }) => {
	const { t } = useTranslation('episode_start');

	return (
		<TitlePanel titleText={`Episode ${episodeIndex}`}>
			{previousEpisode ? (
				<div>{previousEpisode.finalDescription}</div>
			) : (
				<div>{t('first_episode_description')}</div>
			)}
		</TitlePanel>
	);
};

export default EpisodeStartView;
