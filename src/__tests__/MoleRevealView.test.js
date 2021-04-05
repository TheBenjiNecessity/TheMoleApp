import React from 'react';
import { mount } from 'enzyme';
import '../locales/i18n';

import MoleRevealView from '../components/steps/MoleRevealView';

describe('MoleRevealView', () => {
	it('should render pre quiz view correctly', () => {
		const mountedComponent = mount(<MoleRevealView />);
		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render all pre quiz components correctly', () => {
		const mountedComponent = mount(<MoleRevealView />);
		const paragraphs = mountedComponent.find('p');

		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(paragraphs).toHaveLength(2);
		expect(paragraphs.at(0).contains('first_paragraph')).toBe(true);
		expect(paragraphs.at(1).contains('second_paragraph')).toBe(true);
	});
});
