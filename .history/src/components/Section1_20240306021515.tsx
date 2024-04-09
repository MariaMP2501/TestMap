import React, { FunctionComponent } from 'react';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        marginTop: '8rem',
        display: 'flex',
    };

    const columnStyle = {
        flex: '1',
        width: '33.33%', // Changer la largeur pour occuper 1/3 de l'écran
        zIndex: '3',
    };

    return (
        <div className='section1' style={sectionStyle}>
            <div style={columnStyle}>
                Booking
            </div>
            <div style={columnStyle}>
                Maps
            </div>
        </div>
    );
};

export default Section1;
