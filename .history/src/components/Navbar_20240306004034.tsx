import React, { FunctionComponent, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import curveSVG from '../assets/navbar1.svg';
import logo from '../assets/logo.png';

const Navbar: FunctionComponent = () => {
  // Logique pour la gestion des boutons de langue
  const [showLangueMenu, setShowLangueMenu] = useState(false);

  const handleLangueClick = () => {
    setShowLangueMenu(!showLangueMenu);
  };

  // Gestion des clics sur les boutons d'appel et de courrier
  const handleCallClick = () => {
    window.location.href = 'https://wa.me/33745103736';
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:support@transportconcept.fr';
  };

  // Styles CSS en ligne
  const navbarStyle = {
    position:'fixed',
    width:'100%',
    backgroundImage: `url('/assets/navbar1.svg')`,
    backgroundSize: 'cover',
  };


  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    marginLeft: '1%',
    marginTop: '1%',
    width: '50px',
    height: '50px',
  };

  const titleStyle = {
    margin: '0',
    fontSize: '18px',
  };

  const highlightStyle = {
    color: '#f4bc31',
  };

  const rightSectionStyle = {
    display: 'flex',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  // Rendu du composant
  return (
    <div className="navbar" style={{ backgroundImage: `url(${curveSVG})` }}>
      {/* Logo et titre */}
      <div className="left-section" style={leftSectionStyle}>
        <img src={logo} alt="home" style={logoStyle} />
        <h2 style={titleStyle}>
          TRANSPORT <span style={highlightStyle}>CONCEPT</span>
        </h2>
      </div>

      {/* Boutons */}
      <div className="right-section" style={rightSectionStyle}>
        <div style={buttonsContainerStyle}>
          <a className="btnCall icon" onClick={handleCallClick}>
            <CallIcon style={{ fontSize: '18px' }} />
          </a>
          <a className="btnMail icon" onClick={handleMailClick}>
            <MailIcon style={{ fontSize: '18px' }} />
          </a>
          <button className="btnLangue" onClick={handleLangueClick}>
            {showLangueMenu ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
