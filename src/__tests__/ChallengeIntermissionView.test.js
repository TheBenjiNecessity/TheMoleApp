import React from 'react';
import { mount } from 'enzyme';
import '../locales/i18n';

import ChallengeIntermissionView from '../components/steps/ChallengeIntermissionView';

describe('ChallengeIntermissionView', () => {
	let intermissionText = 'intermissionText';

	it('should render pre quiz view correctly', () => {
		const mountedComponent = mount(<ChallengeIntermissionView />);
		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render all challenge intermission components correctly', () => {
		const mountedComponent = mount(<ChallengeIntermissionView intermissionText={intermissionText} />);
		const paragraphs = mountedComponent.find('p');

		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(paragraphs).toHaveLength(1);
		expect(paragraphs.at(0).contains(intermissionText)).toBe(true);
	});

	it('should render all challenge intermission components correctly with generic text', () => {
		const mountedComponent = mount(<ChallengeIntermissionView />);
		const paragraphs = mountedComponent.find('p');

		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(paragraphs).toHaveLength(1);
		expect(paragraphs.at(0).contains('generic_text')).toBe(true);
	});
});
