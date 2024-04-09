import React, { FunctionComponent } from 'react';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        marginTop: '8rem',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const columnStyle = {
        flex: '2',
		zIndex:'3',
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
