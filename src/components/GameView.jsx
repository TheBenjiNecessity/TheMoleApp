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
			return <LobbyView room={room} data-testid="lobby" />;
		case Room.ROOM_STATES.WELCOME:
			return <WelcomeView room={room} data-testid="game-welcome" />;
		case Room.ROOM_STATES.MOLE_REVEAL:
			return <MoleRevealView data-testid="mole-reveal" />;
		case Room.ROOM_STATES.EPISODE_START:
			return <EpisodeStartView room={room} data-testid="episode-start" />;
		case Room.ROOM_STATES.IN_CHALLENGE:
			return <ChallengeView room={room} data-testid="in-challenge" />;
		case Room.ROOM_STATES.CHALLENGE_INTERMISSION:
			return <ChallengeIntermissionView room={room} data-testid="challenge-intermission" />;
		case Room.ROOM_STATES.PRE_QUIZ_INTERMISSION:
			return <PreQuizIntermissionView room={room} data-testid="pre-quiz-intermission" />;
		case Room.ROOM_STATES.IN_QUIZ:
			return <QuizView room={room} data-testid="in-quiz" />;
		case Room.ROOM_STATES.POST_QUIZ_INTERMISSION:
			return <PostQuizIntermissionView room={room} data-testid="post-quiz-intermission" />;
		case Room.ROOM_STATES.EXECUTION:
			return <ExecutionView room={room} data-testid="execution" />;
		case Room.ROOM_STATES.EXECUTION_WRAPUP:
			return <ExecutionWrapupView room={room} data-testid="execution-wrapup" />;
		default:
			return null;
	}
};

export default GameView;
