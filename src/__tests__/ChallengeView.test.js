import React from 'react';
import { shallow } from 'enzyme';
import '../locales/i18n';

import ChallengeView from '../components/steps/ChallengeView';

describe('ChallengeView', () => {
	it('should render challenge view correctly', () => {
		const challenge = { type: 'outandsafe' };
		const mountedComponent = shallow(<ChallengeView challenge={challenge} />);

		expect(mountedComponent).toMatchSnapshot();
	});
});
