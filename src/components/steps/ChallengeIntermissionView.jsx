import React from 'react';
import TitlePanel from '../../common/TitlePanel';

import { useTranslation } from 'react-i18next';

const ChallengeIntermissionView = ({ previousChallenge }) => {
	const { intermissionText } = previousChallenge;

	const { t } = useTranslation('challenge_intermission');

	return (
		<TitlePanel titleText="Challenge Intermission">
			<div>{intermissionText ? <p>{intermissionText}</p> : <p>{t('generic_text')}</p>}</div>
		</TitlePanel>
	);
};

export default ChallengeIntermissionView;
