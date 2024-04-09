import { FunctionComponent } from 'react';
import styles from './modulescss/footer.module.css';
import logo from '../assets/logo.png';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';


const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.logo} src={logo} alt="home" />
      <b className={styles.footertitle}>Entreprise</b>
      <a className={styles.tel} href="https://wa.me/33745103736" target="_blank">
        <CallIcon style={{ fontSize: '0.5vw' }}/> +33 7 45 10 37 36
      </a>
      <a className={styles.mail} href="mailto:support@transportconcept.fr" target="_blank">
        <MailIcon style={{ fontSize: '1.2vw' }}/> support@transportconcept.fr
      </a>
      <a className={styles.adress} href="https://www.google.com/maps?q=19+rue+Unna,+91120+Palaiseau" target="_blank">
        <PlaceIcon style={{ fontSize: '1.1vw' }}/>19 rue de Unna, 91120 Palaiseau
      </a>
      <b className={styles.footer3}>Copyright 2023 | TRANSPORT CONCEPT - All rights reserved</b>
    </div>);
};

export default Footer;
