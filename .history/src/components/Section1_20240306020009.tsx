import React, { FunctionComponent } from 'react';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        top: '80px',
		color:'red', // Ajustez la valeur selon la hauteur de votre Navbar
    };

    return (
        <div className='section1' style={sectionStyle}>
            <p>'Contenu de la section 1'</p>
        </div>
    );
};

export default Section1;
