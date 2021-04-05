import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import * as _ from 'lodash';

import TextInput from '../../../common/TextInput';
import Logo from '../../../common/Logo';

import styles from './styles.module.scss';

const EXECUTION_STATE = {
	START: 0, // Before showing the player input (Showing a message about seeing red/green screen)
	PRE_SUBMIT_WAITING: 1, // Player input is showing but typing hasn't started
	SUBMITTING: 2, // Characters are being typed into the input
	POST_SUBMIT_WAITING: 3, // Typing has finished but input hasn't been submitted yet
	LOADING_RESULTS: 4, // Typing has finished and the input has been submited hiding the input (waiting for result)
	SHOWING_RESULTS: 5 // The Red/Green results screen is showing
};

const View = ({ currentState, wasExecuted, inputValue }) => {
	const { t } = useTranslation('execution_view');

	const showInput = _.includes(
		[ EXECUTION_STATE.PRE_SUBMIT_WAITING, EXECUTION_STATE.SUBMITTING, EXECUTION_STATE.POST_SUBMIT_WAITING ],
		currentState
	);

	return (
		<div
			className={clsx([
				styles.execution,
				currentState === EXECUTION_STATE.SHOWING_RESULTS && styles['execution-end'],
				wasExecuted && styles.fail,
				!wasExecuted && styles.success
			])}
		>
			<div className="panel abs-centered-panel hv-centered-panel">
				{currentState === EXECUTION_STATE.START && (
					<div className={styles['start-paragraph']}>
						<p>{t('first_paragraph')}</p>
					</div>
				)}
				{showInput && (
					<label className={styles.inputLabel}>
						<span className={styles.text}>Name:</span>
						<span className={styles.input}>
							<TextInput value={inputValue} />
						</span>
					</label>
				)}
				{currentState === EXECUTION_STATE.SHOWING_RESULTS && (
					<div className={clsx([ wasExecuted && styles.fail, !wasExecuted && styles.success ])}>
						<Logo size={400} logoColor="white" />
					</div>
				)}
			</div>
			{currentState !== EXECUTION_STATE.SHOWING_RESULTS && (
				<div className={clsx([ styles.logo, styles['corner-logo'] ])}>
					<Logo size={200} textSize={45} />
				</div>
			)}
		</div>
	);
};

export default View;
