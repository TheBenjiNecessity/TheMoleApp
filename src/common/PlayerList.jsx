import React from 'react';
import PlayerListView from './PlayerListView';

const PlayerList = ({ players, animate, inline, xl, lg, md, sm, xs }) => {
	if (!players || !players.length) {
		return null;
	}

	return players.map((player, i) => {
		if (inline) {
			return (
				<div className="inline">
					<PlayerListView animate={animate} key={i} player={player} />
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
			<div className={className}>
				<PlayerListView animate={animate} key={i} player={player} />
			</div>
		);
	});
};

export default PlayerList;
