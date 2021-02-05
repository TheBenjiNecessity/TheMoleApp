import React, { useCallback, useState } from 'react';
import Room from '../models/room.model';
import NavBar from '../common/NavBar';
import FullScreenLoader from '../common/FullScreenLoader';
import MoleRevealView from '../components/MoleRevealView';

function getSamplePlayers(numPlayers) {
	return [
		{ name: 'test1' },
		{ name: 'test2' },
		{ name: 'test3' },
		{ name: 'test4' },
		{ name: 'test5' },
		{ name: 'test6' },
		{ name: 'test7' },
		{ name: 'test8' },
		{ name: 'test9' },
		{ name: 'test10' }
	].slice(0, numPlayers);
}

function getSampleRoom(players = []) {
	const room = new Room('TEST');
	room.players = players;

	return room;
}

const Test = () => {
	const players = getSamplePlayers(5);
	const tempRoom = getSampleRoom(players);
	tempRoom.agreedPlayers = players;

	const [ room ] = useState(tempRoom);

	const onNext = useCallback(() => {
		console.log('onNext');
	}, []);

	return (
		<div className="main">
			<NavBar title="The Mole" />
			<MoleRevealView room={room} onNext={onNext} />
			<FullScreenLoader loading={false}>Loading</FullScreenLoader>
		</div>
	);
};

export default Test;
