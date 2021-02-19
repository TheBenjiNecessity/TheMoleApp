import React from 'react';
import clsx from 'clsx';

import './player-list-view.scss';

const PlayerListView = ({ player, animate, className, inline }) => {
	const style = animate ? { animation: `expandIn 1s` } : null;

	return (
		<div className={clsx(className, inline && 'inline')}>
			<div className="player-view" style={style}>
				{player && player.name}
			</div>
		</div>
	);
};

export default PlayerListView;
