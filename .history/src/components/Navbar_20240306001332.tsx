import React, { FunctionComponent, useState } from 'react';
import curveSVG from '../assets/navbar1.svg';
import logo from '../assets/logo.png';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const Navbar: FunctionComponent = () => {
  const isMobile = window.innerWidth <= 768;

  const navbarStyle = {
    top: 0,
    margin: 0,
    position: 'fixed',
    width: '100%',
  };

  const contentWrapperStyle = {
    position: 'absolute',
    heigth:'5rem',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0.5rem',
    boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.5)',

  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-3rem',
    marginLeft: '1%',
    cursor: 'pointer',
  };

  const logoStyle = {
    width: '7%',
  };

  const titleStyle = {
    display: 'flex',
    gap: '1.5%',
    color: '#fff',
    fontSize: '1.4vw',
    fontFamily: 'Anybody',
    marginRight: '5px',
  };

  const title2Style = {
    color: '#fdad00',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    marginTop: '-2%',
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

  return (
    <div style={navbarStyle}>
      <img className="bgcurves" alt="" src={curveSVG} />
      <div style={contentWrapperStyle}>
        <div style={logoContainerStyle}>
          <img style={logoStyle} src={logo} alt="home" />
          <div style={titleStyle}>
            <span>TRANSPORT</span>
            <span style={title2Style}>CONCEPT</span>
          </div>
        </div>
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
    </div>
  );
};

export default Navbar;
