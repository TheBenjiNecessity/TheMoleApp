import React from 'react';
import { mount, shallow } from 'enzyme';
import '../locales/i18n';

import ExecutionWrapupView from '../components/steps/ExecutionWrapupView';

describe('ExecutionWrapupView', () => {
	let eliminatedPlayer = { name: 'test1' };

	it('should render pre quiz view correctly', () => {
		const mountedComponent = mount(<ExecutionWrapupView eliminatedPlayer={eliminatedPlayer} />);
		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render all pre quiz components correctly', () => {
		const mountedComponent = mount(<ExecutionWrapupView eliminatedPlayer={eliminatedPlayer} />);
		const paragraphs = mountedComponent.find('p');

		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(paragraphs).toHaveLength(1);
		expect(paragraphs.at(0).contains('executed_player_0')).toBe(true);
	});
});
