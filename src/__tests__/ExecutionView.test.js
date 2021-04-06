import React from 'react';
import { shallow } from 'enzyme';
import '../locales/i18n';

import View, { EXECUTION_STATE } from '../components/steps/ExecutionView/view';

describe('ExecutionView', () => {
	it('should render execution view correctly {currentState: EXECUTION_STATE.START, wasExecuted=false inputValue=test}', () => {
		const mountedComponent = shallow(
			<View currentState={EXECUTION_STATE.START} wasExecuted={false} inputValue={'test'} />
		);

		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render execution view correctly {currentState: EXECUTION_STATE.PRE_SUBMIT_WAITING, wasExecuted=false inputValue=test}', () => {
		const mountedComponent = shallow(
			<View currentState={EXECUTION_STATE.PRE_SUBMIT_WAITING} wasExecuted={false} inputValue={'test'} />
		);

		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render execution view correctly {currentState: EXECUTION_STATE.SUBMITTING, wasExecuted=false inputValue=test}', () => {
		const mountedComponent = shallow(
			<View currentState={EXECUTION_STATE.SUBMITTING} wasExecuted={false} inputValue={'test'} />
		);

		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render execution view correctly {currentState: EXECUTION_STATE.POST_SUBMIT_WAITING, wasExecuted=false inputValue=test}', () => {
		const mountedComponent = shallow(
			<View currentState={EXECUTION_STATE.POST_SUBMIT_WAITING} wasExecuted={false} inputValue={'test'} />
		);

		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render execution view correctly {currentState: EXECUTION_STATE.LOADING_RESULTS, wasExecuted=false inputValue=test}', () => {
		const mountedComponent = shallow(
			<View currentState={EXECUTION_STATE.LOADING_RESULTS} wasExecuted={false} inputValue={'test'} />
		);

		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render execution view correctly {currentState: EXECUTION_STATE.SHOWING_RESULTS, wasExecuted=false inputValue=test}', () => {
		const mountedComponent = shallow(
			<View currentState={EXECUTION_STATE.SHOWING_RESULTS} wasExecuted={false} inputValue={'test'} />
		);

		expect(mountedComponent).toMatchSnapshot();
	});

	it('should render execution view correctly {currentState: EXECUTION_STATE.SHOWING_RESULTS, wasExecuted=true inputValue=test}', () => {
		const mountedComponent = shallow(
			<View currentState={EXECUTION_STATE.SHOWING_RESULTS} wasExecuted={true} inputValue={'test'} />
		);

		expect(mountedComponent).toMatchSnapshot();
	});
});
