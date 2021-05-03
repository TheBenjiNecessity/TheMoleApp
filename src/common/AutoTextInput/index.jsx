import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';

const CHAR_INPUT_TIMES = [ 900, 750, 1000, 800 ];
const CURSOR = '|';
const CURSOR_BLINK_RATE = 500;

const INPUT_STATE = {
	BEFORE: 0,
	DURING: 1,
	AFTER: 2
};

const AutoTextInput = ({ reset, activate, onDone, value, beforeDelay = 3000, afterDelay = 3000, ...otherProps }) => {
	const [ currentCharIndex, setCurrentCharIndex ] = useState(0);
	const [ currentText, setCurrentText ] = useState('');
	const [ cursor, setCursor ] = useState('');
	const [ state, setState ] = useState(INPUT_STATE.BEFORE);

	// If we are currently in the 'DURING' state and we've come to the end of the word then
	// go to the 'AFTER' state
	useEffect(
		() => {
			if (activate && state === INPUT_STATE.DURING && currentCharIndex >= value.length) {
				setState(INPUT_STATE.AFTER);
			}
		},
		[ activate, currentCharIndex, state, value.length ]
	);

	// If we are in the 'BEFORE' state then start a time where at the end of the timer we
	// set the state to 'DURING'
	useEffect(
		() => {
			if (activate && state === INPUT_STATE.BEFORE) {
				const timer = setTimeout(() => {
					setState(INPUT_STATE.DURING);
				}, afterDelay);
				return () => clearTimeout(timer);
			}
		},
		[ activate, afterDelay, state ]
	);

	// If we are in the 'AFTER' state then start a timer where at the end of the time we
	// call the onDone callback
	useEffect(
		() => {
			if (activate && state === INPUT_STATE.AFTER) {
				const timer = setTimeout(() => {
					onDone();
				}, afterDelay);
				return () => clearTimeout(timer);
			}
		},
		[ activate, afterDelay, onDone, state ]
	);

	// If the reset prop is set then clear the current value from the input and go back to
	// the beginning.
	useEffect(
		() => {
			if (reset) {
				setCurrentText('');
				setCurrentCharIndex(0);
				setState(INPUT_STATE.BEFORE);
			}
		},
		[ reset ]
	);

	// If we are in the 'DURING' state and we have characters left to show in the input then
	// start a timer where at the end of the timer we show another character. The timer's length
	// is typically the length of a keystroke.
	useEffect(
		() => {
			if (activate && state === INPUT_STATE.DURING && currentCharIndex < value.length) {
				const timer = setTimeout(() => {
					setCurrentText(value.slice(0, currentCharIndex + 1));
					setCurrentCharIndex(currentCharIndex + 1);
				}, CHAR_INPUT_TIMES[_.random(CHAR_INPUT_TIMES.length)]);
				return () => clearTimeout(timer);
			}
		},
		[ activate, currentCharIndex, state, value ]
	);

	// Show a cursor blinking at the end of the input
	useEffect(
		() => {
			if (!activate) return;

			const timer = setTimeout(() => {
				setCursor(cursor === CURSOR ? '' : CURSOR);
			}, CURSOR_BLINK_RATE);
			return () => clearTimeout(timer);
		},
		[ cursor, activate ]
	);

	return <input type="text" className={styles.input} readOnly value={`${currentText}${cursor}`} {...otherProps} />;
};

export default AutoTextInput;
