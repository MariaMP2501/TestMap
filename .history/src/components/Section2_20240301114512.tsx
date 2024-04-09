import { FunctionComponent } from 'react';
import styles from './modulescss/section2.module.css';
import imgUser from '../assets/imgUser.png';
import imgCheck from '../assets/imgCheck.png';
import imgCar from '../assets/imgCar.png';
import imgDolar from '../assets/imgDolar.png';



const Section2:FunctionComponent = () => {
  	return (
    		<div className={styles.section2}>
      			<div className={styles.frame}>
        				<b className={styles.section2title}>Nous rejoindre</b>
        				<b className={styles.description}>
          					<span className={styles.descriptionTxt}>
            						<span>{`Que vous soyez un `}</span>
            						<span className={styles.chauffeurProfessionnel}>chauffeur professionnel</span>
            						<span>{` ou un `}</span>
            						<span className={styles.chauffeurProfessionnel}>passager</span>
            						<span>  rejoignez notre réseau et bénéficiez d'offres exclusives avec nos partenaires. Faisons de chaque trajet une aventure unique</span>
            						</span>
            						</b>
            						</div>
            						<div className={styles.frame1}>
              							<div className={styles.frame2}>
                								<div className={styles.frame3}>
                  									<div className={styles.etape1}>
													  <img className={styles.imguserIcon} alt="" src={imgUser} style={{ width: '4rem', height: '4rem' }} />
                    										<div className={styles.title}>étape 1</div>
                    										<b className={styles.subtitle}>S’enregistrer</b>
                    										<div className={styles.description1}> Démarrez avec votre inscription rapide</div>
                  									</div>
                  									<div className={styles.tape2}>
													  <img className={styles.imgCheck} alt="" src={imgCheck} style={{ width: '4rem', height: '4rem' }}  />
                    										<div className={styles.title}>étape 2</div>
                    										<b className={styles.subtitle1}>Confirmer</b>
                    										<div className={styles.description2}>Vérifiez et confirmez en un clic</div>
                  									</div>
                								</div>
                								<div className={styles.frame4}>
                  									<div className={styles.tape3}>
													  <img className={styles.imgCar} alt="" src={imgCar} style={{ width: '4rem', height: '4rem' }}  />
                    										<div className={styles.title}>étape 3</div>
                    										<b className={styles.subtitle}>Rouler</b>
                    										<div className={styles.description3}>Mettez-vous en route sans soucis</div>
                  									</div>
                  									<div className={styles.tape3}>
													  <img className={styles.imgDolar} alt="" src={imgDolar} style={{ width: '4rem', height: '4rem' }}  />
                    										<div className={styles.title}>étape 4</div>
                    										<b className={styles.subtitle}>Gagner</b>
                    										<div className={styles.description3}>Atteignez vos objectifs avec nous</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						</div>);
            						};
            						
            						export default Section2;
            						