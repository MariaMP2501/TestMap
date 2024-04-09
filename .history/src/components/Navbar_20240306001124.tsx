// Navbar.tsx
import React, { FunctionComponent, useState } from 'react';
import styles from './modulescss/navbar.module.css';
import curveSVG from '../assets/navbar1.svg';
import logo from '../assets/logo.png';
import { CallIcon, MailIcon } from '../assets/index.js';
import { Link } from 'react-router-dom';

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
    <div className={styles.navbar}>
      <img className={styles.bgcurves} alt="" src={curveSVG} />
      <div className={styles.contentWrapper}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="home" />
          <div className={styles.title}>
            <span>TRANSPORT</span>
            <span className={styles.title2}>CONCEPT</span>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <a className={`${styles.btnCall} ${styles.icon}`} onClick={handleCallClick}>
            <CallIcon style={{ fontSize: isMobile ? '10px' : '18px' }} />
          </a>
          <a className={`${styles.btnMail} ${styles.icon}`} onClick={handleMailClick}>
            <MailIcon style={{ fontSize: isMobile ? '10px' : '18px' }} />
          </a>
          <button className={styles.btnLangue} onClick={handleLangueClick}>
            {showLangueMenu ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
