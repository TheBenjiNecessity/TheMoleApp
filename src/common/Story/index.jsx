import React, { useEffect, useState } from 'react';

import Chapter from './Chapter';

/**
 * Show a series of 
 * @param {*} param0 
 * @returns 
 */
const Story = ({ start, goNext, onNext, onEnd, whereNext = (index) => index + 1, children }) => {
	const childArray = React.Children.toArray(children);
	const [ hasStarted, setHasStarted ] = useState(false);
	const [ currentChapterIndex, setCurrentChapterIndex ] = useState(0);

	// Check if the story has started based on a message from parent
	useEffect(
		() => {
			if (start) {
				setHasStarted(true);
			}
		},
		[ start ]
	);

	// Move to the next step based on a message from parent
	useEffect(
		() => {
			if (goNext) {
				const nextStepIndex = whereNext(currentChapterIndex);
				if (nextStepIndex < childArray.length - 1) {
					setCurrentChapterIndex(whereNext(currentChapterIndex));
					onNext(false);
				} else {
					onEnd();
				}
			}
		},
		[ childArray, currentChapterIndex, goNext, onEnd, onNext, whereNext ]
	);

	// Start the next timer if there is one
	useEffect(
		() => {
			const { time } = childArray[currentChapterIndex].props;
			if (hasStarted && time) {
				const timer = setTimeout(() => {
					onNext(true);
				}, time);
				return () => clearTimeout(timer);
			}
		},
		[ childArray, currentChapterIndex, hasStarted, onNext ]
	);

	return childArray[currentChapterIndex];
};

Story.Chapter = Chapter;

export default Story;
