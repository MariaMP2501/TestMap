import React, { FunctionComponent } from 'react';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        margin: '8rem 8rem',
        display: 'flex',
		
    };

    const card_style = {
        flex: '1',
        width: '40%', // Changer la largeur pour occuper 1/3 de l'écran
        zIndex: '3',
    };

    return (
        <div className='section1' style={sectionStyle}>
            <div style={card_style}>
                Booking
            </div>
            <div style={columnStyle}>
                Maps
            </div>
        </div>
    );
};

export default Section1;
