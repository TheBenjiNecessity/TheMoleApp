const K_MOLE_ROOM_STORAGE = 'k-mole-room';
const K_MOLE_PLAYER_STORAGE = 'k-mole-player';

const storageService = {
	getPlayerName: () => {
		return window.sessionStorage.getItem(K_MOLE_PLAYER_STORAGE);
	},

	setPlayerName: (playerName) => {
		window.sessionStorage.setItem(K_MOLE_PLAYER_STORAGE, playerName);
	},

	getRoom: () => {
		const roomString = window.sessionStorage.getItem(K_MOLE_ROOM_STORAGE);
		return typeof roomString === 'string' ? JSON.parse(roomString) : null;
	},

	setRoom: (room) => {
		window.sessionStorage.setItem(K_MOLE_ROOM_STORAGE, JSON.stringify(room));
	},

	isHost: () => {
		const playerString = window.sessionStorage.getItem(K_MOLE_PLAYER_STORAGE);
		return !playerString || typeof playerString === 'undefined';
	},

	clearValues: () => {
		window.sessionStorage.removeItem(K_MOLE_PLAYER_STORAGE);
		window.sessionStorage.removeItem(K_MOLE_ROOM_STORAGE);
	}
};

export default storageService;
