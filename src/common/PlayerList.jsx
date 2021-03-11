import React from 'react';
import PlayerListView from './PlayerListView';

const PlayerList = ({ players, animate, inline, xl, lg, md, sm, xs }) => {
	if (!players || !players.length) {
		return null;
	}

	return players.map((player, i) => {
		if (inline) {
			return (
				<div key={i} className="inline">
					<PlayerListView animate={animate} player={player} />
				</div>
			);
		}

		let className = '';

		if (xl) {
			className += ` col-xl-${xl}`;
		}

		if (lg) {
			className += ` col-lg-${lg}`;
		}

		if (md) {
			className += ` col-md-${md}`;
		}

		if (sm) {
			className += ` col-sm-${sm}`;
		}

		if (xs) {
			className += ` col-xs-${xs}`;
		}

		return (
			<div key={i} className={className}>
				<PlayerListView animate={animate} player={player} />
			</div>
		);
	});
};

export default PlayerList;
