import React, { FunctionComponent, useState } from 'react';
import curveSVG from '../assets/navbar1.svg';
import logo from '../assets/logo.png';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const Navbar: FunctionComponent = () => {
  const isMobile = window.innerWidth <= 768;

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
    <div>
        <img style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: 'auto', opacity: 0.5 }} alt="" src={curveSVG} />
      <div>
        <div>
        <img src={logo} alt="home" width={60} height={60}/>
          <div >
            <span>TRANSPORT</span>
            <span>CONCEPT</span>
          </div>
        </div>
        <div >
          <a className="btnCall icon" onClick={handleCallClick}>
            <CallIcon style={{ fontSize: isMobile ? '10px' : '18px' }} />
          </a>
          <a className="btnMail icon" onClick={handleMailClick}>
            <MailIcon style={{ fontSize: isMobile ? '10px' : '18px' }} />
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
