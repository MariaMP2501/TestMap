import React, { FunctionComponent } from 'react';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        margin: '8rem 8rem',
        display: 'flex',
		fontFamily: 'Anybody',
    };

    const command_Card_Style = {
        flex: '1',
        width: '40%', // Changer la largeur pour occuper 1/3 de l'écran
        zIndex: '3',
    };

    const map_Card_Style = {
        flex: '1',
        width: '66.66%',
		marginLeft:'25rem',
        zIndex: '3',
    };

    return (
        <div className='section1' style={sectionStyle}>
            <div style={command_Card_Style} className='bg-blue-100'>
                Booking
            </div>
            <div style={map_Card_Style}>
                Maps
            </div>
        </div>
    );
};

export default Section1;
