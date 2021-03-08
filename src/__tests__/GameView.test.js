import React from 'react';
import { shallow } from 'enzyme';
import GameView from '../components/GameView';
import '../locales/i18n';

describe('MyComponent', () => {
	it('should render correctly', () => {
		const room = {};
		const component = shallow(<GameView room={room} />);

		expect(component).toMatchSnapshot();
	});
});
