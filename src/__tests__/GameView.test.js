import React from 'react';
import { mount, shallow } from 'enzyme';
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

describe('MyComponent', () => {
	let room = {};

	beforeEach(() => {
		room = roomSample.sampleRoom();
	});

	it('should render correctly', () => {
		const component = shallow(<GameView room={room} />);
		expect(component).toMatchSnapshot();
	});

	it('should render lobby', () => {
		room.state = 'lobby';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(LobbyView);
	});

	it('should render welcome', () => {
		room.state = 'game-welcome';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(WelcomeView);
	});

	it('should render mole reveal', () => {
		room.state = 'mole-reveal';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(MoleRevealView);
	});

	it('should render episode start', () => {
		room.state = 'episode-start';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(EpisodeStartView);
	});

	it('should render challenge', () => {
		room.state = 'in-challenge';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(ChallengeView);
	});

	it('should render challenge intermission', () => {
		room.state = 'challenge-intermission';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(ChallengeIntermissionView);
	});

	it('should render pre quiz', () => {
		room.state = 'pre-quiz-intermission';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(PreQuizIntermissionView);
	});

	it('should render quiz', () => {
		room.state = 'in-quiz';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(QuizView);
	});

	it('should render post quiz', () => {
		room.state = 'post-quiz-intermission';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(PostQuizIntermissionView);
	});

	it('should render execution', () => {
		room.state = 'execution';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(ExecutionView);
	});

	it('should render execution-wrapup', () => {
		room.state = 'execution-wrapup';
		const component = shallow(<GameView room={room} />);
		expect(component.type()).toEqual(ExecutionWrapupView);
	});
});
