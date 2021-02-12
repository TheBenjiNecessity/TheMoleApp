export default class Room {
	static MAX_PLAYERS = 10;
	static ROOM_STATES = {
		LOBBY: 'lobby',
		WELCOME: 'game-welcome',
		MOLE_REVEAL: 'mole-reveal',
		EPISODE_START: 'episode-start',
		CHALLENGE_INTERMISSION: 'challenge-intermission',
		IN_CHALLENGE: 'in-challenge',
		PRE_QUIZ_INTERMISSION: 'pre-quiz-intermission',
		IN_QUIZ: 'in-quiz',
		POST_QUIZ_INTERMISSION: 'post-quiz-intermission',
		EXECUTION: 'execution',
		EXECUTION_WRAPUP: 'execution-wrapup'
	};

	roomcode = null;
	state = 'lobby';
	players = [];
	episodes = [];
	agreedPlayers = [];
	raisedHands = {};

	constructor(roomcode) {
		this.roomcode = roomcode;
	}
}
