import React, { Suspense } from 'react';

const ChallengeView = ({ challenge }) => {
	const ChallengeComponent = React.lazy(() => import(`../../challenges/${challenge.type}`));

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ChallengeComponent challenge={challenge} />
		</Suspense>
	);
};

export default ChallengeView;
