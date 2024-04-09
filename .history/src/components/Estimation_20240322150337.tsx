import React, { FunctionComponent } from 'react';
import { StepProgressBar } from './StepProgressBar';
import MapAddresses from './MapAddresses';
// import MapCard from './MapCard';
import MapDistance from './MapDistance';

const Estimation: FunctionComponent = () => {
    const sectionStyle = {
        width: '90%',
        margin: '8rem auto',
        fontFamily: 'Anybody',
    };
    const sectionCardStyle = {
        fontFamily: 'Anybody',
    };

    return (
        <div className='section1' style={sectionStyle}>
            <StepProgressBar />
            <div className='section1' style={sectionCardStyle}>
                <div >
                
                    <MapDistance />
                    <MapAddresses />
                </div>
            </div>
        </div>
    );
};

export default Estimation;