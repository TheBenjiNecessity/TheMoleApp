import React from 'react';
import NextPanel from '../common/NextPanel';

const EpisodeStartView = ({ previousEpisode, currentEpisode, onNextCallback }) => {
	return (
		<NextPanel titleText="Welcome" nextButtonText="Start Game" onNext={onNextCallback}>
			{previousEpisode ? (
				<div>TODO: text describing what happened in the previous episode</div>
			) : (
				<div>TODO: describe the first episode</div>
			)}
		</NextPanel>
	);
};

export default EpisodeStartView;
