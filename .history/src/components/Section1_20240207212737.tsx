import { FunctionComponent } from 'react';
import styles from './modulescss/section1.module.css';
import Resacard from './Resacard';


const Title: FunctionComponent = () => {
	const handleEstimationClick = () => {
		window.open('/estimation', '_blank');
	};
	return (
			<div className={styles.section1}>
				<div className={styles.title} >
					<p>LA LIBERTÉ DE SE DEPLACER,</p>
					<p >À PORTEÉ DE CLICS !</p>
					<div className={styles.subtitle}>{`Réservez dès maintenant `}</div>
					<div className={styles.ligne} />
					<Resacard />
				</div>
				
			</div>
	

	);
};

export default Title;
