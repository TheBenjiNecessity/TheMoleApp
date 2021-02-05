import React from 'react';

import './player-list-view.scss';

const PlayerListView = ({ player, animate, className }) => {
	const style = animate ? { animation: `expandIn 1s` } : null;

	return (
		<div className={className}>
			<div className="player-view" style={style}>
				{player && player.name}
			</div>
		</div>
	);
};

export default PlayerListView;
