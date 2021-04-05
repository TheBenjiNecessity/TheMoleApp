import React from 'react';
import { useTranslation } from 'react-i18next';

import TopBarTitle from '../../common/TopBarTitle';

const EpisodeStartView = ({ previousEpisode, episodeIndex }) => {
	const { t } = useTranslation('episode_start');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle title={t('title')} hasLogo={true} />

			{previousEpisode ? <p>{previousEpisode.finalDescription}</p> : <p>{t('first_episode_description')}</p>}
		</div>
	);
};

export default EpisodeStartView;
