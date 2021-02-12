import React from 'react';
import WelcomeView from './WelcomeView';
import EpisodeStartView from './EpisodeStartView';
import ChallengeView from './ChallengeView';
import ChallengeIntermissionView from './ChallengeIntermissionView';
import PreQuizIntermissionView from './PreQuizIntermissionView';
import QuizView from './QuizView';
import PostQuizIntermissionView from './PostQuizIntermissionView';
import ExecutionView from './ExecutionView';
import ExecutionWrapupView from './ExecutionWrapupView';
import Room from '../models/room.model';
import LobbyView from './LobbyView';
import MoleRevealView from './MoleRevealView';

const GameView = ({ room }) => {
	switch (room.state) {
		case Room.ROOM_STATES.LOBBY:
			return <LobbyView room={room} />;
		case Room.ROOM_STATES.WELCOME:
			return <WelcomeView room={room} />;
		case Room.ROOM_STATES.MOLE_REVEAL:
			return <MoleRevealView />;
		case Room.ROOM_STATES.EPISODE_START:
			return <EpisodeStartView room={room} />;
		case Room.ROOM_STATES.IN_CHALLENGE:
			return <ChallengeView room={room} />;
		case Room.ROOM_STATES.CHALLENGE_INTERMISSION:
			return <ChallengeIntermissionView room={room} />;
		case Room.ROOM_STATES.PRE_QUIZ_INTERMISSION:
			return <PreQuizIntermissionView room={room} />;
		case Room.ROOM_STATES.IN_QUIZ:
			return <QuizView room={room} />;
		case Room.ROOM_STATES.POST_QUIZ_INTERMISSION:
			return <PostQuizIntermissionView room={room} />;
		case Room.ROOM_STATES.EXECUTION:
			return <ExecutionView room={room} />;
		case Room.ROOM_STATES.EXECUTION_WRAPUP:
			return <ExecutionWrapupView room={room} />;
		default:
			return null;
	}
};

export default GameView;
