import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';

const CHAR_INPUT_TIMES = [ 900, 750, 1000, 800 ];
const CURSOR = '|';
const CURSOR_BLINK_RATE = 500;

const TextInput = ({ reset, activate, onDone, value, ...otherProps }) => {
	const [ currentCharIndex, setCurrentCharIndex ] = useState(0);
	const [ currentText, setCurrentText ] = useState('');
	const [ cursor, setCursor ] = useState('');

	useEffect(
		() => {
			if (currentCharIndex >= value.length) {
				onDone();
			}
		},
		[ currentCharIndex, onDone, value.length ]
	);

	useEffect(
		() => {
			if (reset) {
				setCurrentCharIndex(0);
			}
		},
		[ reset ]
	);

	useEffect(
		() => {
			if (currentCharIndex >= value.length || !activate) return;

			const timer = setTimeout(() => {
				setCurrentText(value.slice(0, currentCharIndex + 1));
				setCurrentCharIndex(currentCharIndex + 1);
			}, CHAR_INPUT_TIMES[_.random(CHAR_INPUT_TIMES.length)]);
			return () => clearTimeout(timer);
		},
		[ currentCharIndex, activate, value ]
	);

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

export default TextInput;
