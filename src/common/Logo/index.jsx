import { Fingerprint } from '@material-ui/icons';
import { Trans } from 'react-i18next';
import styles from './styles.module.scss';

const Logo = ({ size, textSize, logoColor, textColor }) => {
	const moleTextSize = parseInt(textSize);
	const theTextSize = Math.floor(moleTextSize * 0.8);

	return (
		<div className={styles.logo}>
			{textSize && (
				<div className={styles.title} style={{ color: textColor }}>
					<Trans i18nKey="title_logo">
						.
						<div className={styles.the} style={{ fontSize: theTextSize + 'px' }}>
							The
						</div>
						<div className={styles.mole} style={{ fontSize: moleTextSize + 'px' }}>
							Mole
						</div>
					</Trans>
				</div>
			)}
			<div className={styles.svg} style={{ color: logoColor }}>
				<Fingerprint style={{ fontSize: size }} />
			</div>
		</div>
	);
};

export default Logo;
