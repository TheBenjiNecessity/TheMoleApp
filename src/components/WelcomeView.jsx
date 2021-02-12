import React from 'react';
import AgreePanel from '../common/AgreePanel';
import TitlePanel from '../common/TitlePanel';

const WelcomeView = ({ room }) => {
	return (
		<TitlePanel titleText="Welcome">
			<AgreePanel room={room} />
		</TitlePanel>
	);
};

export default WelcomeView;
