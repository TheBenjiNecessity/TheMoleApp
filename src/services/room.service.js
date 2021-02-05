import apiHelperService from './api-helper.service';
import socketService from './socket.service';
import storageService from './storage.service';

const roomService = {
	createRoom: () => {
		return apiHelperService.post('room').then(({ room }) => {
			socketService.joinRoom(room.roomcode);

			storageService.clearValues();
			storageService.setRoom(room);

			return room.roomcode;
		});
	},

	joinRoom: (roomCode, oldPlayer) => {
		return apiHelperService.put(`room/${roomCode}/join`, { player: oldPlayer }).then(({ room, player }) => {
			socketService.joinRoom(room.roomcode);

			storageService.clearValues();
			storageService.setPlayerName(player.name);
			storageService.setRoom(room);
		});
	},

	getRoom: (roomCode) => {
		return apiHelperService.get(`room/${roomCode}`);
	}
};

export default roomService;
