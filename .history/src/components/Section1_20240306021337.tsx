import React, { FunctionComponent } from 'react';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        marginTop: '8rem',
        display: 'flex',
    };

    const bookingStyle = {
        flex: '1',
    };

    return (
        <div className='section1' style={sectionStyle}>
            <div style={bookingStyle}>
                Booking
            </div>
            <div>
                Maps
            </div>
            <div>
                Third Column
            </div>
        </div>
    );
};

export default Section1;
