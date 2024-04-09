import { FunctionComponent } from 'react';
import imgUser from '../assets/imgUser.png';
import imgCheck from '../assets/imgCheck.png';
import imgCar from '../assets/imgCar.png';
import imgDolar from '../assets/imgDolar.png';

const Section2: FunctionComponent = () => {
  const sectionStyle = {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    gap: '78px',
    textAlign: 'left',
    fontSize: '38px',
    color: '#fdad00',
    fontFamily: 'Anybody',
	backgroundColor: '#000', 
  };

  const frameStyle = {
    width: '1474px',
    overflow: 'hidden',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '52px',
  };

  const textStyle = {
    position: 'relative',
    letterSpacing: '-0.02em',
    lineHeight: '56px',
    display: 'inline-block',
    height: '56px',
    marginLeft: '23px',
  };

  const descriptionStyle = {
    position: 'relative',
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
  };

  const imgStyle = {
    width: '4rem',
    height: '4rem',
  };

  return (
    <div style={sectionStyle}>
      <div style={frameStyle}>
        <b style={textStyle}>Nous rejoindre</b>
        <b style={descriptionStyle}>
          <span>
            Que vous soyez un{' '}
            <span style={{ color: '#fdad00' }}>chauffeur professionnel</span> ou un{' '}
            <span style={{ color: '#fdad00' }}>passager</span> rejoignez notre réseau et bénéficiez d'offres exclusives
            avec nos partenaires. Faisons de chaque trajet une aventure unique
          </span>
        </b>
      </div>
      <div className="frame1">
        <div className="frame2">
          <div className="frame3">
            <div className="etape1">
              <img className="imguserIcon" alt="" src={imgUser} style={imgStyle} />
              <div className="title">étape 1</div>
              <b className="subtitle">S’enregistrer</b>
              <div className="description1">Démarrez avec votre inscription rapide</div>
            </div>
            <div className="tape2">
              <img className="imgCheck" alt="" src={imgCheck} style={imgStyle} />
              <div className="title">étape 2</div>
              <b className="subtitle1">Confirmer</b>
              <div className="description2">Vérifiez et confirmez en un clic</div>
            </div>
          </div>
          <div className="frame4">
            <div className="tape3">
              <img className="imgCar" alt="" src={imgCar} style={imgStyle} />
              <div className="title">étape 3</div>
              <b className="subtitle">Rouler</b>
              <div className="description3">Mettez-vous en route sans soucis</div>
            </div>
            <div className="tape3">
              <img className="imgDolar" alt="" src={imgDolar} style={imgStyle} />
              <div className="title">étape 4</div>
              <b className="subtitle">Gagner</b>
              <div className="description3">Atteignez vos objectifs avec nous</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
