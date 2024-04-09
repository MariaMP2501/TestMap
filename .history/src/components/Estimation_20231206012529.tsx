import React from 'react';
import Navbar from './Navbar';
import styles from './modulescss/estimation.module.css';
import { LoopIcon, Calendar, PersonIcon, Clock } from '../assets/index.js';
import comfortCar from '../assets/comfortCar.png';
import vipCar from '../assets/vipCar.png';
import taxiCar from '../assets/taxiCar.png';
import vanCar from '../assets/vanCar.png';





const Estimation: React.FunctionComponent = () => {
	return (
		<div>
			<Navbar />
			<div className={styles.estimation}>
				<div className={styles.cardgauche1}>
					<div className={styles.cardCommander} />
					{/* VIP */}
					<div className={styles.cardgaucheChildvip} />
					<img className={styles.vipCar} alt="" src={vipCar} />
					<div className={styles.vip}>VIP</div>
					<div className={styles.div6}>4</div>
					<div className={styles.div5}>18€</div>
					<div className={styles.dposePrvue13383}><Clock /> Dépose prévue 13:38</div>



					{/*Taxi*/}
					<div className={styles.cardSelected} />
					<div className={styles.cardgaucheChild1} />
					<img className={styles.taxiCar} alt="" src={taxiCar} />
					<div className={styles.taxi}>Taxi</div>
					<div className={styles.div7}>4</div>
					<div className={styles.div4}>4.87€</div>
					<div className={styles.dposePrvue13351}><Clock /> Dépose prévue 13:35</div>



					{/*comfort*/}
					<div className={styles.cardgris} />
					<img className={styles.comfortCar} alt="" src={comfortCar} />
					<div className={styles.comfort}>Comfort</div>
					<div className={styles.div1}>4</div>
					<div className={styles.div}>12€</div>
					<div className={styles.dposePrvue13382}><Clock /> Dépose prévue 13:38</div>



					{/* van */}
					<div className={styles.cardgaucheItem} />
					<img className={styles.vanCar} alt="" src={vanCar} />
					<div className={styles.van}>Van</div>
					<div className={styles.div2}>6-8</div>
					<div className={styles.div3}>24€</div>
					<div className={styles.dposePrvue13391}> <Clock /> Dépose prévue 13:39 </div>


					<div className={styles.commander}>
						<div className={styles.rectangleParent}>
							<div className={styles.groupChild} />
							<div className={styles.groupItem} />
						</div>
						<div className={styles.commander1}>
							<span className={styles.c}>Commander</span>
						</div>
					</div>
				</div>

				 <div className={styles.carddroiteIconContainer}>
            <div className={styles.carddroiteIcon} />
           
          </div>
				<div className={styles.cardCommander}>
					<div className={styles.cardCommanderChild} />
					<div className={styles.cardCommanderItem} />
					<div className={styles.cardCommanderInner} />
					<div className={styles.cardCommanderChild1} />
					<div className={styles.cardCommanderChild2} />
					<div className={styles.palaisGarnier}>Palais Garnier</div>
					<div className={styles.div8}><PersonIcon />2</div>
					<div className={styles.div9}><Calendar />{`25/12/2023 `}</div>
					<div className={styles.palaisRoyal}>Palais Royal</div>
					<div className={styles.btnRefresh}>
						<div className={styles.btnRefreshChild} />
						<div className={styles.actualiser}>Actualiser <LoopIcon /></div>

					</div>
				</div>
			</div>

		</div>
	);
};

export default Estimation;
