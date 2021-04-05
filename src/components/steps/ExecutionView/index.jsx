import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as _ from 'lodash';
import roomSocketService from '../../../services/socket-services/room-socket.service';
import View from './view';

const EXECUTION_STATE = {
	START: 0, // Before showing the player input (Showing a message about seeing red/green screen)
	PRE_SUBMIT_WAITING: 1, // Player input is showing but typing hasn't started
	SUBMITTING: 2, // Characters are being typed into the input
	POST_SUBMIT_WAITING: 3, // Typing has finished but input hasn't been submitted yet
	LOADING_RESULTS: 4, // Typing has finished and the input has been submited hiding the input (waiting for result)
	SHOWING_RESULTS: 5 // The Red/Green results screen is showing
};

const CHAR_INPUT_TIMES = [ 900, 750, 1000, 800 ];

const ExecutionView = ({ roomcode, shuffledPlayers, eliminatedPlayer }) => {
	const allBeforeEl = useMemo(
		() => {
			return _.slice(
				shuffledPlayers,
				0,
				_.findIndex(shuffledPlayers, (player) => player.name === eliminatedPlayer.name) + 1
			);
		},
		[ eliminatedPlayer, shuffledPlayers ]
	);

	const [ currentShuffledPlayers, setCurrentShuffledPlayers ] = useState(allBeforeEl);
	const [ currentInputPlayer, setCurrentInputPlayer ] = useState(shuffledPlayers[0]);
	const [ currentCharacterIndex, setCurrentCharacterIndex ] = useState(-1);
	const [ currentTick, setCurrentTick ] = useState(0);
	const [ currentState, setCurrentState ] = useState(EXECUTION_STATE.START);
	const [ inputValue, setInputValue ] = useState('');
	const [ cursor, setCursor ] = useState('|');

	const setNextPlayer = useCallback(
		() => {
			if (currentShuffledPlayers.length >= 2) {
				const newShuffledPlayers = currentShuffledPlayers.slice(1);

				setCurrentState(EXECUTION_STATE.PRE_SUBMIT_WAITING);
				setCurrentInputPlayer(newShuffledPlayers[0]);
				setCurrentShuffledPlayers(newShuffledPlayers);
				setCurrentTick(15);
				setCurrentCharacterIndex(0);
				setInputValue('');
			} else {
				roomSocketService.moveNext(roomcode);
			}
		},
		[ currentShuffledPlayers, roomcode ]
	);

	useEffect(
		() => {
			const timer = setTimeout(() => {
				if (currentTick < 15) {
					setCurrentState(EXECUTION_STATE.START);
				} else if (currentTick >= 15 && currentTick < 20) {
					setCurrentState(EXECUTION_STATE.PRE_SUBMIT_WAITING);
				} else if (currentTick >= 20 && currentTick < 30) {
					setCurrentState(EXECUTION_STATE.SUBMITTING);
				} else if (currentTick >= 30 && currentTick < 35) {
					setCurrentState(EXECUTION_STATE.POST_SUBMIT_WAITING);
				} else if (currentTick >= 35 && currentTick < 40) {
					setCurrentState(EXECUTION_STATE.LOADING_RESULTS);
				} else if (currentTick >= 40 && currentTick < 45) {
					setCurrentState(EXECUTION_STATE.SHOWING_RESULTS);
				} else if (currentTick >= 45) {
					setNextPlayer();
				}

				if (currentState !== EXECUTION_STATE.SUBMITTING && currentTick < 45) {
					setCurrentTick(currentTick + 1);
				}
			}, 1000);
			return () => clearTimeout(timer);
		},
		[ currentState, currentTick, setNextPlayer ]
	);

	useEffect(
		() => {
			if (currentState === EXECUTION_STATE.SUBMITTING) {
				if (currentCharacterIndex >= currentInputPlayer.name.length) {
					setCurrentTick(30);
				} else {
					const randomInterval = CHAR_INPUT_TIMES[_.random(CHAR_INPUT_TIMES.length)];
					const timer = setTimeout(() => {
						setInputValue(currentInputPlayer.name.slice(0, currentCharacterIndex + 1));
						setCurrentCharacterIndex(currentCharacterIndex + 1);
					}, randomInterval);
					return () => clearTimeout(timer);
				}
			}
		},
		[ currentCharacterIndex, currentInputPlayer.name, currentState, setNextPlayer ]
	);

	useEffect(
		() => {
			const timer = setTimeout(() => {
				setCursor(cursor === '|' ? '' : '|');
			}, 500);
			return () => clearTimeout(timer);
		},
		[ cursor ]
	);

	return (
		<View
			currentState={currentState}
			wasExecuted={eliminatedPlayer.name === currentInputPlayer.name}
			inputValue={`${inputValue}${cursor}`}
		/>
	);
};

export default ExecutionView;

// What if each player can see a green screen on their device if they have already been cleared
