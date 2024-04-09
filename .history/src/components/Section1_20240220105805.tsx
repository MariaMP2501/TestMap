import { FunctionComponent } from 'react';
import styles from './modulescss/section1.module.css';
// import Resacard from './Resacard';


const Title: FunctionComponent = () => {
	const handleEstimationClick = () => {
		window.open('/estimation', '_blank');
	};
	return (
			<div className={styles.section1}>
				<div className={styles.title} >
					<p>La liberté de</p> <p>se deplacer,</p><p>à portée de clics!</p>
					<div className={styles.ligne} />
				</div>
				{/* <Resacard /> */}
			</div>
	

	);
};

export default Title;
