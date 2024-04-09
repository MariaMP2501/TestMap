import { FunctionComponent } from 'react';



const Section1: FunctionComponent = () => {
	// const handleEstimationClick = () => {
	// 	window.open('/estimation', '_blank');
	// };
	return (
		<div className={styles.section1}>
      <p className={styles.title}>La liberté de se deplacer à portée de clics!</p>
        <Resacard />
      </div>
    </div>


	);
};

export default Section1;
