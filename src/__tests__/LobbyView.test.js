import React from 'react';
import { mount } from 'enzyme';
import '../locales/i18n';
import LobbyView from '../components/steps/LobbyView';
import roomSample from './samples/room.sample';
import PlayerList from '../common/PlayerList';
import AgreePanel from '../common/AgreePanel';

describe('LobbyView', () => {
	let room = {};

	beforeEach(() => {
		room = roomSample.sampleRoom(10, 'lobby');
	});

	it('should render lobby correctly', () => {
		const component = mount(<LobbyView room={room} />);

		expect(component).toMatchSnapshot();
	});

	it('should render all lobby components correctly', () => {
		const component = mount(<LobbyView room={room} />);

		expect(component.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(component.find('[data-testid="roomcode-label"]').contains('roomcode')).toBe(true);
		expect(component.find('[data-testid="roomcode"]').contains('TEST')).toBe(true);
		expect(component.find('[data-testid="player-list-label"]').contains('player_plural')).toBe(true);
		expect(component.find('[data-testid="player-list"]').type()).toBe(PlayerList);
		expect(component.find('[data-testid="agree-panel"]').type()).toBe(AgreePanel);
	});

	it('should render no roomcode correctly', () => {
		room.roomcode = null;
		const component = mount(<LobbyView room={room} />);

		expect(component.find('[data-testid="roomcode"]').contains('common:no-code')).toBe(true);
	});
});
