import React, { FunctionComponent, useState } from 'react';
import styles from './modulescss/resacard.module.css';
import { useNavigate } from 'react-router-dom';
import { PersonIcon } from '../assets';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Resacard: FunctionComponent = () => {
  const navigate = useNavigate();

  const [depart, setDepart] = useState('');
  const [destination, setDestination] = useState('');
  const [dateHeure, setDateHeure] = useState('');
  const [nbPersonnes, setNbPersonnes] = useState(1);


  const handleEstimationClick = () => {
    // Ajoutez votre logique ici
    window.location.href = '/estimation'; // ou le chemin exact vers votre estimation.tsx
  };

  return (

    <div className={styles.resacard}>
      {/* <div className={styles.rectangleDiv} /> */}
      <div className={styles.dpart}>
        <input
          type="text"
          placeholder="Départ"
          value={depart}
          onChange={(e) => setDepart(e.target.value)}
          
        />
              <div className={styles.resacardInner} />


      </div>
      <div className={styles.destination}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className={styles.dateHeure}>
        <DatePicker
          selected={dateHeure}
          onChange={(date) => setDateHeure(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Date / Heure"
        />
              <div className={styles.resacardItem} />

      </div>

      <div className={styles.nbPersonnes}>
        <select
          value={nbPersonnes}
          onChange={(e) => setNbPersonnes(parseInt(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.PersonIconContainer}><PersonIcon style={{ width: '90px', height: '90px' }} /></div>
      <div className={styles.btncommander} onClick={handleEstimationClick}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
        <div className={styles.estimation}>Estimation</div>
      </div>
      {/* <div className={styles.AddCircleIcon}><AddCircleIcon style={{ width: '90px', height: '90px' }} /></div> */}

    </div>
   
  );
};

export default Resacard;






//  <div className={styles.PersonIconContainer}>  <PersonIcon style={{ width: '100px', height: '100px' }} />