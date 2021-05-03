import React, { useCallback, useMemo, useState } from 'react';
import * as _ from 'lodash';
import Story from '../../../common/Story';
import AutoTextInput from '../../../common/AutoTextInput';

import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import Logo from '../../../common/Logo';
import clsx from 'clsx';

const EXECUTION_CHAPTERS = {
	INSTRUCTIONS: 0,
	INPUT: 1,
	SUBMITTED_DELAY: 2,
	SUCCESS: 3,
	FAIL: 4
};

const ExecutionView = ({ roomcode, shuffledPlayers, eliminatedPlayer }) => {
	const { t } = useTranslation('execution_view');

	const [ activate ] = useState(true);
	const [ activatePlayerInput, setActivatePlayerInput ] = useState(false);
	const [ resetPlayerInput, setResetPlayerInput ] = useState(false);
	const [ shouldGoNext, setShouldGoNext ] = useState(false);
	const [ currentInputPlayerIndex, setCurrentInputPlayerIndex ] = useState(0);
	const [ shouldShowLogo, setShouldShowLogo ] = useState(true);

	const currentInputPlayer = useMemo(
		() => {
			return shuffledPlayers[currentInputPlayerIndex];
		},
		[ currentInputPlayerIndex, shuffledPlayers ]
	);

	function didEnd() {
		console.log('didEnd');
	}

	const didGoNext = useCallback(
		(previousChapterIndex, nextChapterIndex) => {
			setShouldShowLogo(
				[
					EXECUTION_CHAPTERS.INSTRUCTIONS,
					EXECUTION_CHAPTERS.INPUT,
					EXECUTION_CHAPTERS.SUBMITTED_DELAY
				].indexOf(nextChapterIndex) >= 0
			);

			if (nextChapterIndex === EXECUTION_CHAPTERS.INPUT) {
				setResetPlayerInput(true);
				setActivatePlayerInput(true);
			} else {
				setResetPlayerInput(false);
				setActivatePlayerInput(false);
			}

			if (nextChapterIndex === EXECUTION_CHAPTERS.SUCCESS) {
				setCurrentInputPlayerIndex(currentInputPlayerIndex + 1);
			}
		},
		[ currentInputPlayerIndex ]
	);

	const getNextIndex = useCallback(
		(stepIndex) => {
			if (stepIndex === EXECUTION_CHAPTERS.INSTRUCTIONS) {
				return EXECUTION_CHAPTERS.INPUT;
			}

			if (stepIndex === EXECUTION_CHAPTERS.INPUT) {
				return EXECUTION_CHAPTERS.SUBMITTED_DELAY;
			}

			if (stepIndex === EXECUTION_CHAPTERS.SUBMITTED_DELAY) {
				if (currentInputPlayer.name === eliminatedPlayer.name) {
					return EXECUTION_CHAPTERS.FAIL;
				} else {
					return EXECUTION_CHAPTERS.SUCCESS;
				}
			}

			if (stepIndex === EXECUTION_CHAPTERS.SUCCESS) {
				return EXECUTION_CHAPTERS.INPUT;
			}

			return null;
		},
		[ currentInputPlayer.name, eliminatedPlayer.name ]
	);

	const inputDone = useCallback(() => {
		setResetPlayerInput(true);
		setActivatePlayerInput(false);
		setShouldGoNext(true);
	}, []);

	return (
		<div className={styles.execution}>
			<div className="panel abs-centered-panel hv-centered-panel">
				<Story
					activate={activate}
					goNext={shouldGoNext}
					resetNext={() => setShouldGoNext(false)}
					didGoNext={didGoNext}
					didEnd={didEnd}
					getNextIndex={getNextIndex}
				>
					<Story.Chapter time={3000}>
						<div className={styles['start-paragraph']}>
							<p>{t('first_paragraph')}</p>
						</div>
					</Story.Chapter>
					<Story.Chapter>
						<label className={styles.inputLabel}>
							<span className={styles.text}>Name:</span>
							<span className={styles.input}>
								<AutoTextInput
									value={currentInputPlayer.name}
									reset={resetPlayerInput}
									onDone={inputDone}
									activate={activatePlayerInput}
								/>
							</span>
						</label>
					</Story.Chapter>
					<Story.Chapter time={3000} />
					<Story.Chapter time={5000}>
						<div className={styles.success}>
							<Logo size={400} logoColor="white" />
						</div>
					</Story.Chapter>
					<Story.Chapter time={5000}>
						<div className={styles.fail}>
							<Logo size={400} logoColor="white" />
						</div>
					</Story.Chapter>
				</Story>
			</div>
			{shouldShowLogo && (
				<div className={clsx([ styles.logo, styles['corner-logo'] ])}>
					<Logo size={200} textSize={45} />
				</div>
			)}
		</div>
	);
};

export default ExecutionView;

// What if each player can see a green screen on their device if they have already been cleared
