import React from 'react';
import { shallow } from 'enzyme';
import GameView from '../components/GameView';
import '../locales/i18n';
import LobbyView from '../components/steps/LobbyView';
import roomSample from './samples/room.sample';

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
		const lobbyComp = component.find('[data-testid="lobby"]');

		expect(lobbyComp.type()).toEqual(LobbyView);
	});
});
