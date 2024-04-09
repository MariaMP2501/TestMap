import { FunctionComponent } from 'react';
import logo from '../assets/logo.png';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';

const Footer: FunctionComponent = () => {
  const footerStyle = {
    flexDirection: 'column',
    bottom: 0,
    width: '100%',
    height: '10rem',
    backgroundColor: '#0E0E0',
    color: '#e5e5e5',
    borderRadius: '0.5rem',
    boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.5)',
    fontFamily: 'Anybody',
  };

  const logoStyle = {
    position: 'absolute',
    width: '5%',
    top: '2rem',
    left: '40%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  };

  const titleStyle = {
    position: 'absolute',
    top: '1.1rem',
    left: '48%',
    fontSize: '0.9vw',
    lineHeight: '1rem',
    fontFamily: 'Anybody',
    color: '#f4bc31',
  };

  const linkStyle = {
    position: 'absolute',
    fontSize: '0.8vw', // Taille de la police pour les liens
    top: '3rem',
    left: '48%',
    lineHeight: '1rem',
    color: 'inherit',
    textDecoration: 'none',
  };

  const mailStyle = {
    ...linkStyle,
    top: '4.5rem',
  };

  const adressStyle = {
    ...linkStyle,
    top: '6rem',
  };

  const footer3Style = {
    position: 'absolute',
    top: '8rem',
    left: 'calc(60% - 346.5px)',
    lineHeight: '1.7rem',
    fontSize: '0.8vw',
    fontFamily: 'Anybody',
    color: '#737272',
  };

  return (
    <div style={footerStyle}>
      <img style={logoStyle} src={logo} alt="home" />
      <b style={titleStyle}>Entreprise</b>
      <a style={linkStyle} href="https://wa.me/33745103736" target="_blank">
        <CallIcon style={{ fontSize: '1.1vw' }} /> +33 7 45 10 37 36
      </a>
      <a style={mailStyle} href="mailto:support@transportconcept.fr" target="_blank">
        <MailIcon style={{ fontSize: '1.1vw' }} /> support@transportconcept.fr
      </a>
      <a style={adressStyle} href="https://www.google.com/maps?q=19+rue+Unna,+91120+Palaiseau" target="_blank">
        <PlaceIcon style={{ fontSize: '1.1vw' }} />19 rue de Unna, 91120 Palaiseau
      </a> 
      <b style={footer3Style}>Copyright 2023 | TRANSPORT CONCEPT - All rights reserved</b>
    </div>
  );
};

export default Footer;
