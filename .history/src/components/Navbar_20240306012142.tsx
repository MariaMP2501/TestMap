import React, { FunctionComponent, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import curveSVG from '../assets/navbar1.svg';
import logo from '../assets/logo.png';

const Navbar: FunctionComponent = () => {
    const isMobile = window.innerWidth <= 768;
  
 

  // Styles CSS en ligne
  const navbarStyle = {
    position:'fixed',
    width:'100%',
    backgroundImage: `url('/assets/navbar1.svg')`,
    backgroundSize: 'cover',
  };


  const leftSectionStyle = {
    display: 'flex',
  };

  const logoStyle = {
    marginLeft: '1%',
    marginTop: '1%',
    width: '50px',
    height: '50px',
  };

  const titleStyle = {
    display: 'flex',
    gap: '1.5%',
    color: '#fff',
    fontSize: '1.4vw',
    fontFamily: 'Anybody',
    marginTop: '2rem',
  };

  const highlightStyle = {
    color: '#f4bc31',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    marginTop: '-3rem',
    gap: '20px',
    marginRight: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: isMobile ? '20px' : '2vw',
    height: isMobile ? '20px' : '2vw',
    color: '#000',
    transition: 'background-color 0.3s, color 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  const btnLangueStyle = {
    ...buttonStyle,
    width: isMobile ? 'auto' : '2vw',
    padding: isMobile ? '0 5px' : '0',
    fontSize: isMobile ? '12px' : '1vw',
    fontWeight: 900,
    fontFamily: 'Anybody',
  };

  const handleCallClick = () => {
    window.location.href = 'https://wa.me/33745103736';
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:support@transportconcept.fr';
  };

  const [showLangueMenu, setShowLangueMenu] = useState(false);

  const handleLangueClick = () => {
    setShowLangueMenu(!showLangueMenu);
  };

  // Rendu du composant
  return (
    <div className="navbar" style={navbarStyle}>
      {/* Logo et titre */}
      <div className="left-section" style={leftSectionStyle}>
      <img style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: 'auto'}} alt="" src={curveSVG} />

        <img src={logo} alt="home" style={logoStyle} />
        <h2 style={titleStyle}>
          TRANSPORT <span style={highlightStyle}>CONCEPT</span>
        </h2>
      </div>

      {/* Boutons */}
      <div style={buttonsContainerStyle}>
          <a style={buttonStyle} className="btnCall icon" onClick={handleCallClick}>
            <CallIcon style={{ fontSize: isMobile ? '10px' : '18px' }} />
          </a>
          <a style={buttonStyle} className="btnMail icon" onClick={handleMailClick}>
            <MailIcon style={{ fontSize: isMobile ? '10px' : '18px' }} />
          </a>
          <button style={btnLangueStyle} className="btnLangue" onClick={handleLangueClick}>
            {showLangueMenu ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
  );
};

export default Navbar;
