import React, { FunctionComponent } from 'react';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        marginTop: '8rem',
    };

    return (
        <div className='section1' style={sectionStyle}>
            <div className='grid grid-cols-3'>
				<div>
		Booking
				</div>
				<div className='col-span-2'>
Maps
				</div>

			</div>
        </div>
    );
};

export default Section1;
