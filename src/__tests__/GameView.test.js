import React from 'react';
import { shallow } from 'enzyme';
import GameView from '../components/GameView';
import '../locales/i18n';
import LobbyView from '../components/steps/LobbyView';
import roomSample from './samples/room.sample';
import WelcomeView from '../components/steps/WelcomeView';
import MoleRevealView from '../components/steps/MoleRevealView';
import EpisodeStartView from '../components/steps/EpisodeStartView';
import ChallengeView from '../components/steps/ChallengeView';
import ChallengeIntermissionView from '../components/steps/ChallengeIntermissionView';
import PreQuizIntermissionView from '../components/steps/PreQuizIntermissionView';
import QuizView from '../components/steps/QuizView';
import PostQuizIntermissionView from '../components/steps/PostQuizIntermissionView';
import ExecutionView from '../components/steps/ExecutionView';
import ExecutionWrapupView from '../components/steps/ExecutionWrapupView';
import Room from '../models/room.model';

describe('GameView', () => {
	let room = {};

	beforeEach(() => {
		room = roomSample.sampleRoom();
	});

	it('should render correctly', () => {
		const component = shallow(<GameView room={room} />);
		expect(component).toMatchSnapshot();
	});

	it('should render lobby', () => {
		room.state = Room.ROOM_STATES.LOBBY;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(LobbyView);
	});

	it('should render welcome', () => {
		room.state = Room.ROOM_STATES.WELCOME;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(WelcomeView);
	});

	it('should render mole reveal', () => {
		room.state = Room.ROOM_STATES.MOLE_REVEAL;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(MoleRevealView);
	});

	it('should render episode start', () => {
		room.state = Room.ROOM_STATES.EPISODE_START;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(EpisodeStartView);
	});

	it('should render challenge', () => {
		room.state = Room.ROOM_STATES.IN_CHALLENGE;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(ChallengeView);
	});

	it('should render challenge intermission', () => {
		room.state = Room.ROOM_STATES.CHALLENGE_INTERMISSION;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(ChallengeIntermissionView);
	});

	it('should render pre quiz', () => {
		room.state = Room.ROOM_STATES.PRE_QUIZ_INTERMISSION;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(PreQuizIntermissionView);
	});

	it('should render quiz', () => {
		room.state = Room.ROOM_STATES.IN_QUIZ;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(QuizView);
	});

	it('should render post quiz', () => {
		room.state = Room.ROOM_STATES.POST_QUIZ_INTERMISSION;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(PostQuizIntermissionView);
	});

	it('should render execution', () => {
		room.state = Room.ROOM_STATES.EXECUTION;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(ExecutionView);
	});

	it('should render execution-wrapup', () => {
		room.state = Room.ROOM_STATES.EXECUTION_WRAPUP;
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(ExecutionWrapupView);
	});
});
