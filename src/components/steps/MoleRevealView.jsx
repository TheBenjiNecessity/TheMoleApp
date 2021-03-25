import React from 'react';

import { useTranslation } from 'react-i18next';
import TopBarTitle from '../../common/TopBarTitle';

const MoleRevealView = (props) => {
	const { t } = useTranslation('mole_reveal_view');

	return (
		<div className="panel centered-panel centered-panel-medium next-panel">
			<TopBarTitle>{t('title')}</TopBarTitle>

			<p>{t('first_paragraph')}</p>

			<p>{t('second_paragraph')}</p>
		</div>
	);
};

export default MoleRevealView;
