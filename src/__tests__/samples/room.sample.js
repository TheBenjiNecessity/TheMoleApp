import Room from '../../models/room.model';

const MAX_PLAYERS = 10;

const roomSample = {
	maxPlayers: 10,

	sampleRoom: function(numPlayers = 10, state = 'lobby') {
		if (numPlayers > MAX_PLAYERS) {
			return null;
		}

		const room = new Room('TEST');
		room.state = state;
		room.players = this.samplePlayerList(numPlayers);
		return room;
	},

	samplePlayerList: function(numPlayers) {
		if (numPlayers > MAX_PLAYERS) {
			return [];
		}

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
	},

	sampleAgreedPlayers: function(numAgreedPlayers, numPlayers, state) {
		if (numAgreedPlayers > numPlayers || numPlayers > MAX_PLAYERS) {
			return null;
		}

		const room = this.sampleRoom(numPlayers, state);
		room.agreedPlayers = room.players.slice(0, numAgreedPlayers);
		return room;
	}
};

export default roomSample;
