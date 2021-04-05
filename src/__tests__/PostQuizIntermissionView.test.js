import React from 'react';
import { mount } from 'enzyme';
import '../locales/i18n';

import PostQuizIntermissionView from '../components/steps/PostQuizIntermissionView';

describe('PostQuizIntermissionView', () => {
	it('should render pre quiz view correctly', () => {
		const mountedComponent = mount(<PostQuizIntermissionView />);
		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render all pre quiz components correctly', () => {
		const mountedComponent = mount(<PostQuizIntermissionView />);
		const paragraphs = mountedComponent.find('p');

		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(paragraphs).toHaveLength(1);
		expect(paragraphs.at(0).contains('first_paragraph')).toBe(true);
	});
});
