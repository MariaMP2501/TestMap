import React, { FunctionComponent } from 'react';
import imgUser from '../assets/imgUser.png';
import imgCheck from '../assets/imgCheck.png';
import imgCar from '../assets/imgCar.png';
import imgDolar from '../assets/imgDolar.png';

const section2Styles = {
  section2: {
    position: 'relative',
    backgroundColor: '#000',
    width: '100%',
    height: '56rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '139px 146px',
    boxSizing: 'border-box',
    gap: '78px',
    textAlign: 'left',
    fontSize: '38px',
    color: '#fdad00',
    fontFamily: 'Anybody',
  },
  section2title: {
    position: 'relative',
    letterSpacing: '-0.02em',
    lineHeight: '56px',
    display: 'inline-block',
    height: '56px',
    marginLeft: '23px',
  },
  chauffeurProfessionnel: {
    color: '#fdad00',
  },
  descriptionTxt: {
    lineBreak: 'anywhere',
    width: '100%',
  },
  description: {
    position: 'undefined',
    fontSize: '26px',
    letterSpacing: '-0.02em',
    lineHeight: '26px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    width: '1460px',
    height: '52px',
    marginRight: '14px',
    color: '#fff',
  },
  frame: {
    width: '1474px',
    overflow: 'hidden',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '52px',
  },
  title: {
    position: 'relative',
    lineHeight: '20px',
    textTransform: 'capitalize',
    fontWeight: '600',
    textAlign: 'left',
  },
  subtitle: {
    marginTop: '5%',
    position: 'relative',
    fontSize: '32px',
    lineHeight: '24px',
    display: 'inline-block',
    fontFamily: 'Anybody',
    width: '256px',
  },
  subtitle1: {
    marginTop: '5%',
    position: 'relative',
    fontSize: '32px',
    lineHeight: '24px',
    display: 'inline-block',
    fontFamily: 'Anybody',
    width: '256px',
  },
  description1: {
    position: 'relative',
    lineHeight: '26px',
    fontFamily: 'Red Hat Text',
    display: 'inline-block',
    width: '314px',
    height: '71px',
    flexShrink: '0',
  },
  description2: {
    position: 'relative',
    lineHeight: '26px',
    fontFamily: 'Red Hat Text',
    display: 'inline-block',
    width: '314px',
    height: '71px',
    flexShrink: '0',
  },
  description3: {
    position: 'relative',
    lineHeight: '26px',
    fontFamily: 'Red Hat Text',
    display: 'inline-block',
    width: '314px',
    height: '71px',
    flexShrink: '0',
  },
  etape1: {
    width: '314px',
    height: '367px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '17px',
  },
  tape2: {
    width: '268px',
    height: '367px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '17px',
  },
  frame3: {
    width: '720px',
    height: '367px',
    overflow: 'hidden',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '138px',
  },
  tape3: {
    width: '256px',
    height: '367px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '17px',
  },
  frame4: {
    width: '697px',
    height: '367px',
    overflow: 'hidden',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '185px',
  },
  frame2: {
    width: '1590px',
    height: '367px',
    overflow: 'hidden',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '173px',
  },
  frame1: {
    width: '1632px',
    overflow: 'hidden',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '26px',
    color: '#fff',
    fontFamily: 'Poppins',
  },
};

const Section2: FunctionComponent = () => {
  return (
    <div style={section2Styles.section2}>
      <div style={section2Styles.frame}>
        <b style={section2Styles.section2title}>Nous rejoindre</b>
        <b style={section2Styles.description}>
          <span style={section2Styles.descriptionTxt}>
            <span>{`Que vous soyez un `}</span>
            <span style={section2Styles.chauffeurProfessionnel}>chauffeur professionnel</span>
            <span>{` ou un `}</span>
            <span style={section2Styles.chauffeurProfessionnel}>passager</span>
            <span>  rejoignez notre réseau et bénéficiez d'offres exclusives avec nos partenaires. Faisons de chaque trajet une aventure unique</span>
          </span>
        </b>
      </div>
      <div style={section2Styles.frame1}>
        <div style={section2Styles.frame2}>
          <div style={section2Styles.frame3}>
            <div style={section2Styles.etape1}>
              <img className={styles.imguserIcon} alt="" src={imgUser} />
              <div style={section2Styles.title}>étape 1</div>
              <b style={section2Styles.subtitle}>S’enregistrer</b>
              <div style={section2Styles.description1}> Démarrez avec votre inscription rapide</div>
            </div>
            <div style={section2Styles.tape2}>
              <img className={styles.imgCheck} alt="" src={imgCheck} />
              <div style={section2Styles.title}>étape 2</div>
              <b style={section2Styles.subtitle1}>Confirmer</b>
              <div style={section2Styles.description2}>Vérifiez et confirmez en un clic</div>
            </div>
          </div>
          <div style={section2Styles.frame4}>
            <div style={section2Styles.tape3}>
              <img className={styles.imgCar} alt="" src={imgCar} />
              <div style={section2Styles.title}>étape 3</div>
              <b style={section2Styles.subtitle}>Rouler</b>
              <div style={section2Styles.description3}>Mettez-vous en route sans soucis</div>
            </div>
            <div style={section2Styles.tape3}>
              <img className={styles.imgDolar} alt="" src={imgDolar} />
              <div style={section2Styles.title}>étape 4</div>
              <b style={section2Styles.subtitle}>Gagner</b>
              <div style={section2Styles.description3}>Atteignez vos objectifs avec nous</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
