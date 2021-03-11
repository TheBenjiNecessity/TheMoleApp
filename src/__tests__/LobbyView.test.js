import React from 'react';
import { mount, shallow } from 'enzyme';
import '../locales/i18n';
import LobbyView from '../components/steps/LobbyView';
import roomSample from './samples/room.sample';

describe('MyComponent', () => {
	let room = {};

	beforeEach(() => {
		room = roomSample.sampleRoom(10, 'lobby');
	});

	it('should render lobby correctly', () => {
		const component = shallow(<LobbyView room={room} />);

		expect(component).toMatchSnapshot();
	});
});
