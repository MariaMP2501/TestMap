import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: `url('/assets/navbar1.svg')`,
    backgroundSize: 'cover',
    padding: '10px',
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    marginRight: '5px',
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

  const buttonStyle = {
    // Ajoutez des styles pour vos boutons
  };

  const iconStyle = {
    // Ajoutez des styles pour les icônes
  };

  const handleCallClick = () => {
    window.location.href = 'https://wa.me/33745103736';
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:support@transportconcept.fr';
  };

  const handleLangueClick = () => {
    setShowLangueMenu(!showLangueMenu);
  };

  return (
    <div style={navbarStyle}>
      <div style={leftSectionStyle}>
        <img src="/assets/logo.png" alt="home" width={50} height={50} style={logoStyle} />
        <h2 style={titleStyle}>
          TRANSPORT <span style={highlightStyle}>CONCEPT</span>
        </h2>
      </div>
      <div style={rightSectionStyle}>
        <div style={buttonsContainerStyle}>
          <a className="btnCall icon" style={buttonStyle} onClick={handleCallClick}>
            <CallIcon style={iconStyle} />
          </a>
          <a className="btnMail icon" style={buttonStyle} onClick={handleMailClick}>
            <MailIcon style={iconStyle} />
          </a>
          <button className="btnLangue" style={buttonStyle} onClick={handleLangueClick}>
            FR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
