import React, { FunctionComponent } from 'react';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        marginTop: '8rem',
		color:'red', // Ajustez la valeur selon la hauteur de votre Navbar
    };

    return (
        <div className='section1' style={sectionStyle}>
            <div className='grid grid-cols-3'>
				<div>
		Booking
				</div>
				<div className=''>
Maps
				</div>

			</div>
        </div>
    );
};

export default Section1;
