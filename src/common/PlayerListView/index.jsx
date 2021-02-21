import React from 'react';
import BlockLabel from '../BlockLabel';

import './player-list-view.scss';

const PlayerListView = ({ player, className, inline }) => {
	return (
		<BlockLabel className={className} inline={inline}>
			{player && player.name}
		</BlockLabel>
	);
};

export default PlayerListView;
