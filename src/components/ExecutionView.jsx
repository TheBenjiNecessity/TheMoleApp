import React, { useMemo, useState } from 'react';
import * as _ from 'lodash';

const EXECUTION_STATE = {
	START: 0, // Before showing the player input (Showing a message about seeing red/green screen)
	PRE_SUBMIT_WAITING: 1, // Player input is showing but typing hasn't started
	SUBMITTING: 2, // Characters are being typed into the input
	POST_SUBMIT_WAITING: 3, // Typing has finished but input hasn't been submitted yet
	LOADING_RESULTS: 4, // Typing has finished and the input has been submited hiding the input (waiting for result)
	SHOWING_RESULTS: 5 // The Red/Green results screen is showing
};

const NEXT_STATE = [
	{
		state: EXECUTION_STATE.PRE_SUBMIT_WAITING,
		timeout: 20000
	},
	{
		state: EXECUTION_STATE.SUBMITTING,
		timeout: 5000
	},
	{
		state: EXECUTION_STATE.POST_SUBMIT_WAITING,
		timeout: 0
	},
	{
		state: EXECUTION_STATE.LOADING_RESULTS,
		timeout: 5000
	},
	{
		state: EXECUTION_STATE.SHOWING_RESULTS,
		timeout: 5000
	},
	{
		state: EXECUTION_STATE.PRE_SUBMIT_WAITING,
		timeout: 5000
	}
];

const CHAR_INPUT_TIMES = [ 100, 250, 500, 1000 ];

const ExecutionView = ({ players, eliminatedPlayer, currentPlayer }) => {
	// Any messages to tell the players about what's going on will be in the post quiz step
	// Randomize the list of players
	// For each player in the random list:
	// 		Wait a few moments
	//		Show an input where the player's name is entered one character at a time
	//			(This should be random and varied like a person typing in the letters)
	//		What a few moments
	//		Show the input being 'submitted' by hiding the input and showing a blank screen
	//			(blank means only show the background image)
	//		What a few moments (the amount of time should be random to ratch up tension)
	//		Show a red/green screen based on whether the player was eliminated
	//		if the screen was green:
	//			Wait a few moments
	//			hide the green screen
	//			Wait a few moments
	//			show the input again
	//		else if the screen was red
	//			Wait a few moments
	//			hide the red screen
	//			Wait a few moments
	//			move to the execution wrap up

	const [ playerList, setPlayerList ] = useState(_.shuffle(players));
	const [ currentInputPlayer, setCurrentInputPlayer ] = useState(null);
	const [ currentCharacterIndex, setCurrentCharacterIndex ] = useState(-1);
	const [ currentCharacterTimeout, setCurrentCharacterTimeout ] = useState(getRandomInputTime());
	const [ currentState, setCurrentState ] = useState(EXECUTION_STATE.START);
	const [ inputValue, setInputValue ] = useState('');

	const outerClassName = useMemo(
		() => {
			let result = 'execution';
			if (currentState === EXECUTION_STATE.SHOWING_RESULTS) {
				result += ' execution-end';
				const hasSucceeded = currentInputPlayer.name !== eliminatedPlayer.name;
				result += hasSucceeded ? ' success' : ' fail';
			}

			return result;
		},
		[ currentInputPlayer, currentState, eliminatedPlayer ]
	);

	function getRandomInputTime() {
		return CHAR_INPUT_TIMES[_.random(CHAR_INPUT_TIMES.length)];
	}

	if (currentPlayer) {
		return (
			<div className={outerClassName}>
				{currentState === EXECUTION_STATE.START ? (
					<p>
						In a moment, each player's name will be input into the host computer one at a time. If you see a
						green screen after your name has been entered you are safe for this episode. If, however, you
						see a red screen after your name has been entered then you have been eliminated from the game.
					</p>
				) : (
					<p>Watch the host screen for which player is eliminated.</p>
				)}
			</div>
		);
	} else {
		const next = NEXT_STATE[currentState];
		if (next.timeout) {
			setTimeout(() => {
				setCurrentState(next.state);
			}, next.timeout);
		} else if (currentState === EXECUTION_STATE.SUBMITTING) {
			setTimeout(() => {
				setCurrentCharacterIndex(currentCharacterIndex + 1);
				setInputValue(currentInputPlayer.name.slice(0, currentCharacterIndex + 1));
				setCurrentCharacterTimeout(getRandomInputTime());
			}, currentCharacterTimeout);
		}

		return (
			<div className={outerClassName}>
				{currentState === EXECUTION_STATE.START && (
					<p>
						In a moment, each player's name will be input into the input box one at a time. If you see a
						green screen after your name has been entered you are safe for this episode. If, however, you
						see a red screen after your name has been entered then you have been eliminated from the game.
					</p>
				)}
				{_.includes(
					[
						EXECUTION_STATE.PRE_SUBMIT_WAITING,
						EXECUTION_STATE.SUBMITTING,
						EXECUTION_STATE.POST_SUBMIT_WAITING
					],
					currentState
				) && <input type="text" ref={(c) => (this.myInputRef = c)} value={inputValue} />}
			</div>
		);
	}
};

export default ExecutionView;

// What if each player can see a green screen on their device if they have already been cleared
