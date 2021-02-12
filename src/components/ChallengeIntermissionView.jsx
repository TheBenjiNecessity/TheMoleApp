import React from 'react';
import TitlePanel from '../common/TitlePanel';

const ChallengeIntermissionView = ({ previousChallenge }) => {
	const { intermissionText } = previousChallenge;
	return (
		<TitlePanel titleText="Challenge Intermission">
			<div>{intermissionText ? <p>{intermissionText}</p> : <p>TODO: generic text</p>}</div>
		</TitlePanel>
	);
};

export default ChallengeIntermissionView;
