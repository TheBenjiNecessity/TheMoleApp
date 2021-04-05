import React from 'react';
import { mount, shallow } from 'enzyme';
import '../locales/i18n';

import EpisodeStartView from '../components/steps/EpisodeStartView';

describe('EpisodeStartView', () => {
	let previousEpisode = { finalDescription: 'description' };
	let episodeIndex = 2;

	it('should render pre quiz view correctly', () => {
		const mountedComponent = mount(
			<EpisodeStartView previousEpisode={previousEpisode} episodeIndex={episodeIndex} />
		);
		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render all episode start view components correctly', () => {
		const mountedComponent = mount(
			<EpisodeStartView previousEpisode={previousEpisode} episodeIndex={episodeIndex} />
		);
		const paragraphs = mountedComponent.find('p');

		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(paragraphs).toHaveLength(1);
		expect(paragraphs.at(0).contains('description')).toBe(true);
	});

	it('should render all episode start view components correctly for first episode', () => {
		const mountedComponent = mount(<EpisodeStartView episodeIndex={1} />);
		const paragraphs = mountedComponent.find('p');

		expect(mountedComponent.find('[data-testid="title-text"]').contains('title')).toBe(true);
		expect(paragraphs).toHaveLength(1);
		expect(paragraphs.at(0).contains('first_episode_description')).toBe(true);
	});
});
