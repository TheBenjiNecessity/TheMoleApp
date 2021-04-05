import React from 'react';
import { mount } from 'enzyme';
import '../locales/i18n';

import roomSample from './samples/room.sample';
import QuizView from '../components/steps/QuizView';
import PlayerList from '../common/PlayerList';
import Room from '../models/room.model';

describe('QuizView', () => {
	const room = roomSample.sampleRoom({ state: Room.ROOM_STATES.IN_QUIZ });

	it('should render quiz view correctly', () => {
		const mountedComponent = mount(<QuizView room={room} />);
		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render all quiz components correctly', () => {
		const mountedComponent = mount(<QuizView room={room} />);
		const paragraphs = mountedComponent.find('p');

		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(mountedComponent.find('[data-testid="player-list"]').type()).toBe(PlayerList);
		expect(paragraphs).toHaveLength(2);
		expect(paragraphs.at(0).contains('first_paragraph')).toBe(true);
		expect(paragraphs.at(1).contains('players_done')).toBe(true);
	});
});
