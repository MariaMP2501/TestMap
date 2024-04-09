import React, { FunctionComponent } from 'react';
import { StepProgressBar } from './StepProgressBar';
import { ReservationForm } from './ReservationForm';
import MapCard from './MapCard';
import MapAddresses from './MapAddresses';

const Estimation: FunctionComponent = () => {
    const sectionStyle = {
        width: '90%',
        margin: '8rem auto',
        fontFamily: 'Anybody',
		zIndex:"100",
    };
    const sectionCardStyle = {
        display: 'flex',
        fontFamily: 'Anybody',
    };

    return (
        <div className='section1' style={sectionStyle}>
            <StepProgressBar />
            <div className='section1' style={sectionCardStyle}>
                <div style={{ flex: 1 }}>
                    {/* <MapAddresses /> */}
                </div>
                <div style={{ flex: 1 }}>
                    <MapCard />
                </div>
            </div>
        </div>
    );
};

export default Estimation;
