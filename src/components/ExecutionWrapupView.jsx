import React from 'react';
import NextPanel from '../common/NextPanel';

const ExecutionWrapupView = ({ eliminatedPlayer, onNext }) => {
	return (
		<NextPanel titleText="Welcome" nextButtonText="Start Game" onNext={onNext}>
			<div>TODO: text describing the game {eliminatedPlayer.name}</div>
		</NextPanel>
	);
};

export default ExecutionWrapupView;
