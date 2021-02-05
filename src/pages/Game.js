import React, { useEffect, useState } from 'react';

import roomService from '../services/room.service';
import FullScreenLoader from '../common/FullScreenLoader';

import socketService from '../services/socket.service';
import GameView from '../components/GameView';
import storageService from '../services/storage.service';

const Game = () => {
	const [ room, setRoom ] = useState(storageService.getRoom());
	const [ player, setPlayer ] = useState(
		storageService.getRoom().players.find((p) => p.name === storageService.getPlayerName())
	);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		socketService.createEvent('room-event', (room) => {
			__setRoom(room);
		});

		return () => {
			socketService.removeEvent('room-event');
		};
	}, []);

	// On mount, check to see if a room already exists in storage. If it does,
	// then look for that same room on the server and get the most up to date
	// version.
	useEffect(() => {
		if (room) {
			setLoading(true);
			roomService.getRoom(room.roomcode).then(({ room: newRoom }) => {
				setLoading(false);

				__setRoom(newRoom);

				if (player) {
					roomService.joinRoom(newRoom.roomcode, player);
				}
			});
		}
	}, []);

	function __setRoom(room) {
		storageService.setRoom(room);
		setRoom(room);
		setPlayer(room.players.find((p) => p.name === storageService.getPlayerName()));
	}

	if (room) {
		return (
			<React.Fragment>
				<GameView room={room} player={player} />
				<FullScreenLoader loading={loading}>Loading</FullScreenLoader>
			</React.Fragment>
		);
	} else {
		return null;
	}
};

export default Game;
