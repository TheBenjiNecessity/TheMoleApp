import React from 'react';
import AgreePanel from '../common/AgreePanel';
import TitlePanel from '../common/TitlePanel';

const WelcomeView = ({ room }) => {
	return (
		<TitlePanel titleText="Welcome">
			<AgreePanel room={room} xl={6} lg={6} md={6} sm={12} xs={12} />
		</TitlePanel>
	);
};

export default WelcomeView;
