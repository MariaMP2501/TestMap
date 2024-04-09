import { FunctionComponent } from 'react';



const Section1: FunctionComponent = () => {
	// const handleEstimationClick = () => {
	// 	window.open('/estimation', '_blank');
	// };
	return (
		<div className={styles.section1}>
			<img className={styles.card} src={logo} alt="home" />
      <p className={styles.title}>La liberté de se deplacer à portée de clics!</p>
      <div className={styles.resacardContainer}> {/* Utilisez un conteneur pour centrer le Resacard */}
        <Resacard />
      </div>
    </div>


	);
};

export default Section1;
