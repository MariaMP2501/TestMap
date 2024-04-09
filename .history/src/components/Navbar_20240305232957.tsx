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
  const NavbarStyle = {
    position: 'fixed',
    width: '100%',
    height: '6rem',
    color: '#e5e5e5',
    borderRadius: '0.5rem',
    boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.5)', // Ombre blanche
    fontFamily: 'Anybody',
  };
  return (
    <div style={NavbarStyle}>
      <div className='flex'>
  <img src={logo} alt="home" width={50} height={50} style={{ marginLeft: '1%', marginTop: '1%' }} />
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1%' }}>
    <h2 style={{ margin: '0' }}>TRANSPORT <span style={{ color: '#f4bc31' }}>CONCEPT</span></h2>
  </div>
</div>
      </div>

      {/* <div >
          <a className="btnCall icon" onClick={handleCallClick}>
            <CallIcon style={{ fontSize: isMobile ? '10px' : '18px' }} />
          </a>
          <a className="btnMail icon" onClick={handleMailClick}>
            <MailIcon style={{ fontSize: isMobile ? '10px' : '18px' }} />
          </a>
          <button className="btnLangue" onClick={handleLangueClick}>
            {showLangueMenu ? 'EN' : 'FR'}
          </button>
        </div> */}
  );
};

export default Navbar;
