import { FunctionComponent } from 'react';
import imgUser from '../assets/imgUser.png';
import imgCheck from '../assets/imgCheck.png';
import imgCar from '../assets/imgCar.png';
import imgDolar from '../assets/imgDolar.png';

const Section2: FunctionComponent = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '10%',
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
      }}
    >
      <div
        style={{
          width: '1474px',
          overflow: 'hidden',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '52px',
        }}
      >
        <b
          style={{
            position: 'relative',
            letterSpacing: '-0.02em',
            lineHeight: '56px',
            display: 'inline-block',
            height: '56px',
            marginLeft: '23px',
          }}
        >
          Nous rejoindre
        </b>
        <b
          style={{
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
          }}
        >
          <span>
            Que vous soyez un{' '}
            <span style={{ color: '#fdad00' }}>chauffeur professionnel</span> ou un{' '}
            <span style={{ color: '#fdad00' }}>passager</span> rejoignez notre réseau et bénéficiez d'offres exclusives
            avec nos partenaires. Faisons de chaque trajet une aventure unique
          </span>
        </b>
      </div>
      {/* Les autres éléments ici */}
    </div>
  );
};

export default Section2;
