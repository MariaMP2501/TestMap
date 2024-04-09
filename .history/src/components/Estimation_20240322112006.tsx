import React, { FunctionComponent } from 'react';
import { StepProgressBar } from './StepProgressBar';
import MapAddresses from './MapAddresses';
import MapCard from './MapCard';

const Estimation: FunctionComponent = () => {
    const sectionStyle = {
        width: '90%',
        margin: '8rem auto',
        fontFamily: 'Anybody',
    };
    const sectionCardStyle = {
        display: 'flex',
        justifyContent: 'space-between', // Pour espacer les deux cartes
        fontFamily: 'Anybody',
    };

    return (
        <div className='estimation' style={sectionStyle}>
            <StepProgressBar />
            <div className='estimation' style={sectionCardStyle}>
                <MapAddresses />
                <MapCard />
            </div>
        </div>
    );
};

export default Estimation;
