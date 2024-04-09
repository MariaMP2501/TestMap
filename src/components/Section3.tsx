import { FunctionComponent } from 'react';
import styles from './modulescss/section3.module.css';


const Section3: FunctionComponent = () => {
    return (
        <div className={styles.section3}>
            <div className={styles.btncontact}>
                <div className={styles.btn}>Contactez-nous</div>
            </div>
            <div className={styles.description}>Nous sommes en train de créer le réseau ultime de transferts.Imaginez un réseau qui s'étend aux quatre coins de la France, où chaque étape devient une opportunité de découverte. Découvrez le confort de l'enregistrement, la certitude de la confirmation, le plaisir de rouler et le triomphe de gagner. Tout cela converge vers la création d'une expérience sans précédent. Joignez-vous à nous alors que nous écrivons le prochain chapitre de la mobilité - votre mobilité. Votre aventure commence bientôt.</div>
            <b className={styles.section3title}>Nous avons le plus grand réseau</b>
        </div>);
};

export default Section3;
