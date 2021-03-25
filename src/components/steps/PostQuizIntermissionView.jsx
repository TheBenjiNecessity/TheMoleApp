import React from 'react';

import { useTranslation } from 'react-i18next';
import TopBarTitle from '../../common/TopBarTitle';

const PostQuizIntermissionView = (props) => {
	const { t } = useTranslation('post_quiz_intermission');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle>{t('title')}</TopBarTitle>

			<p>{t('first_paragraph')}</p>
		</div>
	);
};

export default PostQuizIntermissionView;
