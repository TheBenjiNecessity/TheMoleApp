import React, { useCallback, useEffect, useState } from 'react';

import Chapter from './Chapter';

/**
 * Show a series of 
 * @param {boolean} activate - Story will only execute if activate is true, will pause if false.
 * @param {boolean} goNext - A message from parent to go to the next step programmatically.
 * @param {callback} didGoNext - Called whenever this component goes to the next step (sends parameters for previous stepIndex and next stepIndex)
 * @param {callback} didEnd - Called when the story is over
 * @param {callback} getNextIndex - Function provided by the parent component telling Story what index to go to on moving next.
 * @returns 
 */

const Story = ({ activate, goNext, resetNext, didGoNext, didEnd, getNextIndex = (index) => index + 1, children }) => {
	const childArray = React.Children.toArray(children);
	const [ currentChapterIndex, setCurrentChapterIndex ] = useState(0);

	const goToNextStep = useCallback(
		() => {
			const nextChapterIndex = getNextIndex(currentChapterIndex);

			if (!nextChapterIndex || nextChapterIndex >= childArray.length) {
				didEnd();
			} else {
				setCurrentChapterIndex(nextChapterIndex);
				didGoNext(currentChapterIndex, nextChapterIndex);
			}
		},
		[ childArray.length, currentChapterIndex, didEnd, didGoNext, getNextIndex ]
	);

	useEffect(
		() => {
			if (goNext) {
				goToNextStep();
				resetNext();
			}
		},
		[ goNext, goToNextStep, resetNext ]
	);

	// Start the next timer if there is one
	useEffect(
		() => {
			const { time } = childArray[currentChapterIndex].props;

			if (activate && time) {
				const timer = setTimeout(() => {
					goToNextStep();
				}, time);
				return () => clearTimeout(timer);
			}

			return () => {};
		},
		[ activate, childArray, currentChapterIndex, goToNextStep ]
	);

	return childArray[currentChapterIndex];
};

Story.Chapter = Chapter;

export default Story;
