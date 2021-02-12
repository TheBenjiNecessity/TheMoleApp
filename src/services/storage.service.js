const K_MOLE_ROOM_STORAGE = 'k-mole-room';

const storageService = {
	getRoom: () => {
		const roomString = window.sessionStorage.getItem(K_MOLE_ROOM_STORAGE);
		return typeof roomString === 'string' ? JSON.parse(roomString) : null;
	},

	setRoom: (room) => {
		window.sessionStorage.setItem(K_MOLE_ROOM_STORAGE, JSON.stringify(room));
	},

	clearValues: () => {
		window.sessionStorage.removeItem(K_MOLE_ROOM_STORAGE);
	}
};

export default storageService;
