import React, { FunctionComponent, useState } from 'react';
import styles from './modulescss/resacard.module.css';
import { useNavigate } from 'react-router-dom';
import { PersonIcon } from '../assets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Resacard: FunctionComponent = () => {

  const [depart, setDepart] = useState('');
  const [destination, setDestination] = useState('');
  const [dateHeure, setDateHeure] = useState('');
  const [nbPersonnes, setNbPersonnes] = useState(1);



  return (

    <div className={styles.resacard}>
     
    </div>
   
  );
};

export default Resacard;






//  <div className={styles.PersonIconContainer}>  <PersonIcon style={{ width: '100px', height: '100px' }} />