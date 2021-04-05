import React from 'react';
import { mount } from 'enzyme';
import '../locales/i18n';
import WelcomeView from '../components/steps/WelcomeView';
import roomSample from './samples/room.sample';
import AgreePanel from '../common/AgreePanel';
import Room from '../models/room.model';

describe('WelcomeView', () => {
	let room = {};

	beforeEach(() => {
		room = roomSample.sampleRoom({ state: Room.ROOM_STATES.WELCOME });
	});

	it('should render welcome correctly', () => {
		const mountedComponent = mount(<WelcomeView room={room} />);
		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render all welcome components correctly', () => {
		const mountedComponent = mount(<WelcomeView room={room} />);
		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(mountedComponent.find('[data-testid="agree-panel"]').type()).toBe(AgreePanel);
	});
});
