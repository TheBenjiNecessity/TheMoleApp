import React, { Fragment } from 'react';

import './title-panel.scss';

const TitlePanel = ({ titleText, children }) => {
	return (
		<Fragment>
			<div className="panel centered-panel centered-panel-medium next-panel">
				{titleText && (
					<Fragment>
						<h1 className="title col-sm-12">{titleText}</h1>
						<hr />
					</Fragment>
				)}
				{children}
			</div>
		</Fragment>
	);
};

export default TitlePanel;
