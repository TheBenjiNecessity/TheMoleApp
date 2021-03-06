import React from 'react';
import TitlePanel from '../../common/TitlePanel';

import { useTranslation } from 'react-i18next';

const PostQuizIntermissionView = (props) => {
	const { t } = useTranslation('post_quiz_intermission');

	return (
		<TitlePanel titleText={t('title')}>
			<div>
				<p>{t('first_paragraph')}</p>
			</div>
		</TitlePanel>
	);
};

export default PostQuizIntermissionView;
