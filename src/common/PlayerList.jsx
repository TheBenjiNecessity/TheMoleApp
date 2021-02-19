import React from 'react';
import PlayerListView from './PlayerListView';

const PlayerList = ({ players, animate, inline }) => {
	if (!players || !players.length) {
		return null;
	}

	return players.map((player, i) => <PlayerListView animate={animate} key={i} player={player} inline />);
};

export default PlayerList;
