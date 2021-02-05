import React, { Fragment } from 'react';
import NextPanel from '../common/NextPanel';

const MoleRevealView = ({ player, onNext }) => {
	return (
		<NextPanel onNext={onNext}>
			{player ? (
				<Fragment>
					<p>DO NOT READ ALOUD!</p>
					<p>{player.isMole ? 'You are the mole' : 'You are not the mole'}</p>
				</Fragment>
			) : (
				<Fragment>
					<h1>Who is the mole?</h1>
					<p>Look at your devices now to see whether or not you have been selected to be the mole.</p>
					<p>Warning: do not show the other players your role.</p>
				</Fragment>
			)}
		</NextPanel>
	);
};

export default MoleRevealView;
