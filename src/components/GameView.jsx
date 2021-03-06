import React from 'react';
import WelcomeView from './steps/WelcomeView';
import EpisodeStartView from './steps/EpisodeStartView';
import ChallengeView from './steps/ChallengeView';
import ChallengeIntermissionView from './steps/ChallengeIntermissionView';
import PreQuizIntermissionView from './steps/PreQuizIntermissionView';
import QuizView from './steps/QuizView';
import PostQuizIntermissionView from './steps/PostQuizIntermissionView';
import ExecutionView from './steps/ExecutionView';
import ExecutionWrapupView from './steps/ExecutionWrapupView';
import Room from '../models/room.model';
import LobbyView from './steps/LobbyView';
import MoleRevealView from './steps/MoleRevealView';

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
